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
          <h1 className="display-3 primary">Learn More About Our Projects</h1>
        </div>

        {/* Projects Loop */}
        {projectsData.map((item, index) => (
          <div
            key={item.id}
            id={`project-${item.id}`}
            className="mb-5"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={100}
          >
            <div className="card border-0 shadow-lg">
              <div className={`row g-0 align-items-center ${
                index % 2 === 0 ? "" : "flex-lg-row-reverse"
              }`}>
                {/* Project Image */}
                <div className="col-lg-6">
                  <div className="position-relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid w-100"
                      style={{ 
                        transition: "transform 0.5s",
                        height: "400px",
                        objectFit: "cover"
                      }}
                      onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
                      onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="col-lg-6">
                  <div className="card-body p-4 p-lg-5">
                    <div className="d-flex align-items-center mb-4">
                      <div className="me-4 primary" style={{ fontSize: "2.5rem" }}>
                        {item.icon && iconMap[item.icon] && React.createElement(iconMap[item.icon])}
                      </div>
                      <h2 className="primary mb-0">{item.title}</h2>
                    </div>
                    
                    <p className="lead text-muted mb-4">{item.desc}</p>
                    
                    {item.details && (
                      <div className="bg-light p-4 rounded-3 mb-4">
                        <p className="mb-0">{item.details}</p>
                      </div>
                    )}

                    <Link 
                      to="/donate" 
                      className="btn btn-bg-primary text-white px-4 py-3"
                    >
                      <i className="fas fa-hand-holding-heart me-2"></i>
                      Support This Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectDetails
