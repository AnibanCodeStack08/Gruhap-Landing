import React, { useState, useRef, useEffect } from 'react'
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
import img14 from '../../Images/14.jpg'
import img15 from '../../Images/15.webp'
import img16 from '../../Images/16.jpg'



const Service = () => {
    // --- Data Definition ---
    const allCards = [
        // Mental Health Cards (Mapped to "Desi & Chill" for mobile display)
        { img: img1, title: "Stress Management", category: "Mental Health" },
        { img: img2, title: "Burnout Prevention", category: "Mental Health" },
        { img: img3, title: "Anxiety Management", category: "Mental Health" },
        { img: img14, title: "Depression Management", category: "Mental Health" },
        { img: img4, title: "Work-Life Balance", category: "Mental Health" },
        { img: img5, title: "Empathy Buddy", category: "Mental Health" },

        // Fitness Cards (Mapped to "Indian TV Dramas" for mobile display)
        { img: img6, title: "Weight Loss", category: "Fitness" },
        { img: img7, title: "Muscle Building", category: "Fitness" },
        { img: img8, title: "Weight Maintenance", category: "Fitness" },
        { img: img9, title: "Sleep and Recovery", category: "Fitness" },
        { img: img10, title: "Activity Lifestyle", category: "Fitness" },

        // Nutritionist Cards (Mapped to "Indian TV Thrillers & Mysteries" for mobile display)
        { img: img11, title: "Personalized Plan", category: "Nutritionist" },
        { img: img12, title: "Nutritional Tracking", category: "Nutritionist" },
        { img: img13, title: "Weight Loss Meal", category: "Nutritionist" },
        { img: img15, title: "Muscle-building plan", category: "Nutritionist" },
        { img: img16, title: "Diabetic plan", category: "Nutritionist" },

    ]

    const desktopCategories = ['Mental Health', 'Fitness', 'Nutritionist'];
    // This map defines the display title for mobile vs. the actual data category for filtering
    const mobileDisplayMap = [
        { displayTitle: 'Mental Health', dataCategory: 'Mental Health' },
        { displayTitle: 'Fitness', dataCategory: 'Fitness' },
        { displayTitle: 'Nutritionist', dataCategory: 'Nutritionist' }
    ];

    // --- Desktop Carousel State & Refs ---
    const desktopScrollContainerRef = useRef(null)
    const [desktopCanScrollLeft, setDesktopCanScrollLeft] = useState(false)
    const [desktopCanScrollRight, setDesktopCanScrollRight] = useState(true)
    const [desktopSelectedCategory, setDesktopSelectedCategory] = useState(desktopCategories[0]) // Default to first category

    // --- Mobile Multi-Carousel State & Refs ---
    const mobileScrollRefs = useRef({});
    mobileDisplayMap.forEach(cat => {
        mobileScrollRefs.current[cat.dataCategory] = useRef(null);
    });

    const [mobileScrollStates, setMobileScrollStates] = useState(
        mobileDisplayMap.reduce((acc, cat) => ({
            ...acc,
            [cat.dataCategory]: { canScrollLeft: false, canScrollRight: true }
        }), {})
    );

    // --- Desktop Carousel Functions ---
    const desktopScroll = (direction) => {
        const container = desktopScrollContainerRef.current
        const scrollAmount = 320 // Card width + gap
        if (container) {
            if (direction === 'left') container.scrollLeft -= scrollAmount
            else container.scrollLeft += scrollAmount
        }
    }

    const handleDesktopScroll = () => {
        const container = desktopScrollContainerRef.current
        if (container) {
            setDesktopCanScrollLeft(container.scrollLeft > 0)
            setDesktopCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth)
        }
    }

    const handleDesktopCategorySelect = (category) => {
        setDesktopSelectedCategory(category)
        if (desktopScrollContainerRef.current) desktopScrollContainerRef.current.scrollLeft = 0
        // Small delay to ensure scroll update after filtering
        setTimeout(() => handleDesktopScroll(), 100)
    }

    // --- Mobile Multi-Carousel Functions ---
    const mobileScroll = (dataCategory, direction) => {
        const container = mobileScrollRefs.current[dataCategory].current;
        const scrollAmount = 320;
        if (container) {
            if (direction === 'left') container.scrollLeft -= scrollAmount;
            else container.scrollLeft += scrollAmount;
        }
    };

    const handleMobileScroll = (dataCategory) => {
        const container = mobileScrollRefs.current[dataCategory].current;
        if (container) {
            const canScrollLeft = container.scrollLeft > 0;
            const canScrollRight = container.scrollLeft < container.scrollWidth - container.clientWidth;
            
            setMobileScrollStates(prev => ({
                ...prev,
                [dataCategory]: { canScrollLeft, canScrollRight }
            }));
        }
    };

    // Initialize scroll states for mobile carousels on mount
    useEffect(() => {
        mobileDisplayMap.forEach(cat => {
            // Need a slight delay to allow rendering before calculating scroll width
            setTimeout(() => handleMobileScroll(cat.dataCategory), 0);
        });
        // Also initialize desktop scroll state
        setTimeout(() => handleDesktopScroll(), 0);
    }, []);

    // Filter cards for desktop display based on selected category
    const filteredDesktopCards = desktopSelectedCategory ? allCards.filter(card => card.category === desktopSelectedCategory) : allCards;


    return (
        <section className="service-section">
            <div className="service-container">
                <div className="cards-background">

                    {/* --- DESKTOP LAYOUT --- */}
                    <div className="desktop-layout">
                        <div className="service-header">
                            <div className="header-left">
                                <h2 className="service-title">AI Professionals</h2>
                            </div>
                            <div className="header-center">
                                <div className="service-nav desktop-nav">
                                    {desktopCategories.map((category, index) => (
                                        <button
                                            key={index}
                                            className={`nav-btn ${desktopSelectedCategory === category ? 'active' : ''}`}
                                            onClick={() => handleDesktopCategorySelect(category)}
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

                        {/* Desktop Grid (Single Carousel) */}
                        <div className="service-grid-container desktop-grid-container">
                            <button className={`nav-arrow nav-arrow-left ${!desktopCanScrollLeft ? 'disabled' : ''}`} onClick={() => desktopScroll('left')} disabled={!desktopCanScrollLeft}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </button>

                            <div className="service-grid" ref={desktopScrollContainerRef} onScroll={handleDesktopScroll}>
                                {filteredDesktopCards.map((card, index) => (
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

                            <button className={`nav-arrow nav-arrow-right ${!desktopCanScrollRight ? 'disabled' : ''}`} onClick={() => desktopScroll('right')} disabled={!desktopCanScrollRight}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </button>
                        </div>
                    </div>

                    {/* --- MOBILE LAYOUT --- */}
                    <div className="mobile-layout">
                        <div className="mobile-header">
                            <h2 className="mobile-service-title">AI Professionals</h2>
                        </div>
                        {mobileDisplayMap.map((cat, catIndex) => (
                            <div className="category-section" key={cat.dataCategory} style={catIndex > 0 ? { marginTop: '2rem' } : {}}>
                                <h3 className="category-title">{cat.displayTitle}</h3>
                                <div className="category-grid-container">
                                    <div
                                        className="mobile-service-grid"
                                        ref={mobileScrollRefs.current[cat.dataCategory]}
                                        onScroll={() => handleMobileScroll(cat.dataCategory)}
                                    >
                                        {allCards.filter(card => card.category === cat.dataCategory).map((card, index) => (
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
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Service