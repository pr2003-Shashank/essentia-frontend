from bson import ObjectId
from models.db import products_col

def add_product(data):
    products_col.insert_one({
        "name": data['name'],
        "price": float(data['price']),
        "description": data['description'],
        "image": data['image_url'],  
        "stock": int(data['stock']),
        "category": data['category'],
        "ratings": float(data.get('ratings', 0.0))
    })
    return {"message": "Product added successfully!"}

def get_all_products():
    try:
        products = list(products_col.find())  
        for product in products:
            product["_id"] = str(product["_id"])  

        return {"products": products}, 200
    except Exception as e:
        return {"error": str(e)}, 500

def remove_product(product_id):
    product = products_col.find_one({"_id": ObjectId(product_id)})
    
    if not product:
        return {"error": "Product not found"}, 404  
    
    products_col.delete_one({"_id": ObjectId(product_id)})
    return {"message": "Product removed successfully!"}, 200
