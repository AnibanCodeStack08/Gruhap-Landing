import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const chatMessages = [
    {
      type: 'bot',
      message: "Hi, I'm Gruhap, your AI wellness assistant.",
      delay: 1000
    },
    {
      type: 'user',
      message: "I'm feeling stressed lately.",
      delay: 2500
    },
    {
      type: 'bot',
      message: "I can help with that. Would you like to speak to a therapist, counselor, trainer, or nutritionist?",
      delay: 4000
    },
    {
      type: 'user',
      message: "Therapist",
      delay: 5500
    },
    {
      type: 'bot',
      message: "I've booked a session with Ananya, a certified therapist, for tomorrow at 5 PM.",
      delay: 7000
    },
    {
      type: 'user',
      message: "Thank you.",
      delay: 8500
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentMessageIndex < chatMessages.length) {
        setCurrentMessageIndex(currentMessageIndex + 1);
      } else {
        // Reset animation after all messages are shown
        setTimeout(() => {
          setCurrentMessageIndex(0);
        }, 3000);
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      console.log("Login attempt:", { ...formData, rememberMe });
      // Handle login logic here
    }, 2000);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSocialLogin = (provider) => {
    console.log(`${provider} login clicked`);
    // Handle social login logic here
  };

  return (
    <div className="Login-container">
      <div className="Login-content">
        {/* Left Side - Login Form */}
        <div className="Login-form-section">
          <div className="Login-card">
            <div className="Login-header">
              <div className="Login-logo">
                <h1>Gruhap</h1>
              </div>
              <h2>Welcome Back</h2>
              <p>Sign in to your account to continue</p>
            </div>

            <form onSubmit={handleSubmit} className="Login-form">
              <div className="Login-input-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="Login-input-group">
                <label htmlFor="password">Password</label>
                <div className="Login-password-input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    className="Login-password-toggle"
                    onClick={togglePasswordVisibility}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "👁️‍🗨️" : "👁️"}
                  </button>
                </div>
              </div>

              <div className="Login-form-options">
                <label className="Login-remember-me" onClick={handleRememberMeChange}>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  <span className="Login-checkmark"></span>
                  Remember me
                </label>
                <a href="#forgot" className="Login-forgot-password">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className={`Login-button ${isLoading ? "Login-loading" : ""}`}
                disabled={isLoading}
              >
                {isLoading ? <span className="Login-loading-spinner"></span> : "Sign In"}
              </button>
            </form>

            <div className="Login-divider">
              <span>Or continue with</span>
            </div>

            <div className="Login-social-login">
              <button 
                className="Login-social-button Login-google"
                onClick={() => handleSocialLogin('Google')}
                type="button"
              >
                Google
              </button>
              <button 
                className="Login-social-button Login-facebook"
                onClick={() => handleSocialLogin('Facebook')}
                type="button"
              >
                Facebook
              </button>
            </div>

            <div className="Login-signup-link">
              <p>
                Don't have an account? <Link to="/signup">Sign up here</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Chat Animation */}
        <div className="Login-chat-animation-section">
          <div className="Login-chat-container">
            <div className="Login-chat-header">
              <h3>Experience Gruhap</h3>
              <p>Your AI wellness assistant in action</p>
            </div>
            <div className="Login-chat-messages">
              {chatMessages.slice(0, currentMessageIndex).map((msg, index) => (
                <div key={index} className={`Login-message Login-${msg.type}`}>
                  <div className="Login-message-content">
                    <div className="Login-avatar">
                      {msg.type === 'bot' ? (
                        <div className="Login-bot-avatar">🤖</div>
                      ) : (
                        <div className="Login-user-avatar">👤</div>
                      )}
                    </div>
                    <div className="Login-message-bubble">
                      <p>{msg.message}</p>
                    </div>
                  </div>
                  <div className="Login-message-label">
                    {msg.type === 'bot' ? 'Gruhap' : 'User'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;