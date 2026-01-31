
import React from 'react';
import './blue.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Left: Image Side */}
      <div className="hero-image">
        <img
          src="https://media.gettyimages.com/id/1961311540/vector/retro-browser-computer-window-in-90s-style-with-icons-and-stickers-retro-wave-pc-desktop.jpg?s=612x612&w=0&k=20&c=Ii0_RtCtkwqg8qMK5SyqBHBIuzmOoUR6k9SAzqc7kEA="
          alt="Website content marketing, blogging, media"
          className="hero-img"
        />
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
