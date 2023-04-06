import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './home/navbar';
import Home from './home/home.js';
import CenterBgLogo from './home/centerBgLogo.jsx';
import Details from './home/details';
import Radar from './home/radar';
import ImageSlider from './home/imageSlider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Home/>
    <CenterBgLogo/>
    <Details/>
    <ImageSlider/>
    <Radar/>
  </React.StrictMode>
);
