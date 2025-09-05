import React, { useState, useRef } from 'react'
import './Team.css'

const Team = () => {
  const scrollContainerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('Discover')

  const teamMembers = [
    {
      id: 1,
      name: "May Brown",
      role: "Mental Health",
      image: "https://media.istockphoto.com/id/1468678603/photo/portrait-of-a-black-woman-doctor-happy-with-internship-opportunity-healthcare-career-and.jpg?s=612x612&w=0&k=20&c=t0VMbPOYv8YKezQoegsKibwKPOnaomBemK6MIEgYmjY=",
      description: "Providing compassionate mental health support."
    },
    {
      id: 2,
      name: "Ashton Hall",
      role: "Counselor",
      image: "https://media.istockphoto.com/id/1326420590/photo/portrait-of-happy-black-male-psychologist-looking-at-camera-and-taking-notes-during-therapy.jpg?s=612x612&w=0&k=20&c=sQIUcX108sC9tH4CG9Vh4RYjthJ5bJpUFfdcGcdKiM4=",
      description: "Offering guidance and support through life's challenges."
    },
    {
      id: 3,
      name: "Saket Gokhale",
      role: "Trainer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpcl5tZRT-xk1l-0MPWZo2F-5C44gX0D3k9VLiltgKtZCgqUe6Ou9Fw4DX7aer8uc3koo&usqp=CAU",
      description: "Developing personalized fitness programs."
    },
    {
      id: 4,
      name: "Roxie Swanson",
      role: "Nutritionist",
      image: "https://www.shutterstock.com/image-photo/portrait-cheerful-dietitian-lab-coat-600nw-2370221449.jpg",
      description: "Creating balanced nutrition plans tailored to individual health goals."
    },
    {
      id: 5,
      name: "David Chen",
      role: "Therapist",
      image: "https://www.adventinternational.com/wp-content/uploads/2024/10/David-Chen-1400x1049.jpg",
      description: "Specializing in cognitive behavioral therapy with focus on anxiety and stress."
    },
    {
      id: 6,
      name: "Elena Rodriguez",
      role: "Yoga Instructor",
      image: "https://images.squarespace-cdn.com/content/v1/5c5efdd601232cd65fe2086b/1617981399890-ZG98O5STN3C4SLB644E5/private%2Byoga%2Btherapy%2Bsmall.jpg?format=1000w",
      description: "Bringing mindfulness and body awareness through yoga."
    },
    {
      id: 7,
      name: "James Wilson",
      role: "Life Coach",
      image: "https://www.vitaalconcern.nl/lcms2/RESIZE/w570-h430-c570x430/bestanden/artikelen/1/738_vitaal_concern_coen.jpg?1684841284=",
      description: "Helping clients achieve personal and professional goals."
    },
    {
      id: 8,
      name: "Priya Patel",
      role: "Meditation Guide",
      image: "https://www.thinkrightme.com/wp-content/uploads/2020/04/Untitled-design-2020-04-01T195349.305.jpg",
      description: "Teaching meditation techniques to reduce stress."
    }
  ]

  const categories = [
    'Mental Health',
    'Counseling',
    'Training',
    'Nutritionist',
    'Therapist',
    'Yoga',
    'Life Coach',
    'Meditation'
  ]

  const scroll = (direction) => {
    const container = scrollContainerRef.current
    const scrollAmount = 320
    if (direction === 'left') container.scrollLeft -= scrollAmount
    else container.scrollLeft += scrollAmount
  }

  const handleScroll = () => {
    const container = scrollContainerRef.current
    setCanScrollLeft(container.scrollLeft > 0)
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    )
  }

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    setIsDropdownOpen(false)
  }

  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-cards-background">
          <div className="team-header">
            <div className="team-header-left">
              <h2 className="team-title">Our Professionals</h2>
            </div>

            {/* Desktop Nav */}
            <div className="team-header-center">
              <div className="team-nav team-desktop-nav">
                {categories.map((category, index) => (
                  <button key={index} className="team-nav-btn">
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="team-header-right">
              <button className="team-view-all-btn team-desktop-view-all">
                <span>View All</span>
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" />
                  <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Nav */}
          <div className="team-mobile-nav-row">
            <div className="team-mobile-nav-container">
              <div className="team-nav-mobile">
                <div className="team-dropdown-container">
                  <button
                    className="team-discover-btn"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span>{selectedCategory}</span>
                    <svg
                      className={`team-dropdown-arrow ${isDropdownOpen ? 'team-open' : ''}`}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  {isDropdownOpen && (
                    <div className="team-dropdown-menu">
                      {categories.map((category, i) => (
                        <button
                          key={i}
                          className="team-dropdown-item"
                          onClick={() => handleCategorySelect(category)}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <button className="team-view-all-btn team-mobile-view-all">
                <span>View All</span>
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" />
                  <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop Horizontal Scroll */}
          <div className="team-grid-container team-desktop-grid-container">
            <button
              className={`team-nav-arrow team-nav-arrow-left ${!canScrollLeft ? 'team-disabled' : ''}`}
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
            <div className="team-grid" ref={scrollContainerRef} onScroll={handleScroll}>
              {teamMembers.map((member) => (
                <div className="team-card" key={member.id}>
                  <div className="team-card-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="team-card-content">
                    <h3 className="team-card-name">{member.name}</h3>
                    <p className="team-card-role">{member.role}</p>
                    <p className="team-card-description">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className={`team-nav-arrow team-nav-arrow-right ${!canScrollRight ? 'team-disabled' : ''}`}
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>

          {/* Mobile Vertical Grid */}
          <div className="team-mobile-grid-container">
            <div className="team-mobile-team-grid">
              {teamMembers.slice(0, 4).map((member) => (
                <div className="team-card team-mobile-card" key={member.id}>
                  <div className="team-card-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="team-card-content">
                    <h3 className="team-card-name">{member.name}</h3>
                    <p className="team-card-role">{member.role}</p>
                    <p className="team-card-description">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
