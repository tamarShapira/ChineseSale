import axios from 'axios';
import React, { useRef, useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';

import { getAllUsers } from '../Services/user.service';
import { setUsers } from '../Store/UserSlice/UserAction';
import Register from './Register';
import ProductList from './ProductList'
import '../CSS/Login.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import swal from 'sweetalert';

export default function Login() {
   const [userName, setUserName] = useState('');
   const [password, setPassword] = useState('');
   const [isRegistered, setIsRegistered] = useState(false);
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
 
   const navigate = useNavigate();
   const dispatch = useDispatch((state)=>state.users);
   const {users}=useSelector((state)=>state.users);

   useEffect(() => {
      if (!users.users)
        getAllUsers().then((data) => {
        dispatch(setUsers(data.data)) ;
        });
        else
        console.log('users= ',users);
      }, []);

   function enterPage(e) {
      console.log('enter page')
      let isValid = true;
      if (!isValid) {
         return;
      }
         let user = users?.find(
            (u) => u.username === userName
         );
         if (!user) {
            console.log("navigate register");
            navigate(`/register`);
         }
         else {
            console.log("username: ", user.username);
            console.log("password: ", user.password);
            if (user.password === password) {
               console.log('user exist');
               setIsRegistered(true);
               swal("!התחברת בהצלחה","", "success");
               localStorage.setItem("user", JSON.stringify({ name: userName, password: password }));
               navigate(`/products`);
            }
            else {
               console.log('incorrect password. please try again'); 

               swal("incorrect password. please try again","", "error");
            }
         }
   }
   return (
      <div>
         {
            <div id='login'>
               {console.log("users",users)}
               <div className="col-sm-10">
               <input  type="text" className="form-control" id="inputText" placeholder="שם משתמש" onChange={(e) => { setUserName(e.target.value) }}  />
               </div>
               <div className="col-sm-10">
               <input type="password" className="form-control" id="inputPassword" placeholder="סיסמה" onChange={(e) => { setPassword(e.target.value) }} />
               </div>
               <Button variant="secondary" className='btn-login' onClick={(e) => { enterPage(e); }}>OK</Button>
               <Button variant="outline-secondary" className='btn-login' onClick={() => {  navigate(`/register`); }}>לא רשום? הירשם עכשיו</Button>
            </div>    
         }
      </div>
   )
}