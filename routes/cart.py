from flask import Blueprint, request, jsonify
from paypalrestsdk import Payment
from paypal_config import paypalrestsdk
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


@cart.route("/create_payment", methods=["POST"])
@token_required
def create_payment_route(current_user):
    data = request.get_json()

    price = data.get("price")
    currency = data.get("currency", "USD")

    if not price:
        return jsonify({"error": "Price is required"}), 400

    try:
        formatted_price = f"{float(price):.2f}"
    except ValueError:
        return jsonify({"error": "Invalid price format"}), 400

    payment = Payment({
        "intent": "sale",
        "payer": {"payment_method": "paypal"},
        "redirect_urls": {
            "return_url": "http://localhost:3000/payment-success",
            "cancel_url": "http://localhost:3000/payment-cancel"
        },
        "transactions": [{
            "amount": {
                "total": formatted_price,
                "currency": currency
            },
            "description": f"Payment by user {str(current_user)}"
        }]
    })

    if payment.create():
        for link in payment.links:
            if link.rel == "approval_url":
                return jsonify({"approval_url": link.href})
        return jsonify({"error": "Approval URL not found"}), 500
    else:
        return jsonify({"error": payment.error}), 500


@cart.route("/execute_payment", methods=["POST"])
@token_required
def execute_payment_route(current_user):
    data = request.get_json()

    payment_id = data.get("paymentID")
    payer_id = data.get("payerID")

    if not payment_id or not payer_id:
        return jsonify({"error": "paymentID and payerID are required"}), 400

    try:
        payment = Payment.find(payment_id)
        if payment.execute({"payer_id": payer_id}):
            return jsonify({"message": "Payment successful!"}), 200
        else:
            return jsonify({"error": payment.error}), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500
