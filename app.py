from flask import Flask
from routes.auth import auth
from routes.products import products
from routes.cart import cart

app = Flask(__name__)
app.secret_key = 'random string'
app.config['UPLOAD_FOLDER'] = 'static/uploads'

# Register Blueprints
app.register_blueprint(auth)
app.register_blueprint(products, url_prefix="/products")
app.register_blueprint(cart, url_prefix="/cart")

if __name__ == "__main__":
    app.run(debug=True)
