import React, { useState, useRef, useEffect } from 'react'
import './AIProfessionals.css'

const AIProfessionals = () => {
    const scrollContainerRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [viewMode, setViewMode] = useState('grid')

    const professionals = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
            title: "Dr. Sarah Chen",
            role: "Stress Management Specialist",
            category: "Mental Health",
            experience: "15+ years",
            rating: 4.9,
            sessions: 2500,
            price: "$120/session",
            specialties: ["Cognitive Behavioral Therapy", "Mindfulness", "Corporate Wellness"],
            availability: "Available today",
            description: "Expert in workplace stress reduction and anxiety management techniques."
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
            title: "Dr. Michael Torres",
            role: "Burnout Prevention Coach",
            category: "Mental Health",
            experience: "12+ years",
            rating: 4.8,
            sessions: 1800,
            price: "$95/session",
            specialties: ["Executive Coaching", "Work-Life Balance", "Resilience Training"],
            availability: "Next available: Tomorrow",
            description: "Specializes in preventing and recovering from professional burnout."
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop",
            title: "Emma Rodriguez",
            role: "Anxiety Management Therapist",
            category: "Mental Health",
            experience: "10+ years",
            rating: 4.9,
            sessions: 2100,
            price: "$110/session",
            specialties: ["Anxiety Disorders", "Panic Management", "Breathing Techniques"],
            availability: "Available today",
            description: "Helping clients overcome anxiety with evidence-based approaches."
        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
            title: "Dr. Lisa Park",
            role: "Work-Life Balance Expert",
            category: "Mental Health",
            experience: "18+ years",
            rating: 5.0,
            sessions: 3200,
            price: "$130/session",
            specialties: ["Life Coaching", "Time Management", "Boundary Setting"],
            availability: "Limited spots",
            description: "Transform your approach to work and personal life integration."
        },
        {
            id: 5,
            img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
            title: "James Wilson",
            role: "Empathy & EQ Coach",
            category: "Mental Health",
            experience: "8+ years",
            rating: 4.7,
            sessions: 950,
            price: "$85/session",
            specialties: ["Emotional Intelligence", "Communication", "Relationship Building"],
            availability: "Available today",
            description: "Develop deeper connections and emotional awareness."
        },
        {
            id: 6,
            img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=400&fit=crop",
            title: "Marcus Johnson",
            role: "Weight Loss Specialist",
            category: "Fitness",
            experience: "10+ years",
            rating: 4.9,
            sessions: 1500,
            price: "$80/session",
            specialties: ["Fat Loss", "HIIT Training", "Metabolic Conditioning"],
            availability: "Available today",
            description: "Proven strategies for sustainable weight loss and fitness."
        },
        {
            id: 7,
            img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
            title: "Alex Martinez",
            role: "Muscle Building Expert",
            category: "Fitness",
            experience: "12+ years",
            rating: 4.8,
            sessions: 2000,
            price: "$90/session",
            specialties: ["Strength Training", "Bodybuilding", "Progressive Overload"],
            availability: "Next available: Tomorrow",
            description: "Build lean muscle mass with scientific training methods."
        },
        {
            id: 8,
            img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
            title: "Jennifer Lee",
            role: "Functional Fitness Coach",
            category: "Fitness",
            experience: "9+ years",
            rating: 4.9,
            sessions: 1750,
            price: "$75/session",
            specialties: ["Mobility", "Core Strength", "Injury Prevention"],
            availability: "Available today",
            description: "Improve daily function and athletic performance."
        },
        {
            id: 9,
            img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&h=400&fit=crop",
            title: "David Kim",
            role: "Recovery & Sleep Coach",
            category: "Fitness",
            experience: "7+ years",
            rating: 4.7,
            sessions: 800,
            price: "$70/session",
            specialties: ["Sleep Optimization", "Active Recovery", "Stress Reduction"],
            availability: "Available today",
            description: "Maximize recovery for better performance and health."
        },
        {
            id: 10,
            img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop",
            title: "Rachel Thompson",
            role: "Active Lifestyle Coach",
            category: "Fitness",
            experience: "11+ years",
            rating: 4.8,
            sessions: 1600,
            price: "$85/session",
            specialties: ["Outdoor Training", "Sports Performance", "Adventure Fitness"],
            availability: "Limited spots",
            description: "Create an active lifestyle you love and can maintain."
        },
        {
            id: 11,
            img: "https://images.unsplash.com/photo-1609609830354-8f615d61b9c8?w=400&h=400&fit=crop",
            title: "Dr. Amanda Foster",
            role: "Clinical Nutritionist",
            category: "Nutrition",
            experience: "14+ years",
            rating: 5.0,
            sessions: 2800,
            price: "$150/consultation",
            specialties: ["Personalized Nutrition", "Gut Health", "Hormone Balance"],
            availability: "Available today",
            description: "Evidence-based nutrition planning for optimal health."
        },
        {
            id: 12,
            img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
            title: "Robert Chang",
            role: "Sports Nutritionist",
            category: "Nutrition",
            experience: "10+ years",
            rating: 4.9,
            sessions: 1900,
            price: "$120/consultation",
            specialties: ["Performance Nutrition", "Supplement Guidance", "Meal Timing"],
            availability: "Next available: Tomorrow",
            description: "Fuel your athletic performance with optimal nutrition."
        },
        {
            id: 13,
            img: "https://images.unsplash.com/photo-1612831455740-a2f6212eeeb2?w=400&h=400&fit=crop",
            title: "Michelle Brown",
            role: "Weight Management Dietitian",
            category: "Nutrition",
            experience: "12+ years",
            rating: 4.8,
            sessions: 2200,
            price: "$100/consultation",
            specialties: ["Sustainable Weight Loss", "Meal Planning", "Behavior Change"],
            availability: "Available today",
            description: "Achieve lasting weight management through balanced nutrition."
        },
        {
            id: 14,
            img: "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=400&h=400&fit=crop",
            title: "Dr. Kevin Patel",
            role: "Diabetes Nutrition Specialist",
            category: "Nutrition",
            experience: "16+ years",
            rating: 4.9,
            sessions: 2600,
            price: "$140/consultation",
            specialties: ["Diabetes Management", "Blood Sugar Control", "Carb Counting"],
            availability: "Limited spots",
            description: "Expert guidance for diabetes nutrition management."
        },
        {
            id: 15,
            img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop",
            title: "Sofia Anderson",
            role: "Plant-Based Nutritionist",
            category: "Nutrition",
            experience: "8+ years",
            rating: 4.7,
            sessions: 1100,
            price: "$90/consultation",
            specialties: ["Vegan Nutrition", "Plant Proteins", "Nutrient Optimization"],
            availability: "Available today",
            description: "Thrive on a plant-based diet with expert guidance."
        }
    ]

    const categories = ['All', 'Mental Health', 'Fitness', 'Nutrition']

    const filteredProfessionals = professionals.filter(prof => {
        const matchesCategory = selectedCategory === 'All' || prof.category === selectedCategory
        const matchesSearch = prof.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            prof.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
            prof.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
        return matchesCategory && matchesSearch
    })

    const handleScroll = () => {
        const container = scrollContainerRef.current
        if (container) {
            setCanScrollLeft(container.scrollLeft > 0)
            setCanScrollRight(
                container.scrollLeft < container.scrollWidth - container.clientWidth - 10
            )
        }
    }

    const scroll = (direction) => {
        const container = scrollContainerRef.current
        const scrollAmount = 320

        if (direction === 'left') {
            container.scrollLeft -= scrollAmount
        } else {
            container.scrollLeft += scrollAmount
        }
    }

    const handleCategorySelect = (category) => {
        setSelectedCategory(category)
        setIsDropdownOpen(false)

        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = 0
        }

        setTimeout(handleScroll, 100)
    }

    useEffect(() => {
        handleScroll()
    }, [filteredProfessionals])

    return (
        <div className="ai-professionals">
            {/* Hero Section */}
            <section className="ai-hero-section">
                <div className="ai-hero-container">
                    <div className="ai-hero-content">
                        <h1 className="ai-hero-title">
                            Connect with AI-Powered
                            <span className="ai-highlight"> Health Professionals</span>
                        </h1>
                        <p className="ai-hero-subtitle">
                            Experience personalized guidance from our network of certified experts
                            enhanced with cutting-edge AI technology
                        </p>

                        {/* Search Bar */}
                        <div className="ai-search-container">
                            <input
                                type="text"
                                className="ai-search-input"
                                placeholder="Search by name, specialty, or condition..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="ai-search-btn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="ai-stats-container">
                            <div className="ai-stat-item">
                                <span className="ai-stat-number">500+</span>
                                <span className="ai-stat-label">Professionals</span>
                            </div>
                            <div className="ai-stat-item">
                                <span className="ai-stat-number">50K+</span>
                                <span className="ai-stat-label">Sessions</span>
                            </div>
                            <div className="ai-stat-item">
                                <span className="ai-stat-number">4.8★</span>
                                <span className="ai-stat-label">Avg Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Professionals Section */}
            <section className="ai-professionals-section">
                <div className="ai-professionals-container">
                    <div className="ai-section-header">
                        <div className="ai-header-left">
                            <h2 className="ai-section-title">Our Professionals</h2>
                            <p className="ai-section-subtitle">
                                {filteredProfessionals.length} experts available
                            </p>
                        </div>

                        {/* Desktop Category Tabs */}
                        <div className="ai-header-center">
                            <div className="ai-category-tabs ai-desktop-tabs">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        className={`ai-category-tab ${selectedCategory === category ? 'active' : ''}`}
                                        onClick={() => handleCategorySelect(category)}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* View Controls */}
                        <div className="ai-header-right">
                            <div className="ai-view-controls">
                                <button
                                    className={`ai-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                                    onClick={() => setViewMode('grid')}
                                    title="Grid view"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                                        <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                                        <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                                        <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </button>
                                <button
                                    className={`ai-view-btn ${viewMode === 'list' ? 'active' : ''}`}
                                    onClick={() => setViewMode('list')}
                                    title="List view"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <line x1="8" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" />
                                        <line x1="8" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" />
                                        <line x1="8" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" />
                                        <rect x="3" y="5" width="2" height="2" fill="currentColor" />
                                        <rect x="3" y="11" width="2" height="2" fill="currentColor" />
                                        <rect x="3" y="17" width="2" height="2" fill="currentColor" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Category Dropdown */}
                    <div className="ai-mobile-controls">
                        <div className="ai-dropdown-wrapper">
                            <button
                                className="ai-category-dropdown"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <span>{selectedCategory}</span>
                                <svg
                                    className={`ai-dropdown-icon ${isDropdownOpen ? 'open' : ''}`}
                                    width="20" height="20" viewBox="0 0 24 24" fill="none"
                                >
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </button>

                            {isDropdownOpen && (
                                <div className="ai-dropdown-menu">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            className={`ai-dropdown-option ${selectedCategory === category ? 'active' : ''}`}
                                            onClick={() => handleCategorySelect(category)}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Professionals Grid/List */}
                    <div className={`ai-professionals-content ${viewMode}`}>
                        {viewMode === 'grid' ? (
                            <>
                                {/* Desktop Scrollable Grid */}
                                <div className="ai-desktop-grid-wrapper">
                                    <button
                                        className={`ai-scroll-btn ai-scroll-left ${!canScrollLeft ? 'disabled' : ''}`}
                                        onClick={() => scroll('left')}
                                        disabled={!canScrollLeft}
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </button>

                                    <div
                                        className="ai-professionals-grid"
                                        ref={scrollContainerRef}
                                        onScroll={handleScroll}
                                    >
                                        {filteredProfessionals.map((prof) => (
                                            <div className="ai-professional-card" key={prof.id}>
                                                <div className="ai-card-image">
                                                    <img src={prof.img} alt={prof.title} />
                                                    <span className="ai-availability-badge">{prof.availability}</span>
                                                </div>
                                                <div className="ai-card-body">
                                                    <h3 className="ai-prof-name">{prof.title}</h3>
                                                    <p className="ai-prof-role">{prof.role}</p>
                                                    <p className="ai-prof-description">{prof.description}</p>

                                                    <div className="ai-card-stats">
                                                        <span className="ai-stat">
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                                            </svg>
                                                            {prof.rating}
                                                        </span>
                                                        <span className="ai-stat">{prof.experience}</span>
                                                        <span className="ai-stat">{prof.sessions} sessions</span>
                                                    </div>

                                                    <div className="ai-card-specialties">
                                                        {prof.specialties.slice(0, 2).map((specialty, idx) => (
                                                            <span key={idx} className="ai-specialty-tag">{specialty}</span>
                                                        ))}
                                                    </div>

                                                    <div className="ai-card-footer">
                                                        <span className="ai-price">{prof.price}</span>
                                                        <button className="ai-book-btn">Book Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        className={`ai-scroll-btn ai-scroll-right ${!canScrollRight ? 'disabled' : ''}`}
                                        onClick={() => scroll('right')}
                                        disabled={!canScrollRight}
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Mobile Grid */}
                                <div className="ai-mobile-grid">
                                    {filteredProfessionals.map((prof) => (
                                        <div className="ai-professional-card" key={prof.id}>
                                            <div className="ai-card-image">
                                                <img src={prof.img} alt={prof.title} />
                                                <span className="ai-availability-badge">{prof.availability}</span>
                                            </div>
                                            <div className="ai-card-body">
                                                <h3 className="ai-prof-name">{prof.title}</h3>
                                                <p className="ai-prof-role">{prof.role}</p>

                                                <div className="ai-card-stats">
                                                    <span className="ai-stat">★ {prof.rating}</span>
                                                    <span className="ai-stat">{prof.sessions} sessions</span>
                                                </div>

                                                <div className="ai-card-footer">
                                                    <span className="ai-price">{prof.price}</span>
                                                    <button className="ai-book-btn">Book</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            /* List View */
                            <div className="ai-professionals-list">
                                {filteredProfessionals.map((prof) => (
                                    <div className="ai-professional-list-item" key={prof.id}>
                                        <img src={prof.img} alt={prof.title} className="ai-list-avatar" />
                                        <div className="ai-list-content">
                                            <div className="ai-list-header">
                                                <div>
                                                    <h3 className="ai-list-name">{prof.title}</h3>
                                                    <p className="ai-list-role">{prof.role}</p>
                                                </div>
                                                <span className="ai-list-availability">{prof.availability}</span>
                                            </div>
                                            <p className="ai-list-description">{prof.description}</p>
                                            <div className="ai-list-specialties">
                                                {prof.specialties.map((specialty, idx) => (
                                                    <span key={idx} className="ai-specialty-tag">{specialty}</span>
                                                ))}
                                            </div>
                                            <div className="ai-list-footer">
                                                <div className="ai-list-stats">
                                                    <span>★ {prof.rating}</span>
                                                    <span>{prof.experience}</span>
                                                    <span>{prof.sessions} sessions</span>
                                                </div>
                                                <div className="ai-list-actions">
                                                    <span className="ai-list-price">{prof.price}</span>
                                                    <button className="ai-book-btn">Book Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="ai-cta-section">
                <div className="ai-cta-container">
                    <h2 className="ai-cta-title">Ready to Start Your Health Journey?</h2>
                    <p className="ai-cta-subtitle">
                        Join thousands who've transformed their lives with our AI-enhanced professional guidance
                    </p>
                    <div className="ai-cta-buttons">
                        <button className="ai-cta-btn primary">Get Started Free</button>
                        <button className="ai-cta-btn secondary">Learn More</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AIProfessionals