from flask import Blueprint, request, jsonify
from services.product_service import add_product, get_all_products, remove_product

products = Blueprint("products", __name__)

@products.route("/add_product", methods=["POST"])
def add_product_route():
    data = request.form
    file = request.files['image']
    return jsonify(add_product(data, file))

@products.route("/remove_product/<productId>")
def remove_product_route(productId):
    return jsonify(remove_product(productId))

@products.route("/products")
def get_products():
    return jsonify({"products": get_all_products()})
