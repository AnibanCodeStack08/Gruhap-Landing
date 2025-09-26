import React from 'react';
import './HowItWorks.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: "💬",
      title: "Start a Conversation",
      description: "Simply type your wellness question or concern in natural language. No forms, no complicated setup.",
      details: ["Ask about stress, fitness, nutrition, or any wellness topic", "Use voice or text input", "Available 24/7"]
    },
    {
      number: "02",
      icon: "🧠",
      title: "AI Analysis",
      description: "Our AI professionals analyze your query using advanced algorithms and evidence-based practices.",
      details: ["Instant response within seconds", "Draws from thousands of research studies", "Considers your personal context"]
    },
    {
      number: "03",
      icon: "🎯",
      title: "Personalized Guidance",
      description: "Receive tailored recommendations, action plans, and resources specific to your situation.",
      details: ["Customized to your goals and preferences", "Step-by-step actionable advice", "Evidence-based recommendations"]
    },
    {
      number: "04",
      icon: "📈",
      title: "Track Progress",
      description: "Monitor your wellness journey with ongoing support and plan adjustments as needed.",
      details: ["Regular check-ins and progress reviews", "Adaptive recommendations", "Long-term wellness tracking"]
    }
  ];

  const features = [
    {
      icon: "🛡️",
      title: "Privacy & Security",
      description: "Your conversations are encrypted and confidential"
    },
    {
      icon: "⏰",
      title: "24/7 Availability",
      description: "Get support whenever you need it, day or night"
    },
    {
      icon: "👥",
      title: "Expert Knowledge",
      description: "Backed by licensed professionals and research"
    },
    {
      icon: "⚡",
      title: "Instant Response",
      description: "No waiting times or appointment scheduling"
    }
  ];

  const useCases = [
    {
      scenario: "Stress at Work",
      query: "I'm feeling overwhelmed with my workload and having trouble sleeping",
      response: "Provides stress management techniques, sleep hygiene tips, and work-life balance strategies"
    },
    {
      scenario: "Fitness Goals",
      query: "I want to start exercising but don't know where to begin",
      response: "Creates a beginner-friendly workout plan based on your fitness level and preferences"
    },
    {
      scenario: "Healthy Eating",
      query: "I want to eat healthier but I'm always busy",
      response: "Suggests quick healthy meals, meal prep strategies, and nutrition tips for busy lifestyles"
    }
  ];

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="howitworks-hero">
        <div className="howitworks-hero-content">
          <h1 className="howitworks-hero-title">How It Works</h1>
          <p className="howitworks-hero-description">
            Wellness with Gruhap is simple: just a conversation with AI to guide your goals.
          </p>
        </div>
      </section>
      <div className="howitworks-container">
        {/* Steps Section */}
        <section className="howitworks-steps-section">
          <div className="howitworks-section-container">
            <div className="howitworks-section-header">
              <h2 className="howitworks-section-title">Four Simple Steps</h2>
              <p className="howitworks-section-subtitle">
                From your first question to achieving your wellness goals, we make the process effortless.
              </p>
            </div>

            <div className="howitworks-steps-grid">
              {steps.map((step, index) => (
                <div key={index} className="howitworks-step-card">
                  <div className="howitworks-step-header">
                    <span className="howitworks-step-number">{step.number}</span>
                    <span className="howitworks-step-icon">{step.icon}</span>
                  </div>
                  <h3 className="howitworks-step-title">{step.title}</h3>
                  <p className="howitworks-step-description">{step.description}</p>
                  <ul className="howitworks-step-details">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="howitworks-step-detail-item">
                        <span className="howitworks-bullet">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="howitworks-features-section">
          <div className="howitworks-section-container">
            <div className="howitworks-section-header">
              <h2 className="howitworks-section-title">Why Choose Gruhap?</h2>
              <p className="howitworks-section-subtitle">
                Our platform combines the convenience of AI with the expertise of licensed professionals.
              </p>
            </div>

            <div className="howitworks-features-grid">
              {features.map((feature, index) => (
                <div key={index} className="howitworks-feature-card">
                  <div className="howitworks-feature-icon">{feature.icon}</div>
                  <h3 className="howitworks-feature-title">{feature.title}</h3>
                  <p className="howitworks-feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section
      <section className="howitworks-usecases-section">
        <div className="howitworks-section-container">
          <div className="howitworks-section-header">
            <h2 className="howitworks-section-title">Real-World Examples</h2>
            <p className="howitworks-section-subtitle">
              See how Gruhap helps with common wellness challenges.
            </p>
          </div>
          
          <div className="howitworks-usecases-grid">
            {useCases.map((useCase, index) => (
              <div key={index} className="howitworks-usecase-card">
                <div className="howitworks-usecase-badge">{useCase.scenario}</div>
                <div className="howitworks-usecase-content">
                  <div className="howitworks-usecase-section">
                    <h4 className="howitworks-usecase-label">User Query:</h4>
                    <p className="howitworks-usecase-query">
                      "{useCase.query}"
                    </p>
                  </div>
                  <div className="howitworks-usecase-section">
                    <h4 className="howitworks-usecase-label">Gruhap Response:</h4>
                    <p className="howitworks-usecase-response">
                      {useCase.response}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

        {/* CTA Section - HowItWorks */}
        <section className="howitworks-cta-section">
          <div className="howitworks-cta-container">
            <div className="howitworks-cta-content">
              <h2 className="howitworks-cta-title">Ready to Start Your Wellness Journey?</h2>
              <p className="howitworks-cta-description">
                Join thousands of users who have improved their mental health, fitness, and overall well-being with Gruhap.
              </p>
              <div className="howitworks-cta-buttons">
                <button className="howitworks-cta-primary">
                  Get Started Today
                </button>
                <button className="howitworks-cta-secondary">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default HowItWorks;