import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const chatMessages = [
    {
      type: 'bot',
      message: "Hi, I'm Gruhap, your AI wellness assistant. How can I help you today?",
      delay: 1000,
      typingDelay: 1500
    },
    {
      type: 'user',
      message: "I'm feeling stressed lately and having trouble sleeping.",
      delay: 3500,
      typingDelay: 1200
    },
    {
      type: 'bot',
      message: "I understand. Stress can really impact sleep quality. I can connect you with specialists who can help.",
      delay: 5500,
      typingDelay: 1800
    },
    {
      type: 'user',
      message: "What options do I have?",
      delay: 8000,
      typingDelay: 800
    },
    {
      type: 'bot',
      message: "I can arrange sessions with therapists, sleep specialists, or wellness coaches. Would you prefer to start with a therapist?",
      delay: 9500,
      typingDelay: 2000
    },
    {
      type: 'user',
      message: "Yes, that sounds perfect.",
      delay: 12000,
      typingDelay: 900
    },
    {
      type: 'bot',
      message: "Great! I've found Dr. Sarah Chen, a certified therapist specializing in stress management. I can book you for tomorrow at 3 PM or 5 PM.",
      delay: 13500,
      typingDelay: 2200
    },
    {
      type: 'user',
      message: "3 PM works for me.",
      delay: 16200,
      typingDelay: 700
    },
    {
      type: 'bot',
      message: "Perfect! Your session with Dr. Chen is confirmed for tomorrow at 3 PM. You'll receive a reminder and video link via email. Take care! 💙",
      delay: 17500,
      typingDelay: 2500
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentMessageIndex < chatMessages.length) {
        // Show typing indicator
        if (chatMessages[currentMessageIndex]?.type === 'bot') {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setCurrentMessageIndex(currentMessageIndex + 1);
          }, chatMessages[currentMessageIndex]?.typingDelay || 1000);
        } else {
          setCurrentMessageIndex(currentMessageIndex + 1);
        }
      } else {
        // Reset animation after all messages are shown
        setTimeout(() => {
          setCurrentMessageIndex(0);
          setIsTyping(false);
        }, 4000);
      }
    }, chatMessages[currentMessageIndex]?.delay || 1000);

    return () => clearTimeout(timer);
  }, [currentMessageIndex]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!acceptTerms) {
      newErrors.terms = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      console.log("Signup attempt:", formData);
    }, 2000);
  };

  const handleSocialSignup = (provider) => {
    console.log(`${provider} signup clicked`);
    // Handle social signup logic here
  };

  return (
    <>
    <div className="signup-container">
      <div className="signup-content">
        {/* Left Side - Signup Form */}
        <div className="signup-form-section">
          <div className="signup-card">
            <div className="signup-header">
              <div className="logo">
                <h1>Gruhap</h1>
              </div>
              <h2>Create Account</h2>
              <p>Join us and start your wellness journey today</p>
            </div>

            <form onSubmit={handleSubmit} className="signup-form">
              <div className="name-row">
                <div className="input-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter first name"
                    className={errors.firstName ? "error" : ""}
                  />
                  {errors.firstName && (
                    <span className="error-message">{errors.firstName}</span>
                  )}
                </div>

                <div className="input-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter last name"
                    className={errors.lastName ? "error" : ""}
                  />
                  {errors.lastName && (
                    <span className="error-message">{errors.lastName}</span>
                  )}
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className={errors.email ? "error" : ""}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="input-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className={errors.phone ? "error" : ""}
                />
                {errors.phone && (
                  <span className="error-message">{errors.phone}</span>
                )}
              </div>

              <div className="input-group">
                <label htmlFor="password">Password</label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create a password"
                    className={errors.password ? "error" : ""}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "👁️‍🗨️" : "👁️"}
                  </button>
                </div>
                {errors.password && (
                  <span className="error-message">{errors.password}</span>
                )}
              </div>

              <div className="input-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="password-input-wrapper">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    className={errors.confirmPassword ? "error" : ""}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showConfirmPassword ? "👁️‍🗨️" : "👁️"}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <span className="error-message">{errors.confirmPassword}</span>
                )}
              </div>

              <div className="form-options">
                <label className="remember-me">
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                  />
                  <span className="checkmark"></span>
                  <span className="terms-text">
                    I agree to the{" "}
                    <a href="#terms" className="terms-link">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#privacy" className="terms-link">
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </div>
              {errors.terms && (
                <span className="error-message terms-error">{errors.terms}</span>
              )}

              <button
                type="submit"
                className={`signup-button ${isLoading ? "loading" : ""}`}
                disabled={isLoading}
              >
                {isLoading ? <span className="loading-spinner"></span> : "Create Account"}
              </button>
            </form>

            <div className="divider">
              <span>Or continue with</span>
            </div>

            <div className="social-signup">
              <button 
                className="social-button google"
                onClick={() => handleSocialSignup('Google')}
                type="button"
              >
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z"/>
                  <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2.04a4.8 4.8 0 0 1-2.7.75 4.8 4.8 0 0 1-4.52-3.36H1.83v2.07A8 8 0 0 0 8.98 17z"/>
                  <path fill="#FBBC05" d="M4.46 10.41a4.8 4.8 0 0 1-.25-1.41c0-.49.09-.97.25-1.41V5.52H1.83a8 8 0 0 0 0 7.17l2.63-2.07z"/>
                  <path fill="#EA4335" d="M8.98 4.23c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 8.98 1 8 8 0 0 0 1.83 5.52L4.46 7.6A4.8 4.8 0 0 1 8.98 4.23z"/>
                </svg>
                Google
              </button>
              <button 
                className="social-button whatsapp"
                onClick={() => handleSocialSignup('WhatsApp')}
                type="button"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488z"/>
                </svg>
                WhatsApp
              </button>
            </div>

            <div className="login-link">
              <p>
                Already have an account? <Link to="/login">Sign in here</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Chat Animation */}
        <div className="chat-animation-section">
          <div className="chat-container">
            <div className="chat-header">
              <div className="chat-header-icon">
                <div className="pulse-ring"></div>
                <div className="pulse-ring delay-1"></div>
                <div className="pulse-ring delay-2"></div>
                <span className="chat-icon">💬</span>
              </div>
              <h3>Experience Gruhap</h3>
              <p>Your AI wellness assistant in action</p>
            </div>
            
            <div className="phone-mockup">
              <div className="phone-header">
                <div className="status-bar">
                  <div className="time">9:41</div>
                  <div className="signal-icons">
                    <div className="signal-bars">
                      <div className="bar"></div>
                      <div className="bar"></div>
                      <div className="bar"></div>
                      <div className="bar"></div>
                    </div>
                    <div className="battery">100%</div>
                  </div>
                </div>
                <div className="app-header">
                  <div className="app-info">
                    <div className="app-avatar">G</div>
                    <div className="app-details">
                      <div className="app-name">Gruhap</div>
                      <div className="app-status">Online</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="chat-messages">
                {chatMessages.slice(0, currentMessageIndex).map((msg, index) => (
                  <div key={index} className={`message ${msg.type} message-animate`}>
                    <div className="message-content">
                      <div className="avatar">
                        {msg.type === 'bot' ? (
                          <div className="bot-avatar">
                            <span>G</span>
                          </div>
                        ) : (
                          <div className="user-avatar">
                            <span>👤</span>
                          </div>
                        )}
                      </div>
                      <div className="message-bubble">
                        <p>{msg.message}</p>
                        <div className="message-time">
                          {msg.type === 'bot' ? 'Just now' : 'Just now'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="message bot typing-message">
                    <div className="message-content">
                      <div className="avatar">
                        <div className="bot-avatar">
                          <span>G</span>
                        </div>
                      </div>
                      <div className="message-bubble typing-bubble">
                        <div className="typing-indicator">
                          <div className="typing-dot"></div>
                          <div className="typing-dot"></div>
                          <div className="typing-dot"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="chat-input-area">
                <div className="input-placeholder">
                  <span>Message Gruhap...</span>
                  <div className="mic-icon">🎤</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUp;