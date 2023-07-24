import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './home/navbar';
import Home from './home/home.js';
import CenterBgLogo from './home/centerBgLogo.jsx';
import Details from './home/details';
import ImageSlider from './home/imageSlider';
import RightNavbar from './home/rightNavbar';
import Footer from './home/footer';
import { useState } from 'react';
import About from './about/About';
const root = ReactDOM.createRoot(document.getElementById('root'));
const images = [
  'https://files.porsche.com/filestore/image/middle-east/none/homepage-banner-india/normal/c2e54b1f-9285-11e9-80c4-005056bbdc38/porsche-normal.jpg',
  'https://www.hdcarwallpapers.com/walls/porsche_911_carrera_2019_4k-HD.jpg',
  'https://files.porsche.com/filestore/image/multimedia/none/ww-rangeshotbanner-front/normal/5fda392c-d2e3-11e9-80c5-005056bbdc38/porsche-normal.jpg',
];
function App() {
    const [page,setPage]=useState();
    let component;
    if(page=='about'){
        component=<><Navbar />
        <About/>
        <RightNavbar page={page} setPage={setPage} />
        <Footer />
        </>;
    }else{
        component = (
            <>
              <Navbar />
              <Home />
              <CenterBgLogo />
              <Details />
              <RightNavbar page={page} setPage={setPage} />
              <ImageSlider images={images} />
              <Footer />
            </>
          );
    }
  return (
    <div>
    {component}
    </div>
  )
}

export default App