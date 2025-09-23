import React, { useState, useRef, useEffect } from 'react';
import Typed from "typed.js";
import './MainDashboard.css';

const MainDashboard = () => {
  const [activeSection, setActiveSection] = useState('chats');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('General');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const textareaRef = useRef(null);

  const userInfo = {
    name: 'Anirban Sarkar',
    plan: 'Free',
    avatar: 'https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369991.png'
  };

  const mainNavItems = [
    { 
      id: 'new-chat', 
      label: 'New chat', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12h14"/>
        </svg>
      )
    },
    { 
      id: 'search', 
      label: 'Search chats', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
      )
    },
    { 
      id: 'library', 
      label: 'Library', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      )
    },
    { 
      id: 'sora', 
      label: 'Sora', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
        </svg>
      )
    },
    { 
      id: 'gpts', 
      label: 'GPTs', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7"/>
          <rect x="14" y="3" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/>
          <rect x="3" y="14" width="7" height="7"/>
        </svg>
      )
    },
    { 
      id: 'projects', 
      label: 'New project', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14,2 14,8 20,8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10,9 9,9 8,9"/>
        </svg>
      )
    }
  ];

  const recentChats = [

  ];

  const categories = [
    'General', 'Mental Health', 'Wellness', 'Productivity', 'Lifestyle'
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

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsCategoryOpen(false);
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
      setIsMobile(window.innerWidth < 768);
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
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <div className="brand">
            <div className="brand-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            {!sidebarCollapsed && <span className="brand-name">GruhaP</span>}
          </div>
          <button
            className="sidebar-toggle-btn"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            aria-label="Toggle sidebar"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <line x1="9" y1="9" x2="15" y2="15"/>
              <line x1="15" y1="9" x2="9" y2="15"/>
            </svg>
          </button>
        </div>
        
        <div className="sidebar-content">
          <nav className="main-nav">
            {mainNavItems.map(item => (
              <button
                key={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setActiveSection(item.id)}
                title={item.label}
              >
                <span className="nav-icon">{item.icon}</span>
                {!sidebarCollapsed && <span className="nav-label">{item.label}</span>}
              </button>
            ))}
          </nav>
          
          {!sidebarCollapsed && (
            <div className="recents-section">
              <h3 className="section-title">Chats</h3>
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
        
        <div className="sidebar-footer">
          <div className="user-section">
            <div className="user-avatar">
              <img src={userInfo.avatar} alt={userInfo.name} className="avatar-img" />
            </div>
            {!sidebarCollapsed && (
              <>
                <div className="user-info">
                  <div className="user-name">{userInfo.name}</div>
                  <div className="user-plan">{userInfo.plan}</div>
                </div>
                <button className="upgrade-btn-sidebar">Upgrade</button>
              </>
            )}
          </div>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="dashboard-main">
        <header className="main-header">
          <div className="header-actions">
            <span className="plan-badge">Free plan</span>
            <button className="upgrade-btn">Upgrade</button>
          </div>
        </header>
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
                  rows={isMobile ? "2" : "2"}
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