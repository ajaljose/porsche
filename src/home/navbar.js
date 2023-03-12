import './navbar.css';
import logo from '../images/porschelogo.png';
// import font from url('https://fonts.googleapis.com/css2?family=Comforter+Brush&family=Open+Sans&family=Raleway:wght@100&display=swap');

const Navbar = () => {
  return (
    <div className="nav">
      <img src={logo} alt="porsche" width="50" height="50" title="PORSCHE"/>
      <h4 className="navMenu">Menu</h4>
    </div>
  );
};

export default Navbar;
