// components/Projects/Projects.jsx
import React, { useEffect } from "react";
import projectsData from "../../data/projectsData";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
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
  FaMosque: <FaMosque size={40} />,
  FaSchool: <FaSchool size={40} />,
  FaClinicMedical: <FaClinicMedical size={40} />,
  FaEye: <FaEye size={40} />,
  FaBookOpen: <FaBookOpen size={40} />,
  FaHandsHelping: <FaHandsHelping size={40} />,
  FaWater: <FaWater size={40} />,
  FaSolarPanel: <FaSolarPanel size={40} />,
  FaGraduationCap: <FaGraduationCap size={40} />,
  FaBriefcase: <FaBriefcase size={40} />,
  FaFemale: <FaFemale size={40} />,
  FaHandHoldingUsd: <FaHandHoldingUsd size={40} />,
}

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container-fluid activities py-5">
      <div className="container py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "700px" }} data-aos="fade-up">
          <p className="fs-5 text-uppercase secondary">Projects</p>
          <h1 className="display-3 primary">Here Are Our Projects</h1>
        </div>
        <div className="row g-4">
          {projectsData.map((item, index) => (
            <div key={index} className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card border-0 shadow h-100 project-card">
                <div className="card-body d-flex flex-column text-center p-4">
                  {/* Icon Section */}
                  <div className="mb-4 d-flex justify-content-center">
                    <div 
                      className="icon-wrapper d-flex align-items-center justify-content-center rounded-circle shadow-sm"
                      style={{ 
                        width: '80px', 
                        height: '80px', 
                        background: 'linear-gradient(135deg, #b28721 0%, #245b5a 100%)',
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      <div className="text-white">
                        {React.cloneElement(iconMap[item.icon], { size: 40 })}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-grow-1 d-flex flex-column">
                    <h4 className="primary mb-3 fw-bold">{item.title}</h4>
                    <p className="text-muted mb-4 flex-grow-1" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                      {item.desc}
                    </p>
                    
                    {/* Button Section */}
                    <div className="mt-auto">
                      <Link
                        to={`/project-details#project-${index}`}
                        className="btn btn-bg-primary text-white px-4 py-2 rounded-pill"
                        style={{ transition: 'all 0.3s ease' }}
                      >
                        <i className="fas fa-arrow-right me-2"></i>
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div 
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center overlay"
                  style={{
                    background: 'rgba(178, 135, 33, 0.9)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    borderRadius: 'inherit'
                  }}
                >
                  <div className="text-center text-white p-3">
                    <div className="mb-3">
                      {React.cloneElement(iconMap[item.icon], { size: 50, color: 'white' })}
                    </div>
                    <h5 className="text-white mb-2">{item.title}</h5>
                    <p className="mb-3 small">{item.desc.substring(0, 80)}...</p>
                    <Link
                      to={`/project-details#project-${index}`}
                      className="btn btn-light text-dark px-3 py-1"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>

              <style>{`
                .project-card:hover .overlay {
                  opacity: 1 !important;
                }
                .project-card:hover .icon-wrapper {
                  transform: scale(1.1);
                }
                .project-card {
                  transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .project-card:hover {
                  transform: translateY(-5px);
                  box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
