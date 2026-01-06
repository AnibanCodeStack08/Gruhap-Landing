import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="logo-circle">G</div>
              <h2 className="footer-brand-name">Gruhap</h2>
            </div>
            <p className="footer-brand-description">
              AI-powered learning platform for K12, NEET, JEE, and Olympiad success.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
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
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="column-title">Subjects</h3>
              <ul className="link-list">
                <li><a href="#">Physics</a></li>
                <li><a href="#">Chemistry</a></li>
                <li><a href="#">Mathematics</a></li>
                <li><a href="#">Biology</a></li>
                <li><a href="#">Physics</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="column-title">Resources</h3>
              <ul className="link-list">
                <li><a href="#">Study Material</a></li>
                <li><a href="#">Mock Tests</a></li>
                <li><a href="#">Previous Papers</a></li>
                <li><a href="#">Syllabus</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2026 Gruhap. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;