import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          BE STRONG,<br />
          <span className="text-yellow">TRAINING HARD</span>
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
          <button className="btn-primary">GET INFO &rarr;</button>
          <button className="btn-secondary">VIEW CLASSES</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
