from flask import Blueprint, request, session, jsonify
from services.auth_service import register_user, validate_user

auth = Blueprint("auth", __name__)

@auth.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    return jsonify(register_user(data))

@auth.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    result = validate_user(data["email"], data["password"])
    if "error" in result:
        return jsonify(result), 401
    session['email'] = data["email"]
    return jsonify(result)

@auth.route("/logout")
def logout():
    session.pop('email', None)
    return jsonify({"message": "Logged out successfully!"})
