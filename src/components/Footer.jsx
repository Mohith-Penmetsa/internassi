import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-line"></div>
        
        <div className="footer-grid">
          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Studio</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-col-title">Terms & Policies</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Explore</a></li>
              <li><a href="#">Accesibility</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-col-title">Follow Us</h4>
            <ul className="footer-links">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Youtube</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-col-title">Terms & Policies</h4>
            <ul className="footer-links">
              <li>1498w Fluton ste, STE<br/>2D Chicgo, IL 63867.</li>
              <li>(123) 456789000</li>
              <li>info@elementum.com</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>©2023 Elementum. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
