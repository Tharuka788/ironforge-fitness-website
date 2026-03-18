import React from 'react';
import './About.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';

const About = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="about reveal" ref={revealRef} id="about">
      <div className="about-header">
        <h2 className="about-title">ABOUT US</h2>
        <h3 className="about-subtitle">Elevate Your Strength</h3>
        <p className="about-description">
          We are a premium fitness community dedicated to helping you reach your peak<br />
          performance. With expert trainers and world-class equipment, we provide everything you<br />
          need to transform your body and mind
        </p>
      </div>

      <div className="about-gallery">
        <div className="gallery-item">
          <img src={img1} alt="Fitness Training 1" />
        </div>
        <div className="gallery-item">
          <img src={img2} alt="Fitness Training 2" />
        </div>
        <div className="gallery-item">
          <img src={img3} alt="Fitness Training 3" />
        </div>
      </div>
    </section>
  );
};

export default About;
