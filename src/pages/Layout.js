import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import home from "../assets/illustrations/Bathome1.png"
import eshop from "../assets/bg/bg_1.png"
import game from "../assets/bg/bg_5.png"
import compte from "../assets/bg/bg_3.png"
import signup from "../assets/bg/bg_3.png"

function Layout() {
  const location = useLocation();

  let bgImg = home;

  // Définir des classes spécifiques pour chaque NavLink actif
  if (location.pathname === '/eshop') {
    bgImg = eshop;
  } else if (location.pathname === '/game') {
    bgImg = game;
  } else if (location.pathname === '/compte') {
    bgImg = compte;
  } else if (location.pathname === '/signup') {
    bgImg = signup;
  } else {
    bgImg = home
  }

  return (
    <>
      <div id="appContainer">
      <div className='backgroundImg w-100'>
        <img src={bgImg} alt="background" />
      </div>
        <div id="appBody">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout