import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../../pages/Auth/Modal";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
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
          <button
            className="navbar-login-btn"
            onClick={() => setIsLoginModalOpen(true)} // ✅ only opens modal
          >
            Login
          </button>
          <Link to="/MainDashBoard" className="navbar-get-started-btn">Get Started</Link>
        </div>

        {isMobile && (
          <button
            className="navbar-mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                // X icon when menu is open
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Two-line (menu) icon when closed
                <>
                  <line x1="4" y1="8" x2="20" y2="8" strokeWidth={2.5} strokeLinecap="round" />
                  <line x1="4" y1="16" x2="12" y2="16" strokeWidth={2.5} strokeLinecap="round" />
                </>
              )}
            </svg>

          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobile && isMobileMenuOpen && (
        <>
          <div className="navbar-mobile-overlay" onClick={closeMobileMenu}></div>
          <div className="navbar-mobile-dropdown">
            <div className="navbar-mobile-nav-links">
              <Link to="/" className="navbar-mobile-nav-link" onClick={closeMobileMenu}>Home</Link>
              <Link to="/about" className="navbar-mobile-nav-link" onClick={closeMobileMenu}>About Us</Link>
              <Link to="/our-services" className="navbar-mobile-nav-link" onClick={closeMobileMenu}>Our Services</Link>
              <Link to="/how-it-works" className="navbar-mobile-nav-link" onClick={closeMobileMenu}>How It Works</Link>
              <Link to="/contact" className="navbar-mobile-nav-link" onClick={closeMobileMenu}>Contact Us</Link>
            </div>
            <div className="navbar-mobile-nav-actions">
              <button
                className="navbar-mobile-login-btn"
                onClick={() => {
                  closeMobileMenu();
                  setIsLoginModalOpen(true);
                }}
              >
                Login
              </button>
              <Link to="/MainDashBoard" className="navbar-mobile-get-started-btn" onClick={closeMobileMenu}>
                Get Started
              </Link>
            </div>
          </div>
        </>
      )}

      {/* Modal Component */}
      <Modal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
};

export default Navbar;
