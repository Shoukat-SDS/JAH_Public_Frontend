import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import ProjectsSection from "../../components/Projects/Projects"

const Projects = () => {

    return (
        <div>
            <HeroSection
                title="Projects"
                breadcrumbs={[
                    { label: "Home", path: "/" },
                    // { label: "Pages", path: "/pages" },
                    { label: "Projects" }
                ]}
            />
            <ProjectsSection />
        </div>
    )
}

export default Projects