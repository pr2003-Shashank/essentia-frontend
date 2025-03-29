from flask import Blueprint, request, session, jsonify
from services.cart_service import add_to_cart, get_cart

cart = Blueprint("cart", __name__)

@cart.route("/add_to_cart/<productId>")
def add_to_cart_route(productId):
    if 'email' not in session:
        return jsonify({"error": "Unauthorized!"}), 401
    return jsonify(add_to_cart(session['email'], productId))

@cart.route("/cart")
def cart():
    if 'email' not in session:
        return jsonify({"error": "Unauthorized!"}), 401
    return jsonify(get_cart(session['email']))
