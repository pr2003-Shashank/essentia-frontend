from flask import Blueprint, request, jsonify
from services.product_service import add_product, get_all_products, remove_product

product = Blueprint("product", __name__)

@product.route("/add_product", methods=["POST"])
def add_product_route():
    data = request.form
    file = request.files['image']
    return jsonify(add_product(data, file))

@product.route("/remove_product/<productId>")
def remove_product_route(productId):
    return jsonify(remove_product(productId))

@product.route("/products")
def get_products():
    return jsonify({"products": get_all_products()})
