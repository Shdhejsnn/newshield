import React from 'react';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="mt-4 text-3xl font-bold text-gray-900">Payment Successful!</h1>
        <p className="mt-2 text-lg text-gray-600">
          Thank you for your purchase. Your order has been processed successfully.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          You will receive a confirmation email shortly with your order details.
        </p>

        <div className="mt-8 bg-gray-50 rounded-lg p-6 max-w-md mx-auto">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Order Details</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Order Number:</span>
              <span className="font-medium">#{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
            </div>
            <div className="flex justify-between">
              <span>Date:</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Status:</span>
              <span className="text-green-600 font-medium">Confirmed</span>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <Link
            to="/home"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ebay-red hover:bg-red-700"
          >
            Continue Shopping
          </Link>
          <div className="text-sm text-gray-500">
            <p>Your items will be shipped within 2-3 business days.</p>
            <p className="mt-1">Track your order in your account dashboard.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess; 