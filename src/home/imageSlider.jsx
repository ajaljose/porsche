import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  return (<div id='imgslider'>
    <div className="slider" >
      <img src={images[currentImageIndex]} alt="slider image" />
      <button className="prev" onClick={handlePrevClick}>
        Prev
      </button>
      <button className="next" onClick={handleNextClick}>
        Next
      </button>
      <style jsx>{`
        #imgslider .slider {
          position: relative;
          height: 600px;
          width: 100%;
          margin: 0 auto;
        }
        #imgslider img {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        #imgslider .prev,
        #imgslider .next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          height: 40px;
          border: none;
          background-color: black;
          box-shadow: 7px 7px 7px lightblue;
          color: white;
          font-size: 24px;
          cursor: pointer;
          z-index: 1;
        }
        #imgslider .prev {
          left: 20px;
        }
        #imgslider .next {
          right: 20px;
        }
      `}</style>
    </div></div>
  );
};

export default ImageSlider;
