// components/BackToTop/BackToTop.jsx
import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const toggleVisible = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    
    setScrollProgress(progress);
    
    if (scrollTop > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    setIsScrolling(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    
    // Reset scrolling state after animation
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <>
      {/* Back to Top Button */}
      <div
        className={`position-fixed ${visible ? 'visible' : 'invisible'}`}
        style={{
          bottom: '30px',
          right: '30px',
          zIndex: 1050,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
          transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
        }}
      >
        {/* Progress Ring */}
        <svg
          width="60"
          height="60"
          className="position-absolute top-0 start-0"
          style={{ transform: 'rotate(-90deg)' }}
        >
          {/* Background Circle */}
          <circle
            cx="30"
            cy="30"
            r="26"
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="2"
          />
          {/* Progress Circle */}
          <circle
            cx="30"
            cy="30"
            r="26"
            fill="none"
            stroke="#b28721"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 26}`}
            strokeDashoffset={`${2 * Math.PI * 26 * (1 - scrollProgress / 100)}`}
            style={{
              transition: 'stroke-dashoffset 0.1s ease-out',
              filter: 'drop-shadow(0 0 6px rgba(178, 135, 33, 0.5))'
            }}
          />
        </svg>
        
        {/* Main Button */}
        <button
          onClick={scrollToTop}
          className="btn border-0 rounded-circle d-flex align-items-center justify-content-center position-relative"
          style={{
            width: '60px',
            height: '60px',
            background: isScrolling 
              ? 'linear-gradient(135deg, #d4a532 0%, #b28721 100%)'
              : 'linear-gradient(135deg, #245b5a 0%, #1a4544 100%)',
            boxShadow: '0 8px 25px rgba(36, 91, 90, 0.3)',
            transition: 'all 0.3s ease',
            transform: 'scale(1)',
            zIndex: 1
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)'
            e.target.style.boxShadow = '0 12px 35px rgba(36, 91, 90, 0.4)'
            e.target.style.background = 'linear-gradient(135deg, #b28721 0%, #d4a532 100%)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)'
            e.target.style.boxShadow = '0 8px 25px rgba(36, 91, 90, 0.3)'
            e.target.style.background = isScrolling 
              ? 'linear-gradient(135deg, #d4a532 0%, #b28721 100%)'
              : 'linear-gradient(135deg, #245b5a 0%, #1a4544 100%)'
          }}
          onMouseDown={(e) => {
            e.target.style.transform = 'scale(0.95)'
          }}
          onMouseUp={(e) => {
            e.target.style.transform = 'scale(1.1)'
          }}
          title="Back to Top"
          aria-label="Scroll to top of page"
        >
          <i 
            className={`fas ${isScrolling ? 'fa-spinner fa-spin' : 'fa-arrow-up'} text-white`}
            style={{
              fontSize: '1.2rem',
              transition: 'all 0.3s ease'
            }}
          />
        </button>
        
        {/* Pulse Effect */}
        <div
          className="position-absolute top-50 start-50 translate-middle rounded-circle"
          style={{
            width: '60px',
            height: '60px',
            background: 'rgba(178, 135, 33, 0.2)',
            animation: visible ? 'pulse 2s infinite' : 'none',
            zIndex: -1
          }}
        />
      </div>

      {/* Scroll Progress Indicator (Top of Page) */}
      <div
        className="position-fixed top-0 start-0 w-100"
        style={{
          height: '3px',
          background: 'rgba(36, 91, 90, 0.1)',
          zIndex: 1049,
          pointerEvents: 'none'
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, #245b5a 0%, #b28721 50%, #245b5a 100%)',
            transition: 'width 0.1s ease-out',
            boxShadow: '0 0 10px rgba(178, 135, 33, 0.5)'
          }}
        />
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.4;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.4);
            opacity: 0;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .back-to-top-container {
            bottom: 20px !important;
            right: 20px !important;
          }
          
          .back-to-top-button {
            width: 50px !important;
            height: 50px !important;
          }
          
          .back-to-top-svg {
            width: 50px !important;
            height: 50px !important;
          }
        }
      `}</style>
    </>
  );
};

export default BackToTop;