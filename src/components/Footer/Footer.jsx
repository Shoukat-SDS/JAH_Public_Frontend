// components/Footer/Footer.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const navigationLinks = [
    { name: "Home", path: "/", icon: "fas fa-home" },
    { name: "About Us", path: "/about", icon: "fas fa-info-circle" },
    { name: "Projects", path: "/projects", icon: "fas fa-project-diagram" },
    { name: "Education", path: "/departments/education", icon: "fas fa-graduation-cap" },
    { name: "Welfare", path: "/departments/welfare", icon: "fas fa-hands-helping" },
    // { name: "Medical Services", path: "/about", icon: "fas fa-heartbeat" },
    { name: "Contact", path: "/contact", icon: "fas fa-envelope" },
    { name: "Donate", path: "/donate", icon: "fas fa-heart" }
  ];

  const contactNumbers = [
    { name: "Dr. Zakariya", number: "0321-2410046", icon: "fas fa-user-md" },
    { name: "Dr. Ayub", number: "0321-2637154", icon: "fas fa-user-md" },
    { name: "Office 1", number: "0348-0089000", icon: "fas fa-building" },
    { name: "Office 2", number: "0213-6346375", icon: "fas fa-building" }
  ];

  const campuses = [
    { name: "Jamia Dar-ul-Hadith Rehmania", location: "Soldier Bazar", icon: "fas fa-university" },
    { name: "Main Campus Bait-us-Salaam", location: "Azizabad", icon: "fas fa-school" },
    { name: "Dastagir Campus", location: "FB Area", icon: "fas fa-school" },
    { name: "Surjani Campus", location: "Surjani Town", icon: "fas fa-school" }
  ];

  return (
    <div className="container-fluid footer pt-0 position-relative overflow-hidden" 
         style={{ background: "linear-gradient(135deg, #1a4544 0%, #245b5a 50%, #2d6b6a 100%)" }}>
      
      {/* Background Pattern */}
      <div className="position-absolute w-100 h-100">
        <div className="position-absolute" 
             style={{
               top: "-100px",
               right: "-100px",
               width: "300px",
               height: "300px",
               background: "rgba(178, 135, 33, 0.05)",
               borderRadius: "50%"
             }}>
        </div>
        <div className="position-absolute" 
             style={{
               bottom: "-150px",
               left: "-150px",
               width: "400px",
               height: "400px",
               background: "rgba(178, 135, 33, 0.03)",
               borderRadius: "50%"
             }}>
        </div>
      </div>

      <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
        
        {/* Newsletter Section */}
        <div className="row py-5 align-items-center">
          <div className="col-lg-7 mb-4 mb-lg-0">
            <div className="d-flex align-items-center mb-3">
              <div className="me-3">
                <i className="fas fa-envelope-open fs-1" style={{ color: "#b28721" }}></i>
              </div>
              <div>
                <h2 className="text-white fw-bold mb-2">Stay Connected with Our Mission</h2>
                <p className="text-white-50 mb-0 fs-5">
                  Subscribe to receive updates about our educational programs, medical services, and community initiatives
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-5">
            <form onSubmit={handleSubscribe}>
              <div className="card border-0 shadow-lg" style={{ borderRadius: "15px" }}>
                <div className="card-body p-2">
                  <div className="input-group">
                    <input
                      className="form-control border-0 py-3 ps-4"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={{ 
                        fontSize: "1.1rem",
                        borderRadius: "15px 0 0 15px"
                      }}
                    />
                    <button
                      type="submit"
                      className="btn btn-bg-primary text-white px-4 fw-semibold"
                      style={{
                        borderRadius: "0 15px 15px 0",
                        transition: "all 0.3s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.05)"
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)"
                      }}
                    >
                      {subscribed ? (
                        <>
                          <i className="fas fa-check me-2"></i>
                          Subscribed!
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane me-2"></i>
                          Subscribe
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
            {subscribed && (
              <div className="text-center mt-2">
                <small className="text-white-50">
                  <i className="fas fa-check-circle me-1" style={{ color: "#b28721" }}></i>
                  Thank you for subscribing to our newsletter!
                </small>
              </div>
            )}
          </div>
          
          <div className="col-12 mt-5">
            <div style={{ 
              height: "1px", 
              background: "linear-gradient(90deg, transparent 0%, rgba(178, 135, 33, 0.5) 50%, transparent 100%)" 
            }}></div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="row g-4 footer-inner">
          
          {/* Organization Info */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-item">
              <div className="mb-4">
                <h3 className="text-white fw-bold mb-2">
                  JAMAT-E-<span style={{ color: "#b28721" }}>AHLE HADIS</span>
                </h3>
                <div className="d-flex align-items-center">
                  <div className="bg-secondary me-2" style={{ width: "40px", height: "3px", borderRadius: "2px" }}></div>
                  <div className="bg-white" style={{ width: "15px", height: "3px", borderRadius: "2px", opacity: "0.5" }}></div>
                </div>
              </div>
              
              <p className="text-white-50 mb-4 lh-lg">
                Serving the community through Islamic and modern education, healthcare, and welfare programs. 
                Creating a society rooted in faith, knowledge, and compassion across Karachi.
              </p>
              
              <div className="d-flex gap-3 mb-4">
                <Link 
                  to="/donate" 
                  className="btn text-white fw-semibold px-4 py-3 rounded-pill"
                  style={{
                    background: "linear-gradient(135deg, #b28721 0%, #d4a532 100%)",
                    boxShadow: "0 4px 15px rgba(178, 135, 33, 0.3)",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)"
                    e.target.style.boxShadow = "0 6px 20px rgba(178, 135, 33, 0.4)"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)"
                    e.target.style.boxShadow = "0 4px 15px rgba(178, 135, 33, 0.3)"
                  }}
                >
                  <i className="fas fa-heart me-2"></i>
                  Donate Now
                </Link>
                
                <Link 
                  to="/about" 
                  className="btn btn-outline-light fw-semibold px-4 py-3 rounded-pill"
                  style={{ transition: "all 0.3s ease" }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-item">
              <h4 className="text-white fw-bold mb-4">
                <i className="fas fa-address-book me-2" style={{ color: "#b28721" }}></i>
                Contact Information
              </h4>
              
              {/* Address */}
              <div className="card border-0 mb-4" 
                   style={{ 
                     background: "rgba(255, 255, 255, 0.05)", 
                     borderRadius: "15px" 
                   }}>
                <div className="card-body p-3">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 me-3">
                      <div className="btn-square rounded-circle d-flex align-items-center justify-content-center"
                           style={{ background: "#b28721", width: "40px", height: "40px" }}>
                        <i className="fas fa-map-marker-alt text-white"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="text-white fw-semibold mb-1">Our Address</h6>
                      <a
                        href="https://maps.app.goo.gl/795RnFdNZENHhsNz8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white-50 text-decoration-none small"
                        style={{ transition: "color 0.3s ease" }}
                        onMouseEnter={(e) => e.target.style.color = "#b28721"}
                        onMouseLeave={(e) => e.target.style.color = "rgba(255, 255, 255, 0.5)"}
                      >
                        Office No. 01, First Floor, Adjacent to Jamia Masjid Bait-us-Salaam, Azizabad, Karachi
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Numbers */}
              <h6 className="text-white fw-semibold mb-3">
                <i className="fas fa-phone-volume me-2" style={{ color: "#b28721" }}></i>
                Contact Numbers
              </h6>
              <div className="row g-2">
                {contactNumbers.map((contact, index) => (
                  <div key={index} className="col-12">
                    <div className="d-flex align-items-center p-2 rounded-3"
                         style={{ 
                           background: "rgba(255, 255, 255, 0.03)",
                           transition: "all 0.3s ease" 
                         }}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.background = "rgba(178, 135, 33, 0.1)"
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)"
                         }}>
                      <div className="me-2">
                        <i className={`${contact.icon} text-white`} style={{ fontSize: "0.9rem", opacity: "0.8" }}></i>
                      </div>
                      <div className="flex-grow-1">
                        <div className="text-white-50 small">{contact.name}</div>
                        <a href={`tel:${contact.number}`} 
                           className="text-white text-decoration-none fw-medium"
                           style={{ fontSize: "0.9rem" }}>
                          {contact.number}
                        </a>
                      </div>
                      <div>
                        <a href={`https://wa.me/92${contact.number.replace(/[^0-9]/g, '').substring(1)}`} 
                           className="btn btn-sm rounded-circle p-1"
                           style={{ background: "#25D366", width: "30px", height: "30px" }}
                           title="WhatsApp">
                          <i className="fab fa-whatsapp text-white" style={{ fontSize: "0.8rem" }}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-item">
              <h4 className="text-white fw-bold mb-4">
                <i className="fas fa-sitemap me-2" style={{ color: "#b28721" }}></i>
                Quick Navigation
              </h4>
              <div className="row g-2">
                {navigationLinks.map((link, index) => (
                  <div key={index} className="col-12">
                    <Link 
                      to={link.path}
                      className="d-flex align-items-center text-decoration-none p-2 rounded-3"
                      style={{ 
                        transition: "all 0.3s ease",
                        background: "rgba(255, 255, 255, 0.02)"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(178, 135, 33, 0.1)"
                        e.currentTarget.style.transform = "translateX(5px)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)"
                        e.currentTarget.style.transform = "translateX(0)"
                      }}
                    >
                      <div className="me-3">
                        <i className={`${link.icon} text-white`} style={{ fontSize: "0.9rem", opacity: "0.8", width: "16px" }}></i>
                      </div>
                      <span className="text-white-50 fw-medium">{link.name}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Campuses */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-item">
              <h4 className="text-white fw-bold mb-4">
                <i className="fas fa-university me-2" style={{ color: "#b28721" }}></i>
                Our Campuses
              </h4>
              <p className="text-white-50 mb-4">Spreading knowledge across Karachi:</p>
              
              {campuses.map((campus, index) => (
                <div key={index} className="card border-0 mb-3" 
                     style={{ 
                       background: "rgba(255, 255, 255, 0.05)", 
                       borderRadius: "12px",
                       transition: "all 0.3s ease"
                     }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.background = "rgba(178, 135, 33, 0.1)"
                       e.currentTarget.style.transform = "scale(1.02)"
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"
                       e.currentTarget.style.transform = "scale(1)"
                     }}>
                  <div className="card-body p-3">
                    <div className="d-flex align-items-start">
                      <div className="me-3 flex-shrink-0">
                        <div className="btn-sm-square rounded-circle d-flex align-items-center justify-content-center"
                             style={{ background: "rgba(178, 135, 33, 0.2)", width: "32px", height: "32px" }}>
                          <i className={`${campus.icon} text-white`} style={{ fontSize: "0.8rem" }}></i>
                        </div>
                      </div>
                      <div>
                        <h6 className="text-white fw-semibold mb-1" style={{ fontSize: "0.9rem" }}>
                          {campus.name}
                        </h6>
                        <small className="text-white-50">{campus.location}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="container py-4 position-relative" style={{ zIndex: 2 }}>
        <div style={{ 
          height: "1px", 
          background: "linear-gradient(90deg, transparent 0%, rgba(178, 135, 33, 0.3) 50%, transparent 100%)",
          marginBottom: "20px"
        }}></div>
        
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="text-white-50 mb-0">
              &copy; 2025 
              <a className="text-decoration-none fw-semibold ms-1" 
                 href="https://www.jah.org" 
                 style={{ color: "#b28721" }}>
                Jamat-e-Ahle Hadis
              </a>
              . All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="text-white mb-0">
              <span className="text-white-50">Designed with</span> 
              <span className="mx-2">💗</span>
              <span className="text-white-50">by</span>
              <a className="text-decoration-none fw-bold ms-1" 
                 href="https://softdesksolution.com" 
                 target="_blank"
                 rel="noopener noreferrer"
                 style={{ color: "#b28721" }}>
                Soft Desk Solution LLC
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
