import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Brain, Dumbbell, Apple, Moon, Heart, Sparkles, Check, ArrowRight } from "lucide-react";
import "./OurServices.css";

const services = [
  {
    icon: Brain,
    title: "Mental Health",
    description: "AI-powered support for stress, anxiety, depression, and emotional wellness. Get personalized coping strategies and mindfulness techniques.",
    features: ["Stress Management", "Anxiety Support", "Depression Care", "Emotional Balance"],
    colorClass: "ourservices-icon-violet",
  },
  {
    icon: Dumbbell,
    title: "Fitness Coaching",
    description: "Personalized workout plans and fitness guidance tailored to your goals, whether it's weight loss, muscle building, or staying active.",
    features: ["Custom Workouts", "Progress Tracking", "Form Guidance", "Goal Setting"],
    colorClass: "ourservices-icon-orange",
  },
  {
    icon: Apple,
    title: "Nutrition Planning",
    description: "Expert nutritional advice and meal planning to fuel your body right. Get personalized diet plans based on your health goals.",
    features: ["Meal Planning", "Calorie Tracking", "Diet Analysis", "Recipe Suggestions"],
    colorClass: "ourservices-icon-green",
  },
  {
    icon: Moon,
    title: "Sleep Optimization",
    description: "Improve your sleep quality with AI-guided relaxation techniques, sleep hygiene tips, and personalized bedtime routines.",
    features: ["Sleep Analysis", "Relaxation Audio", "Bedtime Routines", "Sleep Tracking"],
    colorClass: "ourservices-icon-blue",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Find harmony between your professional and personal life with strategies to prevent burnout and maintain well-being.",
    features: ["Time Management", "Boundary Setting", "Stress Prevention", "Productivity Tips"],
    colorClass: "ourservices-icon-pink",
  },
  {
    icon: Sparkles,
    title: "Personal Growth",
    description: "Unlock your potential with guidance on self-improvement, habit building, and achieving your personal development goals.",
    features: ["Goal Setting", "Habit Tracking", "Motivation Boost", "Self-Reflection"],
    colorClass: "ourservices-icon-amber",
  },
];

const OurServices = () => {
  return (
    <div className="ourservices-page">
      <Navbar />
      <main className="ourservices-main">
        {/* Hero Section */}
        <section className="ourservices-hero">
          <div className="ourservices-container">
            <div className="ourservices-hero-content">
              <span className="ourservices-badge">
                Our Services
              </span>
              <h1 className="ourservices-hero-title">
                Comprehensive{" "}
                <span className="ourservices-gradient-text">Wellness Solutions</span>
              </h1>
              <p className="ourservices-hero-description">
                From mental health to fitness, nutrition to sleep — we've got every aspect of your wellness covered with AI-powered guidance.
              </p>
              <button className="ourservices-btn-primary ourservices-btn-lg">
                Explore All Services
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="ourservices-grid-section">
          <div className="ourservices-container">
            <div className="ourservices-grid">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="ourservices-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`ourservices-icon-wrapper ${service.colorClass}`}>
                    <service.icon className="ourservices-icon" />
                  </div>
                  <h3 className="ourservices-card-title">
                    {service.title}
                  </h3>
                  <p className="ourservices-card-description">
                    {service.description}
                  </p>
                  <ul className="ourservices-features-list">
                    {service.features.map((feature) => (
                      <li key={feature} className="ourservices-feature-item">
                        <Check className="ourservices-check-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="ourservices-btn-ghost">
                    Learn More
                    <ArrowRight className="ourservices-arrow-icon" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="ourservices-cta-section">
          <div className="ourservices-container">
            <div className="ourservices-cta-card">
              <h2 className="ourservices-cta-title">
                Ready to Transform Your Life?
              </h2>
              <p className="ourservices-cta-description">
                Start your wellness journey today with personalized AI guidance across all our services.
              </p>
              <div className="ourservices-cta-buttons">
                <button className="ourservices-btn-primary ourservices-btn-lg">
                  Get Started Free
                  <ArrowRight className="ourservices-arrow-icon" />
                </button>
                <button className="ourservices-btn-outline ourservices-btn-lg">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurServices;