// src/components/ProjectDetails.jsx
import React, { useEffect } from "react"
import projectsData from "../../data/projectsData"
import AOS from "aos"
import "aos/dist/aos.css"
import { useLocation } from "react-router-dom"

const ProjectDetails = () => {
    const location = useLocation()

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash)
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" })
            }
        }
    }, [location])
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="mx-auto text-center mb-5" style={{ maxWidth: "700px" }}>
                    <p className="fs-5 text-uppercase secondary">Project Details</p>
                    <h1 className="display-3 primary">Learn More About Our Projects</h1>
                </div>

                {projectsData.map((item, index) => (
                    <div
                        key={index}
                        id={`project-${index}`} 
                        className="row align-items-center mb-5"
                        data-aos="fade-up"
                        data-aos-delay={`${index * 200}`}
                    >
                        {/* Odd index → Image Left, Details Right */}
                        {index % 2 === 0 ? (
                            <>
                                <div className="col-lg-6 mb-4 mb-lg-0">
                                    <img
                                        src={item.img || "/placeholder.jpg"}
                                        alt={item.title}
                                        className="img-fluid rounded-3 shadow"
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <h2 className="primary mb-3">{item.title}</h2>
                                    <p className="mb-4">{item.desc}</p>
                                    <button className="btn btn-bg-primary text-white px-4">
                                        Read More
                                    </button>
                                </div>
                            </>
                        ) : (
                            // Even index → Details Left, Image Right
                            <>
                                <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
                                    <img
                                        src={item.img || "/placeholder.jpg"}
                                        alt={item.title}
                                        className="img-fluid rounded-3 shadow"
                                    />
                                </div>
                                <div className="col-lg-6 order-lg-1">
                                    <h2 className="primary mb-3">{item.title}</h2>
                                    <p className="mb-4">{item.desc}</p>
                                    <button className="btn btn-bg-primary text-white px-4">
                                        Read More
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectDetails