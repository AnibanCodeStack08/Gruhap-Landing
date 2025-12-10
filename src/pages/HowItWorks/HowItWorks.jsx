import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { UserPlus, MessageSquare, TrendingUp, Award, ArrowRight, Play } from "lucide-react";
import './HowItWorks.css';

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Sign up in seconds and tell us about your wellness goals, preferences, and current health status. Our AI learns your unique needs.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Chat with AI Professionals",
    description: "Get instant, personalized guidance from our AI wellness experts. Ask anything about mental health, fitness, or nutrition anytime.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Track Your Progress",
    description: "Monitor your wellness journey with detailed insights and analytics. See how far you've come and what areas need more attention.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    number: "04",
    icon: Award,
    title: "Achieve Your Goals",
    description: "Celebrate your milestones and achievements. Our AI continuously adapts to help you maintain and improve your wellness.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=400&fit=crop",
  },
];

const features = [
  {
    title: "24/7 Availability",
    description: "Access wellness support whenever you need it, day or night.",
  },
  {
    title: "Personalized Approach",
    description: "AI that learns and adapts to your unique wellness journey.",
  },
  {
    title: "Evidence-Based",
    description: "Guidance backed by the latest research in health and wellness.",
  },
  {
    title: "Privacy First",
    description: "Your data is encrypted and never shared with third parties.",
  },
];

const HowItWorks = () => {
  return (
    <div className="howitworks-page">
      <Navbar />
      <main className="howitworks-main">
        {/* Hero Section */}
        <section className="howitworks-hero">
          <div className="howitworks-container">
            <div className="howitworks-hero-content">
              <span className="howitworks-badge">
                How It Works
              </span>
              <h1 className="howitworks-title">
                Your Journey to{" "}
                <span className="howitworks-title-gradient">Better Wellness</span>
              </h1>
              <p className="howitworks-description">
                Getting started is simple. Follow these four easy steps to begin your transformation.
              </p>
              <div className="howitworks-hero-buttons">
                <button className="howitworks-btn-primary">
                  Start Your Journey
                  <ArrowRight size={16} />
                </button>
                <button className="howitworks-btn-outline">
                  <Play size={16} />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="howitworks-steps">
          <div className="howitworks-container">
            <div className="howitworks-steps-wrapper">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`howitworks-step ${index % 2 === 1 ? 'howitworks-step-reverse' : ''}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="howitworks-step-content">
                    <div className="howitworks-step-header">
                      <span className="howitworks-step-number">{step.number}</span>
                      <div className="howitworks-step-icon-wrapper">
                        <step.icon className="howitworks-step-icon" />
                      </div>
                    </div>
                    <h3 className="howitworks-step-title">
                      {step.title}
                    </h3>
                    <p className="howitworks-step-description">
                      {step.description}
                    </p>
                  </div>
                  <div className="howitworks-step-image-wrapper">
                    <div className="howitworks-step-image-container">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="howitworks-step-image"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="howitworks-features">
          <div className="howitworks-container">
            <div className="howitworks-features-header">
              <h2 className="howitworks-features-title">
                Why Choose Gruhap?
              </h2>
              <p className="howitworks-features-subtitle">
                Experience wellness support that truly understands you
              </p>
            </div>
            <div className="howitworks-features-grid">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="howitworks-feature-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="howitworks-feature-title">
                    {feature.title}
                  </h3>
                  <p className="howitworks-feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="howitworks-faq">
          <div className="howitworks-container">
            <div className="howitworks-faq-card">
              <div className="howitworks-faq-grid">
                <div>
                  <h2 className="howitworks-faq-title">
                    Still Have Questions?
                  </h2>
                  <p className="howitworks-faq-description">
                    Our team is here to help you get started. Reach out to us anytime for support or more information about how Gruhap can help you.
                  </p>
                  <button className="howitworks-btn-primary">
                    Contact Support
                    <ArrowRight size={16} />
                  </button>
                </div>
                <div className="howitworks-faq-questions">
                  {[
                    "Is Gruhap really free to start?",
                    "How does the AI personalization work?",
                    "Can I cancel my subscription anytime?",
                  ].map((question) => (
                    <div key={question} className="howitworks-faq-question">
                      <p className="howitworks-faq-question-text">{question}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;