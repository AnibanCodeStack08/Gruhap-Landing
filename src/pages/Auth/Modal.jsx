// src/components/Modal.jsx
import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import useAuth
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Get login function from context
  const [step, setStep] = useState('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [resendTimer, setResendTimer] = useState(6);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);
  
  const otpRefs = [useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    if (step === 'otp' || step === 'emailOtp') {
      const randomOtp = Math.floor(1000 + Math.random() * 9000).toString();
      setGeneratedOtp(randomOtp);
      console.log('Generated OTP:', randomOtp);
      
      if (otpRefs[0].current) {
        otpRefs[0].current.focus();
      }
    }
  }, [step]);

  useEffect(() => {
    if ((step === 'otp' || step === 'emailOtp') && resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer, step]);

  useEffect(() => {
    if (otp.every(digit => digit !== '')) {
      const enteredOtp = otp.join('');
      if (enteredOtp === generatedOtp) {
        setShowSuccessAnimation(true);
        
        // Create user data object
        const userData = {
          phoneNumber: phoneNumber || null,
          email: email || null,
          loginTime: new Date().toISOString(),
        };
        
        // Call login function to update auth state
        login(userData);
        
        setTimeout(() => {
          // Stay on current page if already on MainDashboard, otherwise navigate
          if (window.location.pathname !== '/MainDashBoard') {
            navigate('/MainDashBoard');
          }
          
          setTimeout(() => {
            onClose();
            setShowSuccessAnimation(false);
            setStep('phone');
            setPhoneNumber('');
            setEmail('');
            setOtp(['', '', '', '']);
          }, 100);
        }, 2000);
      }
    }
  }, [otp, generatedOtp, onClose, navigate, login, phoneNumber, email]);

  if (!isOpen) return null;

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length >= 10) {
      setStep('otp');
      setResendTimer(6);
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setStep('emailOtp');
      setOtp(['', '', '', '']);
      setResendTimer(6);
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) {
      value = value.slice(0, 1);
    }
    
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        otpRefs[index + 1].current?.focus();
      }
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs[index - 1].current?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 4);
    if (/^\d+$/.test(pastedData)) {
      const newOtp = pastedData.split('');
      setOtp([...newOtp, '', '', ''].slice(0, 4));
      
      const nextIndex = Math.min(pastedData.length, 3);
      otpRefs[nextIndex].current?.focus();
    }
  };

  const handleResendOtp = () => {
    const randomOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(randomOtp);
    console.log('New OTP:', randomOtp);
    setOtp(['', '', '', '']);
    setResendTimer(6);
    otpRefs[0].current?.focus();
  };

  const handleEditPhone = () => {
    setStep('phone');
    setOtp(['', '', '', '']);
  };

  const handleEditEmail = () => {
    setStep('email');
    setOtp(['', '', '', '']);
  };

  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose}></div>

      <div className="modal-container">
        <div className="modal-content">
          
          {/* Left Side - Chat Animation */}
          <div className="modal-left-section">
            <div className="modal-decoration-circle modal-decoration-circle-1"></div>
            <div className="modal-decoration-circle modal-decoration-circle-2"></div>
            
            <div className="modal-chat-container">
              <div className="modal-chat-header">
                <h3>Experience Gruhap</h3>
                <p>Your AI wellness assistant in action</p>
              </div>

              <div className="modal-chat-message modal-chat-ai modal-chat-message-1">
                <div className="modal-chat-avatar modal-chat-avatar-ai">
                  <span className="modal-chat-avatar-text">G</span>
                </div>
                <div className="modal-chat-bubble modal-chat-bubble-ai">
                  <div className="modal-chat-name">Gruhap AI</div>
                  <div className="modal-chat-text">Hi, I'm Gruhap, your AI wellness assistant.</div>
                </div>
              </div>

              <div className="modal-chat-message modal-chat-user modal-chat-message-2">
                <div className="modal-chat-bubble modal-chat-bubble-user">
                  <div className="modal-chat-text">I'm feeling stressed lately.</div>
                </div>
                <div className="modal-chat-avatar modal-chat-avatar-user">
                  <span className="modal-chat-avatar-text">U</span>
                </div>
              </div>

              <div className="modal-chat-message modal-chat-ai modal-chat-message-3">
                <div className="modal-chat-avatar modal-chat-avatar-ai">
                  <span className="modal-chat-avatar-text">G</span>
                </div>
                <div className="modal-chat-bubble modal-chat-bubble-ai">
                  <div className="modal-chat-name">Gruhap AI</div>
                  <div className="modal-chat-text">I can help with that. Would you like to speak to a therapist, counselor, trainer, or nutritionist?</div>
                </div>
              </div>

              <div className="modal-chat-message modal-chat-user modal-chat-message-4">
                <div className="modal-chat-bubble modal-chat-bubble-user">
                  <div className="modal-chat-text">Therapist</div>
                </div>
                <div className="modal-chat-avatar modal-chat-avatar-user">
                  <span className="modal-chat-avatar-text">U</span>
                </div>
              </div>

              <div className="modal-chat-message modal-chat-ai modal-chat-message-5">
                <div className="modal-chat-avatar modal-chat-avatar-ai">
                  <span className="modal-chat-avatar-text">G</span>
                </div>
                <div className="modal-chat-bubble modal-chat-bubble-ai">
                  <div className="modal-chat-name">Gruhap AI</div>
                  <div className="modal-chat-text">I've booked a session with Ananya, a certified therapist, for tomorrow at 5 PM.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="modal-right-section">
            <button className="modal-back-button" onClick={step === 'otp' ? handleEditPhone : step === 'emailOtp' ? handleEditEmail : onClose}>
              <svg className="modal-back-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button className="modal-close-button" onClick={onClose}>
              <svg className="modal-close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="modal-form-container">
              
              {step === 'phone' && (
                <>
                  <div className="modal-logo">
                    <h1>Gruhap</h1>
                  </div>
                  <h2 className="modal-heading">Welcome Back!</h2>
                  <p className="modal-subheading">Sign in to continue your wellness journey</p>

                  <form className="modal-login-form" onSubmit={handlePhoneSubmit}>
                    <div className="modal-phone-input-wrapper">
                      <div className="modal-country-code">
                        <img 
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 40'%3E%3Crect fill='%23FF9933' width='60' height='13.33'/%3E%3Crect fill='%23fff' y='13.33' width='60' height='13.33'/%3E%3Crect fill='%23138808' y='26.67' width='60' height='13.33'/%3E%3Ccircle fill='%23000080' cx='30' cy='20' r='6'/%3E%3C/svg%3E" 
                          alt="IN" 
                          className="modal-flag-icon"
                        />
                        <span className="modal-country-text">+91</span>
                        <svg className="modal-dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <input
                        type="tel"
                        className="modal-phone-input"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        required
                      />
                    </div>

                    <button type="submit" className="modal-continue-button">
                      Continue
                    </button>

                    <div className="modal-divider">
                      <span className="modal-divider-text">or</span>
                    </div>

                    <button 
                      type="button"
                      className="modal-email-button"
                      onClick={() => setStep('email')}
                    >
                      Continue with Email
                    </button>
                  </form>
                </>
              )}

              {step === 'otp' && (
                <>
                  <h2 className="modal-heading">Verify Your Number</h2>
                  <p className="modal-subheading">We've sent an OTP to</p>
                  <div className="modal-phone-display">
                    <span className="modal-phone-number">+91 {phoneNumber}</span>
                    <button 
                      type="button" 
                      className="modal-edit-button"
                      onClick={handleEditPhone}
                    >
                      Edit
                    </button>
                  </div>

                  <form className="modal-login-form modal-otp-form">
                    <div className="modal-otp-inputs">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          ref={otpRefs[index]}
                          type="text"
                          inputMode="numeric"
                          maxLength="1"
                          className="modal-otp-input"
                          value={digit}
                          onChange={(e) => handleOtpChange(index, e.target.value)}
                          onKeyDown={(e) => handleOtpKeyDown(index, e)}
                          onPaste={index === 0 ? handleOtpPaste : undefined}
                        />
                      ))}
                    </div>

                    <div className="modal-resend-section">
                      <span className="modal-resend-text">Didn't receive OTP?</span>
                      {resendTimer > 0 ? (
                        <span className="modal-resend-timer">Resend in {resendTimer}s</span>
                      ) : (
                        <button 
                          type="button" 
                          className="modal-resend-button"
                          onClick={handleResendOtp}
                        >
                          Resend
                        </button>
                      )}
                    </div>

                    <button 
                      type="button" 
                      className="modal-continue-button"
                      disabled={!otp.every(digit => digit !== '')}
                    >
                      Verify & Continue
                    </button>
                  </form>

                  <div className="modal-otp-hint">
                    🔐 Test OTP: {generatedOtp}
                  </div>
                </>
              )}

              {step === 'email' && (
                <>
                  <div className="modal-logo">
                    <h1>Gruhap</h1>
                  </div>
                  <h2 className="modal-heading">Welcome Back!</h2>
                  <p className="modal-subheading">Sign in with your email address</p>

                  <form className="modal-login-form" onSubmit={handleEmailSubmit}>
                    <div className="modal-input-group">
                      <input
                        type="email"
                        className="modal-input"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <button type="submit" className="modal-continue-button">
                      Continue
                    </button>
                    
                    <div className="modal-divider">
                      <span className="modal-divider-text">or</span>
                    </div>

                    <button 
                      type="button"
                      className="modal-back-to-phone"
                      onClick={() => setStep('phone')}
                    >
                      Back to Phone Login
                    </button>
                  </form>
                </>
              )}

              {step === 'emailOtp' && (
                <>
                  <h2 className="modal-heading">Verify Your Email</h2>
                  <p className="modal-subheading">We've sent an OTP to</p>
                  <div className="modal-phone-display">
                    <span className="modal-phone-number modal-email-display">{email}</span>
                    <button 
                      type="button" 
                      className="modal-edit-button"
                      onClick={handleEditEmail}
                    >
                      Edit
                    </button>
                  </div>

                  <form className="modal-login-form modal-otp-form">
                    <div className="modal-otp-inputs">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          ref={otpRefs[index]}
                          type="text"
                          inputMode="numeric"
                          maxLength="1"
                          className="modal-otp-input"
                          value={digit}
                          onChange={(e) => handleOtpChange(index, e.target.value)}
                          onKeyDown={(e) => handleOtpKeyDown(index, e)}
                          onPaste={index === 0 ? handleOtpPaste : undefined}
                        />
                      ))}
                    </div>

                    <div className="modal-resend-section">
                      <span className="modal-resend-text">Didn't receive OTP?</span>
                      {resendTimer > 0 ? (
                        <span className="modal-resend-timer">Resend in {resendTimer}s</span>
                      ) : (
                        <button 
                          type="button" 
                          className="modal-resend-button"
                          onClick={handleResendOtp}
                        >
                          Resend
                        </button>
                      )}
                    </div>

                    <button 
                      type="button" 
                      className="modal-continue-button"
                      disabled={!otp.every(digit => digit !== '')}
                    >
                      Verify & Continue
                    </button>
                  </form>

                  <div className="modal-otp-hint">
                    🔐 Test OTP: {generatedOtp}
                  </div>
                </>
              )}

            </div>
          </div>

          {showSuccessAnimation && (
            <div className="modal-success-overlay">
              <div className="modal-success-container">
                <div className="modal-success-checkmark">
                  <svg viewBox="0 0 52 52" className="modal-success-checkmark-circle">
                    <circle cx="26" cy="26" r="25" fill="none"></circle>
                  </svg>
                  <svg className="modal-success-checkmark-check" viewBox="0 0 52 52">
                    <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
                  </svg>
                </div>
                <h3 className="modal-success-text">Login Successful!</h3>
              </div>
            </div>
          )}

        </div>
      </div>
    </>,
    document.getElementById('modal-root') || document.body
  );
};

export default Modal;