import React from 'react';
import './Services.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Services = ({ openContact }) => {
  const revealRef = useScrollReveal();
  return (
    <section className="services reveal" ref={revealRef} id="services">
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
          <button onClick={openContact} className="card-link">MORE INFO</button>
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
          <button onClick={openContact} className="card-link">MORE INFO</button>
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
          <button onClick={openContact} className="card-link">MORE INFO</button>
        </div>

        {/* Card 4 - Yoga */}
        <div className="service-card">
          <div className="card-bg-glow"></div>
          <div className="card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22c5-4 9-9 9-14a4 4 0 0 0-4-4c-5 0-10 4-14 9a4 4 0 0 0 4 4z"></path>
              <path d="M12 22V12"></path>
            </svg>
          </div>
          <h3 className="card-title">YOGA & FLEXIBILITY</h3>
          <p className="card-description">
            Focus on mindfulness and flexibility with our expert-led yoga sessions.
          </p>
          <button onClick={openContact} className="card-link">MORE INFO</button>
        </div>

        {/* Card 5 - Crossfit */}
        <div className="service-card">
          <div className="card-bg-glow"></div>
          <div className="card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
            </svg>
          </div>
          <h3 className="card-title">CROSSFIT TRAINING</h3>
          <p className="card-description">
            High-intensity functional movements to build extreme strength and endurance.
          </p>
          <button onClick={openContact} className="card-link">MORE INFO</button>
        </div>

        {/* Card 6 - Zumba */}
        <div className="service-card">
          <div className="card-bg-glow"></div>
          <div className="card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18V5l12-2v13"></path>
              <circle cx="6" cy="18" r="3"></circle>
              <circle cx="18" cy="16" r="3"></circle>
            </svg>
          </div>
          <h3 className="card-title">ZUMBA CLASSES</h3>
          <p className="card-description">
            Get fit while having fun with our high-energy dance workout sessions.
          </p>
          <button onClick={openContact} className="card-link">MORE INFO</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
