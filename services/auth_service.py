import hashlib
from models.db import users_col

def hash_password(password):
    return hashlib.md5(password.encode()).hexdigest()

def register_user(data):
    if users_col.find_one({"email": data['email']}):
        return {"error": "Email already exists!"}
    
    users_col.insert_one({
        "email": data['email'],
        "password": hash_password(data['password']),
        "firstName": data['firstName'],
        "lastName": data['lastName'],
        "phone": data['phone']
    })
    return {"message": "User registered successfully!"}

def validate_user(email, password):
    user = users_col.find_one({"email": email})
    if user and user["password"] == hash_password(password):
        return {"message": "Login successful!"}
    return {"error": "Invalid credentials!"}
