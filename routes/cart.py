from flask import Blueprint, request, jsonify
from services.cart_service import add_to_cart, get_cart, remove_from_cart
from utils import token_required

cart = Blueprint("cart", __name__)

@cart.route("/add_to_cart", methods=["POST"])
@token_required
def add_to_cart_route(current_user):
    data = request.get_json()
    product_id = data.get("productId")
    if not product_id:
        return jsonify({"error": "Product ID is required"}), 400

    return jsonify(add_to_cart(current_user, product_id))

@cart.route("/remove_from_cart", methods=["POST"])
@token_required
def remove_from_cart_route(current_user):
    data = request.get_json()
    product_id = data.get("productId")

    if not product_id:
        return jsonify({"error": "Product ID is required"}), 400

    response = remove_from_cart(current_user, product_id)
    return jsonify(response)

@cart.route("/get_cart", methods=["GET"])
@token_required
def get_cart_route(current_user):
    return jsonify(get_cart(current_user))
