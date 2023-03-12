import logo from '../images/taycanturbos.png';
import './home.css';
const Home = () => {
  return (
    <div className="car foreground">
      <img  src={logo} alt="porsche" width="46%"  title="PORSCHE"/>
      <button class="cta">
  <span>Read More</span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg></button>
    </div>
  );
};

export default Home;
