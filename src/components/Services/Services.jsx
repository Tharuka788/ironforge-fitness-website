import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <div className="services-subtitle">
          <span className="line"></span>
          <span className="subtitle-text">SERVICES</span>
          <span className="line"></span>
        </div>
        <h2 className="services-title">
          ENGINEERED FOR <span className="text-yellow">RESULTS</span>
        </h2>
        <p className="services-description">
          We provide the optimal tools and guidance necessary for physical transformation. No gimmicks, just proven methodologies.
        </p>
      </div>

      <div className="services-cards-container">
        {/* Card 1 */}
        <div className="service-card">
          <div className="card-bg-glow"></div>
          <div className="card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="8" r="4" stroke="#eab308" strokeWidth="2"/>
              <path d="M9 14C5.134 14 2 17.134 2 21H16C16 17.134 12.866 14 9 14Z" stroke="#eab308" strokeWidth="2"/>
              <path d="M18 11L20 13L24 9" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="card-title">PERSONAL TRAINING</h3>
          <p className="card-description">
            Bespoke coaching from industry elites tailored to your exact metabolic needs and strength goals.
          </p>
          <a href="#explore-pt" className="card-link">EXPLORE &nearr;</a>
        </div>

        {/* Card 2 */}
        <div className="service-card">
          <div className="card-bg-glow"></div>
          <div className="card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 21V19C16 17.8954 15.1046 17 14 17H6C4.89543 17 4 17.8954 4 19V21" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="10" cy="9" r="4" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 21V19C20 17.8954 19.1046 17 18 17H17" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 5.23533C15.1818 5.61214 16 6.71714 16 8C16 9.28285 15.1818 10.3879 14 10.7647" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="card-title">GROUP CLASSES</h3>
          <p className="card-description">
            High-intensity, focused group sessions designed to build community while burning maximum calories.
          </p>
          <a href="#explore-group" className="card-link">EXPLORE &nearr;</a>
        </div>

        {/* Card 3 */}
        <div className="service-card">
          <div className="card-bg-glow"></div>
          <div className="card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H7L10 5L14 19L17 12H21" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="card-title">CARDIO ZONE</h3>
          <p className="card-description">
            State-of-the-art cardiovascular equipment equipped with performance tracking technology.
          </p>
          <a href="#explore-cardio" className="card-link">EXPLORE &nearr;</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
