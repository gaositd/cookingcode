// import logo from './logo.svg';
import './App.css';

import React from 'react';
  import {
    Routes,
    Route,
   } from 'react-router-dom';

//archivos jsx para la página
import { Navbar } from './components/navbar/Navbar.jsx'
import { Home } from './components/home/Home.jsx'
import { ChefCards } from './components/Chefs/ChefCards.jsx';
import { About } from './components/about/About.jsx';
import { Contact } from './components/contact/Contact.jsx';
import { WhatWeCooking } from './components/weCooking/WhatWeCooking.jsx'
import { HowWeCooking } from './components/weCooking/HowWeCooking.jsx';
import { PinchLove } from './components/pinch/pinchLove.jsx'

function App(){ 
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />} />
        <Route
          path='/'
          element={<ChefCards />}
        />
        <Route 
          path='/home'
          element={<Home />}
        />
        <Route
          path="about"
          element={<About />}
        />
        <Route
          path='whatwecooking'
          element={<WhatWeCooking/>}
        />
        <Route
          path='howwecooking'
          element={<HowWeCooking />}
        />
        <Route
          path='contact'
          element={<Contact />}
        />
      </Routes>
      <PinchLove /> 
      <ChefCards />
    </div>
  )
}

export default App;
