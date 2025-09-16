import React from 'react';
import './About.css';

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

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Medical Officer",
    specialty: "Clinical Psychology",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=center"
  },
  {
    name: "Alex Rodriguez",
    role: "Head of Fitness Programs",
    specialty: "Exercise Science",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center"
  },
  {
    name: "Maya Patel",
    role: "Chief Nutritionist",
    specialty: "Clinical Nutrition",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1c5?w=400&h=400&fit=crop&crop=center"
  },
  {
    name: "Dr. David Kim",
    role: "Head of Mental Health",
    specialty: "Psychiatry",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=center"
  }
];

export default function About() {
  return (
    <div className="about-page-container">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Gruhap</h1>
          <p className="about-hero-subtitle">
            We're on a mission to make wellness accessible, personalized, and effective for everyone through the power of AI technology.
          </p>

        </div>
      </section>

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
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values-wrapper">
        <div className="about-values-card">
          <div className="about-section-header">
            <h2 className="about-section-title">Our Values</h2>
            <p className="about-section-subtitle">
              These core values guide everything we do at Gruhap, from product development to customer support.
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

      {/* Team Section */}
      <section className="about-team-wrapper">
        <div className="about-team-card">
          <div className="about-section-header">
            <h2 className="about-section-title">Meet Our Team</h2>
            <p className="about-section-subtitle">
              Our diverse team of experts brings together decades of experience in healthcare, technology, and wellness.
            </p>
          </div>
          <div className="about-team-grid">
            {team.map((member, index) => (
              <div key={index} className="about-team-member-card">
                <div className="about-team-card-content">
                  <div className="about-member-image-wrapper">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="about-member-image"
                    />
                  </div>
                  <div className="about-member-info">
                    <h3 className="about-member-name">{member.name}</h3>
                    <p className="about-member-role">{member.role}</p>
                    <div className="about-member-specialty">
                      <span className="about-specialty-icon">📋</span>
                      {member.specialty}
                    </div>
                  </div>
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
              Join thousands of others who have transformed their lives with Gruhap's AI-powered wellness support.
            </p>
            <div className="about-cta-buttons">
              <button className="about-cta-primary">Get Started Today</button>
              <button className="about-cta-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}