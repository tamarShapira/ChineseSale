import React from "react"
import {Link} from 'react-router-dom'

import '../CSS/Navbar.css'
export const Navbar=()=>{

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
       console.log("newValue: ",newValue);
      };
      return(
        <>
        <ul className="nav nav-underline" id="ul">
         <li className="nav-item" >
           <Link className="li" value={value} to="/login" onChange={handleChange} >התחברות</Link>
            {/* <a className="nav-link active" aria-current="page"  href="#">login</a> */}
         </li>
         <li className="nav-item">
         <Link className="li" value={value} to="/products" onChange={handleChange}>לקטלוג</Link>
           {/* <a className="nav-link" href="#">products</a> */}
         </li>
         <li className="nav-item">
         <Link className="li" value={value} to="/cart" onChange={handleChange}>לסל המוצרים</Link>
           {/* <a className="nav-link disabled">cart</a> */}
         </li>
         <li className="nav-item">
         <Link className="li" value={value} >אודות</Link>
           {/* <a className="nav-link disabled">cart</a> */}
         </li>
         <li className="nav-item">
         <Link className="li" value={value} >סניפים</Link>
           {/* <a className="nav-link disabled">cart</a> */}
         </li>
         <li className="nav-item">
         <Link className="li" value={value}>שירותים</Link>
           {/* <a className="nav-link disabled">cart</a> */}
         </li>
         <li className="nav-item">
         <Link className="li" value={value} >צור קשר</Link>
           {/* <a className="nav-link disabled">cart</a> */}
         </li>
       </ul>
      </>
      )
}