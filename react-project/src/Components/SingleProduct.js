import * as React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css';  
import Card from 'react-bootstrap';  
import swal from 'sweetalert';
import products from './products/products.json'
import { removeProductFromCart, addProductToCart } from '../Store/UserSlice/UserAction';

export default function SingleProduct({value}){
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productListPerUser =useSelector((state)=> state.users.currentUser.products);

  function showDetails(){
    navigate(`/productDetails`, { state: value });
  }
  function addToCart(p) {
    console.log('item: ',value.id,value.name)
    debugger;
    dispatch(addProductToCart(p))
    console.log('products of user: ',productListPerUser)
    swal("המוצר התווסף בהצלחה לעגלת הקניות שלכם","","success", {
      buttons: {
        cart: "לצפיה בסל הקניות",
        shoppng:"להמשך קניה"
      },
    }).then((value)=>{
      switch(value){
        case "cart":
          navigate(`/cart`);
          break;
        case "shopping":
          break;
      }
    }
    );
  }
  function removeFromCart(p) {
    debugger
    dispatch(removeProductFromCart(p))
  }
    return(
        <div className="row row-cols-1 row-cols-md-3 g-4" style={{paddingLeft:"7%"}}>
         
             <div className="col" style={{width:"250px"}} >
            <div className="card" style={{width:"30rem",}}>
               <div className="card-body">
                 <h2 className="card-title">{value.name}</h2>
                 <h4 className="card-title">{value.subHeader}</h4>
                 <img src={value.img} className="card-img-top" alt="..." style={{height:"200px",width:"100%"}}  onClick={(state) => {   navigate(`/productDetails`, { state: value }); }}/>
                 <p className="card-text">price: {value.price}</p>
                 <button type="button" className="btn btn-outline-primary" onClick={() => {debugger;
                 removeFromCart(value.id); }}>-</button>
                 <button type="button" className="btn btn-primary" onClick={showDetails}>Details</button>
                 <button type="button" className="btn btn-outline-primary" onClick={() => {debugger;
                 addToCart(value.id); }}>+</button>
               </div>
             </div>
             </div>           
        </div>
    );  
}