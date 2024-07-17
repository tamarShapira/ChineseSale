import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Switch, Route, useParams, Redirect, withRouter } from 'react-router-dom'
import { useEffect,useState } from 'react';
import { useNavigate } from "react-router-dom";

import Login from './Components/Login';
import Routing from './routing';
import Register from './Components/Register';
import { Navbar } from './Components/Navbar';
import ProductDetails from './Components/ProductDetails';
import ProductList from './Components/ProductList';


function App() {
  const navigate = useNavigate();
  useEffect(() => {

  }, [])
  
  return (
    <div className="App">
      <header className='header'>
        <img src='images/logo.png' id='logo'  onClick={() => {  navigate(`/`); }}></img>       
        <Navbar />
        </header>
        <div style={{paddingTop:"120px"}}>
     <Routing></Routing>
     </div> 
    </div>
  );
}

export default App;
