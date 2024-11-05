// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './components/AuthForm';
import HomePage from './components/HomePage';
import ProductDetail from './components/ProductDetail';
import Order from './components/Order';
import Cart from './components/ShoppingCart';
import PaymentScreen from './components/PaymentScreen';
import ThreeDModel from './components/3DModel';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/3d-model" element={<ThreeDModel/>} />
      </Routes>
    </Router>
  );
}

export default App;
