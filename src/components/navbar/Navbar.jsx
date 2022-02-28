import React from "react";

import { Link } from "react-router-dom";
// import logo from '../images/logo192.png';
import navbar from './navbar.module.css'
export function Navbar(){

  function changeLanguage(){
    alert('Change languaje, if laguage is spanish change spanis, in other case english ')
  }
 
  return(
    <div className="navbar.navbar">
        <img
          //src={logo}
          alt="Logo Cooking Code"
         />
         <ul>
           <li>
             <Link to={'home'}>
               Home
             </Link>
           </li>
           <li>
             <Link to="about">About Us</Link>
            </li>
           <li>
             <Link to="whatwecooking">What we cooking</Link>
            </li>
           <li>
             <Link to="HowWeCooking">How we cooking</Link>
            </li>
           <li>
             <Link to="contact">Contact</Link>
            </li>
           <li>
             <Link to="language" onClick={changeLanguage}>Es/En</Link>
            </li>
         </ul>
    </div>
  )
}