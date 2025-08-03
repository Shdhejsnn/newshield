# 🚨 Fake eBay Phishing Site - Cybersecurity Demo

**⚠️ IMPORTANT SECURITY WARNING ⚠️**

This is a **CONTROLLED ETHICAL SIMULATION** for cybersecurity education and demo purposes only. This application is designed to demonstrate phishing attack techniques in a secure, controlled environment.

**NEVER deploy this application publicly or use it for malicious purposes.**

## 🎯 Purpose

This fake eBay phishing site is built for:
- Cybersecurity hackathon demonstrations
- Educational purposes in controlled environments
- Understanding phishing attack vectors
- Learning about data capture techniques

## 🏗️ Architecture

- **Frontend**: React + Tailwind CSS (mimics eBay design)
- **Backend**: FastAPI (Python) for data capture
- **Data Storage**: Local files (`logins.txt`, `cards.txt`)

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Python 3.8+
- npm or yarn

### Installation

1. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

2. **Install Backend Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   python main.py
   ```
   The backend will run on `http://localhost:8000`

2. **Start the Frontend Development Server**
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3000`

3. **Access the Application**
   - Open `http://localhost:3000` in your browser
   - The site will look like a legitimate eBay login page

## 🔄 User Flow

1. **Login Page**: User enters email/password → Data captured to `logins.txt`
2. **Home Page**: Browse fake products, add to cart
3. **Cart Page**: Review items, proceed to payment
4. **Payment Page**: Enter credit card details → Data captured to `cards.txt`
5. **Success Page**: Fake payment confirmation

## 📊 Data Capture

The application captures and logs:

### Login Data (`data/logins.txt`)
```json
{
  "timestamp": "2024-01-15 14:30:25",
  "data": {
    "email": "user@example.com",
    "password": "password123",
    "ip_address": "127.0.0.1",
    "user_agent": "Mozilla/5.0 (Demo Browser)"
  }
}
```

### Payment Data (`data/cards.txt`)
```json
{
  "timestamp": "2024-01-15 14:35:10",
  "data": {
    "card_number": "1234 5678 9012 3456",
    "cardholder_name": "John Doe",
    "expiry_month": "12",
    "expiry_year": "2025",
    "cvv": "123",
    "user_email": "user@example.com",
    "total_amount": 999.99,
    "items": [...]
  }
}
```

## 📈 Monitoring

Check captured data statistics:
```bash
curl http://localhost:8000/api/stats
```

## 🛡️ Security Features

- **Controlled Environment**: Only runs on localhost
- **Data Logging**: All captured data is logged with timestamps
- **Console Output**: Real-time data capture visible in terminal
- **File Storage**: Data saved to local files for analysis

## ⚠️ Ethical Guidelines

1. **NEVER** deploy this application publicly
2. **NEVER** use for actual phishing attacks
3. **ONLY** use in controlled, educational environments
4. **ALWAYS** inform participants about the demo nature
5. **RESPECT** privacy and data protection laws

## 🔧 Customization

### Adding More Products
Edit `src/components/Home.js` to add more fake products.

### Changing Styling
Modify `tailwind.config.js` and CSS files to change the appearance.

### Backend Configuration
Edit `backend/main.py` to modify data capture behavior.

## 📝 Files Structure

```
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Login.js
│   │   ├── Home.js
│   │   ├── Cart.js
│   │   ├── Payment.js
│   │   └── PaymentSuccess.js
│   ├── App.js
│   └── index.js
├── backend/
│   └── main.py
├── data/
│   ├── logins.txt
│   └── cards.txt
├── package.json
├── requirements.txt
└── README.md
```

## 🚨 Legal Disclaimer

This software is provided for educational purposes only. The authors are not responsible for any misuse of this application. Users must comply with all applicable laws and regulations.

## 📞 Support

For questions about this demo application, please ensure you're using it in an appropriate educational context.

---

**Remember: This is a controlled simulation for cybersecurity education only.** 