from flask import Blueprint, request, jsonify
from services.product_service import add_product, get_all_products, remove_product, get_product_by_id, get_product_by_name
from utils import token_required

products = Blueprint("products", __name__)

@products.route("/add_product", methods=["POST"])
@token_required
def add_product_route(current_user):
    data = request.get_json()
    response = add_product(data)
    return jsonify(response), 200

@products.route("/remove_product", methods=["POST"])
@token_required
def remove_product_route(current_user):
    try:
        data = request.get_json()
        if not data or "productId" not in data:
            return jsonify({"error": "Product ID is required"}), 400

        response, status_code = remove_product(data["productId"])
        return jsonify(response), status_code
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@products.route("/<product_id>", methods=["GET"])
@token_required
def get_product_by_id_route(current_user,product_id):
    response, status_code = get_product_by_id(product_id)  
    return jsonify(response), status_code  

@products.route("/get_by_name", methods=["POST"])
@token_required
def get_product_by_name_route(current_user):
    try:
        data = request.get_json()
        if not data or "name" not in data:
            return jsonify({"error": "Product name is required"}), 400

        response, status_code = get_product_by_name(data["name"])
        return jsonify(response), status_code

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@products.route("/")
@token_required
def get_products(current_user):
    response, status_code = get_all_products() 
    return jsonify(response), status_code  

