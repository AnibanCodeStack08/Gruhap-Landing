import React, { useState, useRef } from 'react'
import './Service.css'

const Service = () => {
    const scrollContainerRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState(null)

    // All cards with their categories
    const allCards = [
        // Mental Health Cards
        {
            img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=400&fit=crop&crop=center",
            title: "Stress Management",
            category: "Mental Health"
        },
        {
            img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop&crop=center",
            title: "Burnout Prevention",
            category: "Mental Health"
        },
        {
            img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=400&fit=crop&crop=center",
            title: "Anxiety Management",
            category: "Mental Health"
        },
        {
            img: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=400&h=400&fit=crop&crop=center",
            title: "Work-Life Balance",
            category: "Mental Health"
        },
        {
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&crop=center",
            title: "Empathy Buddy",
            category: "Mental Health"
        },
        // Fitness Cards
        {
            img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
            title: "Weight Loss",
            category: "Fitness"
        },
        {
            img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=400&fit=crop&crop=center",
            title: "Muscle Building",
            category: "Fitness"
        },
        {
            img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop&crop=center",
            title: "Weight Maintenance",
            category: "Fitness"
        },
        {
            img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&crop=center",
            title: "Sleep and Recovery",
            category: "Fitness"
        },
        {
            img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop&crop=center",
            title: "Activity Lifestyle",
            category: "Fitness"
        },
        // Nutrition Cards
        {
            img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=400&fit=crop&crop=center",
            title: "Personalized plan",
            category: "Nutrition"
        },
        {
            img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=400&fit=crop&crop=center",
            title: "Nutritional Tracking",
            category: "Nutrition"
        },
        {
            img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop&crop=center",
            title: "Weight loss meal",
            category: "Nutrition"
        },
        {
            img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop&crop=center",
            title: "Muscle-building plan",
            category: "Nutrition"
        },
        {
            img: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=400&h=400&fit=crop&crop=center",
            title: "Diabetic plan",
            category: "Nutrition"
        }
    ]

    const categories = [
        'Mental Health',
        'Fitness',
        'Nutrition'
    ]

    // Filter cards based on selected category
    const filteredCards = selectedCategory ? allCards.filter(card => card.category === selectedCategory) : allCards

    const scroll = (direction) => {
        const container = scrollContainerRef.current
        const scrollAmount = 320 // Card width + gap

        if (direction === 'left') {
            container.scrollLeft -= scrollAmount
        } else {
            container.scrollLeft += scrollAmount
        }
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
        
        // Reset scroll position when category changes
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = 0
        }
        
        // Update scroll buttons state after a brief delay to allow for DOM update
        setTimeout(() => {
            handleScroll()
        }, 100)
    }

    return (
        <section className="service-section">
            <div className="service-container">
                <div className="cards-background">
                    <div className="service-header">
                        <div className="header-left">
                            <h2 className="service-title">AI Professionals</h2>
                        </div>
                        <div className="header-center">
                            {/* Desktop Navigation */}
                            <div className="service-nav desktop-nav">
                                {categories.map((category, index) => (
                                    <button 
                                        key={index} 
                                        className={`nav-btn ${selectedCategory === category ? 'active' : ''}`}
                                        onClick={() => handleCategorySelect(category)}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="header-right">
                            <button className="view-all-btn desktop-view-all">
                                <span>View All</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation Row - Below Title */}
                    <div className="mobile-nav-row">
                        <div className="mobile-nav-container">
                            <div className="service-nav-mobile">
                                <div className="dropdown-container">
                                    <button
                                        className="discover-btn"
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    >
                                        <span>{selectedCategory || 'Select Category'}</span>
                                        <svg
                                            className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                d="M6 9L12 15L18 9"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>

                                    {isDropdownOpen && (
                                        <div className="dropdown-menu">
                                            {categories.map((category, index) => (
                                                <button
                                                    key={index}
                                                    className={`dropdown-item ${selectedCategory === category ? 'active' : ''}`}
                                                    onClick={() => handleCategorySelect(category)}
                                                >
                                                    {category}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Mobile View All Button - positioned below dropdown */}
                            <button className="view-all-btn mobile-view-all">
                                <span>View All</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Desktop Grid Container with Arrows */}
                    <div className="service-grid-container desktop-grid-container">
                        <button
                            className={`nav-arrow nav-arrow-left ${!canScrollLeft ? 'disabled' : ''}`}
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <div
                            className="service-grid"
                            ref={scrollContainerRef}
                            onScroll={handleScroll}
                        >
                            {filteredCards.map((card, index) => (
                                <div className="service-card" key={index}>
                                    <div className="card-image">
                                        <img src={card.img} alt={card.title} />
                                    </div>
                                    <div className="card-content">
                                        <h3 className="card-title">{card.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className={`nav-arrow nav-arrow-right ${!canScrollRight ? 'disabled' : ''}`}
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Grid Container - Vertical Layout */}
                    <div className="mobile-grid-container">
                        <div className="mobile-service-grid">
                            {filteredCards.slice(0, 4).map((card, index) => (
                                <div className="service-card mobile-card" key={index}>
                                    <div className="card-image">
                                        <img src={card.img} alt={card.title} />
                                    </div>
                                    <div className="card-content">
                                        <h3 className="card-title">{card.title}</h3>
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

export default Service