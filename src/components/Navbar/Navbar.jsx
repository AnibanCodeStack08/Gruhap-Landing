import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import Modal from "../../pages/Auth/Modal";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const location = useLocation();

  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/our-services", label: "Our Services" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/contact", label: "Contact Us" }
  ];

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

  // GSAP Pill Animation Setup (includes login button now)
  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`
        });

        const label = pill.querySelector('.pill-label');
        const hoverLabel = pill.querySelector('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 });

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 3.5, ease: "power2.out", overwrite: 'auto' }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 3.5, ease: "power2.out", overwrite: 'auto' }, 0);
        }

        if (hoverLabel) {
          gsap.set(hoverLabel, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(hoverLabel, { y: 0, opacity: 1, duration: 3.5, ease: "power2.out", overwrite: 'auto' }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    if (!isMobile) {
      layout();
      const onResize = () => layout();
      window.addEventListener('resize', onResize);

      if (document.fonts?.ready) {
        document.fonts.ready.then(layout).catch(() => {});
      }

      return () => window.removeEventListener('resize', onResize);
    }
  }, [isMobile]);

  const handleEnter = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.8,
      ease: "power2.out",
      overwrite: 'auto'
    });
  };

  const handleLeave = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.6,
      ease: "power2.out",
      overwrite: 'auto'
    });
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-logo">
          <div className="navbar-logo-icon">G</div>
          <span className="navbar-logo-text">Gruhap</span>
        </div>

        {/* Desktop Navigation with GSAP Animation */}
        <div className="navbar-nav-links">
          {navItems.map((item, i) => (
            <Link 
              key={item.href}
              to={item.href} 
              className="navbar-nav-link navbar-pill"
              onMouseEnter={() => handleEnter(i)}
              onMouseLeave={() => handleLeave(i)}
            >
              <span
                className="hover-circle"
                aria-hidden="true"
                ref={el => {
                  circleRefs.current[i] = el;
                }}
              />
              <span className="label-stack">
                <span className="pill-label">{item.label}</span>
                <span className="pill-label-hover" aria-hidden="true">
                  {item.label}
                </span>
              </span>
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="navbar-nav-actions">
          <button
            className="navbar-login-btn navbar-pill"
            onClick={() => setIsLoginModalOpen(true)}
            onMouseEnter={() => handleEnter(navItems.length)}
            onMouseLeave={() => handleLeave(navItems.length)}
          >
            <span
              className="hover-circle"
              aria-hidden="true"
              ref={el => {
                circleRefs.current[navItems.length] = el;
              }}
            />
            <span className="label-stack">
              <span className="pill-label">Login</span>
              <span className="pill-label-hover" aria-hidden="true">
                Login
              </span>
            </span>
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
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
              {navItems.map((item) => (
                <Link 
                  key={item.href}
                  to={item.href} 
                  className={`navbar-mobile-nav-link ${location.pathname === item.href ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
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

      <Modal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
};

export default Navbar;