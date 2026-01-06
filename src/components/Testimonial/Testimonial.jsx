import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Testimonial.css";

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const startX = useRef(0);
  const currentX = useRef(0);
  const isDragging = useRef(false);
  const initialTransform = useRef(0);
  const dragOffset = useRef(0);
  const autoPlayRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      quote:
        "The personalized study plans helped me focus on my weak areas. I improved my JEE rank by 5000 positions in just 3 months!",
      name: "Jenny Wilson",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces&auto=format"
    },
    {
      id: 2,
      quote:
        "Concept clarity improved dramatically with the AI tutor. The doubt-solving feature made complex physics problems so much easier to understand.",
      name: "David Carter",
      avatar:
        "https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 3,
      quote:
        "Mock tests with instant analysis helped me identify patterns in my mistakes. My chemistry score jumped from 60% to 92% in NEET.",
      name: "Sophia Martinez",
      avatar:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop&crop=faces&auto=format"
    },
    {
      id: 4,
      quote:
        "The step-by-step solutions for mathematics problems were game-changing. I finally understood calculus concepts I struggled with for months.",
      name: "Michael Johnson",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&auto=format"
    },
    {
      id: 5,
      quote:
        "Previous year paper practice with detailed explanations boosted my confidence. Scored 680/720 in NEET on my first attempt!",
      name: "Emily Chen",
      avatar:
        "https://img.freepik.com/free-photo/close-up-excited-person-portrait_23-2151186653.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      id: 6,
      quote:
        "The organic chemistry module simplified complex reactions beautifully. What took hours to memorize now makes complete logical sense.",
      name: "Robert Anderson",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces&auto=format"
    },
    {
      id: 7,
      quote:
        "From weak concepts to strong foundation, the AI tracked my progress perfectly. Cleared JEE Advanced with AIR 847 this year!",
      name: "Lisa Thompson",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces&auto=format"
    },
    {
      id: 8,
      quote:
        "24/7 doubt clearing and personalized attention transformed my preparation completely. Best decision I made for my medical entrance exam journey.",
      name: "Alex Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces&auto=format"
    }
  ];

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      if (!isDragging.current && !isTransitioning) {
        nextTestimonial();
      }
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  const nextTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handleNextClick = () => {
    stopAutoPlay();
    nextTestimonial();
    setTimeout(startAutoPlay, 3000);
  };

  const handlePrevClick = () => {
    stopAutoPlay();
    prevTestimonial();
    setTimeout(startAutoPlay, 3000);
  };

  const goToTestimonial = (index) => {
    if (isTransitioning || index === currentTestimonial) return;
    stopAutoPlay();
    setIsTransitioning(true);
    setCurrentTestimonial(index);
    setTimeout(() => {
      setIsTransitioning(false);
      startAutoPlay();
    }, 600);
  };

  const handleStart = (clientX) => {
    if (isTransitioning) return;
    isDragging.current = true;
    startX.current = clientX;
    currentX.current = clientX;
    initialTransform.current = -currentTestimonial * 100;
    dragOffset.current = 0;
    
    if (trackRef.current) {
      trackRef.current.style.transition = 'none';
    }
  };

  const handleMove = (clientX) => {
    if (!isDragging.current || isTransitioning) return;
    
    currentX.current = clientX;
    const deltaX = currentX.current - startX.current;
    dragOffset.current = (deltaX / window.innerWidth) * 100;
    
    if (trackRef.current) {
      const newTransform = initialTransform.current + dragOffset.current;
      trackRef.current.style.transform = `translateX(${newTransform}%)`;
    }
  };

  const handleEnd = () => {
    if (!isDragging.current || isTransitioning) return;
    
    isDragging.current = false;
    
    if (trackRef.current) {
      trackRef.current.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    }
    
    // Different threshold for mobile vs desktop
    const dragThreshold = isMobile ? 8 : 20; // Much lower threshold for mobile (8% vs 20%)
    
    if (Math.abs(dragOffset.current) > dragThreshold) {
      stopAutoPlay();
      if (dragOffset.current > 0) {
        prevTestimonial();
      } else {
        nextTestimonial();
      }
      setTimeout(startAutoPlay, 3000);
    } else {
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${currentTestimonial * 100}%)`;
      }
    }
    
    dragOffset.current = 0;
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    handleMove(e.clientX);
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    handleEnd();
  };

  const handleTouchStart = (e) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  useEffect(() => {
    const handleGlobalMouseMove = (e) => handleMouseMove(e);
    const handleGlobalMouseUp = (e) => handleMouseUp(e);

    if (isDragging.current) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--current-slide",
        currentTestimonial
      );
    }
  }, [currentTestimonial]);

  return (
    <div className="testimonial-container" ref={containerRef}>
      <h2 className="testimonial-title">Our Testimonials</h2>
      <div className="testimonial-slider">
        <div
          ref={trackRef}
          className="testimonial-track"
          style={{
            transform: `translateX(-${currentTestimonial * 100}%)`
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              className={`testimonial-card ${index === currentTestimonial
                  ? "active"
                  : index ===
                    (currentTestimonial - 1 + testimonials.length) %
                    testimonials.length
                    ? "prev"
                    : index ===
                      (currentTestimonial + 1) % testimonials.length
                      ? "next"
                      : "inactive"
                }`}
              data-index={index}
            >
              <div className="testimonial-avatar-wrapper">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="testimonial-avatar"
                  draggable={false}
                />
              </div>
              <h3 className="testimonial-name">{t.name}</h3>
              <p className="testimonial-quote">"{t.quote}"</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="navigation-buttons">
          <button
            className="nav-button prev"
            onClick={handlePrevClick}
            disabled={isTransitioning}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="nav-button next"
            onClick={handleNextClick}
            disabled={isTransitioning}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="testimonial-dots">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentTestimonial ? "active" : ""}`}
              onClick={() => goToTestimonial(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;