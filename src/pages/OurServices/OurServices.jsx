import React from 'react';
import './OurServices.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const OurServices = () => {
  const mainServices = [
    {
      icon: "🧠",
      title: "Mental Health Support",
      description: "24/7 access to AI-powered mental health professionals for stress, anxiety, depression, and emotional well-being.",
      features: ["Stress Management", "Anxiety Support", "Depression Care", "Mindfulness Training"]
    },
    {
      icon: "💪",
      title: "Fitness & Exercise",
      description: "Personalized fitness plans, workout guidance, and exercise recommendations tailored to your goals and fitness level.",
      features: ["Custom Workout Plans", "Exercise Form Guidance", "Progress Tracking", "Injury Prevention"]
    },
    {
      icon: "🍎",
      title: "Nutrition Guidance",
      description: "Expert nutritional advice, meal planning, and dietary recommendations for optimal health and wellness.",
      features: ["Meal Planning", "Dietary Analysis", "Weight Management", "Special Diets"]
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Share Your Concerns",
      description: "Tell our AI about your wellness goals, challenges, or questions in natural language."
    },
    {
      step: "2",
      title: "Get Personalized Guidance",
      description: "Receive expert advice tailored to your specific situation and needs."
    },
    {
      step: "3",
      title: "Follow Your Plan",
      description: "Implement the recommendations with ongoing support and progress tracking."
    },
    {
      step: "4",
      title: "Track & Adjust",
      description: "Monitor your progress and get plan adjustments as your needs evolve."
    }
  ];

  return (
    <>
    <Navbar/>
    {/* Hero Section */}
      <section className="ourservices-hero-section">
        <div className="ourservices-hero-content">
          <h1 className="ourservices-hero-title">Our Services</h1>
          <p className="ourservices-hero-subtitle">
            Smarter, always-on support to keep you on track with your wellness journey.
          </p>
        </div>
      </section>
    <div className="ourservices-page-container">
      {/* Main Services Section */}
      <div className="ourservices-main-wrapper">
        <div className="ourservices-main-container">
          <div className="ourservices-section-header">
            <h2 className="ourservices-section-title">Core Services</h2>
            <p className="ourservices-section-subtitle">
              Our three main pillars of wellness support, each powered by specialized AI professionals.
            </p>
          </div>

          <div className="ourservices-main-grid">
            {mainServices.map((service, index) => (
              <div key={index} className="ourservices-service-card">
                <div className="ourservices-card-header">
                  <div className="ourservices-icon-wrapper">
                    <span>{service.icon}</span>
                  </div>
                  <h3 className="ourservices-card-title">{service.title}</h3>
                </div>
                <div className="ourservices-card-content">
                  <p className="ourservices-card-description">
                    {service.description}
                  </p>
                  <div className="ourservices-features">
                    <h4 className="ourservices-features-title">What's Included:</h4>
                    <div className="ourservices-features-list">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="ourservices-feature-badge">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="ourservices-card-button">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* How It Works Section */}
      <div className="ourservices-how-wrapper">
        <div className="ourservices-how-container">
          <div className="ourservices-section-header">
            <h2 className="ourservices-section-title">How Our Services Work</h2>
            <p className="ourservices-section-subtitle">
              Getting started with Gruhap is simple and straightforward.
            </p>
          </div>

          <div className="ourservices-how-grid">
            {howItWorks.map((step, index) => (
              <div key={index} className="ourservices-how-step-card">
                <div className="ourservices-step-number">
                  {step.step}
                </div>
                <h3 className="ourservices-step-title">{step.title}</h3>
                <p className="ourservices-step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="ourservices-cta-wrapper">
        <div className="ourservices-cta-container">
          <div className="ourservices-cta-content">
            <h2 className="ourservices-cta-title">Ready to Start Your Wellness Journey?</h2>
            <p className="ourservices-cta-description">
              Join thousands of users who have improved their mental health, fitness, and overall well-being with Gruhap.
            </p>
            <div className="ourservices-cta-buttons">
              <button className="ourservices-cta-primary">
                Get Started Today
              </button>
              <button className="ourservices-cta-secondary">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default OurServices;