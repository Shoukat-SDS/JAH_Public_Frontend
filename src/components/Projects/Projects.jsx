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
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container-fluid activities py-5">
      <div className="container py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "700px" }}>
          <p className="fs-5 text-uppercase secondary">Projects</p>
          <h1 className="display-3 primary">Here Are Our Projects</h1>
        </div>
        <div className="row g-4">
          {projectsData.map((item, index) => (
            <div key={index} className="col-lg-6 col-xl-4">
              <div className="activities-item p-4" data-aos="fade-up" data-aos-delay={`${index * 200}`}>
                <div className="d-flex flex-column justify-content-center align-items-center gap-2 text-center">
                  <div className="me-4 primary icon">{iconMap[item.icon]}</div>
                  <div>
                    <h4 className="text-shadow">{item.title}</h4>
                    <p className="mb-4">{item.desc}</p>
                    <Link
                      to={`/project-details#project-${index}`}
                      className="btn btn-bg-primary text-white px-3"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
