import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Chatrs-Bot</h1>
          <p>Your journey to success starts here. Discover amazing features and services.</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-image">
          <img src="/chat-bot-icon-virtual-smart-600nw-2478937553.webp" alt="Hero" />
        </div>
      </section>

      <section id="about" className="features">
        <h2>About Us</h2>
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

      <section id="services" className="features">
        <h2>Our Services</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3>Web Development</h3>
            <p>Custom web applications built with modern technologies.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>UI/UX Design</h3>
            <p>Beautiful and intuitive user interfaces that engage users.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Data Analytics</h3>
            <p>Transform your data into actionable insights.</p>
          </div>
        </div>
      </section>





      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Get in touch with us for your next project.</p>
        <button className="cta-button">Contact Now</button>
      </section>
    </div>
  );
};

export default Home;
