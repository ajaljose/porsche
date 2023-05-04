import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './home/navbar';
import Home from './home/home.js';
import CenterBgLogo from './home/centerBgLogo.jsx';
import Details from './home/details';
import Radar from './home/radar';
import ImageSlider from './home/imageSlider';
import RightNavbar from './home/rightNavbar';
const root = ReactDOM.createRoot(document.getElementById('root'));
const images = [
  'D:/reactjs/porsche/src/images/porsche.png',
  'D:/reactjs/porsche/src/images/name.png',
  'D:/reactjs/porsche/src/images/hamburger.png',
];
root.render(
  <React.StrictMode>
    <Navbar/>
    <Home/>
    <CenterBgLogo/>
    <Details/>
    <RightNavbar/>
    <ImageSlider images={images}/>
    {/* <Radar/> */}
  </React.StrictMode>
);
