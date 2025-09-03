import React from 'react'
import ProjectDetailsSection from '../../components/ProjectDetails/ProjectDetails'
import HeroSection from '../../components/HeroSection/HeroSection'

const PorjectDetails = () => {
    return (

        <div>
            <HeroSection
                title="Projects Details"
                breadcrumbs={[
                    { label: "Home", path: "/" },
                    { label: "Projects", path: "/projects" },
                    { label: "Project Details" }
                ]}
            />
            <ProjectDetailsSection />
        </div>
    )
}

export default PorjectDetails