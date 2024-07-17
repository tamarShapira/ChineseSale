import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import  '../CSS/Payment.css'

export default function Payment({value}){
    const user = useSelector((state) => state.users.currentUser.creditCardDetails);
    const dispatch = useDispatch();
  
    const [creditCardNumber, setCreditCardNumber] = useState(user.creditCardNumber);
    const [validity, setValidity] = useState(user.validity);
    const [threeDigits, setThreeDigits] = useState(user.threeDigits);
  
    return(
        <div id="paymentDiv" style={{ 
        backgroundImage: "url(/images/payment.png)",height:"550px",zIndex:"0",position:"relative",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",display:"block"}}>
        <form className="wrapperr">
        <div>
            <label>User name</label>
            <input className="payment"></input>
        </div>
        <div>
            <label>Password</label>
            <input className="payment"></input>
        </div>
        <div>
            <label>Card number</label>
            <input className="payment"></input>
        </div>
        <div>
            <label>CVV</label>
            <input className="payment"></input>
        </div>
        <div>
            <label>mm</label>
            <input className="payment"></input>
        </div>
        <div>
            <label>yy</label>
            <input className="payment"></input>
        </div>
      </form>
      </div>
    );
   
}