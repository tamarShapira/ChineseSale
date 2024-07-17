import { React } from 'react';
import { createContext } from 'react';
import { useState, useEffect,useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"


import {addProductToCart,removeProductFromCart} from '../Store/UserSlice/UserAction'
import ShoppingCart from './ShoppingCart';
//import { MyContext } from "./MyContext";
import Table from 'react-bootstrap/Table';
import '../CSS/ItemInCart.css'
import {calcSum} from './ShoppingCart';
export default function ItemInCart({ value }) {
  
    const navigate = useNavigate();
   // const calcSum = useContext(MyContext);

    function handleClick() {
        navigate(`/productDetails`,{state:product});
    }
   // const sum=calcSum();
    const prod = useSelector((state) => state.products.products[value.id]);
    const productsList = useSelector((state) => state.users.currentUser.products);
    const dispatch = useDispatch();
    const [product, setProduct] = useState(prod);
    const [amount, setAmount] = useState(productsList[product.id]);
    
    function removeFromCart(productId) {
        if (amount > 0) {
            dispatch(removeProductFromCart(productId));
            setAmount(amount - 1);
            
        }
    }

    function addToCart(productId) {
        dispatch(addProductToCart(productId));
        setAmount(amount + 1);
        
       
    }

    return (
        <tbody>
          <tr>
            <td><h3>{product.name}</h3></td>
            <td><img src={product.img} onClick={handleClick} style={{height:"80px"}}></img></td>
            <td>
                <div className="wrapper">
                <button type="button" className="btn btn-secondary"   onClick={() => {removeFromCart(product.id)}}>-</button>
                <h3>{productsList[product.id]}</h3>
                <button type="button" className="btn btn-secondary"   onClick={() => addToCart(product.id)}>+</button>
                </div> 
            </td>
            <td> <h3>{product.price}</h3></td>
            <td> <h3>{(product.price)*(productsList[product.id])}</h3></td>
          </tr>
        </tbody>
    );

}