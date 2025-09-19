// pages/Contact/Contact.jsx
import React, { useState } from "react"
import Swal from "sweetalert2"
import HeroSection from "../../components/HeroSection/HeroSection"
import { useForm, ValidationError } from "@formspree/react"

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // })

  // const [errors, setErrors] = useState({})

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   })
  // }

  // const validate = () => {
  //   let tempErrors = {}

  //   if (!formData.name.trim()) tempErrors.name = "Name is required"
  //   if (!formData.email) {
  //     tempErrors.email = "Email is required"
  //   } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
  //     tempErrors.email = "Enter a valid email"
  //   }
  //   if (!formData.subject.trim()) tempErrors.subject = "Subject is required"
  //   if (!formData.message.trim()) tempErrors.message = "Message is required"

  //   setErrors(tempErrors)
  //   return Object.keys(tempErrors).length === 0
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   if (validate()) {
  //     console.log("📩 Form Data Submitted:", formData)
  //     Swal.fire({
  //       title: "Message Sent!",
  //       text: "Your message has been submitted successfully (demo only).",
  //       icon: "success",
  //       confirmButtonColor: "#245B5A",
  //       confirmButtonText: "OK",
  //     })

  //     setFormData({ name: "", email: "", subject: "", message: "" })
  //     setErrors({})
  //   }
  // }

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

  return (
    <div>
      <HeroSection
        title="Contact"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Contact" },
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
          </div>

          {/* Row with Map and Form */}
          <div className="row g-4" data-aos="fade-up" data-aos-delay="300">
            {/* Map (Left Side) */}
            <div className="col-md-6">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d535.5145754077679!2d67.06439529053368!3d24.912562852884243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1758264374586!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "450px", borderRadius: "8px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Form (Right Side) */}
            <div className="col-md-6">
              <form onSubmit={handleSubmit} className="row g-4">
                {/* Name */}
                <div className="col-sm-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control bg-transparent p-3"
                    placeholder="Your Name"
                    required
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                {/* Email */}
                <div className="col-sm-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control bg-transparent p-3"
                    placeholder="Your Email"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                {/* Subject */}
                <div className="col-12">
                  <input
                    type="text"
                    name="subject"
                    className="form-control bg-transparent p-3"
                    placeholder="Subject"
                    required
                  />
                </div>

                {/* Message */}
                <div className="col-12">
                  <textarea
                    name="message"
                    className="w-100 form-control bg-transparent p-3"
                    rows="6"
                    placeholder="Your Message"
                    required
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <div className="col-12 text-center">
                  <button
                    className="btn btn-bg-primary text-white border-0 py-3 px-5"
                    type="submit"
                    disabled={state.submitting}
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact