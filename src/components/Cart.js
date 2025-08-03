import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, removeFromCart }) => {
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleProceedToPayment = () => {
    navigate('/payment');
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">Your cart is empty</h3>
          <p className="mt-1 text-sm text-gray-500">Start shopping to add items to your cart.</p>
          <div className="mt-6">
            <button
              onClick={() => navigate('/home')}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-ebay-red hover:bg-red-700"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
      
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
        <div className="lg:col-span-7">
          <div className="border-t border-b border-gray-200 divide-y divide-gray-200">
            {cart.map((item, index) => (
              <div key={`${item.id}-${index}`} className="py-6 flex">
                <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-center object-cover"
                  />
                </div>

                <div className="ml-4 flex-1 flex flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                  <div className="flex-1 flex items-end justify-between text-sm">
                    <p className="text-gray-500">Qty 1</p>
                    <div className="flex">
                      <p className="text-ebay-red font-semibold">${item.price}</p>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="ml-4 font-medium text-ebay-red hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order summary */}
        <section className="mt-16 lg:mt-0 lg:col-span-5">
          <div className="bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">${calculateTotal().toFixed(2)}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">Order total</dt>
                <dd className="text-base font-medium text-gray-900">${calculateTotal().toFixed(2)}</dd>
              </div>
            </dl>

            <div className="mt-6">
              <button
                onClick={handleProceedToPayment}
                className="w-full bg-ebay-red border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ebay-red"
              >
                Proceed to Payment
              </button>
            </div>

            <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
              <p>
                or{' '}
                <button
                  type="button"
                  onClick={() => navigate('/home')}
                  className="text-ebay-red font-medium hover:text-red-700"
                >
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart; 