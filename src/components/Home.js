import React from 'react';

const Home = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      title: "iPhone 14 Pro - 128GB - Space Black",
      price: 999.99,
      image: "https://via.placeholder.com/300x300/000000/FFFFFF?text=iPhone+14+Pro",
      rating: 4.8,
      reviews: 1247
    },
    {
      id: 2,
      title: "Samsung 65\" 4K Smart TV - QLED",
      price: 1299.99,
      image: "https://via.placeholder.com/300x300/000000/FFFFFF?text=Samsung+TV",
      rating: 4.6,
      reviews: 892
    },
    {
      id: 3,
      title: "MacBook Air M2 - 13\" - 256GB",
      price: 1199.99,
      image: "https://via.placeholder.com/300x300/000000/FFFFFF?text=MacBook+Air",
      rating: 4.9,
      reviews: 2156
    },
    {
      id: 4,
      title: "Sony WH-1000XM4 Wireless Headphones",
      price: 349.99,
      image: "https://via.placeholder.com/300x300/000000/FFFFFF?text=Sony+Headphones",
      rating: 4.7,
      reviews: 3421
    },
    {
      id: 5,
      title: "Nike Air Jordan 1 Retro High OG",
      price: 179.99,
      image: "https://via.placeholder.com/300x300/000000/FFFFFF?text=Nike+Shoes",
      rating: 4.5,
      reviews: 567
    },
    {
      id: 6,
      title: "Canon EOS R6 Mark II Camera",
      price: 2499.99,
      image: "https://via.placeholder.com/300x300/000000/FFFFFF?text=Canon+Camera",
      rating: 4.8,
      reviews: 234
    }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    // You could add a toast notification here
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-ebay-red to-ebay-dark text-white rounded-lg p-8 mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to eBay</h1>
        <p className="text-xl">Find great deals on electronics, fashion, and more!</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md product-card">
            <div className="p-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                {product.title}
              </h3>
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">
                  ({product.reviews})
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-ebay-red">
                  ${product.price}
                </span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-ebay-red text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home; 