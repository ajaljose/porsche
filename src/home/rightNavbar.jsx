import React from 'react';
import './rightNavbar.css'
function rightNavbar({ page, setPage }) {
  const handleIncrement = (pages) => {
    setPage(pages);
  };
  return (
    <div className="right-navbar">
        <table>
            <tr onClick={() => handleIncrement('home')}><td>Home</td></tr>
            <tr><td>Settings 2</td></tr>
            <tr><td>Settings 3</td></tr>
            <tr><td>Settings 4</td></tr>
            <tr onClick={() => handleIncrement('about')}><td>About</td></tr> 
            <tr><td onClick={() => {
  const rightNavbar = document.querySelector('.right-navbar');
  rightNavbar.style.right = '-320px';
  rightNavbar.style.transition = 'right 0.6s ease-in-out'; // adjust the transition duration and timing function to your preference
}}>Close</td></tr>            
        </table>
    </div>
  )
}

export default rightNavbar