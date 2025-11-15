import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>Your journey to success starts here. Discover amazing features and services.</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-image">
          <img src="https://via.placeholder.com/500x300" alt="Hero" />
        </div>
      </section>

      <section className="features">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Fast Performance</h3>
            <p>Experience lightning-fast loading times and smooth interactions.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure</h3>
            <p>Your data is protected with top-notch security measures.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Responsive</h3>
            <p>Works perfectly on all devices, from mobile to desktop.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
