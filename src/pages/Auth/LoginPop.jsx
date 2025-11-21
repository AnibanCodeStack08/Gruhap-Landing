// LoginPop.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './LoginPop.css';

const LoginPop = ({ isOpen, onClose, onContinueToLogin }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className="login-pop-overlay" onClick={onClose}></div>

      <div className="login-pop-container">
        <div className="login-pop-content">
          
          {/* Close Button */}
          <button className="login-pop-close-button" onClick={onClose}>
            <svg className="login-pop-close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Animated Icon */}
          <div className="login-pop-icon-container">
            <div className="login-pop-icon-circle">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="login-pop-text-container">
            <h2 className="login-pop-heading">Continue Your Journey</h2>
            <p className="login-pop-subheading">
              You've explored the basics! Sign in to unlock personalized wellness plans, save your progress, and get AI-powered recommendations tailored just for you.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="login-pop-actions">
            <button className="login-pop-primary-btn" onClick={onContinueToLogin}>
              Continue to Login
            </button>
            <button className="login-pop-secondary-btn" onClick={onClose}>
              Maybe Later
            </button>
          </div>

          {/* Benefits List */}
          <div className="login-pop-benefits">
            <div className="login-pop-benefit-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Save your chat history</span>
            </div>
            <div className="login-pop-benefit-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Get personalized recommendations</span>
            </div>
            <div className="login-pop-benefit-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Access premium features</span>
            </div>
          </div>

        </div>
      </div>
    </>,
    document.getElementById('modal-root') || document.body
  );
};

export default LoginPop;