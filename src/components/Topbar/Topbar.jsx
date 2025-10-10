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

      {/* Custom Styles */}
      <style jsx>{`
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
        
        @media (max-width: 991.98px) {
          .navbar-collapse {
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            margin-top: 15px;
            padding: 20px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          }
          
          .nav-link-custom {
            margin: 5px 0 !important;
            text-align: center;
          }
        }
      `}</style>
    </>
  )
}
