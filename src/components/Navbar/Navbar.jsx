import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="navbar-logo-icon">G</div>
        <span className="navbar-logo-text">Gruhap</span>
      </div>
      
      {/* Desktop Navigation */}
      <div className="navbar-nav-links">
        <Link to="/" className="navbar-nav-link">Home</Link>
        <Link to="/about" className="navbar-nav-link">About Us</Link>
        <Link to="/our-services" className="navbar-nav-link">Our Services</Link>
        <Link to="/how-it-works" className="navbar-nav-link">How It Works</Link>
        <Link to="/contact" className="navbar-nav-link">Contact Us</Link>
      </div>
      
      {/* Desktop Actions */}
      <div className="navbar-nav-actions">
        <button className="navbar-login-btn">Join Community</button>
        <button className="navbar-get-started-btn">Join Waitlist</button>
      </div>
      
      {isMobile && (
        <button
          className="navbar-mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}
      
      {isMobile && isMobileMenuOpen && (
        <div className="navbar-mobile-dropdown">
          <div className="navbar-mobile-nav-links">
            <Link to="/" className="navbar-mobile-nav-link">Home</Link>
            <Link to="/about" className="navbar-mobile-nav-link">About Us</Link>
            <Link to="/our-services" className="navbar-mobile-nav-link">Our Services</Link>
            <Link to="/how-it-works" className="navbar-mobile-nav-link">How It Works</Link>
            <Link to="/contact" className="navbar-mobile-nav-link">Contact Us</Link>
          </div>
          <div className="navbar-mobile-nav-actions">
            <button className="navbar-mobile-login-btn">Join Community</button>
            <button className="navbar-mobile-get-started-btn">Join Waitlist</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
