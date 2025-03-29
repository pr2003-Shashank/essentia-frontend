from models.db import cart_col, users_col, products_col

def add_to_cart(user_email, product_id):
    user = users_col.find_one({"email": user_email})
    cart_col.insert_one({"userId": user["_id"], "productId": product_id})
    return {"message": "Product added to cart!"}

def get_cart(user_email):
    user = users_col.find_one({"email": user_email})
    cart_items = list(cart_col.find({"userId": user["_id"]}))
    products = [{"_id": str(item["productId"]), "name": products_col.find_one({"_id": item["productId"]})["name"]} for item in cart_items]
    return {"cart": products}
