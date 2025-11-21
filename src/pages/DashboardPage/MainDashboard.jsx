import React, { useState, useRef, useEffect } from 'react';
import Typed from "typed.js";
import './MainDashboard.css';
import LoginPop from '../Auth/LoginPop';
import Modal from '../Auth/Modal';
import { useAuth } from '../../context/AuthContext';
import wellnessImg from '../../Images/wellness.png';
import fitnessImg from '../../Images/fitness.png';
import nutritionImg from '../../Images/nutrition-plan.png';

const MainDashboard = () => {
  const { isAuthenticated } = useAuth();
  const [activeSection, setActiveSection] = useState('chats');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Category');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarCategoryOpen, setIsSidebarCategoryOpen] = useState(false);
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isInputCategoryOpen, setIsInputCategoryOpen] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const [isLoginPopOpen, setIsLoginPopOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAiTyping, setIsAiTyping] = useState(false);
  const textareaRef = useRef(null);
  const typedInstanceRef = useRef(null);
  const messagesEndRef = useRef(null);

  const userInfo = {
    name: 'Anirban Sarkar',
    plan: 'Free',
    avatar: 'https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369991.png'
  };

  const topRightAvatar = "https://img.freepik.com/premium-photo/web-developer-digital-avatar-generative-ai_934475-9048.jpg";

  const mainNavItems = [
    {
      id: 'new-chat',
      label: 'New chat',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12h14" />
        </svg>
      )
    },
    {
      id: 'search',
      label: 'Search chats',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      )
    },
    {
      id: 'category',
      label: 'Category',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      )
    },
  ];

  const sidebarCategories = [
    'Mental Health',
    'Fitness',
    'Nutritionist'
  ];

  const recentChats = [];

  const categories = [
    'Mental Health',
    'Fitness',
    'Nutritionist'
  ];

  const quickActions = [
    { text: "Stress", iconType: "stress" },
    { text: "Anxiety", iconType: "anxiety" },
    { text: "Depression", iconType: "depression" },
    { text: "Burnout", iconType: "burnout" },
    { text: "Productivity", iconType: "productivity" },
    { text: "Sleep", iconType: "sleep" },
    { text: "Nutrition", iconType: "nutrition" },
    { text: "Fitness", iconType: "fitness" },
  ];

  const scrollingActions = [...quickActions, ...quickActions, ...quickActions];

  const toggleCategoryDropdown = () => setIsCategoryOpen(!isCategoryOpen);
  const toggleSidebarCategory = () => setIsSidebarCategoryOpen(!isSidebarCategoryOpen);
  const toggleAvatarMenu = () => setIsAvatarMenuOpen(!isAvatarMenuOpen);
  const toggleMobileSidebar = () => setIsMobileSidebarOpen(!isMobileSidebarOpen);
  const toggleInputCategoryDropdown = () => setIsInputCategoryOpen(!isInputCategoryOpen);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsCategoryOpen(false);
  };

  const handleInputCategorySelect = (category) => {
    console.log('Selected category:', category);
    setIsInputCategoryOpen(false);
  };

  const handleNavItemClick = (itemId) => {
    if (itemId === 'category') {
      toggleSidebarCategory();
      return;
    } else {
      setActiveSection(itemId);
      setIsSidebarCategoryOpen(false);
    }
    if (isMobile) {
      setIsMobileSidebarOpen(false);
    }
  };

  // Simulate AI response
  const generateAiResponse = (userMessage) => {
    const responses = [
      "I understand you're looking for support. How can I help you today?",
      "That's a great question! Let me help you with that.",
      "I'm here to assist you. Could you tell me more about what you need?",
      "Thank you for sharing that with me. Let's work through this together.",
      "I appreciate you reaching out. What specific aspect would you like to focus on?",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      // Add user message
      const userMessage = { text: inputValue, sender: 'user' };
      setMessages(prev => [...prev, userMessage]);
      setInputValue('');
      setHasSubmitted(true);

      // Show AI typing indicator
      setIsAiTyping(true);

      // Increment message count only if NOT authenticated
      if (!isAuthenticated) {
        const newCount = messageCount + 1;
        setMessageCount(newCount);

        if (newCount >= 6) {
          setIsLoginPopOpen(true);
        }
      }

      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy();
        typedInstanceRef.current = null;
      }

      // Simulate AI response delay
      setTimeout(() => {
        const aiResponse = {
          text: generateAiResponse(inputValue),
          sender: 'ai'
        };
        setMessages(prev => [...prev, aiResponse]);
        setIsAiTyping(false);
      }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);

    if (typedInstanceRef.current && e.target.value) {
      typedInstanceRef.current.destroy();
      typedInstanceRef.current = null;
    }
  };

  const handleContinueToLogin = () => {
    setIsLoginPopOpen(false);
    setIsModalOpen(true);
  };

  const handleCloseLoginPop = () => {
    setIsLoginPopOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const renderIcon = (iconType) => {
    const icons = {
      stress: '😰',
      anxiety: '😟',
      depression: '😔',
      burnout: '😫',
      productivity: '📈',
      sleep: '😴',
      nutrition: '🥗',
      fitness: '💪'
    };
    return <span className="dashboard-action-icon">{icons[iconType] || '🎯'}</span>;
  };

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileSidebarOpen(false);
      }
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dashboard-category-dropdown')) {
        setIsCategoryOpen(false);
      }
      if (!event.target.closest('.sidebar-category-container')) {
        setIsSidebarCategoryOpen(false);
      }
      if (!event.target.closest('.top-avatar-container')) {
        setIsAvatarMenuOpen(false);
      }
      if (!event.target.closest('.input-category-dropdown-container')) {
        setIsInputCategoryOpen(false);
      }
      if (isMobile &&
        !event.target.closest('.dashboard-sidebar') &&
        !event.target.closest('.mobile-menu-btn') &&
        !event.target.closest('.mobile-sidebar-overlay') &&
        !event.target.closest('.sidebar-category-menu') &&
        !event.target.closest('.sidebar-category-container')) {
        setIsMobileSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile]);

  useEffect(() => {
    if (!textareaRef.current || hasSubmitted || inputValue) return;

    const desktopStrings = [
      "Ask Gruhap to manage stress...",
      "Ask Gruhap to find work-life balance...",
      "Ask Gruhap for a healthy lifestyle...",
      "Ask Gruhap to make a personalised meal plan..."
    ];

    const mobileStrings = [
      "Ask Gruhap: Manage stress...",
      "Ask Gruhap: Work balance...",
      "Ask Gruhap: Healthy lifestyle...",
      "Ask Gruhap: Meal plan..."
    ];

    const typed = new Typed(textareaRef.current, {
      strings: isMobile ? mobileStrings : desktopStrings,
      typeSpeed: 30,
      backSpeed: 20,
      backDelay: 900,
      startDelay: 500,
      loop: true,
      showCursor: false,
      smartBackspace: true,
      attr: "placeholder",
      onBegin: () => setIsTyping(true),
      preStringTyped: () => setIsTyping(true),
      onStringTyped: () => setIsTyping(false),
      onDestroy: () => setIsTyping(false),
    });

    typedInstanceRef.current = typed;

    return () => {
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy();
        typedInstanceRef.current = null;
      }
    };
  }, [hasSubmitted, inputValue, isMobile]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isAiTyping]);

  return (
    <div className="dashboard-container">
      {isMobile && isMobileSidebarOpen && (
        <div
          className="mobile-sidebar-overlay"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      <aside className={`dashboard-sidebar ${sidebarCollapsed ? 'collapsed' : ''} ${isMobile && isMobileSidebarOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <div className="brand">
            <div className="brand-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            {!sidebarCollapsed && <span className="brand-name">GruhaP</span>}
          </div>

          {!isMobile && (
            <button
              className="sidebar-toggle-btn"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              aria-label="Toggle sidebar"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="12" y2="16" />
              </svg>
            </button>
          )}
        </div>

        <div className="sidebar-content">
          <nav className="main-nav">
            {mainNavItems.map(item => (
              <div key={item.id} className="sidebar-category-container">
                <button
                  className={`nav-item ${item.id === 'new-chat' ? 'new-chat-btn' : ''} ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleNavItemClick(item.id)}
                  title={item.label}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {!sidebarCollapsed && <span className="nav-label">{item.label}</span>}
                  {!sidebarCollapsed && item.id === 'category' && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`sidebar-dropdown-arrow ${isSidebarCategoryOpen ? 'open' : ''}`}
                    >
                      <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                  )}
                </button>
                {!sidebarCollapsed && item.id === 'category' && isSidebarCategoryOpen && (
                  <div className="sidebar-category-menu">
                    {sidebarCategories.map((category, index) => (
                      <button
                        key={index}
                        className="sidebar-category-item"
                        onClick={() => {
                          console.log('Selected:', category);
                          if (isMobile) {
                            setIsMobileSidebarOpen(false);
                            setIsSidebarCategoryOpen(false);
                          }
                        }}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {!sidebarCollapsed && (
            <div className="recents-section">
              <h3 className="section-title">CHATS</h3>
              <div className="recent-items">
                {recentChats.map((item, index) => (
                  <button key={index} className="recent-item">
                    <span className="recent-text">{item}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </aside>

      <main className="dashboard-main">
        <div className="main-header">
          {isMobile && (
            <button
              className="mobile-menu-btn"
              onClick={toggleMobileSidebar}
              aria-label="Open menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="12" y2="16" />
              </svg>
            </button>
          )}
          <div className="top-avatar-container">
            <img
              src={topRightAvatar}
              alt="Top Avatar"
              className="top-avatar"
              onClick={toggleAvatarMenu}
            />
            {isAvatarMenuOpen && (
              <div className="top-avatar-menu">
                <button className="top-avatar-item">Buy Token</button>
                <button className="top-avatar-item">Balance</button>
                <button className="top-avatar-item">Settings</button>
                <button className="top-avatar-item">Help</button>
                <button className="top-avatar-item">Log Out</button>
              </div>
            )}
          </div>
        </div>
        <div className="main-content">
          {!hasSubmitted && (
            <div className="welcome-section">
              <h1 className="welcome-title">
                Welcome back, {userInfo.name.split(' ')[0]}!
              </h1>
            </div>
          )}

          {hasSubmitted && (
            <div className="messages-container">
              {messages.map((message, index) => (
                <div key={index} className={`message-wrapper ${message.sender === 'ai' ? 'ai-message-wrapper' : 'user-message-wrapper'}`}>
                  <div className={`message ${message.sender === 'user' ? 'user-message' : 'ai-message'}`}>
                    {message.text}
                  </div>
                </div>
              ))}
              {isAiTyping && (
                <div className="message-wrapper ai-message-wrapper">
                  <div className="message ai-message typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}

          <div className={`dashboard-chat-section ${hasSubmitted ? 'chat-submitted' : ''}`}>
            {isMobile && !hasSubmitted && (
              <div className="mobile-category-buttons">
                <button
                  id="mobile-category-wellness"
                  className="mobile-category-btn-one mobile-category-mental-health"
                >
                  <img
                    src={wellnessImg}
                    alt="Wellness"
                    className="mobile-category-icon-img"
                  />
                  <span className="mobile-category-text">Wellness</span>
                </button>

                <button
                  id="mobile-category-fitness"
                  className="mobile-category-btn-two mobile-category-fitness"
                >
                  <img
                    src={fitnessImg}
                    alt="Fitness"
                    className="mobile-category-icon-img"
                  />
                  <span className="mobile-category-text">Fitness</span>
                </button>

                <button
                  id="mobile-category-nutrition"
                  className="mobile-category-btn-three mobile-category-nutritionist"
                >
                  <img
                    src={nutritionImg}
                    alt="Nutrition"
                    className="mobile-category-icon-img"
                  />
                  <span className="mobile-category-text">Nutrition</span>
                </button>

                <button
                  id="mobile-category-more"
                  className="mobile-category-btn-four mobile-category-more"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
                    alt="More"
                    className="mobile-category-icon-img"
                  />
                  <span className="mobile-category-text">More</span>
                </button>
              </div>
            )}

            <div className="dashboard-input-container">
              <div className="dashboard-input-left">
                <div className="input-category-dropdown-container">
                  <button
                    className="dashboard-add-btn"
                    aria-label="Category dropdown"
                    onClick={toggleInputCategoryDropdown}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`dropdown-arrow-icon ${isInputCategoryOpen ? 'open' : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  {isInputCategoryOpen && (
                    <div className="input-category-dropdown">
                      {categories.map((category, index) => (
                        <button
                          key={index}
                          className="input-category-item"
                          onClick={() => handleInputCategorySelect(category)}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="dashboard-input-top">
                <textarea
                  ref={textareaRef}
                  className={`dashboard-textarea ${isTyping ? "typing-active" : ""}`}
                  rows="1"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder={hasSubmitted ? "Ask anything" : ""}
                />
              </div>
              <div className="dashboard-input-right">
                <button
                  className="dashboard-submit-btn"
                  aria-label="Submit"
                  onClick={handleSubmit}
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                </button>
              </div>
            </div>

            {!isMobile && !hasSubmitted && (
              <div className="dashboard-actions-wrapper">
                <div className="dashboard-scrolling-actions">
                  {scrollingActions.map((action, index) => (
                    <button key={index} className="dashboard-action-btn">
                      {renderIcon(action.iconType)}
                      <span className="dashboard-action-text">{action.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {!isAuthenticated && (
        <LoginPop 
          isOpen={isLoginPopOpen}
          onClose={handleCloseLoginPop}
          onContinueToLogin={handleContinueToLogin}
        />
      )}
      
      <Modal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default MainDashboard;