import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, cartCount }) => {
  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-ebay-red">eBay</div>
            </Link>
          </div>

          {/* Navigation */}
          {isLoggedIn && (
            <nav className="hidden md:flex space-x-8">
              <Link to="/home" className="text-gray-700 hover:text-ebay-red px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link to="/cart" className="text-gray-700 hover:text-ebay-red px-3 py-2 text-sm font-medium">
                Cart ({cartCount})
              </Link>
            </nav>
          )}

          {/* Cart Icon */}
          {isLoggedIn && (
            <div className="flex items-center">
              <Link to="/cart" className="relative p-2 text-gray-700 hover:text-ebay-red">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-ebay-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 