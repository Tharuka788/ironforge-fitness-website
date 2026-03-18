import React, { useState } from 'react';
import './Navbar.css';
import logoImg from '../../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoImg} alt="IRON FORGE FITNESS" className="logo-img" />
      </div>
      
      <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <li onClick={toggleMenu}><a href="#about">ABOUT</a></li>
        <li onClick={toggleMenu}><a href="#services">SERVICES</a></li>
        <li onClick={toggleMenu}><a href="#contact">CONTACT</a></li>
      </ul>
      <div className={`navbar-action ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <button className="btn-join">JOIN US</button>
      </div>
    </nav>
  );
};

export default Navbar;
