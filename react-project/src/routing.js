import { BrowserRouter, Routes, Switch, Route, useParams, Redirect, withRouter } from 'react-router-dom'
import { useEffect,useState } from 'react';
import { useNavigate } from "react-router-dom";

import Login from './Components/Login';
import Register from './Components/Register';
import { Navbar } from './Components/Navbar';
import ProductDetails from './Components/ProductDetails';
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';
import HomePage from './Components/Homepage';
import Payment from './Components/Payment';
//import MyContext from './Components/MyContext';

export default function Routing(){
    return(
        <Routes>
        <Route path='/' element={<HomePage/>}>
        </Route>
        <Route path='/login' element={<Login />}>
        </Route>
        <Route path='/register' element={<Register />}>
        </Route>
        <Route path='/products' element={<ProductList />}>
        </Route>
        <Route path='/productDetails' element={<ProductDetails />}>
        </Route>
       <></> <Route path='/cart' element={<ShoppingCart/>}>
        </Route>
        <Route path='/payment' element={<Payment />}>
        </Route>
      </Routes>
    );
}