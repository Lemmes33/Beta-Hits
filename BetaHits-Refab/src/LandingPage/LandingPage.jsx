import React from 'react';
import './landingpage.css'; // Assuming you'll use a separate CSS file for styles

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="search-bar">
          <input type="text" placeholder="Search for music, Artist............." />
          <i className="fa fa-search search-icon"></i>
        </div>
        <div className="nav-links">
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <a href="#premium">Premium</a>
          <a href="#login">Login/Sign in</a>
        </div>
      </nav>
      <div className="main-content">
        <div className="text-content">
          <h1>
            <span className="music-gradient">MUSIC </span>
            <span className="to-my-ears">TO MY EARS</span>
          </h1>
          <p>tune in to your vibe and heal your ears from the weekly fresh hits updated in our site</p>
          <div className="button-group">
            <button className="discover-btn">Discover Now</button>
            <button className="create-btn">Create Playlist</button>
          </div>
        </div>
        <div className="image-content">
          <img src="https://i.pinimg.com/564x/14/88/b2/1488b278461dccc6f62a9bc0b10cdb87.jpg" alt="Man holding headphones" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
