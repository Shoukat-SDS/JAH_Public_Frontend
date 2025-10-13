// components/ProjectDetails/ProjectDetails.jsx
import React, { useEffect } from "react"
import projectsData from "../../data/projectsData"
import AOS from "aos"
import "aos/dist/aos.css"
import { useLocation, Link } from "react-router-dom"
import {
  FaMosque,
  FaSchool,
  FaClinicMedical,
  FaEye,
  FaBookOpen,
  FaHandsHelping,
  FaWater,
  FaSolarPanel,
  FaGraduationCap,
  FaBriefcase,
  FaFemale,
  FaHandHoldingUsd,
} from "react-icons/fa"

const iconMap = {
  FaMosque,
  FaSchool,
  FaClinicMedical,
  FaEye,
  FaBookOpen,
  FaHandsHelping,
  FaWater,
  FaSolarPanel,
  FaGraduationCap,
  FaBriefcase,
  FaFemale,
  FaHandHoldingUsd,
}

const ProjectDetails = () => {
  const location = useLocation()

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }, [location])

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        {/* Section Header */}
        <div 
          className="text-center mx-auto mb-5" 
          style={{ maxWidth: "700px" }}
          data-aos="fade-up"
        >
          <p className="fs-5 text-uppercase secondary">Project Details</p>
          <h1 className="display-3 primary">Discover Our Impact Projects</h1>
          <p className="text-muted mt-3">Learn about our comprehensive initiatives that transform communities through education, healthcare, and spiritual development.</p>
        </div>

        {/* Projects Loop */}
        {projectsData.map((item, index) => (
          <div
            key={item.id}
            id={`project-${item.id}`}
            className="mb-5"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden project-detail-card">
              <div className={`row g-0 ${
                index % 2 === 0 ? "" : "flex-lg-row-reverse"
              }`}>
                {/* Project Image */}
                <div className="col-lg-7">
                  <div className="position-relative overflow-hidden h-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid w-100 h-100"
                      style={{ 
                        transition: "transform 0.8s ease",
                        objectFit: "cover",
                        minHeight: "450px"
                      }}
                    />
                    
                    {/* Image Overlay */}
                    <div 
                      className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end"
                      style={{
                        background: "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 40%)"
                      }}
                    >
                      <div className="p-4 text-white">
                        <div className="d-flex align-items-center mb-2">
                          <div 
                            className="me-3 d-flex align-items-center justify-content-center rounded-circle"
                            style={{ 
                              width: '50px', 
                              height: '50px', 
                              background: 'rgba(178, 135, 33, 0.9)' 
                            }}
                          >
                            {item.icon && iconMap[item.icon] && React.createElement(iconMap[item.icon], { size: 24, color: 'white' })}
                          </div>
                          <div>
                            <h5 className="mb-0 text-white fw-bold">{item.title}</h5>
                            <small className="text-light opacity-75">Community Impact Project</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="col-lg-5">
                  <div className="h-100 d-flex flex-column">
                    <div className="p-4 p-lg-5 flex-grow-1">
                      {/* Project Number Badge */}
                      <div className="d-flex justify-content-between align-items-start mb-4">
                        <span className="badge bg-light text-dark px-3 py-2 rounded-pill">
                          Project #{String(index + 1).padStart(2, '0')}
                        </span>
                        <div 
                          className="icon-badge d-flex align-items-center justify-content-center rounded-circle shadow-sm"
                          style={{ 
                            width: '60px', 
                            height: '60px', 
                            background: 'linear-gradient(135deg, #b28721 0%, #245b5a 100%)' 
                          }}
                        >
                          {item.icon && iconMap[item.icon] && React.createElement(iconMap[item.icon], { size: 30, color: 'white' })}
                        </div>
                      </div>

                      {/* Title and Description */}
                      <h3 className="primary mb-3 fw-bold">{item.title}</h3>
                      <p className="text-muted mb-4" style={{ lineHeight: '1.7' }}>{item.desc}</p>
                      
                      {/* Additional Details */}
                      {item.details && (
                        <div className="bg-light p-4 rounded-3 mb-4 border-start border-4 border-secondary">
                          <h6 className="secondary mb-2 fw-bold">
                            <i className="fas fa-info-circle me-2"></i>
                            Project Overview
                          </h6>
                          <p className="mb-0 small">{item.details}</p>
                        </div>
                      )}

                      {/* Project Stats */}
                      <div className="row g-3 mb-4">
                        <div className="col-6">
                          <div className="text-center p-3 bg-light rounded-3">
                            <h5 className="primary mb-1">Active</h5>
                            <small className="text-muted">Status</small>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="text-center p-3 bg-light rounded-3">
                            <h5 className="secondary mb-1">Community</h5>
                            <small className="text-muted">Impact</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="p-4 p-lg-5 pt-0">
                      <div className="d-grid gap-2 d-md-flex">
                        <Link 
                          to="/donate" 
                          className="btn btn-bg-primary text-white px-4 py-3 flex-fill"
                        >
                          <i className="fas fa-hand-holding-heart me-2"></i>
                          Support Project
                        </Link>
                        <button 
                          className="btn btn-outline-secondary px-4 py-3"
                          onClick={() => {
                            const element = document.querySelector(`#project-${item.id}`);
                            if (element) {
                              navigator.clipboard?.writeText(window.location.origin + window.location.pathname + `#project-${item.id}`);
                            }
                          }}
                        >
                          <i className="fas fa-share-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Connection Line (except for last item) */}
            {index < projectsData.length - 1 && (
              <div className="text-center my-5" data-aos="fade-up" data-aos-delay={50}>
                <div className="d-inline-flex align-items-center">
                  <div 
                    style={{ 
                      width: '80px', 
                      height: '2px', 
                      background: 'linear-gradient(90deg, transparent, #b28721, transparent)' 
                    }}
                  ></div>
                  <div 
                    className="mx-3 d-flex align-items-center justify-content-center rounded-circle border border-2 border-secondary"
                    style={{ width: '40px', height: '40px', background: 'white' }}
                  >
                    <i className="fas fa-chevron-down secondary"></i>
                  </div>
                  <div 
                    style={{ 
                      width: '80px', 
                      height: '2px', 
                      background: 'linear-gradient(90deg, transparent, #b28721, transparent)' 
                    }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Call to Action Section */}
        <div className="text-center mt-5 pt-5" data-aos="fade-up">
          <div className="card bg-light border-0 p-5 rounded-4">
            <h3 className="primary mb-3">Ready to Make a Difference?</h3>
            <p className="text-muted mb-4">Join us in transforming communities through these impactful projects. Every contribution matters.</p>
            <div className="d-flex justify-content-center gap-3">
              <Link to="/donate" className="btn btn-bg-primary text-white px-5 py-3">
                <i className="fas fa-heart me-2"></i>
                Donate Now
              </Link>
              <Link to="/contact" className="btn btn-outline-primary px-5 py-3">
                <i className="fas fa-envelope me-2"></i>
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .project-detail-card:hover img {
          transform: scale(1.05);
        }
        .project-detail-card {
          transition: all 0.3s ease;
        }
        .project-detail-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
        }
        .icon-badge {
          transition: transform 0.3s ease;
        }
        .project-detail-card:hover .icon-badge {
          transform: rotate(360deg) scale(1.1);
        }
      `}</style>
    </div>
  )
}

export default ProjectDetails
