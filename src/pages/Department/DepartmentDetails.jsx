// pages/Departments/DepartmentDetails.jsx
import React from 'react'
import { useParams } from "react-router-dom"
import DepartmentDetailSection from '../../components/DepartmentDetailSection/DepartmentDetailSection'
import HeroSection from '../../components/HeroSection/HeroSection'
import departmentsData from "../../data/departmentsData"
import DonateItems from "../../components/DonateItems/DonateItems"

const DepartmentDetail = () => {
    const { id } = useParams()
    const department = departmentsData.find((dept) => dept.id === id)
    return (
        <div>
            <HeroSection
                title="Department Details"
                breadcrumbs={[
                    { label: "Home", path: "/" },
                    { label: "Department", path: "/departments" },
                    { label: department?.title || "Details" }
                ]}
            />
            <DepartmentDetailSection />

            {/* Sirf us department ke related donate items */}
            <div className="container py-5">
                <h2 className="text-center mb-4">Support {department?.title}</h2>
                <DonateItems category={department?.title} />
            </div>
        </div>
    )
}

export default DepartmentDetail 