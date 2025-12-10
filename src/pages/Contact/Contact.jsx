import { useState } from "react";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HelpCircle, Building } from "lucide-react";
import { useToast } from "./useToast";
import "./Contact.css";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@gruhap.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (555) 123-4567",
    description: "Mon-Fri, 9am-6pm EST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "123 Wellness Ave, San Francisco",
    description: "CA 94102, USA",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "24/7 AI Support",
    description: "Human support: Mon-Fri",
  },
];

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our AI assistant for instant help with common questions.",
    action: "Start Chat",
  },
  {
    icon: HelpCircle,
    title: "Help Center",
    description: "Browse our comprehensive FAQ and knowledge base articles.",
    action: "Visit Help Center",
  },
  {
    icon: Building,
    title: "Enterprise",
    description: "Looking for team or enterprise solutions? Let's talk.",
    action: "Contact Sales",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="contact-page">
      <Navbar />
      <main className="contact-main">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="contact-hero-container">
            <div className="contact-hero-content">
              <span className="contact-hero-badge">Contact Us</span>
              <h1 className="contact-hero-title">
                We'd Love to{" "}
                <span className="contact-hero-title-highlight">Hear From You</span>
              </h1>
              <p className="contact-hero-description">
                Have questions, feedback, or need support? Our team is here to help you on your wellness journey.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="contact-info-section">
          <div className="contact-info-container">
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="contact-info-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="contact-info-card-icon-wrapper">
                    <info.icon className="contact-info-card-icon" />
                  </div>
                  <h3 className="contact-info-card-title">{info.title}</h3>
                  <p className="contact-info-card-value">{info.value}</p>
                  <p className="contact-info-card-description">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Support Options */}
        <section className="contact-form-section">
          <div className="contact-form-container">
            <div className="contact-form-grid">
              {/* Contact Form */}
              <div className="contact-form-wrapper">
                <h2 className="contact-form-title">Send Us a Message</h2>
                <p className="contact-form-subtitle">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label className="contact-form-label">Your Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="contact-form-input"
                      />
                    </div>
                    <div className="contact-form-group">
                      <label className="contact-form-label">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="contact-form-input"
                      />
                    </div>
                  </div>
                  <div className="contact-form-group">
                    <label className="contact-form-label">Subject</label>
                    <input
                      type="text"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="contact-form-input"
                    />
                  </div>
                  <div className="contact-form-group">
                    <label className="contact-form-label">Message</label>
                    <textarea
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="contact-form-textarea"
                    />
                  </div>
                  <button type="submit" className="contact-form-submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="contact-form-submit-icon" />
                  </button>
                </form>
              </div>

              {/* Support Options */}
              <div className="contact-support-wrapper">
                <div className="contact-support-header">
                  <h2 className="contact-support-title">Other Ways to Get Help</h2>
                  <p className="contact-support-subtitle">
                    Choose the support option that works best for you.
                  </p>
                </div>
                {supportOptions.map((option, index) => (
                  <div
                    key={option.title}
                    className="contact-support-card"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="contact-support-card-content">
                      <div className="contact-support-card-icon-wrapper">
                        <option.icon className="contact-support-card-icon" />
                      </div>
                      <div className="contact-support-card-body">
                        <h3 className="contact-support-card-title">{option.title}</h3>
                        <p className="contact-support-card-description">{option.description}</p>
                        <button className="contact-support-card-button">
                          {option.action}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Map */}
                <div className="contact-map-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop"
                    alt="Office location map"
                    className="contact-map-image"
                  />
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

export default Contact;