import React, { useState } from 'react';

const Home = ({ addToCart }) => {
  const [imageErrors, setImageErrors] = useState({});

  const products = [
    {
      id: 1,
      title: "iPhone 14 Pro - 128GB - Space Black",
      price: 999.99,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 1247
    },
    {
      id: 2,
      title: "Samsung 65\" 4K Smart TV - QLED",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 892
    },
    {
      id: 3,
      title: "MacBook Air M2 - 13\" - 256GB",
      price: 1199.99,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 2156
    },
    {
      id: 4,
      title: "Sony WH-1000XM4 Wireless Headphones",
      price: 349.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 3421
    },
    {
      id: 5,
      title: "Nike Air Jordan 1 Retro High OG",
      price: 179.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 567
    },
    {
      id: 6,
      title: "Canon EOS R6 Mark II Camera",
      price: 2499.99,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 234
    },
    {
      id: 7,
      title: "Apple Watch Series 8 - GPS",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 1892
    },
    {
      id: 8,
      title: "Samsung Galaxy S23 Ultra - 256GB",
      price: 1199.99,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 945
    },
    {
      id: 9,
      title: "PlayStation 5 Console - Digital Edition",
      price: 499.99,
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 2156
    },
    {
      id: 10,
      title: "Dell XPS 13 Laptop - 13.4\" 4K",
      price: 1499.99,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 678
    },
    {
      id: 11,
      title: "Bose QuietComfort 45 Headphones",
      price: 329.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 1234
    },
    {
      id: 12,
      title: "Adidas Ultraboost 22 Running Shoes",
      price: 189.99,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      rating: 4.4,
      reviews: 892
    },
    {
      id: 13,
      title: "GoPro HERO11 Black Camera",
      price: 499.99,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 456
    },
    {
      id: 14,
      title: "iPad Air 5th Gen - 64GB WiFi",
      price: 599.99,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 1567
    },
    {
      id: 15,
      title: "LG 77\" OLED C2 Series TV",
      price: 2499.99,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 234
    },
    {
      id: 16,
      title: "Xbox Series X Console",
      price: 499.99,
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 1234
    },
    {
      id: 17,
      title: "Nintendo Switch OLED Model",
      price: 349.99,
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 2156
    },
    {
      id: 18,
      title: "Ray-Ban Aviator Classic Sunglasses",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 789
    },
    {
      id: 19,
      title: "Dyson V15 Detect Cordless Vacuum",
      price: 699.99,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 456
    },
    {
      id: 20,
      title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 2341
    },
    {
      id: 21,
      title: "Levi's 501 Original Fit Jeans",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
      rating: 4.4,
      reviews: 1234
    },
    {
      id: 22,
      title: "Casio G-Shock Digital Watch",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 892
    },
    {
      id: 23,
      title: "JBL Flip 6 Portable Bluetooth Speaker",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 567
    },
    {
      id: 24,
      title: "KitchenAid Artisan Stand Mixer",
      price: 379.99,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 1892
    },
    {
      id: 25,
      title: "Under Armour Tech 2.0 T-Shirt",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      rating: 4.3,
      reviews: 2341
    }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    // You could add a toast notification here
  };

  const handleImageError = (productId) => {
    setImageErrors(prev => ({ ...prev, [productId]: true }));
  };

  const getFallbackImage = (productTitle) => {
    // Generate a fallback image based on product type
    const productType = productTitle.toLowerCase();
    if (productType.includes('phone') || productType.includes('iphone') || productType.includes('samsung')) {
      return "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop";
    } else if (productType.includes('laptop') || productType.includes('macbook') || productType.includes('dell')) {
      return "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop";
    } else if (productType.includes('tv') || productType.includes('samsung') || productType.includes('lg')) {
      return "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop";
    } else if (productType.includes('headphone') || productType.includes('sony') || productType.includes('bose')) {
      return "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop";
    } else if (productType.includes('shoe') || productType.includes('nike') || productType.includes('adidas')) {
      return "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop";
    } else if (productType.includes('camera') || productType.includes('canon') || productType.includes('gopro')) {
      return "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop";
    } else if (productType.includes('watch') || productType.includes('apple watch') || productType.includes('casio')) {
      return "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop";
    } else if (productType.includes('playstation') || productType.includes('ps5') || productType.includes('xbox') || productType.includes('nintendo')) {
      return "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop";
    } else if (productType.includes('ipad')) {
      return "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop";
    } else if (productType.includes('sunglass') || productType.includes('ray-ban')) {
      return "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop";
    } else if (productType.includes('vacuum') || productType.includes('dyson')) {
      return "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop";
    } else if (productType.includes('pot') || productType.includes('cooker') || productType.includes('mixer') || productType.includes('kitchenaid')) {
      return "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop";
    } else if (productType.includes('jeans') || productType.includes('levi') || productType.includes('shirt') || productType.includes('under armour')) {
      return "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop";
    } else if (productType.includes('speaker') || productType.includes('jbl')) {
      return "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop";
    } else {
      return "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop";
    }
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
              <div className="relative">
                <img
                  src={imageErrors[product.id] ? getFallbackImage(product.title) : product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md mb-4 bg-gray-100"
                  onError={() => handleImageError(product.id)}
                  loading="lazy"
                />
              </div>
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