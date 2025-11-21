import React, { useState } from 'react';
import './Contact.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactMethods = [
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      action: 'Start Chat',
      availability: '24/7 Available'
    },
    {
      icon: '✉️',
      title: 'Email Support',
      description: 'Send us a detailed message',
      action: 'Send Email',
      availability: 'Response within 24 hours'
    },
    {
      icon: '📞',
      title: 'Phone Support',
      description: 'Speak directly with our team',
      action: 'Call Now',
      availability: 'Mon-Fri, 9AM-6PM EST'
    }
  ];

  const officeInfo = [
    {
      icon: '📍',
      label: 'Address',
      value: '123 Wellness Street, Health District, San Francisco, CA 94102'
    },
    {
      icon: '📞',
      label: 'Phone',
      value: '+1 (555) 123-4567'
    },
    {
      icon: '✉️',
      label: 'Email',
      value: 'hello@gruhap.com'
    },
    {
      icon: '🕐',
      label: 'Business Hours',
      value: 'Monday - Friday: 9AM - 6PM EST'
    }
  ];

  return (
    <>
      <Navbar/>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-container">
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-subtitle">
            We're here for you! Get in touch for any questions, feedback, or support.
          </p>
        </div>
      </section>
      
      <div className="contact-page">
        {/* Contact Methods */}
        <section className="contact-methods-section">
          <div className="contact-container">
            <div className="contact-section-header">
              <h2 className="contact-section-title">Get in Touch</h2>
              <p className="contact-section-subtitle">
                Choose the method that works best for you. Our team is ready to assist.
              </p>
            </div>
            
            <div className="contact-cards-wrapper">
              <div className="contact-methods-grid">
                {contactMethods.map((method, index) => (
                  <div key={index} className="contact-method-card">
                    <div className="contact-method-icon">
                      {method.icon}
                    </div>
                    <h3 className="contact-method-title">{method.title}</h3>
                    <p className="contact-method-description">{method.description}</p>
                    <span className="contact-availability-badge">
                      {method.availability}
                    </span>
                    <button className="contact-method-button">
                      {method.action}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Office Info */}
        <section className="contact-form-section">
          <div className="contact-container">
            <div className="contact-section-header">
              <h2 className="contact-section-title">Send us a Message</h2>
              <p className="contact-section-subtitle">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
            
            <div className="contact-form-wrapper">
              <div className="contact-form-grid">
                {/* Contact Form Card */}
                <div className="contact-form-card">
                  <div className="contact-card-header">
                    <h2 className="contact-card-title">
                      <span>📝</span> Contact Form
                    </h2>
                    <p className="contact-card-subtitle">
                      Tell us how we can help you with your wellness journey.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="contact-form-row">
                      <div className="contact-form-group">
                        <label htmlFor="firstName" className="contact-label">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="contact-input"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="contact-form-group">
                        <label htmlFor="lastName" className="contact-label">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className="contact-input"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="contact-form-group">
                      <label htmlFor="email" className="contact-label">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="contact-input"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="contact-form-group">
                      <label htmlFor="subject" className="contact-label">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="contact-input"
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="contact-form-group">
                      <label htmlFor="message" className="contact-label">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        className="contact-textarea"
                        placeholder="Tell us more about your question or feedback..."
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="contact-submit-button">
                      <span>📤</span> Send Message
                    </button>
                  </form>
                </div>

                {/* Office Information Cards */}
                <div className="contact-info-column">
                  <div className="contact-office-card">
                    <div className="contact-card-header">
                      <h2 className="contact-card-title">
                         Office Information
                      </h2>
                    </div>
                    <div className="contact-office-info">
                      {officeInfo.map((info, index) => (
                        <div key={index} className="contact-info-item">
                          <span className="contact-info-icon">{info.icon}</span>
                          <div className="contact-info-content">
                            <p className="contact-info-label">{info.label}</p>
                            <p className="contact-info-value">{info.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="contact-social-card">
                    <div className="contact-card-header">
                      <h2 className="contact-card-title">
                        <span>👥</span> Follow Us
                      </h2>
                    </div>
                    <div className="contact-social-content">
                      <p className="contact-social-text">
                        Stay connected with our wellness community
                      </p>
                      <div className="contact-social-buttons">
                        <button className="contact-social-button">Twitter</button>
                        <button className="contact-social-button">LinkedIn</button>
                        <button className="contact-social-button">Instagram</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Contact */}
        <section className="contact-cta-wrapper">
          <div className="contact-cta-container">
            <div className="contact-cta-content">
              <h2 className="contact-cta-title">Ready to Start Your Wellness Journey?</h2>
              <p className="contact-cta-description">
                Join thousands of users who have improved their mental health, fitness, and overall well-being with Gruhap.
              </p>
              <div className="contact-cta-buttons">
                <button className="contact-cta-primary">
                  Get Started Today
                </button>
                <button className="contact-cta-secondary">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;