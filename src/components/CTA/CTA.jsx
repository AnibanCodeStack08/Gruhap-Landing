import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <div className="cta-wrapper">
      <div className="cta-card">
        <div className="cta-container">
          <div className="floating-avatar avatar-1">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="Person 1" />
          </div>
          <div className="floating-avatar avatar-2">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Person 2" />
          </div>
          <div className="floating-avatar avatar-3">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" alt="Person 3" />
          </div>
          <div className="floating-avatar avatar-4 hide-mobile">
            <img src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face" alt="Person 4" />
          </div>
          <div className="floating-avatar avatar-5">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face" alt="Person 5" />
          </div>
          <div className="floating-avatar avatar-6">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face" alt="Person 6" />
          </div>
          <div className="floating-avatar avatar-7 hide-mobile">
            <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop&crop=face" alt="Person 7" />
          </div>
          <div className="floating-avatar avatar-8 hide-mobile">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" alt="Person 8" />
          </div>
          <div className="floating-avatar avatar-9">
            <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face" alt="Person 9" />
          </div>
          <div className="floating-avatar avatar-10 hide-mobile">
            <img src="https://i.pinimg.com/474x/90/f2/0e/90f20eff95f277c0d1152cecd1d07cc3.jpg" alt="Person 10" />
          </div>

          <div className="content-center">
            <h1>Join The Movement</h1>
            <p>
            Connect, share, and grow with Student Exclusive Community.
            </p>
            <button className="cta-button">
              Join Our Community
              <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
