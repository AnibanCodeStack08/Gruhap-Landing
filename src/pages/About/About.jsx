import React from 'react';
import './About.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const values = [
  {
    title: "Accessibility",
    description: "Making mental health and wellness support available to everyone, everywhere, at any time.",
    icon: "🌍"
  },
  {
    title: "Innovation",
    description: "Leveraging cutting-edge AI technology to provide personalized and effective wellness solutions.",
    icon: "🚀"
  },
  {
    title: "Empathy",
    description: "Understanding that every wellness journey is unique and requires compassionate, personalized support.",
    icon: "💝"
  },
  {
    title: "Trust",
    description: "Building a safe, secure environment where users feel comfortable sharing and seeking help.",
    icon: "🔒"
  }
];

export default function About() {
  return (
    <>
      <Navbar/>
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Gruhap</h1>
          <p className="about-hero-subtitle">
            Making wellness simple, personal, and effective with AI.
          </p>
        </div>
      </section>
      
      <div className="about-page-container">
        {/* Story Section */}
        <section className="about-story-wrapper">
          <div className="about-story-card">
            <div className="about-section-header">
              <h2 className="about-section-title">Our Story</h2>
            </div>
            <div className="about-story-content">
              <div className="about-story-text">
                <p className="about-story-paragraph">
                  Gruhap was founded to make wellness support more accessible and effective by replacing expensive, time-consuming traditional methods with instant, personalized guidance from AI-trained professionals. Our platform delivers 24/7 expert support for mental health, fitness, and nutrition, combining the latest research with compassionate care.
                </p>
              </div>
              <div className="about-story-image">
                <img
                  src="https://magai.co/wp-content/uploads/2025/07/magai-conclusion-aligning-AI-goals-1024x572.jpg"
                  alt="AI Goals Alignment"
                  className="about-story-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values-wrapper">
          <div className="about-values-card">
            <div className="about-section-header">
              <h2 className="about-section-title">Our Values</h2>
              <p className="about-section-subtitle">
                Everything at Gruhap starts with our core values.
              </p>
            </div>
            <div className="about-values-grid">
              {values.map((value, index) => (
                <div key={index} className="about-value-card">
                  <div className="about-value-icon">{value.icon}</div>
                  <div className="about-value-card-content">
                    <h3 className="about-value-title">{value.title}</h3>
                    <p className="about-value-description">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="about-cta-wrapper">
          <div className="about-cta-card">
            <div className="about-cta-content">
              <h2 className="about-cta-title">Ready to Start Your Wellness Journey?</h2>
              <p className="about-cta-description">
                Join thousands of others who have transformed their lives with Gruhap's AI-Trained wellness support.
              </p>
              <div className="about-cta-buttons">
                <button className="about-cta-primary">Get Started Today</button>
                <button className="about-cta-secondary">Learn More</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}