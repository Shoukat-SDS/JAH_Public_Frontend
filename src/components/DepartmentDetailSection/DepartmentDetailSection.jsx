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
      <div className="container py-5 text-center">
        <p className="fs-5 text-uppercase secondary mb-2">Department Details</p>
        <h2 className="display-5 primary mb-3">Department Not Found</h2>
        <p className="text-muted mb-4">
          The department you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/departments" className="btn btn-bg-primary text-white px-4 py-2">
          <i className="fas fa-arrow-left me-2" aria-hidden="true"></i>
          Back to Departments
        </Link>
      </div>
    );
  }

  const sections = department.sections ?? [];
  const [firstSection, ...otherSections] = sections;

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        {/* Section header (matches other pages) */}
        <div
          className="text-center mx-auto mb-5"
          style={{ maxWidth: "750px" }}
          data-aos="fade-up"
        >
          <p className="fs-5 text-uppercase secondary mb-2">Department Details</p>
          <h1 className="display-3 primary mb-3">{department.title}</h1>
          {department.subtitle && <p className="lead text-muted">{department.subtitle}</p>}
        </div>

        {/* Overview / first section full width */}
        {firstSection && (
          <article
            className="mb-5 p-4 bg-light rounded-3 shadow-sm"
            data-aos="fade-up"
            data-aos-delay={50}
          >
            {firstSection.heading && (
              <h3 className="fw-bold primary mb-2">{firstSection.heading}</h3>
            )}
            {firstSection.content && (
              <p className="text-muted mb-0">
                {firstSection.content.trim()}
              </p>
            )}
            {firstSection.list && (
              <ul className="list-unstyled mt-3 mb-0">
                {firstSection.list.map((item, i) => (
                  <li key={i} className="mb-2 d-flex align-items-start">
                    <span className="me-3 text-secondary" style={{ width: 22 }}>
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        )}

        {/* Image + remaining details (arranged as two columns on the right) */}
        <div className="row align-items-start g-5">
          {/* Image / media column */}
          <div className="col-lg-6" data-aos="fade-right">
            <div className="position-relative overflow-hidden rounded-4 shadow-lg h-100">
              <img
                src={department.image}
                alt={department.title}
                className="img-fluid w-100"
                style={{
                  height: "420px",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <div
                className="position-absolute bottom-0 start-0 w-100 p-3 d-none d-md-block"
                style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.6), transparent)" }}
              >
                <h4 className="text-white mb-1">{department.title}</h4>
                {department.category && (
                  <small className="text-light">
                    {Array.isArray(department.category) ? department.category.join(", ") : department.category}
                  </small>
                )}
              </div>
            </div>
          </div>

          {/* Details grid column: otherSections split into two columns */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="row flex-column g-4">
              {otherSections.length === 0 && (
                <div className="col-12">
                  <div className="p-4 bg-light rounded-3 shadow-sm">
                    <p className="mb-0 text-muted">No additional details available.</p>
                  </div>
                </div>
              )}

              {otherSections.map((section, idx) => (
                <div key={idx} className="col-md-12">
                  <article
                    className="p-3 bg-white rounded-3 shadow-sm h-100"
                    data-aos="fade-up"
                    data-aos-delay={100 + idx * 80}
                  >
                    {section.heading && <h5 className="fw-bold primary mb-2">{section.heading}</h5>}

                    {section.content && (
                      <p className="mb-2 text-muted">
                        {section.content.trim()}
                      </p>
                    )}

                    {section.list && (
                      <ul className="list-unstyled mb-0">
                        {section.list.map((item, i) => (
                          <li key={i} className="mb-2 d-flex align-items-start">
                            <span className="me-2 text-secondary" style={{ width: 20 }}>
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                </div>
              ))}
            </div>

            {/* Back button */}
            <div className="mt-4" data-aos="fade-up" data-aos-delay={200}>
              <Link to="/departments" className="btn btn-bg-primary text-white px-4 py-3">
                <i className="fas fa-arrow-left me-2" aria-hidden="true"></i>
                Back to Departments
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetailSection;