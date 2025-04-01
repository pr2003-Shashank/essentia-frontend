import hashlib
import jwt
import datetime
from flask import jsonify, request
from functools import wraps
from models.db import users_col
import os

SECRET_KEY = os.getenv("SECRET_KEY")

def hash_password(password):
    return hashlib.md5(password.encode()).hexdigest()

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


def register_user(data):
    if users_col.find_one({"email": data['email']}):
        return {"error": "Email already exists!"}
    
    users_col.insert_one({
        "email": data['email'],
        "password": hash_password(data['password']),
        "firstName": data['firstName'],
        "lastName": data['lastName'],
        "phone": data['phone'],
        "token_version": 0  # Initially set token version to 0
    })
    return {"message": "User registered successfully!"}


def validate_user(email, password):
    user = users_col.find_one({"email": email})
    
    if user and user["password"] == hash_password(password):
        # Increment token version
        new_token_version = user["token_version"] + 1
        users_col.update_one({"email": email}, {"$set": {"token_version": new_token_version}})
        
        # Create JWT token with the token version included
        payload = {
            "email": user["email"],
            "firstName": user["firstName"],
            "lastName": user["lastName"],
            "token_version": new_token_version,  # Include token version in the payload
            "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)
        }
        
        token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")
        
        return {"message": "Login successful!", "token": token}
    
    return {"error": "Invalid credentials!"}

