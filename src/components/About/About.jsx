// components/About/About.jsx
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import AboutImage from "../../assets/about-1.jpg"
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
            <h1 className="display-5 pb-4 m-0">Allah Help Those Who Help Themselves</h1>
            <p className="pb-4">
              Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor mattis aliquam.
              Etiam quis mauris justo. Vivamus purus nulla, rutrum ac risus in.
            </p>

            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <div className="ps-3 d-flex align-items-center justify-content-start">
                  <span className="btn-bg-primary btn-md-square rounded-circle mt-4 me-2">
                    <i className="fa fa-eye primary fa-3x mb-4 pb-2"></i>
                  </span>
                  <div className="ms-4">
                    <h5>Our Vision</h5>
                    <p>Lorem ipsum dolor sit amet tetur nod elit sed</p>
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
                    <p>Lorem ipsum dolor sit amet tetur nod elit sed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-light p-3 mb-4">
              <div className="row align-items-center justify-content-center">
                <div className="col-3">
                  <img src={ChildImage} className="img-fluid rounded-circle" alt="" />
                </div>
                <div className="col-6">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor mattis aliquam.
                    Etiam quis mauris justo.
                  </p>
                </div>
                <div className="col-3 text-center">
                  <h2 className="mb-0 secondary">$20,46</h2>
                  <h5 className="mb-0">Raised</h5>
                </div>
              </div>
            </div>

            <div className="row g-2">
              <div className="col-md-6">
                <p className="mb-2">
                  <i className="fa fa-check primary me-3"></i>Charity & Donation
                </p>
                <p className="mb-0">
                  <i className="fa fa-check primary me-3"></i>Parent Education
                </p>
              </div>
              <div className="col-md-6">
                <p className="mb-2">
                  <i className="fa fa-check primary me-3"></i>Hadith & Sunnah
                </p>
                <p className="mb-0">
                  <i className="fa fa-check primary me-3"></i>Mosque Development
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
            <div className="col-lg-7 text-center text-lg-start">
              <h1 className="mb-0 text-white text-shadow">
                Every Muslim Needs To Realise The Importance Of The "Pillar" Of Islam
              </h1>
            </div>
            <div className="col-lg-3">
              <a href="#" className="btn btn-light py-2 px-4">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}