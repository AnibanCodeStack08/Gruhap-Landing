import React from 'react';
import './About.css';

const About = () => {
  const values = [
    {
      title: "Accessibility",
      description: "Making mental health and wellness support available to everyone, everywhere, at any time."
    },
    {
      title: "Innovation",
      description: "Leveraging cutting-edge AI technology to provide personalized and effective wellness solutions."
    },
    {
      title: "Empathy",
      description: "Understanding that every wellness journey is unique and requires compassionate, personalized support."
    },
    {
      title: "Trust",
      description: "Building a safe, secure environment where users feel comfortable sharing and seeking help."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      specialty: "Clinical Psychology",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Alex Rodriguez",
      role: "Head of Fitness Programs",
      specialty: "Exercise Science",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Maya Patel",
      role: "Chief Nutritionist",
      specialty: "Clinical Nutrition",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1c5?w=400&h=400&fit=crop&crop=center"
    },
    {
      name: "Dr. David Kim",
      role: "Head of Mental Health",
      specialty: "Psychiatry",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=center"
    }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">About Gruhap</h1>
          <p className="hero-description">
            We're on a mission to make wellness accessible, personalized, and effective for everyone through the power of AI technology.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-wrapper">
        <div className="section-card">
          <div className="section-header">
            <h2 className="section-title">Our Story</h2>
          </div>
          <div className="story-content">
            <div className="story-text">
              <p className="story-paragraph">
                Gruhap was born from a simple observation: traditional wellness support is often expensive, 
                time-consuming, and not readily available when people need it most. We believed there had to be a better way.
              </p>
              <p className="story-paragraph">
                By combining the expertise of licensed professionals with advanced AI technology, 
                we've created a platform that provides instant, personalized wellness guidance 24/7. 
                Our AI professionals are trained on the latest research and best practices in mental health, 
                fitness, and nutrition.
              </p>
              <p className="story-paragraph">
                Since our launch, we've helped thousands of people take control of their wellness journey, 
                providing support for everything from stress management to fitness goals to nutritional guidance.
              </p>
            </div>
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
                alt="Team collaboration"
                className="story-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-wrapper">
        <div className="section-card">
          <div className="section-header">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              These core values guide everything we do at Gruhap, from product development to customer support.
            </p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-card-content">
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="section-wrapper">
        <div className="section-card">
          <div className="section-header">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Our diverse team of experts brings together decades of experience in healthcare, technology, and wellness.
            </p>
          </div>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-card-content">
                  <div className="member-info">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="member-image"
                    />
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                  </div>
                  <div className="member-specialty">
                    {member.specialty}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;