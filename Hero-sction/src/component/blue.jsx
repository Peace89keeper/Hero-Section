
import React from 'react';
import './blue.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Left: Image Side */}
      <div className="hero-image">
        {/* <img
          src=""
          alt="Website content marketing, blogging, media"
          className="hero-img"
        /> */}
        <div className="image-overlay"></div>
      </div>
      
      {/* Right: Text Side */}
      <div className="hero-text">
        <h1 className="hero-title">Let's Build Together</h1>
        <p className="hero-subtitle">
          Put the text of your choice and make it your first impression
        </p>
         <button className="hero-button">Get Started</button>
      </div>
    </section>

  );
};

export default HeroSection;
