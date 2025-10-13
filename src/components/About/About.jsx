// components/About/About.jsx
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import AboutImage from "../../assets/aboutlargeimage.jpg"
import AboutImage1 from "../../assets/Aboutmasjid.jpg"
import AboutImage2 from "../../assets/Aboutmasjid2.jpg"

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const statistics = [
    { number: "200+", label: "Daily Patients", icon: "fas fa-user-md" },
    { number: "4", label: "Campuses", icon: "fas fa-university" },
    { number: "1500+", label: "Students", icon: "fas fa-graduation-cap" },
    { number: "50", label: "Eye Treatment Cost", icon: "fas fa-eye", unit: "Rs." }
  ]

  const features = [
    { text: "Charity & Welfare Support", icon: "fas fa-hands-helping" },
    { text: "Islamic & Modern Education", icon: "fas fa-book-open" },
    { text: "Mosque Development", icon: "fas fa-mosque" },
    { text: "Free Medical & Eye Care", icon: "fas fa-heartbeat" }
  ]

  return (
    <div className="container-fluid about py-0">
      <div className="container py-5">
        
        {/* Main About Section */}
        <div className="row mb-5 align-items-center">
          
          {/* Image Gallery */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="position-relative">
              
              {/* Main Large Image */}
              <div className="position-relative mb-4 d-none d-md-block" data-aos="fade-right" data-aos-delay="100">
                <div className="card border-0 shadow-lg overflow-hidden" style={{ borderRadius: "20px" }}>
                  <img
                    src={AboutImage}
                    className="img-fluid"
                    style={{ 
                      objectFit: "cover", 
                      height: "400px", 
                      width: "100%",
                      transition: "transform 0.3s ease"
                    }}
                    alt="Jamat-e-Ahle Hadis Main Building"
                    onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                    onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100" 
                       style={{ 
                         background: "linear-gradient(45deg, rgba(36, 91, 90, 0.1) 0%, transparent 50%)",
                         zIndex: 1
                       }}>
                  </div>
                </div>
              </div>

              {/* Secondary Images Row */}
              <div className="row g-3" data-aos="fade-right" data-aos-delay="200">
                <div className="col-6">
                  <div className="card border-0 shadow overflow-hidden" style={{ borderRadius: "15px" }}>
                    <img
                      src={AboutImage1}
                      className="img-fluid"
                      style={{ 
                        objectFit: "cover", 
                        height: "200px", 
                        width: "100%",
                        aspectRatio: "16 / 9",
                        transition: "transform 0.3s ease"
                      }}
                      alt="Masjid Interior"
                      onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
                      onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="card border-0 shadow overflow-hidden" style={{ borderRadius: "15px" }}>
                    <img
                      src={AboutImage2}
                      className="img-fluid"
                      style={{ 
                        objectFit: "cover", 
                        height: "200px", 
                        width: "100%",
                        transition: "transform 0.3s ease"
                      }}
                      alt="Masjid Exterior"
                      onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
                      onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                    />
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="position-absolute" 
                   style={{
                     top: "-20px",
                     right: "-20px",
                     width: "100px",
                     height: "100px",
                     background: "rgba(178, 135, 33, 0.1)",
                     borderRadius: "50%",
                     zIndex: -1
                   }}>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div className="ps-lg-4">
              
              {/* Header */}
              <div className="mb-4">
                <p className="text-uppercase fw-semibold mb-2" 
                   style={{ 
                     color: "#b28721", 
                     letterSpacing: "2px",
                     fontSize: "0.9rem"
                   }}>
                  About Jamat-e-Ahle Hadis
                </p>
                <h1 className="display-5 primary fw-bold mb-3" style={{ lineHeight: "1.2" }}>
                  Serving Faith, Education & Humanity
                </h1>
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-secondary" style={{ width: "50px", height: "3px", borderRadius: "2px" }}></div>
                  <div className="bg-primary ms-2" style={{ width: "20px", height: "3px", borderRadius: "2px" }}></div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted mb-4 lead" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                Jamat Ahl-e-Hadis is a dedicated Islamic organization committed to spreading both religious and worldly education under the light of the Qur'an and Sunnah.
                With campuses located in Azizabad, FB Area Block-7, Surjani Town (Sector-7B), and Soldier Bazaar (Dar-ul-Hadith Rahmaniya), our mission is to nurture individuals who are spiritually enlightened, academically capable, and socially responsible.
              </p>

              <p className="text-muted mb-4">
                Through our network of Masajid, Welfare Services, and Medical Programs, we serve thousands of people daily — building an Islamic community grounded in knowledge, compassion, and service.
              </p>

              {/* Vision & Mission Cards */}
              <div className="row g-4 mb-4">
                <div className="col-12">
                  <div className="card border-0 shadow-sm h-100" 
                       style={{ 
                         borderRadius: "15px",
                         background: "linear-gradient(135deg, rgba(36, 91, 90, 0.05) 0%, rgba(178, 135, 33, 0.05) 100%)"
                       }}>
                    <div className="card-body p-4">
                      <div className="d-flex align-items-start">
                        <div className="flex-shrink-0 me-3">
                          <div className="btn-lg-square btn-bg-primary rounded-circle d-flex align-items-center justify-content-center">
                            <i className="fas fa-eye text-white fs-4"></i>
                          </div>
                        </div>
                        <div>
                          <h5 className="primary fw-bold mb-2">Our Vision</h5>
                          <p className="text-muted mb-0">
                            To establish a faith-driven and progressive Islamic society where knowledge, worship, and service unite to uplift humanity.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-12">
                  <div className="card border-0 shadow-sm h-100" 
                       style={{ 
                         borderRadius: "15px",
                         background: "linear-gradient(135deg, rgba(178, 135, 33, 0.05) 0%, rgba(36, 91, 90, 0.05) 100%)"
                       }}>
                    <div className="card-body p-4">
                      <div className="d-flex align-items-start">
                        <div className="flex-shrink-0 me-3">
                          <div className="btn-lg-square btn-bg-primary rounded-circle d-flex align-items-center justify-content-center">
                            <i className="fas fa-flag text-white fs-4"></i>
                          </div>
                        </div>
                        <div>
                          <h5 className="primary fw-bold mb-2">Our Mission</h5>
                          <p className="text-muted mb-0">
                            To empower individuals through Islamic and modern education, welfare programs, and sustainable community initiatives rooted in the principles of the Qur'an and Sunnah.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="row g-3 mb-4">
                {features.map((feature, index) => (
                  <div key={index} className="col-md-6">
                    <div className="d-flex align-items-center p-2 rounded-pill" 
                         style={{ 
                           background: "rgba(36, 91, 90, 0.05)",
                           transition: "all 0.3s ease"
                         }}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.background = "rgba(178, 135, 33, 0.1)"
                           e.currentTarget.style.transform = "translateX(5px)"
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.background = "rgba(36, 91, 90, 0.05)"
                           e.currentTarget.style.transform = "translateX(0)"
                         }}>
                      <div className="btn-sm-square rounded-circle me-3 d-flex align-items-center justify-content-center"
                           style={{ background: "#245b5a" }}>
                        <i className={`${feature.icon} text-white`} style={{ fontSize: "0.8rem" }}></i>
                      </div>
                      <span className="text-dark fw-medium">{feature.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="row mb-5" data-aos="fade-up" data-aos-delay="400">
          <div className="col-12">
            <div className="card border-0 shadow-lg" 
                 style={{ 
                   borderRadius: "20px",
                   background: "linear-gradient(135deg, rgba(36, 91, 90, 0.03) 0%, rgba(178, 135, 33, 0.03) 100%)"
                 }}>
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <h3 className="primary fw-bold mb-2">Our Impact in Numbers</h3>
                  <p className="text-muted">Making a difference in our community every single day</p>
                </div>
                
                <div className="row g-4">
                  {statistics.map((stat, index) => (
                    <div key={index} className="col-lg-3 col-md-6 text-center">
                      <div className="card border-0 h-100 shadow-sm"
                           style={{ 
                             borderRadius: "15px",
                             transition: "all 0.3s ease"
                           }}
                           onMouseEnter={(e) => {
                             e.currentTarget.style.transform = "translateY(-5px)"
                             e.currentTarget.style.boxShadow = "0 10px 30px rgba(36, 91, 90, 0.15)"
                           }}
                           onMouseLeave={(e) => {
                             e.currentTarget.style.transform = "translateY(0)"
                             e.currentTarget.style.boxShadow = "0 2px 15px rgba(0, 0, 0, 0.08)"
                           }}>
                        <div className="card-body p-4">
                          <div className="mb-3">
                            <i className={`${stat.icon} fs-1`} style={{ color: "#b28721" }}></i>
                          </div>
                          <h2 className="primary fw-bold mb-1">
                            {stat.unit && stat.unit}{stat.number}
                          </h2>
                          <p className="text-muted mb-0 fw-medium">{stat.label}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Impact Statement */}
                <div className="text-center mt-5">
                  <div className="card border-0" 
                       style={{ 
                         background: "linear-gradient(135deg, #245b5a 0%, #1a4544 100%)",
                         borderRadius: "15px"
                       }}>
                    <div className="card-body p-4">
                      <div className="row align-items-center">
                        <div className="col-md-2 text-center mb-3 mb-md-0">
                          <i className="fas fa-heartbeat fs-1 text-white" style={{ opacity: "0.9" }}></i>
                        </div>
                        <div className="col-md-10 text-center text-md-start">
                          <p className="text-white mb-0 fs-5 fw-medium">
                            Every day, over <span className="fw-bold" style={{ color: "#b28721" }}>200 patients</span> benefit from our free medical
                            dispensary, while our <span className="fw-bold" style={{ color: "#b28721" }}>Eye Clinic</span> provides affordable
                            treatment and glasses for just <span className="fw-bold" style={{ color: "#b28721" }}>Rs.50</span>. 
                            Our educational institutes and mosques continue to enlighten thousands with knowledge and guidance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="row" data-aos="fade-up" data-aos-delay="500">
          <div className="col-12">
            <div className="card border-0 shadow-lg overflow-hidden" 
                 style={{ borderRadius: "20px" }}>
              <div className="position-relative">
                <div className="card-body p-5"
                     style={{
                       background: "linear-gradient(135deg, #b28721 0%, #d4a532 50%, #b28721 100%)",
                       position: "relative"
                     }}>
                  
                  {/* Background Pattern */}
                  <div className="position-absolute top-0 end-0 opacity-10"
                       style={{
                         width: "200px",
                         height: "200px",
                         background: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"none\" stroke=\"white\" stroke-width=\"2\"/></svg>') no-repeat",
                         backgroundSize: "cover"
                       }}>
                  </div>
                  
                  <div className="row align-items-center position-relative">
                    <div className="col-lg-2 text-center mb-4 mb-lg-0">
                      <i className="fas fa-mosque text-white" style={{ fontSize: "4rem", opacity: "0.9" }}></i>
                    </div>
                    
                    <div className="col-lg-8 text-center text-lg-start mb-4 mb-lg-0">
                      <h2 className="text-white fw-bold mb-2 text-shadow">
                        Together, Let's Build a Community Rooted in Faith, Knowledge & Compassion
                      </h2>
                      <p className="text-white mb-0 fs-5" style={{ opacity: "0.9" }}>
                        Join us in our mission to serve humanity through education, healthcare, and spiritual guidance
                      </p>
                    </div>
                    
                    <div className="col-lg-2 text-center">
                      <a href="/contact" 
                         className="btn btn-light fw-semibold px-4 py-3 rounded-pill"
                         style={{
                           transition: "all 0.3s ease",
                           boxShadow: "0 4px 15px rgba(255, 255, 255, 0.3)"
                         }}
                         onMouseEnter={(e) => {
                           e.target.style.transform = "translateY(-2px)"
                           e.target.style.boxShadow = "0 6px 20px rgba(255, 255, 255, 0.4)"
                         }}
                         onMouseLeave={(e) => {
                           e.target.style.transform = "translateY(0)"
                           e.target.style.boxShadow = "0 4px 15px rgba(255, 255, 255, 0.3)"
                         }}>
                        <i className="fas fa-arrow-right me-2"></i>
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}