import hashlib
from flask import session
from models.db import users_col, cart_col

def hash_password(password):
    return hashlib.md5(password.encode()).hexdigest()

def get_login_details():
    """Return login status, first name, and cart count."""
    if 'email' not in session:
        return False, '', 0

    user = users_col.find_one({"email": session['email']})
    if user:
        return True, user["firstName"], cart_col.count_documents({"userId": user["_id"]})
    return False, '', 0

def is_valid_user(email, password):
    """Check if user credentials are valid."""
    user = users_col.find_one({"email": email})
    return user and user["password"] == hash_password(password)
