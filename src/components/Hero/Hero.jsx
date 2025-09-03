import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 }) // scroll animations ka duration
  }, [])

  return (
    <div className="container-fluid hero-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div
              className="hero-header-inner animate__animated animate__zoomIn"
              data-aos="fade-up"
            >
              <p className="fs-4 fw-bold text-uppercase secondary">Jamat-e-Ahle Hadis</p>
              <h1 className="display-3 mb-5 primary">Spread Islamic Education</h1>
              <a href="#" className="btn btn-primary py-3 px-5 btn-bg-primary">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
