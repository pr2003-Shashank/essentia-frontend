import React from 'react';
import {Route, Routes} from 'react-router-dom';
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

function AppRoutes() {
  return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path="/products/:productId" element={<ProductDetails />}/>

            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/cart' element={<Cart/>}/>

            <Route path='/product-management' element={<ProductManagement/>}/>
        </Routes>
  )
}

export default AppRoutes