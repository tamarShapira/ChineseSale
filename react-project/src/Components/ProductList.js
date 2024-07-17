import { React,Component,createFactory } from "react";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';  
import Card from 'react-bootstrap';  

import products from './products/products.json'
import SingleProduct from "./SingleProduct";


export default function ProductList(){
    //const productList=products;
    //const productsList = useSelector((state) => state.products.products)
    const productList =useSelector((state)=>state.products.products);
     console.log('productList=', productList);
     return (
      <div className="row row-cols-1 row-cols-md-3 g-4" style={{zIndex:"0"}}>
        { 
        productList.map((item,index)=>( 
          <SingleProduct key={index}  value={item} className="card"></SingleProduct>
        ))}
        </div>  
      );
}