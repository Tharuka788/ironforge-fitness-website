import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="stagger-word" style={{ animationDelay: '0.1s' }}>BE</span>{' '}
          <span className="stagger-word" style={{ animationDelay: '0.2s' }}>STRONG,</span><br />
          <span className="text-yellow stagger-word" style={{ animationDelay: '0.3s' }}>TRAINING</span>{' '}
          <span className="text-yellow stagger-word" style={{ animationDelay: '0.4s' }}>HARD</span>
        </h1>
        
        <div className="hero-description-wrapper">
          <div className="accent-line"></div>
          <p className="hero-description">
            Push past your limits in a facility designed for those who<br />
            demand excellence. Premium equipment, expert guidance,<br />
            raw power.
          </p>
        </div>

        <div className="hero-buttons">
          <a href="#contact" className="btn-primary" style={{textDecoration: 'none', display: 'inline-block'}}>GET INFO &rarr;</a>
          <a href="#services" className="btn-secondary" style={{textDecoration: 'none', display: 'inline-block'}}>VIEW CLASSES</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
