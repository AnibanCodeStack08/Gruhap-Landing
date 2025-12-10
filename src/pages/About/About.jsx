import React from 'react';
import { Heart, Target, Users, Award, ArrowRight } from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './About.css';

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "100+", label: "AI Professionals" },
  { value: "95%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Support Available" },
];

const values = [
  {
    icon: Heart,
    title: "Empathy First",
    description: "We believe in understanding and compassion as the foundation of mental wellness.",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Every interaction is designed to help you achieve your personal wellness goals.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Building a supportive community where everyone can thrive together.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering the highest quality AI-powered wellness guidance.",
  },
];

const About = () => {
  return (
    <div className="about-container">
      <Navbar />

      <main className="about-main">
        {/* Hero Section */}
        <section className="about-hero-section">
          <div className="about-hero-container">
            <div className="about-hero-content">
              <span className="about-hero-badge">About Us</span>
              <h1 className="about-hero-title">
                Empowering Your{" "}
                <span className="about-hero-title-gradient">Wellness Journey</span>
              </h1>
              <p className="about-hero-description">
                We're on a mission to make mental health, fitness, and nutrition guidance accessible to everyone through the power of AI.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section
        <section className="about-stats-section">
          <div className="about-stats-container">
            <div className="about-stats-grid">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="about-stats-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="about-stats-value">{stat.value}</div>
                  <div className="about-stats-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Story Section */}
        <section className="about-story-section">
          <div className="about-story-container">
            <div className="about-story-grid">
              <div className="about-story-image-wrapper">
                <div className="about-story-image-container">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                    alt="Our team collaborating"
                    className="about-story-image"
                  />
                </div>
                {/* <div className="about-story-badge">
                  <p className="about-story-badge-title">Since 2020</p>
                  <p className="about-story-badge-subtitle">Helping thousands daily</p>
                </div> */}
              </div>
              <div className="about-story-content">
                <h2 className="about-story-title">Our Story</h2>
                <p className="about-story-text">
                  Gruhap was born from a simple yet powerful idea: everyone deserves access to quality wellness guidance, regardless of their location or circumstances.
                </p>
                <p className="about-story-text">
                  Our founders, a team of healthcare professionals and AI researchers, came together to create a platform that combines cutting-edge technology with genuine human understanding.
                </p>
                <p className="about-story-text">
                  Today, we're proud to serve over 50,000 users worldwide, helping them navigate their wellness journeys with personalized AI support available 24/7.
                </p>
                <button className="about-story-button">
                  Join Our Mission
                  <ArrowRight className="about-story-button-icon" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values-section">
          <div className="about-values-container">
            <div className="about-values-header">
              <h2 className="about-values-title">Our Core Values</h2>
              <p className="about-values-description">
                The principles that guide everything we do
              </p>
            </div>
            <div className="about-values-grid">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="about-values-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="about-values-icon-wrapper">
                    <value.icon className="about-values-icon" />
                  </div>
                  <h3 className="about-values-card-title">{value.title}</h3>
                  <p className="about-values-card-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta-section">
          <div className="about-cta-container">
            <div className="about-cta-card">
              <h2 className="about-cta-title">
                Ready to Transform Your Life?
              </h2>
              <p className="about-cta-description">
                Start your wellness journey today with personalized AI guidance across all our services.
              </p>
              <div className="about-cta-buttons">
                <button className="about-cta-button-primary">
                  Get Started Free
                  <ArrowRight className="about-cta-button-icon" />
                </button>
                <button className="about-cta-button-secondary">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;