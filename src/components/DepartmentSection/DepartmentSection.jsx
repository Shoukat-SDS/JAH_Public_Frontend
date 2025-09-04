// components/DepartmentSection.jsx
import React from "react"
import { Link } from "react-router-dom"
import departmentsData from "../../data/departmentsData"

const DepartmentSection = () => {
  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "700px" }}>
          <p className="fs-5 text-uppercase secondary">Our Departments</p>
          <h1 className="display-4 primary">Explore Our Key Departments</h1>
        </div>

        <div className="row g-4">
          {departmentsData.map((dept, index) => (
            <div key={dept.id} className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={dept.image}
                  alt={dept.title}
                  className="card-img-top rounded-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h4 className="primary mb-3">{dept.title}</h4>
                  <p className="mb-4">{dept.desc}</p>
                  <Link
                    to={`/departments/${dept.id}`}
                    className="btn btn-bg-primary text-white px-4 py-2"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DepartmentSection