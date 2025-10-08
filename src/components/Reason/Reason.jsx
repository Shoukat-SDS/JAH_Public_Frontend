// components/Reason/Reason.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Reason = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      icon: "fas fa-microscope",
      title: "Groundbreaking Research",
      description: "Conduct innovative research for societal benefit and community development."
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Educational Excellence",
      description: "Educate and uplift underprivileged communities through quality programs."
    },
    {
      icon: "fas fa-hands-helping",
      title: "Welfare Services",
      description: "Provide comprehensive welfare services to those in need across communities."
    }
  ];

  return (
    <div className="container-fluid py-5" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)" }}>
      <div className="container py-5">
        {/* Header Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10" data-aos="fade-up">
            <div className="text-center">
              <div className="d-inline-block px-4 py-2 mb-3 rounded-pill" style={{ background: "rgba(178, 135, 33, 0.1)" }}>
                <small className="secondary fw-bold text-uppercase tracking-wide">
                  <i className="fas fa-heart me-2"></i>
                  Contribute to Sadaqah Jariyah
                </small>
              </div>
              <h2 className="display-4 primary fw-bold mb-4">Why Support JAH?</h2>
              <p className="lead text-muted mx-auto" style={{ maxWidth: "700px", lineHeight: "1.8" }}>
                At JAH, we are dedicated to advancing research, promoting education, and fostering welfare 
                initiatives that make a lasting impact. Your support helps us build a brighter future by 
                empowering communities through knowledge and care.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="row g-4 mb-5">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card border-0 shadow-sm h-100 feature-card">
                <div className="card-body text-center p-4">
                  {/* Icon */}
                  <div 
                    className="mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle"
                    style={{ 
                      width: "80px", 
                      height: "80px",
                      background: "linear-gradient(135deg, #b28721 0%, #245b5a 100%)",
                      boxShadow: "0 10px 30px rgba(178, 135, 33, 0.3)"
                    }}
                  >
                    <i className={`${feature.icon} fa-2x text-white`}></i>
                  </div>

                  {/* Content */}
                  <h5 className="primary fw-bold mb-3">{feature.title}</h5>
                  <p className="text-muted mb-0" style={{ lineHeight: "1.6" }}>
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div 
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center rounded feature-overlay"
                  style={{
                    background: "rgba(178, 135, 33, 0.95)",
                    opacity: 0,
                    transition: "opacity 0.3s ease"
                  }}
                >
                  <div className="text-center text-white p-3">
                    <i className={`${feature.icon} fa-3x mb-3 text-white`}></i>
                    <h6 className="text-white fw-bold">{feature.title}</h6>
                    <p className="small mb-0">{feature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay={300}>
          <div className="col-lg-8">
            <div 
              className="card border-0 shadow-lg text-center p-5 rounded-4"
              style={{
                background: "linear-gradient(135deg, #245b5a 0%, #1a4544 100%)",
                position: "relative",
                overflow: "hidden"
              }}
            >
              {/* Background Pattern */}
              <div 
                className="position-absolute"
                style={{
                  top: "-50px",
                  right: "-50px",
                  width: "200px",
                  height: "200px",
                  background: "rgba(178, 135, 33, 0.1)",
                  borderRadius: "50%"
                }}
              ></div>
              <div 
                className="position-absolute"
                style={{
                  bottom: "-100px",
                  left: "-100px",
                  width: "300px",
                  height: "300px",
                  background: "rgba(178, 135, 33, 0.05)",
                  borderRadius: "50%"
                }}
              ></div>

              {/* Content */}
              <div className="position-relative">
                <div className="mb-4">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{ 
                      width: "70px", 
                      height: "70px", 
                      background: "rgba(178, 135, 33, 0.2)" 
                    }}
                  >
                    <i className="fas fa-hands-heart fa-2x" style={{ color: "#b28721" }}></i>
                  </div>
                </div>

                <h3 className="text-white fw-bold mb-3">Join Hands With Us Today!</h3>
                <p className="text-light mb-4 opacity-75" style={{ fontSize: "1.1rem" }}>
                  Make a lasting difference in countless lives. Your contribution creates 
                  sustainable change that benefits generations to come.
                </p>

                <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center">
                  <Link 
                    to="/donate" 
                    className="btn btn-bg-primary text-white px-5 py-3 rounded-pill shadow-lg"
                    style={{ 
                      fontSize: "1.1rem",
                      transition: "all 0.3s ease",
                      boxShadow: "0 8px 25px rgba(178, 135, 33, 0.4)"
                    }}
                  >
                    <i className="fas fa-heart me-2"></i>
                    Donate Now
                  </Link>
                  
                  <Link 
                    to="/projects" 
                    className="btn btn-outline-light px-5 py-3 rounded-pill"
                    style={{ 
                      fontSize: "1.1rem",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <i className="fas fa-eye me-2"></i>
                    View Our Impact
                  </Link>
                </div>

                {/* Stats */}
                <div className="row mt-5 text-center">
                  <div className="col-md-4">
                    <div className="text-white">
                      <h4 className="mb-1" style={{ color: "#b28721" }}>200+</h4>
                      <small className="text-light opacity-75">Daily Patients Served</small>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-white">
                      <h4 className="mb-1" style={{ color: "#b28721" }}>4</h4>
                      <small className="text-light opacity-75">Educational Campuses</small>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-white">
                      <h4 className="mb-1" style={{ color: "#b28721" }}>10+</h4>
                      <small className="text-light opacity-75">Community Mosques</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .feature-card {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.1) !important;
        }
        .feature-card:hover .feature-overlay {
          opacity: 1 !important;
        }
        .tracking-wide {
          letter-spacing: 0.5px;
        }
        .btn:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default Reason;
