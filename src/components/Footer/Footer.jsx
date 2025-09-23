import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-card">
          <div className="footer-brand">
            <h2 className="footer-brand-name">Gruhap</h2>
            <p className="footer-brand-description">
              Gruhap is an AI wellness platform for stress, sleep, focus, fitness, nutrition, and balance. Secure, private, and available anytime.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3 className="column-title">Company</h3>
              <ul className="link-list">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="column-title">Support</h3>
              <ul className="link-list">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Cancellation Policy</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="column-title">Resources</h3>
              <ul className="link-list">
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Knowledge Base</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;