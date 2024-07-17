import React, { Component } from 'react';
import { useLocation } from "react-router-dom";
import Card from 'react-bootstrap'; 


export default function ProductDetails(){
const product=useLocation().state;


return(
<>
<div className="card" style={{width:"50rem",margin:"auto",marginTop:"3%"}}>
  <img src={product.img}  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h1 className="card-title">{product.name}</h1>
    <h3 className="card-title">{product.subHeader}</h3>
    <p className="card-text">{product.description}</p>
    <p className="card-text">{product.price} NIS</p>
  </div>
</div>
</>
);
}