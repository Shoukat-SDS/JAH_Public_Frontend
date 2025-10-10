// components/Hero/Hero.jsx
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    AOS.init({ duration: 1000 })
    
    // Auto slide for text content
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroContent.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const heroContent = [
    {
      subtitle: "Islamic Education & Welfare",
      title: "Spreading Knowledge Through Faith",
      description: "Empowering communities with Islamic and modern education, healthcare, and social welfare programs rooted in Qur'an and Sunnah.",
      primaryAction: { text: "Learn More", link: "/about" },
      secondaryAction: { text: "Our Programs", link: "/projects" }
    },
    {
      subtitle: "Community Development",
      title: "Building Tomorrow's Leaders",
      description: "Nurturing spiritually enlightened, academically capable, and socially responsible individuals across our campuses and communities.",
      primaryAction: { text: "Join Us", link: "/contact" },
      secondaryAction: { text: "View Impact", link: "/projects" }
    },
    {
      subtitle: "Healthcare & Support",
      title: "Caring for Our Community",
      description: "Providing free medical services, eye care, and welfare support to over 200 patients daily through our comprehensive programs.",
      primaryAction: { text: "Donate Now", link: "/donate" },
      secondaryAction: { text: "Our Services", link: "/about" }
    }
  ]

  const statistics = [
    { number: "4", label: "Campuses", icon: "fas fa-university" },
    { number: "200+", label: "Daily Patients", icon: "fas fa-user-md" },
    { number: "1000+", label: "Students", icon: "fas fa-graduation-cap" },
    { number: "60+", label: "Years Serving", icon: "fas fa-calendar-alt" }
  ]

  return (
    <div className="container-fluid hero-header position-relative overflow-hidden">
      
      {/* Background Overlay */}
      <div className="position-absolute w-100 h-100" 
           style={{
             background: "linear-gradient(135deg, rgba(36, 91, 90, 0.6) 0%, rgba(26, 69, 68, 0.65) 50%, rgba(36, 91, 90, 0.6) 100%)",
             top: 0,
             left: 0,
             zIndex: 1
           }}>
      </div>

      {/* Animated Background Elements */}
      <div className="position-absolute w-100 h-100 overflow-hidden" style={{ zIndex: 1 }}>
        {/* Floating Elements */}
        <div className="position-absolute" 
             style={{
               top: "15%",
               right: "10%",
               width: "200px",
               height: "200px",
               background: "rgba(178, 135, 33, 0.1)",
               borderRadius: "50%",
               animation: "float 8s ease-in-out infinite"
             }}>
        </div>
        
        <div className="position-absolute" 
             style={{
               top: "60%",
               left: "5%",
               width: "150px",
               height: "150px",
               background: "rgba(178, 135, 33, 0.08)",
               borderRadius: "50%",
               animation: "float 6s ease-in-out infinite reverse"
             }}>
        </div>

        <div className="position-absolute" 
             style={{
               bottom: "20%",
               right: "20%",
               width: "100px",
               height: "100px",
               background: "rgba(255, 255, 255, 0.05)",
               borderRadius: "50%",
               animation: "float 10s ease-in-out infinite"
             }}>
        </div>

        {/* Islamic Pattern Elements */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="position-absolute"
            style={{
              top: `${20 + i * 15}%`,
              left: `${85 + Math.sin(i) * 10}%`,
              width: "4px",
              height: "4px",
              background: "rgba(178, 135, 33, 0.3)",
              borderRadius: "50%",
              animation: `twinkle ${3 + i}s ease-in-out infinite ${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row min-vh-100 align-items-center gap-3">
          
          {/* Main Content */}
          <div className="col-lg-7">
            <div className="hero-header-inner py-5">
              
              {/* Organization Badge */}
              <div className="d-inline-flex align-items-center mb-4 px-4 py-2 rounded-pill"
                   style={{
                     background: "rgba(178, 135, 33, 0.15)",
                     border: "1px solid rgba(178, 135, 33, 0.3)"
                   }}
                   data-aos="fade-right"
                   data-aos-delay="100">
                <i className="fas fa-mosque text-white me-2" style={{ color: "#b28721" }}></i>
                <span className="text-white fw-semibold" style={{ fontSize: "0.9rem", letterSpacing: "1px" }}>
                  JAMAT-E-AHLE HADIS
                </span>
              </div>

              {/* Dynamic Content */}
              <div style={{ minHeight: "300px" }}>
                {heroContent.map((content, index) => (
                  <div
                    key={index}
                    className={`${currentSlide === index ? 'd-block' : 'd-none'}`}
                    style={{
                      animation: currentSlide === index ? 'fadeInUp 1s ease-out' : 'none'
                    }}
                  >
                    {/* Subtitle */}
                    <p className="text-uppercase fw-semibold mb-3"
                       style={{ 
                         color: "#b28721", 
                         letterSpacing: "2px",
                         fontSize: "1rem"
                       }}
                       data-aos="fade-up"
                       data-aos-delay="200">
                      {content.subtitle}
                    </p>

                    {/* Main Headline */}
                    <h1 className="display-2 fw-bold text-white mb-4 text-shadow"
                        style={{ 
                          lineHeight: "1.1",
                          letterSpacing: "-1px"
                        }}
                        data-aos="fade-up"
                        data-aos-delay="300">
                      {content.title}
                    </h1>

                    {/* Description */}
                    <p className="lead text-white mb-5"
                       style={{ 
                         fontSize: "1.3rem",
                         lineHeight: "1.6",
                         opacity: "0.95",
                         maxWidth: "600px"
                       }}
                       data-aos="fade-up"
                       data-aos-delay="400">
                      {content.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="d-flex flex-wrap gap-3 mb-5"
                         data-aos="fade-up"
                         data-aos-delay="500">
                      <Link
                        to={content.primaryAction.link}
                        className="btn btn-lg text-white fw-semibold rounded-pill px-5 py-3"
                        style={{
                          background: "linear-gradient(135deg, #b28721 0%, #d4a532 100%)",
                          border: "none",
                          boxShadow: "0 8px 25px rgba(178, 135, 33, 0.4)",
                          transition: "all 0.3s ease",
                          fontSize: "1.1rem",
                          letterSpacing: "0.5px"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = "translateY(-3px)"
                          e.target.style.boxShadow = "0 12px 35px rgba(178, 135, 33, 0.5)"
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = "translateY(0)"
                          e.target.style.boxShadow = "0 8px 25px rgba(178, 135, 33, 0.4)"
                        }}
                      >
                        <i className="fas fa-arrow-right me-2"></i>
                        {content.primaryAction.text}
                      </Link>

                      <Link
                        to={content.secondaryAction.link}
                        className="btn btn-lg btn-outline-light fw-semibold rounded-pill px-5 py-3"
                        style={{
                          borderWidth: "2px",
                          transition: "all 0.3s ease",
                          fontSize: "1.1rem"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = "rgba(255, 255, 255, 0.1)"
                          e.target.style.transform = "translateY(-2px)"
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "transparent"
                          e.target.style.transform = "translateY(0)"
                        }}
                      >
                        <i className="fas fa-play-circle me-2"></i>
                        {content.secondaryAction.text}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slide Indicators */}
              <div className="d-flex gap-2 mb-4" data-aos="fade-up" data-aos-delay="600">
                {heroContent.map((_, index) => (
                  <button
                    key={index}
                    className={`border-0 rounded-pill ${currentSlide === index ? 'active' : ''}`}
                    style={{
                      width: currentSlide === index ? "30px" : "10px",
                      height: "4px",
                      background: currentSlide === index ? "#b28721" : "rgba(255, 255, 255, 0.4)",
                      transition: "all 0.3s ease",
                      cursor: "pointer"
                    }}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Statistics Sidebar */}
          <div className="col-lg-4">
            <div className="row g-3" data-aos="fade-left" data-aos-delay="700">
              {statistics.map((stat, index) => (
                <div key={index} className="col-6">
                  <div className="card border-0 h-100 text-center"
                       style={{
                         background: "rgba(255, 255, 255, 0.1)",
                         backdropFilter: "blur(10px)",
                         borderRadius: "20px",
                         transition: "all 0.3s ease"
                       }}
                       onMouseEnter={(e) => {
                         e.currentTarget.style.background = "rgba(178, 135, 33, 0.2)"
                         e.currentTarget.style.transform = "translateY(-5px)"
                       }}
                       onMouseLeave={(e) => {
                         e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)"
                         e.currentTarget.style.transform = "translateY(0)"
                       }}>
                    <div className="card-body p-4">
                      <i className={`${stat.icon} fs-2 text-white mb-3 d-block`} 
                         style={{ opacity: "0.9" }}></i>
                      <h3 className="fw-bold text-white mb-1">{stat.number}</h3>
                      <p className="text-white-50 mb-0 small fw-medium">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-4" data-aos="fade-left" data-aos-delay="800">
              <div className="card border-0"
                   style={{
                     background: "rgba(255, 255, 255, 0.08)",
                     backdropFilter: "blur(15px)",
                     borderRadius: "20px"
                   }}>
                <div className="card-body p-4 text-center">
                  <h5 className="text-white fw-bold mb-3">Need Help?</h5>
                  <p className="text-white-50 small mb-3">
                    Connect with us for spiritual guidance, education, or medical assistance
                  </p>
                  <div className="d-flex gap-2 justify-content-center">
                    <a href="tel:03212637154" 
                       className="btn btn-sm btn-outline-light rounded-pill px-3"
                       style={{ fontSize: "0.8rem" }}>
                      <i className="fas fa-phone me-1"></i> Call
                    </a>
                    <a href="https://wa.me/923212637154" 
                       className="btn btn-sm rounded-pill px-3 text-white"
                       style={{ 
                         background: "#25D366",
                         fontSize: "0.8rem"
                       }}>
                      <i className="fab fa-whatsapp me-1"></i> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4"
           style={{ zIndex: 2 }}
           data-aos="fade-up"
           data-aos-delay="1000">
        <div className="text-center">
          <p className="text-white-50 small mb-2">Discover More</p>
          <div className="mx-auto"
               style={{
                 width: "2px",
                 height: "30px",
                 background: "rgba(178, 135, 33, 0.6)",
                 animation: "scrollIndicator 2s ease-in-out infinite"
               }}>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scrollIndicator {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(15px); opacity: 0; }
        }
        
        .min-vh-100 {
          min-height: 100vh;
        }
        
        @media (max-width: 768px) {
          .hero-header h1 {
            font-size: 2.5rem !important;
          }
          
          .hero-header .lead {
            font-size: 1.1rem !important;
          }
          
          .hero-header .btn {
            font-size: 1rem !important;
            padding: 12px 24px !important;
          }
        }
      `}</style>
    </div>
  )
}
