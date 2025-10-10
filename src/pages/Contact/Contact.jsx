// pages/Contact/Contact.jsx
import React, { useState } from "react"
import Swal from "sweetalert2"
import HeroSection from "../../components/HeroSection/HeroSection"
import { useForm, ValidationError } from "@formspree/react"

const Contact = () => {
  const [state, handleSubmit] = useForm("xovnzerw")

  if (state.succeeded) {
    Swal.fire({
      title: "Message Sent!",
      text: "Your message has been submitted successfully.",
      icon: "success",
      confirmButtonColor: "#245B5A",
      confirmButtonText: "OK",
    })
  }

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Our Address",
      content: "Jamat-e-Ahle Hadis Central Office",
      details: "Karachi, Pakistan"
    },
    {
      icon: "fas fa-phone-alt",
      title: "Call Us",
      content: "0321-2637154",
      details: "0348-0089000"
    },
    {
      icon: "fas fa-envelope",
      title: "Email Us",
      content: "info@jah.org",
      details: "contact@jah.org"
    },
    {
      icon: "fas fa-clock",
      title: "Open Hours",
      content: "Mon - Fri: 9:00 AM - 5:00 PM",
      details: "Sat: 9:00 AM - 2:00 PM"
    }
  ]

  return (
    <div>
      <HeroSection
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Contact" },
        ]}
      />

      {/* Contact Header Section */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="position-relative mb-5">
              <h2 className="display-5 primary fw-bold">Get In Touch</h2>
              <p className="lead text-muted mt-3">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              <div className="d-flex justify-content-center mt-4">
                <div className="bg-secondary" style={{ width: "60px", height: "4px", borderRadius: "2px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="container mb-5">
        <div className="row g-4" data-aos="fade-up" data-aos-delay="200">
          {contactInfo.map((info, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-sm h-100 text-center" 
                   style={{ 
                     transition: "all 0.3s ease",
                     borderRadius: "15px"
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
                  <div className="d-flex justify-content-center mb-3">
                    <div className="btn-lg-square btn-bg-primary rounded-circle d-flex align-items-center justify-content-center">
                      <i className={`${info.icon} text-white fs-4`}></i>
                    </div>
                  </div>
                  <h5 className="card-title primary fw-bold mb-3">{info.title}</h5>
                  <p className="card-text text-dark fw-semibold mb-1">{info.content}</p>
                  <p className="card-text text-muted small">{info.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="container-fluid py-5" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)" }}>
        <div className="container">
          <div className="row g-5 align-items-center" data-aos="fade-up" data-aos-delay="300">
            {/* Contact Form */}
            <div className="col-lg-6">
              <div className="card border-0 shadow-lg" style={{ borderRadius: "20px" }}>
                <div className="card-body p-5">
                  <div className="text-center mb-4">
                    <h3 className="primary fw-bold">Send us a Message</h3>
                    <p className="text-muted">Fill out the form below and we'll get back to you shortly.</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="row g-4">
                    {/* Name */}
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="floatingName"
                          placeholder="Your Name"
                          style={{ 
                            borderRadius: "10px",
                            border: "2px solid #e9ecef",
                            transition: "all 0.3s ease"
                          }}
                          onFocus={(e) => e.target.style.borderColor = "#245b5a"}
                          onBlur={(e) => e.target.style.borderColor = "#e9ecef"}
                          required
                        />
                        <label htmlFor="floatingName" className="text-muted">Your Name</label>
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="floatingEmail"
                          placeholder="Your Email"
                          style={{ 
                            borderRadius: "10px",
                            border: "2px solid #e9ecef",
                            transition: "all 0.3s ease"
                          }}
                          onFocus={(e) => e.target.style.borderColor = "#245b5a"}
                          onBlur={(e) => e.target.style.borderColor = "#e9ecef"}
                          required
                        />
                        <label htmlFor="floatingEmail" className="text-muted">Your Email</label>
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          name="subject"
                          className="form-control"
                          id="floatingSubject"
                          placeholder="Subject"
                          style={{ 
                            borderRadius: "10px",
                            border: "2px solid #e9ecef",
                            transition: "all 0.3s ease"
                          }}
                          onFocus={(e) => e.target.style.borderColor = "#245b5a"}
                          onBlur={(e) => e.target.style.borderColor = "#e9ecef"}
                          required
                        />
                        <label htmlFor="floatingSubject" className="text-muted">Subject</label>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          name="message"
                          className="form-control"
                          id="floatingMessage"
                          placeholder="Your Message"
                          style={{ 
                            height: "120px",
                            borderRadius: "10px",
                            border: "2px solid #e9ecef",
                            transition: "all 0.3s ease",
                            resize: "none"
                          }}
                          onFocus={(e) => e.target.style.borderColor = "#245b5a"}
                          onBlur={(e) => e.target.style.borderColor = "#e9ecef"}
                          required
                        ></textarea>
                        <label htmlFor="floatingMessage" className="text-muted">Your Message</label>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                      </div>
                    </div>

                    <div className="col-12 text-center">
                      <button
                        className="btn btn-bg-primary text-white border-0 py-3 px-5 rounded-pill fw-semibold"
                        type="submit"
                        disabled={state.submitting}
                        style={{ 
                          fontSize: "16px",
                          letterSpacing: "0.5px",
                          transition: "all 0.3s ease",
                          boxShadow: "0 4px 15px rgba(178, 135, 33, 0.3)"
                        }}
                      >
                        {state.submitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-paper-plane me-2"></i>
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="col-lg-6">
              <div className="card border-0 shadow-lg" style={{ borderRadius: "20px", overflow: "hidden" }}>
                <div className="card-header background-secondary text-white text-center py-3 border-0">
                  <h5 className="mb-0 fw-bold">
                    <i className="fas fa-map-marker-alt me-2"></i>
                    Find Us Here
                  </h5>
                </div>
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d535.5145754077679!2d67.06439529053368!3d24.912562852884243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1758264374586!5m2!1sen!2s"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg text-center" 
                 style={{
                   background: "linear-gradient(135deg, #245b5a 0%, #1a4544 100%)",
                   borderRadius: "20px",
                   position: "relative",
                   overflow: "hidden"
                 }}
                 data-aos="fade-up" 
                 data-aos-delay="400">
              
              {/* Background Pattern */}
              <div className="position-absolute top-0 end-0" 
                   style={{
                     width: "200px",
                     height: "200px",
                     background: "rgba(178, 135, 33, 0.1)",
                     borderRadius: "50%",
                     transform: "translate(50px, -50px)"
                   }}></div>
              
              <div className="card-body p-5 position-relative">
                <div className="text-center text-white">
                  <i className="fas fa-headset fs-1 mb-4" style={{ color: "#b28721" }}></i>
                  <h3 className="text-white fw-bold mb-3">Need Immediate Assistance?</h3>
                  <p className="text-white-50 mb-4 lead">
                    Our team is here to help you. Don't hesitate to reach out for any urgent matters.
                  </p>
                  <div className="d-flex justify-content-center gap-3 flex-wrap">
                    <a href="tel:03212637154" 
                       className="btn btn-outline-light rounded-pill px-4 py-2"
                       style={{ 
                         borderWidth: "2px",
                         transition: "all 0.3s ease"
                       }}>
                      <i className="fas fa-phone me-2"></i>
                      Call Now
                    </a>
                    <a href="https://wa.me/923212637154" 
                       className="btn text-white rounded-pill px-4 py-2"
                       style={{ 
                         background: "#b28721",
                         transition: "all 0.3s ease"
                       }}>
                      <i className="fab fa-whatsapp me-2"></i>
                      WhatsApp
                    </a>
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

export default Contact