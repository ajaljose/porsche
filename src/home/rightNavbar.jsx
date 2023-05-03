import React from 'react';
import './rightNavbar.css'
function rightNavbar() {
  return (
    <div className="right-navbar">
        <table>
            <tr><td>Settings 1</td></tr>
            <tr><td>Settings 2</td></tr>
            <tr><td>Settings 3</td></tr>
            <tr><td>Settings 4</td></tr>
            <tr><td>Settings 5</td></tr> 
            <tr><td onClick={() => {
  const rightNavbar = document.querySelector('.right-navbar');
  rightNavbar.style.right = '-200px';
  rightNavbar.style.transition = 'right 0.6s ease-in-out'; // adjust the transition duration and timing function to your preference
}}>Close</td></tr>            
        </table>
    </div>
  )
}

export default rightNavbar