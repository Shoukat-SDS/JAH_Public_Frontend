// components/DepartmentDetailSection.jsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import departmentsData from "../../data/departmentsData";
import AOS from "aos";
import "aos/dist/aos.css";

const DepartmentDetailSection = () => {
  const { id } = useParams();
  // Safer comparison in case id types differ (number vs string)
  const department = departmentsData.find((dept) => String(dept.id) === String(id));

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (!department) {
    return (
      <div className="container py-3 py-md-5 text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <p className="fs-6 fs-md-5 text-uppercase secondary mb-2">Department Details</p>
            <h2 className="display-6 display-md-5 primary mb-3">Department Not Found</h2>
            <p className="text-muted mb-4 px-3">
              The department you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/departments" className="btn btn-bg-primary text-white px-3 px-md-4 py-2 py-md-3">
              <i className="fas fa-arrow-left me-2" aria-hidden="true"></i>
              Back to Departments
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const sections = department.sections ?? [];
  const [firstSection, ...otherSections] = sections;

  return (
    <div className="container-fluid py-3 py-md-5">
      <div className="container py-3 py-md-5">
        {/* Section header - Mobile Optimized */}
        <div
          className="text-center mx-auto mb-4 mb-md-5 px-3"
          style={{ maxWidth: "750px" }}
          data-aos="fade-up"
        >
          <p className="fs-6 fs-md-5 text-uppercase secondary mb-2">Department Details</p>
          <h1 className="display-6 display-sm-5 display-md-4 display-lg-3 primary mb-3 lh-sm">
            {department.title}
          </h1>
          {department.subtitle && (
            <p className="lead fs-6 fs-md-5 text-muted px-2">{department.subtitle}</p>
          )}
        </div>

        {/* Overview / first section - Mobile Responsive */}
        {firstSection && (
          <article
            className="mb-4 mb-md-5 p-3 p-md-4 bg-light rounded-3 shadow-sm mx-2 mx-md-0"
            data-aos="fade-up"
            data-aos-delay={50}
          >
            {firstSection.heading && (
              <h3 className="fw-bold primary mb-2 fs-5 fs-md-4">{firstSection.heading}</h3>
            )}
            {firstSection.content && (
              <p className="text-muted mb-0 fs-6 lh-base">
                {firstSection.content.trim()}
              </p>
            )}
            {firstSection.list && (
              <ul className="list-unstyled mt-3 mb-0">
                {firstSection.list.map((item, i) => (
                  <li key={i} className="mb-2 d-flex align-items-start">
                    <span className="me-2 me-md-3 text-secondary flex-shrink-0" style={{ width: 18 }}>
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </span>
                    <span className="fs-6 lh-base">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        )}

        {/* Image + Details Section - Enhanced Responsive Layout */}
        <div className="row align-items-start g-3 g-md-4 g-lg-5 mx-1 mx-md-0">
          {/* Image Column - Mobile First */}
          <div className="col-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <div className="position-relative overflow-hidden rounded-3 rounded-md-4 shadow-lg">
              <img
                src={department.image}
                alt={department.title}
                className="img-fluid w-100 department-image"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              {/* Image overlay - Hidden on small screens */}
              <div
                className="position-absolute bottom-0 start-0 w-100 p-2 p-md-3 d-none d-sm-block"
                style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.7), transparent)" }}
              >
                <h5 className="text-white mb-1 fs-6 fs-md-5">{department.title}</h5>
                {department.category && (
                  <small className="text-light fs-7">
                    {Array.isArray(department.category) ? department.category.join(", ") : department.category}
                  </small>
                )}
              </div>
            </div>
            
            {/* Mobile Image Info - Visible only on small screens */}
            <div className="d-sm-none mt-3 text-center">
              <h5 className="primary mb-1">{department.title}</h5>
              {department.category && (
                <small className="text-muted">
                  {Array.isArray(department.category) ? department.category.join(", ") : department.category}
                </small>
              )}
            </div>
          </div>

          {/* Details Column - Mobile Optimized */}
          <div className="col-12 col-lg-6" data-aos="fade-left">
            {/* No sections message */}
            {otherSections.length === 0 && (
              <div className="p-3 p-md-4 bg-light rounded-3 shadow-sm mb-4">
                <p className="mb-0 text-muted fs-6">No additional details available.</p>
              </div>
            )}

            {/* Other sections - Mobile responsive grid */}
            <div className="row g-3 g-md-4">
              {otherSections.map((section, idx) => (
                <div key={idx} className="col-12">
                  <article
                    className="p-3 p-md-4 bg-white rounded-3 shadow-sm h-100"
                    data-aos="fade-up"
                    data-aos-delay={100 + idx * 80}
                  >
                    {section.heading && (
                      <h5 className="fw-bold primary mb-2 fs-6 fs-md-5">{section.heading}</h5>
                    )}

                    {section.content && (
                      <p className="mb-2 text-muted fs-6 lh-base">
                        {section.content.trim()}
                      </p>
                    )}

                    {section.list && (
                      <ul className="list-unstyled mb-0">
                        {section.list.map((item, i) => (
                          <li key={i} className="mb-2 d-flex align-items-start">
                            <span className="me-2 text-secondary flex-shrink-0" style={{ width: 16 }}>
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </span>
                            <span className="fs-6 lh-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                </div>
              ))}
            </div>

            {/* Back button - Mobile optimized */}
            <div className="mt-4 text-center text-lg-start" data-aos="fade-up" data-aos-delay={200}>
              <Link 
                to="/departments" 
                className="btn btn-bg-primary text-white px-3 px-md-4 py-2 py-md-3 w-100 w-sm-auto"
                style={{
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(178, 135, 33, 0.3)"
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
                <i className="fas fa-arrow-left me-2" aria-hidden="true"></i>
                Back to Departments
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Responsive Styles */}
      <style>{`
        /* Mobile Small (320px - 374px) */
        @media (max-width: 374.98px) {
          .container-fluid {
            padding-left: 8px;
            padding-right: 8px;
          }
          
          .display-6 {
            font-size: 1.5rem !important;
            line-height: 1.3 !important;
          }
          
          .fs-6 {
            font-size: 0.85rem !important;
          }
          
          .p-3 {
            padding: 12px !important;
          }
          
          .mb-4 {
            margin-bottom: 20px !important;
          }
          
          .rounded-3 {
            border-radius: 12px !important;
          }
          
          .btn {
            font-size: 0.85rem !important;
            padding: 10px 16px !important;
          }
          
          .department-image {
            height: 200px !important;
          }
        }
        
        /* Mobile Medium (375px - 575px) */
        @media (min-width: 375px) and (max-width: 575.98px) {
          .container-fluid {
            padding-left: 10px;
            padding-right: 10px;
          }
          
          .display-6 {
            font-size: 1.6rem !important;
          }
          
          .department-image {
            height: 220px !important;
          }
          
          .btn {
            font-size: 0.9rem !important;
          }
        }
        
        /* Mobile Large (576px - 767px) */
        @media (min-width: 576px) and (max-width: 767.98px) {
          .department-image {
            height: 260px !important;
          }
          
          .display-6 {
            font-size: 1.8rem !important;
          }
        }
        
        /* Tablet (768px - 991px) */
        @media (min-width: 768px) and (max-width: 991.98px) {
          .department-image {
            height: 300px !important;
          }
          
          .display-5 {
            font-size: 2.2rem !important;
          }
        }
        
        /* Desktop (992px+) */
        @media (min-width: 992px) {
          .department-image {
            height: 400px !important;
          }
        }
        
        /* Large Desktop (1200px+) */
        @media (min-width: 1200px) {
          .department-image {
            height: 450px !important;
          }
          
          .display-3 {
            font-size: 2.8rem !important;
          }
        }
        
        /* Landscape orientation */
        @media (max-height: 500px) and (orientation: landscape) {
          .py-3, .py-md-5 {
            padding-top: 15px !important;
            padding-bottom: 15px !important;
          }
          
          .mb-4, .mb-md-5 {
            margin-bottom: 15px !important;
          }
          
          .department-image {
            height: 180px !important;
          }
        }
        
        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .btn:hover {
            transform: none !important;
            box-shadow: 0 4px 15px rgba(178, 135, 33, 0.3) !important;
          }
          
          .btn:active {
            transform: scale(0.98) !important;
          }
          
          img:hover {
            transform: none !important;
          }
        }
        
        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          img {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        }
        
        /* Accessibility improvements */
        .btn:focus-visible {
          outline: 2px solid #b28721;
          outline-offset: 2px;
        }
        
        /* Text selection optimization */
        .btn {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Image loading optimization */
        img {
          loading: lazy;
        }
        
        /* Custom utility classes for responsive design */
        .fs-7 {
          font-size: 0.75rem;
        }
        
        @media (min-width: 576px) {
          .fs-md-5 {
            font-size: 1.25rem !important;
          }
          
          .fs-md-4 {
            font-size: 1.5rem !important;
          }
        }
        
        @media (min-width: 768px) {
          .display-md-5 {
            font-size: 2.5rem !important;
          }
          
          .display-md-4 {
            font-size: 2.2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default DepartmentDetailSection;