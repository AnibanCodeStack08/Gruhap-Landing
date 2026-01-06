import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Typed from "typed.js";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const [isScrollPaused, setIsScrollPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [inputText, setInputText] = useState("");
  
  const scrollWrapperRef = useRef(null);
  const heroActionsRef = useRef(null);
  const textareaRef = useRef(null);
  const basePlaceholder = "";
  const messageBubbleRefs = useRef([]);

  const categories = [
    'CBSE', 'ICSE', 'IB', 'NEET', 'JEE'
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
      "Ask gruhap to solve algebra problems..",
      "Ask gruhap to explain physics concepts..",
      "Ask gruhap for chemistry formulas..",
      "Ask gruhap to prepare for JEE exams..",
    ] : [
      "Ask gruhap to solve algebra problems..",
      "Ask gruhap to explain physics concepts..",
      "Ask gruhap for chemistry formulas..",
      "Ask gruhap to prepare for JEE exams..",
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

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    if (inputText.trim()) {
      navigate('/MainDashBoard', { 
        state: { 
          userInput: inputText,
          category: selectedCategory !== "Category" ? selectedCategory : null,
          autoSubmit: false
        } 
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsCategoryOpen(false);
  };

  const handleQuickActionClick = (action) => {
    if (!isMobile) {
      // Desktop behavior if needed
    }
    console.log(`Action clicked: ${action.text}`);
    
    const quickMessage = `Help me with ${action.text.toLowerCase()}`;
    navigate('/MainDashBoard', { 
      state: { 
        userInput: quickMessage,
        category: selectedCategory !== "Category" ? selectedCategory : null,
        autoSubmit: false
      } 
    });
  };

  const handleMouseEnter = () => {
    if (isMobile) return;
    setIsScrollPaused(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setIsScrollPaused(false);
  };

  const handleTouchStart = (e) => {
    if (!isMobile) return;
    setIsDragging(true);
    setIsScrollPaused(true);
    setStartX(e.touches[0].pageX - scrollWrapperRef.current.offsetLeft);
    setScrollLeft(scrollWrapperRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isMobile || !isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - scrollWrapperRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollWrapperRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;
    setIsDragging(false);
    setTimeout(() => {
      setIsScrollPaused(false);
    }, 2000);
  };

  const handleMouseDown = (e) => {
    if (!isMobile) return;
    setIsDragging(true);
    setIsScrollPaused(true);
    setStartX(e.pageX - scrollWrapperRef.current.offsetLeft);
    setScrollLeft(scrollWrapperRef.current.scrollLeft);
  };

  const handleMouseMoveWrapper = (e) => {
    if (!isMobile || !isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollWrapperRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollWrapperRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    if (!isMobile) return;
    setIsDragging(false);
    setTimeout(() => {
      setIsScrollPaused(false);
    }, 2000);
  };

  const quickActions = [
    { text: "Physics", iconType: "physics" },
    { text: "Chemistry", iconType: "chemistry" },
    { text: "Mathematics", iconType: "mathematics" },
    { text: "Algebra", iconType: "algebra" },
    { text: "Calculus", iconType: "calculus" },
    { text: "Trigonometry", iconType: "trigonometry" },
    { text: "Organic Chemistry", iconType: "organic" },
    { text: "Mechanics", iconType: "mechanics" },
  ];

  const scrollingActions = [...quickActions, ...quickActions, ...quickActions];

  const renderIcon = (iconType) => {
    switch(iconType) {
      case 'physics':
        return (
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="hero-action-icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'chemistry':
        return (
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="hero-action-icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        );
      case 'mathematics':
        return (
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="hero-action-icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'algebra':
        return (
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="hero-action-icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        );
      case 'calculus':
        return (
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="hero-action-icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
        );
      case 'trigonometry':
        return (
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="hero-action-icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
          </svg>
        );
      case 'organic':
        return (
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="hero-action-icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        );
      case 'mechanics':
        return (
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="hero-action-icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const avatars = [
    {
      id: 1,
      image: "https://media.istockphoto.com/id/2050253321/photo/happy-businessman-enjoying-on-the-city-street.jpg?s=612x612&w=0&k=20&c=GkLY6U9xCvhsPT0Vo01FzR7TivWQV_0EpSwlmDGMx9M=",
      dialog: "Let's master calculus concepts today",
      position: "top-left",
      name: "Sarah",
    },
    {
      id: 2,
      image: "https://thumbs.dreamstime.com/b/portrait-young-smiling-happy-handsome-successful-businessman-entrepreneur-freelancer-working-home-office-laptop-202854209.jpg",
      dialog: "Ready for your physics challenge",
      position: "top-right",
      name: "Alex",
    },
    {
      id: 3,
      image: "https://media.istockphoto.com/id/1459178010/photo/fashion-industry-black-woman-and-designer-portrait-of-clothing-tailor-with-business-vision.jpg?s=612x612&w=0&k=20&c=XmGyalprlJMrpEPuduBA-YTrcbEXl8p0PFgTxWi0vvU=",
      dialog: "Chemistry formulas made easy here",
      position: "bottom-left",
      name: "Maya",
    },
    {
      id: 4,
      image: "https://imageio.forbes.com/specials-images/imageserve/64521da578415a15b6b510dc/retail-ecommerce-lorin-winata/0x0.jpg?format=jpg&height=1080&width=1080",
      dialog: "Your JEE preparation starts now",
      position: "bottom-right",
      name: "David",
    },
  ];

  return (
    <div className="hero">
      {!isMobile && avatars.map((avatar, index) => (
        <div key={avatar.id} className={`floating-message floating-message-${avatar.position}`}>
          <div className="message-avatar">
            <img src={avatar.image} alt={avatar.name} className="message-avatar-image" loading="lazy" />
          </div>
          <div className="message-bubble">
            <div 
              className="message-text"
              ref={el => messageBubbleRefs.current[index] = el}
            >
              {avatar.dialog}
            </div>
            <div className="message-tail"></div>
          </div>
        </div>
      ))}

      <div className="hero-main">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-main">
              {isMobile ? "Your Trusted Buddy" : "Your Trusted Buddy"}
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
            <textarea
              ref={textareaRef}
              value={inputText}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder={basePlaceholder}
              className={`hero-input ${isTyping ? "typing-active" : ""}`}
              rows={isMobile ? "2" : "3"}
            />
          </div>
          <div className="hero-input-controls">
            <div className="hero-input-left">
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
              <button 
                className="hero-submit-btn" 
                aria-label="Submit"
                onClick={handleSubmit}
              >
                <svg width="30" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div 
          className="quick-actions-wrapper"
          ref={scrollWrapperRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMoveWrapper}
          onMouseUp={handleMouseUp}
        >
          <div 
            ref={heroActionsRef}
            className={`hero-actions ${isScrollPaused ? 'paused' : ''}`}
          >
            {scrollingActions.map((action, index) => (
              <button 
                key={index} 
                className="hero-action-btn"
                onClick={() => handleQuickActionClick(action)}
              >
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