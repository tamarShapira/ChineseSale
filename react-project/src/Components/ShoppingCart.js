import React from 'react';
import { Component, createFactory, useState,useEffect,useContext } from 'react';
import { createContext } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Table from 'react-bootstrap/Table';

import products from './products/products.json'
import ItemInCart from './ItemInCart'


export default function ShoppingCart(){

   console.log('cart');
   debugger;
   
   const productListGeneral =useSelector((state)=>state.products.products);
   const productsList = useSelector((state) => state.users.currentUser.products);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [products, setProducts] = useState(productsList);
   const [totalicPrice,setTotalicPrice]=useState(0);

   useEffect(()=>{
   setProducts(productsList)
   },productsList)
 
    function calcSum(){
      let count=0;
      let totalPrice=0;
      console.log('productsList= ',productsList);
      console.log('products= ',products);
   
      //setProducts(productsList);
     
      for (let index = 0; index < productsList.length; index++) {
         count=parseInt((products[index])*(productListGeneral[index].price))
         totalPrice+=count; 
         console.log('total pricein loop now= ',totalPrice);   
      }  
      console.log('total price now= ',totalPrice);  
      return totalPrice;
   }
return(
   <>
   <Table striped bordered hover size="sm">
      <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Number of tickets</th>
            <th>NIS Per Ticket</th>
            <th>Total cost</th>
          </tr>
        </thead>
       {products.map((val,ind) => 
       val > 0 &&
      ( <ItemInCart  value={productListGeneral[ind]}  key={ind} ></ItemInCart>))}
 </Table>
 <h1>סה''כ לתשלום:{calcSum()}</h1>
 <button type="button" className="btn btn-secondary" onClick={() => {  navigate(`/payment`); }} >לתשלום</button>
</>
);
}