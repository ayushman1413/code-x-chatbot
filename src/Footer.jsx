import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 My Chatbot. All rights reserved.</p>
        <div className="social-icons">
          {/* <a href="#facebook" className="social-icon">📘</a>
          <a href="#twitter" className="social-icon">🐦</a>
          <a href="#instagram" className="social-icon">📷</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
