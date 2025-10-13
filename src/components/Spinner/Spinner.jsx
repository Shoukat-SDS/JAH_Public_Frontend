// components/Spinner/Spinner.jsx
import { useState, useEffect } from "react"
import Logo from "../../assets/Logo.png"

export default function Spinner() {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  // Spinner timing with smooth fade out
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => setLoading(false), 500) // Additional 500ms for fade out animation
    }, 3500)
    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div
      id="spinner"
      className={`show w-100 vh-100 position-fixed top-0 start-0 d-flex align-items-center justify-content-center ${fadeOut ? 'fade-out' : ''}`}
      style={{
        background: 'linear-gradient(135deg, #245b5a 0%, #1a4544 30%, #245b5a 70%, #2d6b6a 100%)',
        zIndex: 9999,
        transition: 'opacity 0.5s ease-out, visibility 0.5s ease-out',
        opacity: fadeOut ? 0 : 1,
        visibility: fadeOut ? 'hidden' : 'visible'
      }}
    >
      {/* Animated Background Elements */}
      <div className="position-absolute w-100 h-100 overflow-hidden">
        {/* Floating Circles */}
        <div 
          className="position-absolute rounded-circle floating-circle-1"
          style={{
            width: '200px',
            height: '200px',
            background: 'rgba(178, 135, 33, 0.1)',
            top: '10%',
            right: '15%',
            animation: 'float 6s ease-in-out infinite'
          }}
        />
        <div 
          className="position-absolute rounded-circle floating-circle-2"
          style={{
            width: '150px',
            height: '150px',
            background: 'rgba(178, 135, 33, 0.08)',
            bottom: '15%',
            left: '20%',
            animation: 'float 4s ease-in-out infinite reverse'
          }}
        />
        <div 
          className="position-absolute rounded-circle floating-circle-3"
          style={{
            width: '100px',
            height: '100px',
            background: 'rgba(255, 255, 255, 0.05)',
            top: '60%',
            right: '25%',
            animation: 'float 8s ease-in-out infinite'
          }}
        />
      </div>

      {/* Main Loading Content */}
      <div className="text-center position-relative" style={{ zIndex: 2 }}>
        
        {/* Logo Container */}
        <div className="mb-4 position-relative">
          <div 
            className="d-inline-block position-relative"
            style={{
              animation: 'logoFloat 3s ease-in-out infinite'
            }}
          >
            <img 
              src={Logo} 
              alt="Jamat-e-Ahle Hadis" 
              className="img-fluid"
              style={{
                maxHeight: '80px',
                filter: 'brightness(0) invert(1) drop-shadow(0 4px 8px rgba(255, 255, 255, 0.3))',
                animation: 'logoGlow 2s ease-in-out infinite alternate'
              }}
            />
          </div>
          
          {/* Rotating Ring Around Logo */}
          <div 
            className="position-absolute top-50 start-50 translate-middle spinner-ring"
            style={{
              width: '120px',
              height: '120px',
              border: '3px solid transparent',
              borderTop: '3px solid #b28721',
              borderRight: '3px solid #b28721',
              borderRadius: '50%',
              animation: 'spin 2s linear infinite'
            }}
          />
        </div>

        {/* Loading Text */}
        <div className="mb-4">
          <h4 className="text-white fw-bold mb-2" style={{ letterSpacing: '1px' }}>
            Welcome to Jamat-e-Ahle Hadis
          </h4>
          <p className="text-white-50 mb-0" style={{ fontSize: '1.1rem' }}>
            Loading your experience...
          </p>
        </div>

        {/* Modern Progress Bar */}
        <div className="mx-auto mb-4 progress-bar-container" style={{ width: '200px' }}>
          <div 
            className="bg-white bg-opacity-20 rounded-pill overflow-hidden progress-bar"
            style={{ height: '4px' }}
          >
            <div 
              className="h-100 rounded-pill"
              style={{
                width: '100%',
                background: 'linear-gradient(90deg, #b28721 0%, #d4a532 50%, #b28721 100%)',
                animation: 'progressSlide 2s ease-in-out infinite'
              }}
            />
          </div>
        </div>

        {/* Loading Dots */}
        <div className="d-flex justify-content-center gap-2 loading-dots">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="rounded-circle loading-dot"
              style={{
                width: '8px',
                height: '8px',
                background: '#b28721',
                animation: `loadingDots 1.5s ease-in-out infinite ${index * 0.2}s`
              }}
            />
          ))}
        </div>

        {/* Inspirational Text */}
        <div className="mt-4 inspirational-text">
          <p className="text-white-50 small mb-0" style={{ fontStyle: 'italic' }}>
            "Knowledge is the light that illuminates the path"
          </p>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes spin {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.05); }
        }
        
        @keyframes logoGlow {
          0% { filter: brightness(0) invert(1) drop-shadow(0 4px 8px rgba(255, 255, 255, 0.3)); }
          100% { filter: brightness(0) invert(1) drop-shadow(0 4px 15px rgba(178, 135, 33, 0.8)); }
        }
        
        @keyframes progressSlide {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes loadingDots {
          0%, 80%, 100% { 
            transform: scale(0.8); 
            opacity: 0.5; 
          }
          40% { 
            transform: scale(1.2); 
            opacity: 1; 
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .fade-out {
          opacity: 0 !important;
          visibility: hidden !important;
        }
        
        #spinner h4 {
          animation: fadeInUp 1s ease-out 0.5s both;
        }
        
        #spinner p {
          animation: fadeInUp 1s ease-out 0.7s both;
        }
        
        /* Comprehensive Responsive Design */
        
        /* Large Desktop (1200px+) */
        @media (min-width: 1200px) {
          #spinner img {
            max-height: 90px !important;
          }
          
          #spinner h4 {
            font-size: 1.8rem !important;
            letter-spacing: 1.5px !important;
          }
          
          #spinner p {
            font-size: 1.2rem !important;
          }
          
          .spinner-ring {
            width: 140px !important;
            height: 140px !important;
          }
          
          .progress-bar-container {
            width: 250px !important;
          }
        }
        
        /* Desktop (992px - 1199px) */
        @media (min-width: 992px) and (max-width: 1199.98px) {
          #spinner img {
            max-height: 80px !important;
          }
          
          #spinner h4 {
            font-size: 1.6rem !important;
          }
          
          #spinner p {
            font-size: 1.1rem !important;
          }
          
          .spinner-ring {
            width: 120px !important;
            height: 120px !important;
          }
        }
        
        /* Tablet (768px - 991px) */
        @media (min-width: 768px) and (max-width: 991.98px) {
          #spinner img {
            max-height: 70px !important;
          }
          
          #spinner h4 {
            font-size: 1.4rem !important;
            letter-spacing: 0.8px !important;
          }
          
          #spinner p {
            font-size: 1.05rem !important;
          }
          
          .spinner-ring {
            width: 110px !important;
            height: 110px !important;
          }
          
          .progress-bar-container {
            width: 180px !important;
          }
          
          .floating-circle-1 {
            width: 150px !important;
            height: 150px !important;
          }
          
          .floating-circle-2 {
            width: 120px !important;
            height: 120px !important;
          }
          
          .floating-circle-3 {
            width: 80px !important;
            height: 80px !important;
          }
        }
        
        /* Mobile Large (576px - 767px) */
        @media (min-width: 576px) and (max-width: 767.98px) {
          #spinner {
            padding: 20px !important;
          }
          
          #spinner img {
            max-height: 60px !important;
          }
          
          #spinner h4 {
            font-size: 1.3rem !important;
            letter-spacing: 0.5px !important;
            margin-bottom: 12px !important;
          }
          
          #spinner p {
            font-size: 1rem !important;
            line-height: 1.4 !important;
          }
          
          .spinner-ring {
            width: 100px !important;
            height: 100px !important;
            border-width: 2.5px !important;
          }
          
          .progress-bar-container {
            width: 160px !important;
            margin-bottom: 20px !important;
          }
          
          .loading-dots {
            gap: 6px !important;
          }
          
          .loading-dot {
            width: 6px !important;
            height: 6px !important;
          }
          
          .inspirational-text {
            font-size: 0.85rem !important;
            margin-top: 20px !important;
          }
          
          .floating-circle-1 {
            width: 120px !important;
            height: 120px !important;
            top: 8% !important;
            right: 10% !important;
          }
          
          .floating-circle-2 {
            width: 100px !important;
            height: 100px !important;
            bottom: 12% !important;
            left: 15% !important;
          }
          
          .floating-circle-3 {
            width: 70px !important;
            height: 70px !important;
            top: 65% !important;
            right: 20% !important;
          }
        }
        
        /* Mobile Medium (375px - 575px) */
        @media (min-width: 375px) and (max-width: 575.98px) {
          #spinner {
            padding: 15px !important;
          }
          
          #spinner img {
            max-height: 50px !important;
          }
          
          #spinner h4 {
            font-size: 1.1rem !important;
            letter-spacing: 0.3px !important;
            margin-bottom: 10px !important;
            line-height: 1.3 !important;
          }
          
          #spinner p {
            font-size: 0.9rem !important;
            line-height: 1.4 !important;
          }
          
          .spinner-ring {
            width: 85px !important;
            height: 85px !important;
            border-width: 2px !important;
          }
          
          .progress-bar-container {
            width: 140px !important;
            margin-bottom: 16px !important;
          }
          
          .progress-bar {
            height: 3px !important;
          }
          
          .loading-dots {
            gap: 4px !important;
          }
          
          .loading-dot {
            width: 5px !important;
            height: 5px !important;
          }
          
          .inspirational-text {
            font-size: 0.8rem !important;
            margin-top: 16px !important;
            padding: 0 20px !important;
          }
          
          .floating-circle-1 {
            width: 100px !important;
            height: 100px !important;
            top: 5% !important;
            right: 5% !important;
          }
          
          .floating-circle-2 {
            width: 80px !important;
            height: 80px !important;
            bottom: 10% !important;
            left: 10% !important;
          }
          
          .floating-circle-3 {
            width: 60px !important;
            height: 60px !important;
            top: 70% !important;
            right: 15% !important;
          }
        }
        
        /* Mobile Small (320px - 374px) */
        @media (max-width: 374.98px) {
          #spinner {
            padding: 12px !important;
          }
          
          #spinner img {
            max-height: 45px !important;
          }
          
          #spinner h4 {
            font-size: 1rem !important;
            letter-spacing: 0.2px !important;
            margin-bottom: 8px !important;
            line-height: 1.2 !important;
          }
          
          #spinner p {
            font-size: 0.85rem !important;
            line-height: 1.3 !important;
          }
          
          .spinner-ring {
            width: 75px !important;
            height: 75px !important;
            border-width: 2px !important;
          }
          
          .progress-bar-container {
            width: 120px !important;
            margin-bottom: 14px !important;
          }
          
          .progress-bar {
            height: 2.5px !important;
          }
          
          .loading-dots {
            gap: 3px !important;
          }
          
          .loading-dot {
            width: 4px !important;
            height: 4px !important;
          }
          
          .inspirational-text {
            font-size: 0.75rem !important;
            margin-top: 14px !important;
            padding: 0 15px !important;
          }
          
          .floating-circle-1 {
            width: 80px !important;
            height: 80px !important;
            top: 3% !important;
            right: 3% !important;
          }
          
          .floating-circle-2 {
            width: 65px !important;
            height: 65px !important;
            bottom: 8% !important;
            left: 8% !important;
          }
          
          .floating-circle-3 {
            width: 50px !important;
            height: 50px !important;
            top: 75% !important;
            right: 12% !important;
          }
        }
        
        /* Landscape orientation adjustments */
        @media (max-height: 500px) and (orientation: landscape) {
          #spinner {
            padding: 10px !important;
          }
          
          #spinner img {
            max-height: 35px !important;
          }
          
          #spinner h4 {
            font-size: 0.9rem !important;
            margin-bottom: 6px !important;
          }
          
          #spinner p {
            font-size: 0.8rem !important;
          }
          
          .spinner-ring {
            width: 60px !important;
            height: 60px !important;
          }
          
          .progress-bar-container {
            width: 100px !important;
            margin-bottom: 10px !important;
          }
          
          .inspirational-text {
            font-size: 0.7rem !important;
            margin-top: 10px !important;
          }
          
          .floating-circle-1,
          .floating-circle-2,
          .floating-circle-3 {
            display: none !important;
          }
        }
        
        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          #spinner img {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        }
        
        /* Reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          #spinner * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  )
}
