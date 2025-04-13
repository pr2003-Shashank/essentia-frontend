import os
from dotenv import load_dotenv
import paypalrestsdk

# Load variables from .env
load_dotenv()

paypalrestsdk.configure({
    "mode": os.getenv("PAYPAL_MODE"),
    "client_id": os.getenv("PAYPAL_CLIENT_ID"),
    "client_secret": os.getenv("PAYPAL_CLIENT_SECRET")
})
