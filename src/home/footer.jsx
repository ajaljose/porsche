import React from "react";
import "./css/footer.css";
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <table>
          <tr>
            <td><div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
            Welcome to our website, dedicated to educational purposes only. Our mission is to provide reliable and accurate information across various subjects, fostering learning and personal growth. Please note that all content presented here is intended for educational use and should be verified for accuracy. We encourage open-mindedness and constructive discussions while maintaining the highest standards of integrity. Our team of educators and experts strives to offer valuable resources to empower users in their quest for knowledge.
            </p>
          </div></td>
            <td><div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li>
                <a href="#">C</a>
              </li>
              <li>
                <a href="#">
                  UI Design
                </a>
              </li>
              <li>
                <a href="#">
                  UX
                </a>
              </li>
              <li>
                <a href="#">
                  Javascript
                </a>
              </li>
              <li>
                <a href="#">ReactJS</a>
              </li>
              <li>
                <a href="#">CSS</a>
              </li>
            </ul>
          </div></td>
            <td><div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">
                  Contribute
                </a>
              </li>
              <li>
                <a href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div></td>
          </tr>
        </table>
        <div className="row">
          

          

          
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2023 All Rights Reserved by
              <a href="https://www.linkedin.com/in/ajaljosem/">Ajal Jose</a>.
            </p>
          </div>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
