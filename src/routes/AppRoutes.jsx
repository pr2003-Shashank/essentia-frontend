import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/public/Home';
import Products from '../pages/public/Products';
import Login from '../pages/public/Login';
import Register from '../pages/public/Register';
import ProductDetails from '../pages/public/ProductDetail';
import About from '../pages/public/About';
import Contact from '../pages/public/Contact';
import Cart from '../pages/user/Cart';
import Checkout from '../pages/user/Checkout';
import ProductManagement from '../pages/admin/ProductManagement';


const isLoggedIn = localStorage.getItem("user");

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
      
      {/* Authentication Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Protected User Routes */} 
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      
      {/* Admin Routes */}
      <Route path="/product-management" element={<ProductManagement />} />
      
      {/* Fallback Route */}
      <Route path="*" element={<Navigate to="/" replace />} />

      <Route
  path="/home"
  element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
/>
    </Routes>
  );
}

export default AppRoutes;