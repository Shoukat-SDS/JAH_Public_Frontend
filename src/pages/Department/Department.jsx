// pages/Departments/Departments.jsx
import React from 'react'
import DepartmentSection from '../../components/DepartmentSection/DepartmentSection'
import HeroSection from '../../components/HeroSection/HeroSection'

const Department = () => {
    return (
        <div>
            <HeroSection
                title="Department"
                breadcrumbs={[
                    { label: "Home", path: "/" },
                    { label: "Department" }
                ]}
            />
            <DepartmentSection />
        </div>
    )
}

export default Department