// src/components/DepartmentDetailSection.jsx
import React from "react"
import { useParams, Link } from "react-router-dom"
import departmentsData from "../../data/departmentsData"

const DepartmentDetailSection = () => {
  const { id } = useParams()
  const department = departmentsData.find((dept) => dept.id === id)

  if (!department) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-danger">Department Not Found</h2>
        <Link to="/departments" className="btn btn-primary mt-3">
          Back to Departments
        </Link>
      </div>
    )
  }

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <img
              src={department.image}
              alt={department.title}
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="primary mb-4">{department.title}</h1>
            <p>{department.details}</p>
            <Link to="/departments" className="btn btn-bg-primary text-white mt-3">
              Back to Departments
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DepartmentDetailSection