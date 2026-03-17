import React from 'react';
import './Navbar.css';
import logoImg from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoImg} alt="IRON FORGE FITNESS" className="logo-img" />
      </div>
      <ul className="navbar-links">
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
      <div className="navbar-action">
        <button className="btn-join">JOIN US</button>
      </div>
    </nav>
  );
};

export default Navbar;
