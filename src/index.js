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
  'https://stimg.cardekho.com/images/carexteriorimages/930x620/Porsche/911/7652/1677566789939/front-left-side-47.jpg',
  'https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/45063/taycan-exterior-right-front-three-quarter-3.jpeg?isig=0&q=75',
  'https://files.porsche.com/filestore/image/multimedia/none/ww-rangeshotbanner-front/normal/5fda392c-d2e3-11e9-80c5-005056bbdc38/porsche-normal.jpg',
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
