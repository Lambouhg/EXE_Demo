// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './compoments/AuthForm';
import HomePage from './compoments/HomePage';
import ProductDetail from './compoments/ProductDetail';
import Order from './compoments/Order';
import Cart from './compoments/ShoppingCart';
import PaymentScreen from './compoments/PaymentScreen';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        {/* Các route khác nếu cần */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<PaymentScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
