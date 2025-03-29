import os
from werkzeug.utils import secure_filename
from models.db import products_col

UPLOAD_FOLDER = "static/uploads"

def add_product(data, file):
    imagename = secure_filename(file.filename)
    file.save(os.path.join(UPLOAD_FOLDER, imagename))

    products_col.insert_one({
        "name": data['name'],
        "price": float(data['price']),
        "description": data['description'],
        "image": imagename,
        "stock": int(data['stock']),
        "categoryId": data['categoryId']
    })
    return {"message": "Product added successfully!"}

def get_all_products():
    products = list(products_col.find())
    for product in products:
        product["_id"] = str(product["_id"])  # Convert ObjectId to string
    return products

def remove_product(product_id):
    products_col.delete_one({"_id": product_id})
    return {"message": "Product removed successfully!"}
