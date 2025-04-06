import hashlib
from models.db import users_col, cart_col
from flask import jsonify, request
from functools import wraps
import os
import jwt

SECRET_KEY = os.getenv("SECRET_KEY")

def hash_password(password):
    return hashlib.md5(password.encode()).hexdigest()

def is_valid_user(email, password):
    """Check if user credentials are valid."""
    user = users_col.find_one({"email": email})
    return user and user["password"] == hash_password(password)

def token_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        token = None
        if 'Authorization' in request.headers:
            token = request.headers['Authorization'].split(" ")[1]  # Extract token from "Bearer <token>"
        
        if not token:
            return jsonify({"error": "Token is missing!"}), 401
        
        try:
            data = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
            current_user = data["email"]
            token_version = data["token_version"]
            
            # Check if token version matches the one stored in the database
            user = users_col.find_one({"email": current_user})
            if user and user["token_version"] != token_version:
                return jsonify({"error": "Token is no longer valid!"}), 401
        
        except jwt.ExpiredSignatureError:
            return jsonify({"error": "Token has expired!"}), 401
        except jwt.InvalidTokenError:
            return jsonify({"error": "Invalid token!"}), 401
        
        return f(current_user, *args, **kwargs)
    
    return decorated_function
