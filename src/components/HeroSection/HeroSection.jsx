// components/HeroSection/HeroSection.jsx
import { Link } from "react-router-dom"

export default function HeroSection({ title, breadcrumbs = [] }) {
    return (
        <div className="container-fluid hero-header position-relative overflow-hidden">
            {/* Background Overlay */}
            <div className="position-absolute w-100 h-100" 
                 style={{
                   background: "linear-gradient(135deg, rgba(36, 91, 90, 0.65) 0%, rgba(26, 69, 68, 0.7) 100%)",
                   top: 0,
                   left: 0,
                   zIndex: 1
                 }}>
            </div>
            
            {/* Decorative Elements */}
            <div className="position-absolute" 
                 style={{
                   top: "-100px",
                   right: "-100px",
                   width: "300px",
                   height: "300px",
                   background: "rgba(178, 135, 33, 0.1)",
                   borderRadius: "50%",
                   zIndex: 1
                 }}>
            </div>
            
            <div className="position-absolute" 
                 style={{
                   bottom: "-150px",
                   left: "-150px",
                   width: "400px",
                   height: "400px",
                   background: "rgba(178, 135, 33, 0.05)",
                   borderRadius: "50%",
                   zIndex: 1
                 }}>
            </div>

            <div className="container position-relative" style={{ zIndex: 2 }}>
                <div className="row min-vh-50 align-items-center justify-content-center py-5">
                    <div className="col-lg-8 text-center">
                        <div className="hero-header-inner py-5" 
                             data-aos="fade-up"
                             data-aos-delay="100">
                            
                            {/* Breadcrumb Navigation */}
                            <nav aria-label="breadcrumb" className="mb-4">
                                <ol className="breadcrumb justify-content-center bg-transparent p-0 mb-0">
                                    {breadcrumbs.map((item, index) => (
                                        <li
                                            key={index}
                                            className={`breadcrumb-item ${
                                                index === breadcrumbs.length - 1 ? "active" : ""
                                            }`}
                                            aria-current={
                                                index === breadcrumbs.length - 1 ? "page" : undefined
                                            }
                                        >
                                            {item.path ? (
                                                <Link 
                                                    to={item.path} 
                                                    className="text-white text-decoration-none fw-medium"
                                                    style={{
                                                        transition: "all 0.3s ease",
                                                        opacity: "0.8"
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.target.style.opacity = "1"
                                                        e.target.style.color = "#b28721"
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.style.opacity = "0.8"
                                                        e.target.style.color = "white"
                                                    }}
                                                >
                                                    <i className="fas fa-home me-1"></i>
                                                    {item.label}
                                                </Link>
                                            ) : (
                                                <span className="text-white fw-medium" style={{ opacity: "0.9" }}>
                                                    {item.label}
                                                </span>
                                            )}
                                        </li>
                                    ))}
                                </ol>
                            </nav>

                            {/* Main Title */}
                            <div className="position-relative mb-4">
                                <h1 className="display-3 fw-bold text-white mb-3 text-shadow"
                                    data-aos="fade-up" 
                                    data-aos-delay="200"
                                    style={{
                                        letterSpacing: "-1px",
                                        lineHeight: "1.2"
                                    }}>
                                    {title}
                                </h1>
                                
                                {/* Decorative Line */}
                                <div className="d-flex justify-content-center" 
                                     data-aos="fade-up" 
                                     data-aos-delay="300">
                                    <div className="position-relative">
                                        <div 
                                            className="background-secondary mx-auto"
                                            style={{
                                                width: "80px",
                                                height: "4px",
                                                borderRadius: "2px"
                                            }}>
                                        </div>
                                        <div 
                                            className="position-absolute top-50 start-50 translate-middle"
                                            style={{
                                                width: "12px",
                                                height: "12px",
                                                background: "#b28721",
                                                borderRadius: "50%",
                                                border: "3px solid white"
                                            }}>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Subtitle/Description */}
                            <div data-aos="fade-up" data-aos-delay="400">
                                <p className="lead text-white-50 mb-4 mx-auto" 
                                   style={{ maxWidth: "600px", fontSize: "1.1rem" }}>
                                    Discover more about Jamat-e-Ahle Hadis and connect with our community
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="d-flex justify-content-center gap-3 flex-wrap mt-4"
                                 data-aos="fade-up" 
                                 data-aos-delay="500">
                                <Link 
                                    to="/"
                                    className="btn btn-outline-light rounded-pill px-4 py-2 fw-semibold"
                                    style={{
                                        borderWidth: "2px",
                                        transition: "all 0.3s ease"
                                    }}
                                >
                                    <i className="fas fa-arrow-left me-2"></i>
                                    Back to Home
                                </Link>
                                
                                <button 
                                    className="btn btn-bg-primary text-white rounded-pill px-4 py-2 fw-semibold"
                                    style={{
                                        transition: "all 0.3s ease",
                                        boxShadow: "0 4px 15px rgba(178, 135, 33, 0.3)"
                                    }}
                                    onClick={() => {
                                        document.querySelector('main')?.scrollIntoView({ 
                                            behavior: 'smooth' 
                                        })
                                    }}
                                >
                                    <i className="fas fa-arrow-down me-2"></i>
                                    Explore
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animated Elements */}
            <div className="position-absolute" 
                 style={{
                   top: "20%",
                   right: "10%",
                   zIndex: 1,
                   animation: "float 6s ease-in-out infinite"
                 }}>
                <i className="fas fa-star text-white" 
                   style={{ 
                     fontSize: "1.5rem", 
                     opacity: "0.3"
                   }}></i>
            </div>
            
            <div className="position-absolute" 
                 style={{
                   top: "60%",
                   left: "15%",
                   zIndex: 1,
                   animation: "float 4s ease-in-out infinite reverse"
                 }}>
                <i className="fas fa-circle text-white" 
                   style={{ 
                     fontSize: "0.8rem", 
                     opacity: "0.2"
                   }}></i>
            </div>

            {/* CSS Animation */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                .min-vh-50 {
                    min-height: 50vh;
                }
                
                .breadcrumb-item + .breadcrumb-item::before {
                    content: "›";
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 1.2rem;
                    font-weight: bold;
                }
                
                .breadcrumb-item.active {
                    color: #b28721 !important;
                }
            `}</style>
        </div>
    )
}
