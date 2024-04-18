import './css/details.css';
const Details=()=>{
    return <div className='details prcFont'>
        <h2>About</h2>
        <p>The Porsche Taycan Turbo S is an all-electric sports car produced by the German automaker Porsche. It features a sleek and aerodynamic design, with a low stance and distinctive Porsche styling cues. The Turbo S model is the top-of-the-line variant in the Taycan lineup and boasts impressive performance capabilities.

Under the hood, the Taycan Turbo S is powered by a pair of electric motors that deliver a combined output of 750 horsepower and 774 lb-ft of torque. This allows the car to accelerate from 0 to 60 mph in just 2.6 seconds and reach a top speed of 162 mph.</p>
<button className="cta" onClick={() => window.open('https://www.porsche.com/middle-east/_india_/modelstart/all/?modelrange=taycan')}>
  <span>Read More</span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg></button></div>
}
export default Details;