import React from 'react';
import "./css/modeldetails.css";
import hero718 from '../images/718hero.jpg';

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
    </div>
  )
}

export default ModelDetail