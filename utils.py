import hashlib
from models.db import users_col, cart_col

def hash_password(password):
    return hashlib.md5(password.encode()).hexdigest()

def is_valid_user(email, password):
    """Check if user credentials are valid."""
    user = users_col.find_one({"email": email})
    return user and user["password"] == hash_password(password)
