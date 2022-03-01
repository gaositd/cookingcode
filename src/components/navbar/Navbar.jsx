import React, { Fragment } from "react";

import { Link } from "react-router-dom";
import logo from '../../images/hat/klipartz_chef.com.png';
import './navbar.css';
export function Navbar(){

  function changeLanguage(){
    alert('Change languaje, if laguage is spanish change spanis, in other case english ')
  }
 
  return(
    <Fragment>
      <hr className="hr"/>
      <header className="navbar">
          <section className="logoSlogan">
            <div>
              <img
                src={logo}
                alt="Logo Cooking Code"
                className="img"
              />
            </div>
            <div>
              <p><Link to="/" className="slogan">Cooking Code</Link></p>
            </div>
          </section>
          <section className="menu">
          <ul>
              <div>
                <li>
                  <Link to={'home'}>
                  Home
                  </Link>
                </li>
              </div>
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
              <Link to="language" onClick={changeLanguage}>Español</Link> / <Link to="language" onClick={changeLanguage}>English</Link>
              </li>
            </ul>
          </section>
      </header>
    </Fragment>
  )
}