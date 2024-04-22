import React from 'react';
import "./css/modeldetails.css";
import p718interior from '../images/porsche718__1.png';
import p2 from '../images/porsche718__2.jpg';
import p3 from '../images/porsche718__3.jpg';
import p4 from '../images/porsche718__4.jpg';
function ModelDetail() {
  return (
    <div className='model__details'>
        <div className='model__hero'>
            <h1>718</h1>
        </div>
        <div className='model__about'>
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus nisl, imperdiet sed sodales a, efficitur ut eros. Nam a urna ac dolor semper ultrices. Maecenas vitae arcu eget ipsum imperdiet ultrices. Aenean ac metus vel ligula feugiat dictum pulvinar vel ligula. Duis sodales sapien a purus porta, non dignissim mauris bibendum. Phasellus sit amet condimentum urna. Cras porta odio eget arcu molestie, vel efficitur augue lacinia. </p>
        </div>
        <div className='model_clr'>
          
        <h1>Colors</h1>
        <div className='model__colors'>
          <div className='red'>&nbsp;&nbsp;&nbsp;</div>
          <div className='green'>&nbsp;&nbsp;&nbsp;</div>
          <div className='blue'>&nbsp;&nbsp;&nbsp;</div>
          <div className='yellow'>&nbsp;&nbsp;&nbsp;</div>
          <div className='black'>&nbsp;&nbsp;&nbsp;</div>
          <div className='color1'>&nbsp;&nbsp;&nbsp;</div>
          <div className='color2'>&nbsp;&nbsp;&nbsp;</div>
          <div className='color3'>&nbsp;&nbsp;&nbsp;</div>
        </div>
        </div>
        <div className='model__about'>
          <h1>Power</h1>
          <p>The Porsche 718 lineup boasts power figures that ignite the senses and quicken the pulse. With its turbocharged engines, the 718 Cayman and Boxster deliver a thrilling performance on every drive. The entry-level models come equipped with a potent 2.0-liter flat-four engine, generating around 300 horsepower, while the S variants ramp up the excitement with a 2.5-liter turbocharged flat-four, pushing out over 350 horsepower. These powerplants, finely tuned by Porsche engineers, propel the 718 lineup with precision and exhilaration, ensuring each twist of the road is met with a surge of adrenaline. </p>
        </div>
        <div className='model__gallery'>
          <img src={p2}></img>
          <img src={p718interior}></img>
          <img src={p3}></img>
          <img src={p4}></img>
        </div>
    </div>
  )
}

export default ModelDetail