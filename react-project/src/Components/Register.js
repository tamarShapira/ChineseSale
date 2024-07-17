import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';

import swal from 'sweetalert';
import ProductList from './ProductList'
import Login from './Login'
import { getAllUsers } from '../Services/user.service';
import {addUser} from '../Services/user.service';
import { setUsers,setNewUser } from '../Store/UserSlice/UserAction';
import '../CSS/Register.css'
export default function Register() {

    //const { setIsLogin } = props;

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [mail, setMail] = useState('')

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.users);

    //const [isUserExist, setIsUserExist] = useState(true)
    useEffect(() => {
        if (!users.users)
        getAllUsers().then(data => {
                dispatch(setUsers(data.data));
  
            });
            else
            console.log('users=',users)
    }, [])
    function handleSubmit() {
        let myUser={username: userName, password: password, address: address, email: mail}
        addUser(myUser).then((R)=>{dispatch(setNewUser(myUser));console.log(R)})
        
        // axios.post('http://localhost:4000/user/addUser', myuser).then(succ=>{
        //     console.log('succ')
        // }).catch(err=>{console.log('error: ',err)});
        console.log('add user');
        swal("!התחברת בהצלחה","", "success");
        localStorage.setItem("user", JSON.stringify({ name: userName, password: password }));
        navigate(`/login`);
        // setIsLogin(true)
    }
    return (
            <div id='login'>

               <div className="col-sm-10">
               <input type="text" className="form-control"  id="inputText" placeholder="שם משתמש" onChange={(e) => { setUserName(e.target.value) }}  />
               </div>
               <div className="col-sm-10">
               <input type="password" className="form-control" id="inputPassword" placeholder="סיסמה" onChange={(e) => { setPassword(e.target.value) }} />
               </div>
                 <div className="col-sm-10">
               <input type="text" className="form-control" id="inputAddress" placeholder="כתובת מגורים" onChange={(e) => { setAddress(e.target.value) }} />
               </div>
                 <div className="col-sm-10">
               <input type="mail" className="form-control" id="inputMail" placeholder="כתובת מייל" onChange={(e) => { setMail(e.target.value) }} />
               </div>
               <button type="button" className="btn btn-secondary" id='registerButton' onClick={(e) => { handleSubmit(e); }}>הירשם</button>
            </div>
    )
}