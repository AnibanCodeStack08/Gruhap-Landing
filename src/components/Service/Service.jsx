import React, { useState, useRef } from 'react'
import './Service.css'

// Import images
import img1 from '../../Images/1.png'
import img2 from '../../Images/2.png'
import img3 from '../../Images/3.png'
import img4 from '../../Images/4.png'
import img5 from '../../Images/5.png'
import img6 from '../../Images/6.png'
import img7 from '../../Images/7.png'
import img8 from '../../Images/8.png'
import img9 from '../../Images/9.png'
import img10 from '../../Images/10.png'
import img11 from '../../Images/11.png'
import img12 from '../../Images/12.png'
import img13 from '../../Images/13.png'

const Service = () => {
    const scrollContainerRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState(null)

    // All cards with their categories
    const allCards = [
        // Mental Health Cards
        { img: img1, title: "Stress Management", category: "Mental Health" },
        { img: img2, title: "Burnout Prevention", category: "Mental Health" },
        { img: img3, title: "Anxiety Management", category: "Mental Health" },
        { img: img4, title: "Work-Life Balance", category: "Mental Health" },
        { img: img5, title: "Empathy Buddy", category: "Mental Health" },

        // Fitness Cards
        { img: img6, title: "Weight Loss", category: "Fitness" },
        { img: img7, title: "Muscle Building", category: "Fitness" },
        { img: img8, title: "Weight Maintenance", category: "Fitness" },
        { img: img9, title: "Sleep and Recovery", category: "Fitness" },
        { img: img10, title: "Activity Lifestyle", category: "Fitness" },

        // Nutrition Cards
        { img: img11, title: "Personalized Plan", category: "Nutrition" },
        { img: img12, title: "Nutritional Tracking", category: "Nutrition" },
        { img: img13, title: "Weight Loss Meal", category: "Nutrition" },
    ]

    const categories = ['Mental Health', 'Fitness', 'Nutrition']

    // Filter cards based on selected category
    const filteredCards = selectedCategory ? allCards.filter(card => card.category === selectedCategory) : allCards

    const scroll = (direction) => {
        const container = scrollContainerRef.current
        const scrollAmount = 320 // Card width + gap
        if (direction === 'left') container.scrollLeft -= scrollAmount
        else container.scrollLeft += scrollAmount
    }

    const handleScroll = () => {
        const container = scrollContainerRef.current
        setCanScrollLeft(container.scrollLeft > 0)
        setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth)
    }

    const handleCategorySelect = (category) => {
        setSelectedCategory(category)
        setIsDropdownOpen(false)
        if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft = 0
        setTimeout(() => handleScroll(), 100)
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

                    {/* Mobile Navigation Row */}
                    <div className="mobile-nav-row">
                        <div className="mobile-nav-container">
                            <div className="service-nav-mobile">
                                <div className="dropdown-container">
                                    <button className="discover-btn" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                        <span>{selectedCategory || 'Category'}</span>
                                        <svg className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

                            <button className="view-all-btn mobile-view-all">
                                <span>View All</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Desktop Grid */}
                    <div className="service-grid-container desktop-grid-container">
                        <button className={`nav-arrow nav-arrow-left ${!canScrollLeft ? 'disabled' : ''}`} onClick={() => scroll('left')} disabled={!canScrollLeft}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>

                        <div className="service-grid" ref={scrollContainerRef} onScroll={handleScroll}>
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

                        <button className={`nav-arrow nav-arrow-right ${!canScrollRight ? 'disabled' : ''}`} onClick={() => scroll('right')} disabled={!canScrollRight}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>
                    </div>

                    {/* Mobile Grid */}
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
