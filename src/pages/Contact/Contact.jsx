// pages/Contact/Contact.jsx
import React, { useState } from 'react'
import Swal from "sweetalert2"
import HeroSection from '../../components/HeroSection/HeroSection'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const validate = () => {
    let tempErrors = {}

    if (!formData.name.trim()) tempErrors.name = "Name is required"
    if (!formData.email) {
      tempErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Enter a valid email"
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required"
    if (!formData.message.trim()) tempErrors.message = "Message is required"

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      console.log("📩 Form Data Submitted:", formData)
      Swal.fire({
        title: "Message Sent!",
        text: "Your message has been submitted successfully (demo only).",
        icon: "success",
        confirmButtonColor: "#245B5A",
        confirmButtonText: "OK",
      })

      setFormData({ name: "", email: "", subject: "", message: "" }) // reset
      setErrors({})
    }
  }

  return (
    <div>
      <HeroSection
        title="Contact"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Contact" }
        ]}
      />
      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5"
            data-aos="fade-up"
            data-aos-delay="100"
            style={{ maxWidth: "700px" }}
          >
            <p className="fs-5 text-uppercase secondary">Get In Touch</p>
            <h1 className="display-6 primary">Contact For Any Queries</h1>
            <p className="mb-0 text-warning">
              The contact form is currently inactive.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="row g-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {/* Name */}
            <div className="col-sm-6">
              <input
                type="text"
                name="name"
                className={`form-control bg-transparent p-3 ${errors.name ? "is-invalid" : ""
                  }`}
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <small className="text-danger">{errors.name}</small>
              )}
            </div>

            {/* Email */}
            <div className="col-sm-6">
              <input
                type="email"
                name="email"
                className={`form-control bg-transparent p-3 ${errors.email ? "is-invalid" : ""
                  }`}
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}
            </div>

            {/* Subject */}
            <div className="col-12">
              <input
                type="text"
                name="subject"
                className={`form-control bg-transparent p-3 ${errors.subject ? "is-invalid" : ""
                  }`}
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && (
                <small className="text-danger">{errors.subject}</small>
              )}
            </div>

            {/* Message */}
            <div className="col-12">
              <textarea
                name="message"
                className={`w-100 form-control bg-transparent p-3 ${errors.message ? "is-invalid" : ""
                  }`}
                rows="6"
                cols="10"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <small className="text-danger">{errors.message}</small>
              )}
            </div>

            <div className="col-12 text-center">
              <button
                className="btn btn-bg-primary text-white border-0 py-3 px-5"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact