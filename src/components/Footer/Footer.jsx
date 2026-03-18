import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Info */}
        <div className="footer-brand">
          <img src={logo} alt="Fitness Sports Center" className="footer-logo" />
          <p className="footer-description">
            Forging strength, discipline, and absolute power in an environment built for those who refuse to settle.
          </p>
          <div className="footer-socials">
            <a href="#instagram" className="social-icon" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#facebook" className="social-icon" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#twitter" className="social-icon" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4 className="footer-heading">QUICK LINKS</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#join">Join the Forge</a></li>
          </ul>
        </div>

        {/* Hours */}
        <div className="footer-hours">
          <h4 className="footer-heading">HOURS</h4>
          <div className="hours-row">
            <span>Mon - Fri</span>
            <span>5AM - 11PM</span>
          </div>
          <div className="hours-row">
            <span>Sat - Sun</span>
            <span>6AM - 8PM</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Fitness Sports Center. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
