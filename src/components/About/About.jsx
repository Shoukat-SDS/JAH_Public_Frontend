// components/About/About.jsx
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import AboutImage from "../../assets/images.jpeg"
import AboutImage1 from "../../assets/about-2.jpg"
import AboutImage2 from "../../assets/about-3.jpg"
import ChildImage from "../../assets/about-child.jpg"

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div className="container-fluid about py-5">
      <div className="container py-5">
        <div className="row g-5 mb-5">
          <div className="col-xl-6">
            <div className="row g-4">
              <div className="col-6">
                <img
                  src={AboutImage}
                  className="img-fluid h-100 animate__animated animate__zoomIn"
                  style={{ objectFit: "cover", minHeight: "850px" }}
                  data-aos="zoom-in"
                  alt=""
                />
              </div>
              <div className="col-6">
                <img
                  src={AboutImage1}
                  className="img-fluid pb-3 animate__animated animate__zoomIn"
                  data-aos="zoom-in"
                  alt=""
                />
                <img
                  src={AboutImage2}
                  className="img-fluid pt-3 animate__animated animate__zoomIn"
                  data-aos="zoom-in"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="col-xl-6" data-aos="fade-up" data-aos-delay="500">
            <p className="fs-5 text-uppercase primary">About Jamat-e-Ahle Hadis</p>
            <h1 className="display-5 pb-4 m-0">Serving Faith, Education & Humanity</h1>
            <p className="pb-4">
              Jamat-e-Ahle Hadis is dedicated to spreading both Islamic and contemporary education
              across multiple campuses in Karachi, while also serving communities through mosques,
              medical care, and social welfare programs. From spiritual guidance to modern learning,
              from free healthcare to orphan and widow support — our mission is to nurture both faith
              and humanity.
            </p>

            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <div className="ps-3 d-flex align-items-center justify-content-start">
                  <span className="btn-bg-primary btn-md-square rounded-circle mt-4 me-2">
                    <i className="fa fa-eye primary fa-3x mb-4 pb-2"></i>
                  </span>
                  <div className="ms-4">
                    <h5>Our Vision</h5>
                    <p>To establish a society rooted in Quran and Sunnah, where every individual
                      has access to education, healthcare, and a dignified life.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="ps-3 d-flex align-items-center justify-content-start">
                  <span className="btn-bg-primary btn-md-square rounded-circle mt-4 me-2">
                    <i className="fa fa-flag primary fa-3x mb-4 pb-2"></i>
                  </span>
                  <div className="ms-4">
                    <h5>Our Mission</h5>
                    <p>To provide quality Deeni and Dunyavi education, build and maintain mosques,
                      serve the underprivileged with healthcare and social support.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-light p-3 mb-4">
              <div className="row align-items-center justify-content-center">
                <div className="col-2 d-flex align-items-center justify-content-center">
                  <i className="fa fa-eye primary fa-3x pb-2"></i>
                  {/* <img src={ChildImage} className="img-fluid rounded-circle" alt="" /> */}
                </div>
                <div className="col-10">
                  <p className="mb-0">
                    Every day, over <strong>200 patients</strong> benefit from our free medical
                    dispensary, while our <strong>Eye Clinic</strong> provides affordable
                    treatment and glasses for just Rs.50. Alongside, our educational institutes
                    and mosques continue to enlighten thousands with knowledge and guidance.
                  </p>
                </div>
                {/* <div className="col-3 text-center">
                  <h2 className="mb-0 secondary">$20,46</h2>
                  <h5 className="mb-0">Raised</h5>
                </div> */}
              </div>
            </div>

            <div className="row g-2">
              <div className="col-md-6">
                <p className="mb-2">
                  <i className="fa fa-check primary me-3"></i>Charity & Welfare Support
                </p>
                <p className="mb-0">
                  <i className="fa fa-check primary me-3"></i>Islamic & Modern Education
                </p>
              </div>
              <div className="col-md-6">
                <p className="mb-2">
                  <i className="fa fa-check primary me-3"></i>Mosque & Madrassa Development
                </p>
                <p className="mb-0">
                  <i className="fa fa-check primary me-3"></i>Free Medical & Eye Care
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container text-center background-secondary py-5 animate__animated animate__fadeIn"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row g-4 align-items-center">
            <div className="col-lg-2">
              <i className="fa fa-mosque fa-5x text-white"></i>
            </div>
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="mb-0 text-white text-shadow">
                Together, Let's Build a Community Rooted in Faith, Knowledge & Compassion
              </h1>
            </div>
            <div className="col-lg-2">
              <a href="#" className="btn btn-light py-2 px-4">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}