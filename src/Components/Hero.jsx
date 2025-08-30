import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Hero.css";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Category");

  // For Typed.js placeholder
  const textareaRef = useRef(null);
  const basePlaceholder = "How can I help you today...";

  const categories = [
    "Mental Health",
    "Fitness", 
    "Nutrition"
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!textareaRef.current) return;

    const typedSuffixes = isMobile ? [
      "Ask gruhap to manage stress..",
      "Ask gruhap to find work-life balance..",
      "Ask gruhap for a healthy lifestyle..",
      "Ask gruhap to make a personalised meal plan..",
    ] : [
      "Ask gruhap to manage stress..",
      "Ask gruhap to find work-life balance..",
      "Ask gruhap for a healthy lifestyle..",
      "Ask gruhap to make a personalised meal plan..",
    ];

    const typed = new Typed(textareaRef.current, {
      strings: typedSuffixes.map((s) => s),
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 900,
      startDelay: 900,
      loop: true,
      showCursor: false,
      smartBackspace: true,
      attr: "placeholder",
      onBegin: () => setIsTyping(true),
      preStringTyped: () => setIsTyping(true),
      onStringTyped: () => setIsTyping(false),
      onDestroy: () => setIsTyping(false),
    });

    return () => {
      typed.destroy();
    };
  }, [isMobile]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsCategoryOpen(false);
  };

  const quickActions = [
    { 
      text: "Stress",
      iconType: "stress"
    },
    { 
      text: "Anxiety",
      iconType: "anxiety"
    },
    { 
      text: "Depression",
      iconType: "depression"
    },
    { 
      text: "Burnout",
      iconType: "burnout"
    },
    { 
      text: "Productivity",
      iconType: "productivity"
    },
    { 
      text: "Sleep",
      iconType: "sleep"
    },
    { 
      text: "Nutrition",
      iconType: "nutrition"
    },
    { 
      text: "Fitness",
      iconType: "fitness"
    },
  ];

  // Triple the array for smoother infinite scroll
  const scrollingActions = [...quickActions, ...quickActions, ...quickActions];

  const renderIcon = (iconType) => {
    switch(iconType) {
      case 'stress':
        return (
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="hero-action-icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'anxiety':
        return (
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="hero-action-icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      case 'depression':
        return (
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="hero-action-icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        );
      case 'burnout':
        return (
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="hero-action-icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          </svg>
        );
      case 'productivity':
        return (
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="hero-action-icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        );
      case 'sleep':
        return (
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="hero-action-icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        );
      case 'nutrition':
        return (
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="hero-action-icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'fitness':
        return (
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="hero-action-icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const avatars = [
    {
      id: 1,
      image:
        "https://media.istockphoto.com/id/2050253321/photo/happy-businessman-enjoying-on-the-city-street.jpg?s=612x612&w=0&k=20&c=GkLY6U9xCvhsPT0Vo01FzR7TivWQV_0EpSwlmDGMx9M=",
      dialog: "Let's practice mindfulness together today",
      position: "top-left",
      name: "Sarah",
    },
    {
      id: 2,
      image:
        "https://thumbs.dreamstime.com/b/portrait-young-smiling-happy-handsome-successful-businessman-entrepreneur-freelancer-working-home-office-laptop-202854209.jpg",
      dialog: "Ready for your fitness journey",
      position: "top-right",
      name: "Alex",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/1459178010/photo/fashion-industry-black-woman-and-designer-portrait-of-clothing-tailor-with-business-vision.jpg?s=612x612&w=0&k=20&c=XmGyalprlJMrpEPuduBA-YTrcbEXl8p0PFgTxWi0vvU=",
      dialog: "Healthy eating starts right here",
      position: "bottom-left",
      name: "Maya",
    },
    {
      id: 4,
      image:
        "https://imageio.forbes.com/specials-images/imageserve/64521da578415a15b6b510dc/retail-ecommerce-lorin-winata/0x0.jpg?format=jpg&height=1080&width=1080",
      dialog: "Your mental wellness matters most",
      position: "bottom-right",
      name: "David",
    },
  ];

  return (
    <div className="hero">
      {/* Navigation */}
      <nav className="hero-nav">
        <div className="hero-logo">
          <div className="hero-logo-icon">G</div>
          <span className="hero-logo-text">Gruhap</span>
        </div>
        {/* Desktop Navigation in center */}
        <div className="hero-nav-links">
          <a href="#" className="hero-nav-link">Menu-1</a>
          <a href="#" className="hero-nav-link">Menu-2</a>
          <a href="#" className="hero-nav-link">Menu-3</a>
          <a href="#" className="hero-nav-link">Menu-4</a>
          <a href="#" className="hero-nav-link">Menu-5</a>
        </div>
        {/* Desktop Actions right-aligned */}
        <div className="hero-nav-actions">
          <button className="hero-login-btn">Join Community</button>
          <button className="hero-get-started-btn">Join Waitlist</button>
        </div>
        {isMobile && (
          <button
            className="hero-mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
        {isMobile && isMobileMenuOpen && (
          <div className="hero-mobile-dropdown">
            <div className="hero-mobile-nav-links">
              <a href="#" className="hero-mobile-nav-link">Menu-1</a>
              <a href="#" className="hero-mobile-nav-link">Menu-2</a>
              <a href="#" className="hero-mobile-nav-link">Menu-3</a>
              <a href="#" className="hero-mobile-nav-link">Menu-4</a>
              <a href="#" className="hero-mobile-nav-link">Menu-5</a>
            </div>
            <div className="hero-mobile-nav-actions">
              <button className="hero-mobile-login-btn">Log in</button>
              <button className="hero-mobile-get-started-btn">Get started</button>
            </div>
          </div>
        )}
      </nav>

      {/* Floating Message Bubbles - show all on desktop */}
      {!isMobile && avatars.map((avatar) => (
        <div key={avatar.id} className={`floating-message floating-message-${avatar.position}`}>
          <div className="message-bubble">
            <div className="message-text">{avatar.dialog}</div>
            <div className="message-tail"></div>
          </div>
          <div className="message-avatar">
            <img src={avatar.image} alt={avatar.name} className="message-avatar-image" loading="lazy" />
          </div>
        </div>
      ))}

      {/* Main Content */}
      <div className="hero-main">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-main">
              {isMobile ? "Your Wellness Buddy" : "Your Wellness Buddy"}
            </span>
          </h1>
          <p className="hero-subtitle">
            {isMobile 
              ? "Get Instant Guidance with AI Professionals."
              : "Get Instant Guidance with AI Professionals."
            }
          </p>
        </div>
          <div className="hero-input-container">
            <div className="hero-input-top">
              {/* Typed.js animates the textarea placeholder directly */}
              <textarea
                ref={textareaRef}
                placeholder={basePlaceholder}
                className={`hero-input ${isTyping ? "typing-active" : ""}`}
                rows={isMobile ? "2" : "3"}
              />
            </div>
            <div className="hero-input-controls">
              <div className="hero-input-left">
                {/* Category Dropdown */}
                <div className="hero-category-dropdown">
                  <button 
                    className="hero-category-btn"
                    onClick={toggleCategoryDropdown}
                    aria-label="Select category"
                  >
                    <span>{selectedCategory}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`hero-dropdown-arrow ${isCategoryOpen ? 'open' : ''}`}
                    >
                      <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                  </button>
                  
                  {isCategoryOpen && (
                    <div className="hero-category-dropdown-menu">
                      {categories.map((category, index) => (
                        <button
                          key={index}
                          className="hero-category-dropdown-item"
                          onClick={() => handleCategorySelect(category)}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="hero-input-right">
                <button className="hero-submit-btn" aria-label="Submit">
                  <svg width="30" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions Wrapper */}
          <div className="quick-actions-wrapper">
            <div className="hero-actions">
              {scrollingActions.map((action, index) => (
                <button key={index} className="hero-action-btn">
                  {renderIcon(action.iconType)}
                  <span className="hero-action-text">{action.text}</span>
                </button>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;