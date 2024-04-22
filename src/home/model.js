import React from "react";
import "./css/model.css";
function Model({setPage}) {
 const handleNav=()=>{
    setPage('modeldetails');
  }
  return (
    <div className="model">
      <h1>Models</h1>
      <div className="model__list">
        <div className="model__list__car">
          <div className="car__header">
            <h1>718</h1>
            <h3>from INR 1477720</h3>
            <button className="car__btn" onClick={()=>handleNav()}>Show More</button>
          </div>
        </div>
        <div className="model__list__car" id="p911">
          <div className="car__header">
            <h1>911</h1>
            <h3>from INR 1477720</h3>
            <button className="car__btn">Show More</button>
          </div>
        </div>
        <div className="model__list__car" id="pTaycan">
          <div className="car__header">
            <h1>Taycan</h1>
            <h3>from INR 1477720</h3>
            <button className="car__btn">Show More</button>
          </div>
        </div>
        <div className="model__list__car" id="pCayenne">
          <div className="car__header">
            <h1>Cayenne</h1>
            <h3>from INR 1477720</h3>
            <button className="car__btn">Show More</button>
          </div>
        </div>
        <div className="model__list__car" id="pPanamera">
          <div className="car__header">
            <h1>Panamera</h1>
            <h3>from INR 1477720</h3>
            <button className="car__btn">Show More</button>
          </div>
        </div>
        <div className="model__list__car" id="pMacan">
          <div className="car__header">
            <h1>Macan</h1>
            <h3>from INR 1477720</h3>
            <button className="car__btn">Show More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model;
