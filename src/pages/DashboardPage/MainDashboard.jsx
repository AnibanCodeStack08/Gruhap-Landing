import React, { useState, useRef, useEffect } from 'react';
import Typed from "typed.js";
import './MainDashboard.css';

const MainDashboard = () => {
  const [activeSection, setActiveSection] = useState('chats');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Category');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarCategoryOpen, setIsSidebarCategoryOpen] = useState(false);
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const textareaRef = useRef(null);

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

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsCategoryOpen(false);
  };

  const handleNavItemClick = (itemId) => {
    if (itemId === 'category') {
      toggleSidebarCategory();
      // Don't close mobile sidebar when clicking category to show dropdown
      return;
    } else {
      setActiveSection(itemId);
      setIsSidebarCategoryOpen(false);
    }
    // Only close mobile sidebar for non-category items
    if (isMobile) {
      setIsMobileSidebarOpen(false);
    }
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
      // Mobile sidebar - only close if clicking outside AND not clicking on category items
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
    if (!textareaRef.current) return;
    const typed = new Typed(textareaRef.current, {
      strings: [
        "Ask Gruhap to manage stress...",
        "Ask Gruhap to find work-life balance...",
        "Ask Gruhap for a healthy lifestyle...",
        "Ask Gruhap to make a personalised meal plan..."
      ],
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
    return () => {
      typed.destroy();
    };
  }, [isMobile]);

  return (
    <div className="dashboard-container">
      {/* Mobile Sidebar Overlay */}
      {isMobile && isMobileSidebarOpen && (
        <div 
          className="mobile-sidebar-overlay" 
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
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
                          // Close mobile sidebar after selecting a category item
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

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="main-header">
          {isMobile && (
            <button 
              className="mobile-menu-btn"
              onClick={toggleMobileSidebar}
              aria-label="Open menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
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
          <div className="welcome-section">
            <h1 className="welcome-title">
              <span className="greeting-icon">🌟</span>
              Welcome back, {userInfo.name.split(' ')[0]}!
            </h1>
          </div>
          <div className="dashboard-chat-section">
            <div className="dashboard-input-container">
              <div className="dashboard-input-top">
                <textarea
                  ref={textareaRef}
                  className={`dashboard-textarea ${isTyping ? "typing-active" : ""}`}
                  rows={isMobile ? "3" : "2"}
                />
              </div>
              <div className="dashboard-input-controls">
                <div className="dashboard-input-left">
                  <div className="dashboard-category-dropdown">
                    <button
                      className="dashboard-category-btn"
                      onClick={toggleCategoryDropdown}
                      aria-label="Select category"
                    >
                      <span>{selectedCategory}</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`dashboard-dropdown-arrow ${isCategoryOpen ? 'open' : ''}`}
                      >
                        <polyline points="6,9 12,15 18,9"></polyline>
                      </svg>
                    </button>
                    {isCategoryOpen && (
                      <div className="dashboard-category-menu">
                        {categories.map((category, index) => (
                          <button
                            key={index}
                            className="dashboard-category-item"
                            onClick={() => handleCategorySelect(category)}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="dashboard-input-right">
                  <button className="dashboard-submit-btn" aria-label="Submit">
                    <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainDashboard;