import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Cart from './components/Cart';
import Payment from './components/Payment';
import PaymentSuccess from './components/PaymentSuccess';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);
  const [userData, setUserData] = useState(null);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header isLoggedIn={isLoggedIn} cartCount={cart.length} />
        <Routes>
          <Route 
            path="/" 
            element={isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />} 
          />
          <Route 
            path="/home" 
            element={isLoggedIn ? <Home addToCart={addToCart} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/cart" 
            element={isLoggedIn ? <Cart cart={cart} removeFromCart={removeFromCart} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/payment" 
            element={isLoggedIn ? <Payment cart={cart} clearCart={clearCart} userData={userData} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/payment-success" 
            element={isLoggedIn ? <PaymentSuccess /> : <Navigate to="/" />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 