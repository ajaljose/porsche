import React from 'react';
import "./css/navbar.css";
import logo from "../images/porschelogo.png";
import hamlogo from "../images/hamburger.png";
// import font from url('https://fonts.googleapis.com/css2?family=Comforter+Brush&family=Open+Sans&family=Raleway:wght@100&display=swap');

const Navbar = ({setPage }) => {
  const setNavPage=(item)=>{
    setPage(item);
  }
  return (
    <div className="nav foreground">
      <img src={logo} alt="porsche" width="50" height="50" title="PORSCHE" />
      <h3 className="prcFont">PORSCHE</h3>
      <div className="sidemenu">
      <h4 onClick={()=>setNavPage('home')}>Home</h4>
        <h4 onClick={()=>setNavPage('model')}>Models</h4>
        <h4 className="navMenu prcFont">
          <img
            className="settings"
            src={hamlogo}
            onClick={() => {
              const rightNavbar = document.querySelector(".right-navbar");
              rightNavbar.style.right = "0";
              rightNavbar.style.transition = "right 0.6s ease-in-out"; // adjust the transition duration and timing function to your preference
            }}
          />
        </h4>
      </div>
    </div>
  );
};

export default Navbar;
