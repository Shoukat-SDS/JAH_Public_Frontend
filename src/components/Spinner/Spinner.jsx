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
    }, 1800)
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
          className="position-absolute rounded-circle"
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
          className="position-absolute rounded-circle"
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
          className="position-absolute rounded-circle"
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
            className="position-absolute top-50 start-50 translate-middle"
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
        <div className="mx-auto mb-4" style={{ width: '200px' }}>
          <div 
            className="bg-white bg-opacity-20 rounded-pill overflow-hidden"
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
        <div className="d-flex justify-content-center gap-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="rounded-circle"
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
        <div className="mt-4">
          <p className="text-white-50 small mb-0" style={{ fontStyle: 'italic' }}>
            "Knowledge is the light that illuminates the path"
          </p>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
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
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          #spinner img {
            max-height: 60px !important;
          }
          
          #spinner h4 {
            font-size: 1.3rem !important;
          }
          
          #spinner p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </div>
  )
}
