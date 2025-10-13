// components/Topbar/Topbar.jsx
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap"
import { NavLink, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import Logo from "../../assets/Logo.png"

export default function Topbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div 
        className={`container-fluid fixed-top transition-all ${scrolled ? 'navbar-scrolled' : ''}`}
        style={{
          background: scrolled 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: scrolled ? '1px solid rgba(36, 91, 90, 0.1)' : 'none',
          boxShadow: scrolled 
            ? '0 2px 20px rgba(0, 0, 0, 0.1)' 
            : '0 1px 3px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease',
          zIndex: 1050
        }}
      >
        <Container>
          <Navbar expand="lg" className={`py-3 ${scrolled ? 'py-2' : 'py-3'}`} style={{ background: 'transparent' }}>
            
            {/* Logo/Brand */}
            <Navbar.Brand as={NavLink} to="/" className="me-1 d-flex align-items-center">
              <div className="position-relative">
                <img 
                  src={Logo} 
                  className="logo transition-all" 
                  alt="Jamat-e-Ahle Hadis Logo"
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(36, 91, 90, 0.1))',
                    transition: 'all 0.3s ease',
                    maxHeight: scrolled ? '45px' : '55px'
                  }}
                />
              </div>
            </Navbar.Brand>

            {/* Mobile Toggle Button */}
            <Navbar.Toggle 
              aria-controls="navbarCollapse" 
              className="border-0 shadow-none me-3"
              style={{
                background: 'rgba(36, 91, 90, 0.1)',
                borderRadius: '8px',
                padding: '8px 12px'
              }}
            >
              <span className="navbar-toggler-icon">
                <i className="fas fa-bars" style={{ color: '#245b5a', fontSize: '1.2rem' }}></i>
              </span>
            </Navbar.Toggle>

            <Navbar.Collapse id="navbarCollapse">
              
              {/* Navigation Links */}
              <Nav className="ms-lg-auto mx-xl-auto align-items-lg-center">
                
                <Nav.Link 
                  as={NavLink} 
                  to="/" 
                  end
                  className="nav-link-custom mx-2 position-relative fw-semibold"
                  style={{
                    color: location.pathname === '/' ? '#b28721' : '#245b5a',
                    transition: 'all 0.3s ease',
                    padding: '8px 16px',
                    borderRadius: '25px',
                    background: location.pathname === '/' ? 'rgba(178, 135, 33, 0.1)' : 'transparent'
                  }}
                >
                  <i className="fas fa-home me-2" style={{ fontSize: '0.9rem' }}></i>
                  Home
                </Nav.Link>

                <Nav.Link 
                  as={NavLink} 
                  to="/about"
                  className="nav-link-custom mx-2 position-relative fw-semibold"
                  style={{
                    color: location.pathname === '/about' ? '#b28721' : '#245b5a',
                    transition: 'all 0.3s ease',
                    padding: '8px 16px',
                    borderRadius: '25px',
                    background: location.pathname === '/about' ? 'rgba(178, 135, 33, 0.1)' : 'transparent'
                  }}
                >
                  <i className="fas fa-info-circle me-2" style={{ fontSize: '0.9rem' }}></i>
                  About
                </Nav.Link>

                <Nav.Link 
                  as={NavLink} 
                  to="/projects"
                  className="nav-link-custom mx-2 position-relative fw-semibold"
                  style={{
                    color: location.pathname === '/projects' ? '#b28721' : '#245b5a',
                    transition: 'all 0.3s ease',
                    padding: '8px 16px',
                    borderRadius: '25px',
                    background: location.pathname === '/projects' ? 'rgba(178, 135, 33, 0.1)' : 'transparent'
                  }}
                >
                  <i className="fas fa-project-diagram me-2" style={{ fontSize: '0.9rem' }}></i>
                  Projects
                </Nav.Link>

                {/* Departments Dropdown */}
                <NavDropdown 
                  title={
                    <span className="fw-semibold" style={{ color: '#245b5a' }}>
                      <i className="fas fa-building me-2" style={{ fontSize: '0.9rem' }}></i>
                      Departments
                    </span>
                  }
                  id="pages-dropdown"
                  className="mx-2"
                  style={{
                    borderRadius: '25px',
                  }}
                >
                  <div 
                    style={{
                      background: 'rgba(255, 255, 255, 0.98)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(36, 91, 90, 0.1)',
                      borderRadius: '15px',
                      padding: '10px 5px',
                      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
                      marginTop: '10px'
                    }}
                  >
                    <NavDropdown.Item 
                      as={NavLink} 
                      to="/departments/education"
                      className="rounded-pill mx-2 mb-2 fw-medium"
                      style={{
                        color: '#245b5a',
                        padding: '10px 20px',
                        transition: 'all 0.3s ease',
                        border: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(178, 135, 33, 0.1)'
                        e.target.style.color = '#b28721'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent'
                        e.target.style.color = '#245b5a'
                      }}
                    >
                      <i className="fas fa-graduation-cap me-2"></i>
                      Education
                    </NavDropdown.Item>
                    
                    <NavDropdown.Item 
                      as={NavLink} 
                      to="/departments/welfare"
                      className="rounded-pill mx-2 fw-medium"
                      style={{
                        color: '#245b5a',
                        padding: '10px 20px',
                        transition: 'all 0.3s ease',
                        border: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(178, 135, 33, 0.1)'
                        e.target.style.color = '#b28721'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent'
                        e.target.style.color = '#245b5a'
                      }}
                    >
                      <i className="fas fa-hands-helping me-2"></i>
                      Welfare
                    </NavDropdown.Item>
                  </div>
                </NavDropdown>

                <Nav.Link 
                  as={NavLink} 
                  to="/contact"
                  className="nav-link-custom mx-2 position-relative fw-semibold"
                  style={{
                    color: location.pathname === '/contact' ? '#b28721' : '#245b5a',
                    transition: 'all 0.3s ease',
                    padding: '8px 16px',
                    borderRadius: '25px',
                    background: location.pathname === '/contact' ? 'rgba(178, 135, 33, 0.1)' : 'transparent'
                  }}
                >
                  <i className="fas fa-envelope me-2" style={{ fontSize: '0.9rem' }}></i>
                  Contact
                </Nav.Link>

              </Nav>

              {/* Donate Button */}
              <div className="d-flex align-items-center ms-lg-3">
                <Button
                  as={NavLink}
                  to="/donate"
                  className="btn btn-bg-primary text-white border-0 fw-semibold d-none d-xl-inline-flex align-items-center rounded-pill px-4 py-2"
                  style={{
                    background: 'linear-gradient(135deg, #b28721 0%, #d4a532 100%)',
                    boxShadow: '0 4px 15px rgba(178, 135, 33, 0.3)',
                    transition: 'all 0.3s ease',
                    fontSize: '0.95rem',
                    letterSpacing: '0.5px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)'
                    e.target.style.boxShadow = '0 6px 20px rgba(178, 135, 33, 0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = '0 4px 15px rgba(178, 135, 33, 0.3)'
                  }}
                >
                  <i className="fas fa-heart me-2" style={{ fontSize: '0.9rem' }}></i>
                  Donate Now
                </Button>

                {/* Mobile Donate Button */}
                <Button
                  as={NavLink}
                  to="/donate"
                  className="btn btn-bg-primary text-white border-0 fw-semibold d-xl-none w-100 mt-3 rounded-pill py-2"
                  style={{
                    background: 'linear-gradient(135deg, #b28721 0%, #d4a532 100%)',
                    boxShadow: '0 4px 15px rgba(178, 135, 33, 0.3)'
                  }}
                >
                  <i className="fas fa-heart me-2"></i>
                  Donate Now
                </Button>
              </div>

            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>

      {/* Enhanced Responsive Styles */}
      <style>{`
        .nav-link-custom:hover {
          background: rgba(178, 135, 33, 0.1) !important;
          color: #b28721 !important;
          transform: translateY(-1px);
        }
        
        .navbar-nav .nav-link.active {
          color: #b28721 !important;
          background: rgba(178, 135, 33, 0.1) !important;
        }
        
        .dropdown-toggle::after {
          display: none;
        }
        
        .navbar-toggler:focus {
          box-shadow: none !important;
        }
        
        .transition-all {
          transition: all 0.3s ease !important;
        }
        
        /* Large Desktop (1200px and up) */
        @media (min-width: 1200px) {
          .container-fluid .container {
            max-width: 1140px;
          }
          
          .nav-link-custom {
            padding: 8px 20px !important;
            margin: 0 4px !important;
          }
        }
        
        /* Desktop (992px - 1199px) */
        @media (min-width: 992px) and (max-width: 1199.98px) {
          .nav-link-custom {
            padding: 8px 16px !important;
            margin: 0 2px !important;
            font-size: 0.95rem !important;
          }
          
          .navbar-brand img {
            max-height: 50px !important;
          }
        }
        
        /* Tablet (768px - 991px) */
        @media (min-width: 768px) and (max-width: 991.98px) {
          .navbar-collapse {
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(15px);
            border-radius: 20px;
            margin-top: 15px;
            padding: 25px 20px;
            box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
            border: 1px solid rgba(36, 91, 90, 0.1);
          }
          
          .nav-link-custom {
            margin: 8px auto !important;
            text-align: center;
            display: block;
            width: 200px;
            padding: 12px 24px !important;
            border-radius: 25px !important;
            font-size: 1rem !important;
          }
          
          .navbar-brand img {
            max-height: 45px !important;
          }
          
          .navbar-toggler {
            padding: 10px 14px !important;
          }
        }
        
        /* Mobile Large (576px - 767px) */
        @media (min-width: 576px) and (max-width: 767.98px) {
          .container-fluid {
            padding-left: 15px;
            padding-right: 15px;
          }
          
          .navbar {
            padding-top: 12px !important;
            padding-bottom: 12px !important;
          }
          
          .navbar-collapse {
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(15px);
            border-radius: 20px;
            margin-top: 15px;
            padding: 20px 15px;
            box-shadow: 0 15px 50px rgba(0, 0, 0, 0.25);
            border: 1px solid rgba(36, 91, 90, 0.1);
            animation: slideDown 0.3s ease-out;
          }
          
          .nav-link-custom {
            margin: 6px auto !important;
            text-align: center;
            display: block;
            width: 180px;
            padding: 14px 20px !important;
            border-radius: 25px !important;
            font-size: 1rem !important;
            font-weight: 600 !important;
          }
          
          .navbar-brand img {
            max-height: 40px !important;
          }
          
          .navbar-toggler {
            padding: 8px 12px !important;
            margin-right: 8px !important;
          }
          
          .navbar-toggler i {
            font-size: 1.1rem !important;
          }
          
          /* Dropdown styles for mobile */
          .dropdown-menu {
            background: rgba(245, 245, 245, 0.95) !important;
            border: none !important;
            border-radius: 15px !important;
            margin-top: 10px !important;
            padding: 10px 5px !important;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;
          }
          
          .dropdown-item {
            border-radius: 20px !important;
            margin: 5px 10px !important;
            padding: 12px 20px !important;
            font-weight: 600 !important;
            text-align: center !important;
          }
        }
        
        /* Mobile Medium (375px - 575px) */
        @media (min-width: 375px) and (max-width: 575.98px) {
          .container-fluid {
            padding-left: 10px;
            padding-right: 10px;
          }
          
          .container {
            padding-left: 0;
            padding-right: 0;
          }
          
          .navbar {
            padding-top: 10px !important;
            padding-bottom: 10px !important;
          }
          
          .navbar-brand {
            margin-right: 5px !important;
          }
          
          .navbar-brand img {
            max-height: 38px !important;
          }
          
          .navbar-toggler {
            padding: 6px 10px !important;
            margin-right: 5px !important;
            font-size: 0.9rem !important;
          }
          
          .navbar-toggler i {
            font-size: 1rem !important;
          }
          
          .navbar-collapse {
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(15px);
            border-radius: 18px;
            margin-top: 12px;
            padding: 18px 12px;
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
            border: 1px solid rgba(36, 91, 90, 0.1);
            animation: slideDown 0.3s ease-out;
            max-height: 80vh;
            overflow-y: auto;
          }
          
          .nav-link-custom {
            margin: 5px auto !important;
            text-align: center;
            display: block;
            width: 90%;
            max-width: 250px;
            padding: 12px 16px !important;
            border-radius: 20px !important;
            font-size: 0.95rem !important;
            font-weight: 600 !important;
          }
          
          .nav-link-custom i {
            font-size: 0.85rem !important;
            margin-right: 8px !important;
          }
          
          /* Mobile dropdown improvements */
          .dropdown-menu {
            background: rgba(240, 240, 240, 0.98) !important;
            border: none !important;
            border-radius: 15px !important;
            margin: 8px auto !important;
            padding: 8px 5px !important;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
            width: 90% !important;
            max-width: 250px !important;
          }
          
          .dropdown-item {
            border-radius: 18px !important;
            margin: 4px 8px !important;
            padding: 10px 16px !important;
            font-weight: 600 !important;
            text-align: center !important;
            font-size: 0.9rem !important;
          }
          
          .dropdown-item i {
            font-size: 0.8rem !important;
            margin-right: 6px !important;
          }
          
          /* Mobile donate button */
          .d-xl-none {
            width: 90% !important;
            max-width: 250px !important;
            margin: 15px auto 5px auto !important;
            padding: 12px 20px !important;
            font-size: 0.95rem !important;
            font-weight: 600 !important;
          }
          
          .d-xl-none i {
            font-size: 0.85rem !important;
          }
        }
        
        /* Mobile Small (320px - 374px) */
        @media (max-width: 374.98px) {
          .container-fluid {
            padding-left: 8px;
            padding-right: 8px;
          }
          
          .navbar {
            padding-top: 8px !important;
            padding-bottom: 8px !important;
          }
          
          .navbar-brand img {
            max-height: 35px !important;
          }
          
          .navbar-toggler {
            padding: 5px 8px !important;
            margin-right: 3px !important;
          }
          
          .navbar-toggler i {
            font-size: 0.95rem !important;
          }
          
          .navbar-collapse {
            padding: 15px 10px !important;
            margin-top: 10px !important;
            border-radius: 15px !important;
          }
          
          .nav-link-custom {
            width: 95% !important;
            padding: 10px 12px !important;
            font-size: 0.9rem !important;
            margin: 4px auto !important;
          }
          
          .nav-link-custom i {
            font-size: 0.8rem !important;
            margin-right: 6px !important;
          }
          
          .dropdown-item {
            padding: 8px 12px !important;
            font-size: 0.85rem !important;
            margin: 3px 6px !important;
          }
          
          .d-xl-none {
            width: 95% !important;
            padding: 10px 16px !important;
            font-size: 0.9rem !important;
            margin: 12px auto 3px auto !important;
          }
        }
        
        /* Animation for mobile menu */
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        /* Ensure smooth scrolling on mobile */
        .navbar-collapse {
          -webkit-overflow-scrolling: touch;
        }
        
        /* Touch-friendly hover states for mobile */
        @media (hover: none) and (pointer: coarse) {
          .nav-link-custom:hover {
            transform: none !important;
          }
          
          .nav-link-custom:active {
            background: rgba(178, 135, 33, 0.2) !important;
            transform: scale(0.98) !important;
          }
        }
        
        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .navbar-brand img {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        }
        
        /* Landscape orientation adjustments */
        @media (max-height: 500px) and (orientation: landscape) {
          .navbar-collapse {
            max-height: 60vh !important;
            padding: 12px 15px !important;
          }
          
          .nav-link-custom {
            padding: 8px 16px !important;
            margin: 3px auto !important;
            font-size: 0.9rem !important;
          }
          
          .d-xl-none {
            margin: 10px auto 3px auto !important;
            padding: 8px 16px !important;
          }
        }
        
        /* Focus states for accessibility */
        .navbar-toggler:focus-visible {
          outline: 2px solid #b28721;
          outline-offset: 2px;
        }
        
        .nav-link-custom:focus-visible {
          outline: 2px solid #b28721;
          outline-offset: 2px;
          border-radius: 25px;
        }
        
        /* Prevent text selection on mobile */
        .navbar-brand, .nav-link-custom, .navbar-toggler {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      `}</style>
    </>
  )
}
