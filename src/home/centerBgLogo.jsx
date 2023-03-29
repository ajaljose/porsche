import React from 'react';
import logo2 from '../images/porschelogo.png';
function centerBgLogo() {
  return (
    <div
      className="imgBg"
      style={{
        backgroundColor: 'grey',
        width: '500px',
        height: '500px',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: -1,
        borderRadius: '50%',
        opacity: '0.1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={logo2}
        alt="porsche"
        width="100%"
        height="100%"
        title="PORSCHE"
        style={{
          objectFit: 'contain',
        }}
      />
    </div>
  );
}

export default centerBgLogo;
