import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ProductDetails from '../pages/ProductDetail';
import Checkout from '../pages/Checkout';
import About from '../pages/About';
import Contact from '../pages/Contact';

function AppRoutes() {
  return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/product-detail' element={<ProductDetails/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
  )
}

export default AppRoutes