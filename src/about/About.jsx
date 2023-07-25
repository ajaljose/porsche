import React from 'react'
import './About.css';
function About() {
  return (
    <div className='about'>
        <h1 >About</h1>
        <p>The Porsche Taycan Turbo S is an all-electric sports car produced by the German automaker Porsche. It features a sleek and aerodynamic design, with a low stance and distinctive Porsche styling cues. The Turbo S model is the top-of-the-line variant in the Taycan lineup and boasts impressive performance capabilities.

Under the hood, the Taycan Turbo S is powered by a pair of electric motors that deliver a combined output of 750 horsepower and 774 lb-ft of torque. This allows the car to accelerate from 0 to 60 mph in just 2.6 seconds and reach a top speed of 162 mph.</p>
    <h2 >Feedback</h2>
    <div className="input-container">
      <input type="text" id="input" required />
      <label htmlFor="input" className="label">
        Name
      </label>
      <div className="underline"></div>
    </div>
    <div className="input-container">
      <input type="text" id="input2" required />
      <label htmlFor="input2" className="label">
        email@here.com
      </label>
      <div className="underline"></div>
    </div>
    <div className="input-container">
    <textarea name="" id="feedback" rows="10" cols="50" placeholder='Message...'></textarea>

    </div>
    <div className="input-container">
    <button>Submit</button>

    </div>
    </div>
  )
}

export default About