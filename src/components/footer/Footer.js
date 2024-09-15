import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'; // You can style it with your own CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer description */}
        <div className="footer-description">
          <h2 style={{color:"#31b675"}}>About Our Hotel</h2>
          <p>
            Welcome to Our Hotel, a place of comfort, luxury, and excellent service. Located in the heart of the city, we offer a unique blend of modern amenities and personalized hospitality to make your stay unforgettable.
          </p>
        </div>

        {/* Footer Navigation Links */}
        <div className="footer-links">
        <h3 style={{color:"#31b675"}}>Links</h3>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/distination'>Destinations</Link></li>
            <li><Link to='/gallery'>Gallery</Link></li>
            <li><Link to='/testimonials'>Testimonials</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h3 style={{color:"#31b675"}}>Follow Us</h3>
          <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
         <i className="fab fa-whatsapp"></i>
       <i class="fab fa-linkedin-in"></i>
                  <i class="fab fa-youtube"></i>
                  <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()}<span style={{color:"#31b675",fontWeight:"bold"}}> [Rehab Shaban]</span>. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
