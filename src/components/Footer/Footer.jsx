// components/Footer/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid footer pt-0 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-lg-7">
            <h1 className="text-light mb-0">Subscribe our newsletter</h1>
            <p className="text-secondary">Get the latest news and other tips</p>
          </div>
          <div className="col-lg-5">
            <div className="position-relative mx-auto">
              <input
                className="form-control border-0 w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-bg-primary text-white py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="col-12">
            <div className="border-top border-secondary"></div>
          </div>
        </div>

        <div className="row g-4 footer-inner">
          {/* Footer Item 1 */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item mt-5">
              <h4 className="text-light mb-4">
                JAMAT-E-<span className="secondary">AHLE HADIS</span>
              </h4>
              <p className="mb-4 text-secondary">
                Jamat-e-Ahle Hadis is serving the community by promoting Islamic and modern
                education, building mosques, running free medical facilities, and supporting
                underprivileged families across Karachi. Together, we aim to create a society
                rooted in faith, knowledge, and compassion.
              </p>
              <Link to={"/donate"} className="btn btn-bg-primary text-white py-2 px-4">
                Donate Now
              </Link>
            </div>
          </div>

          {/* Footer Item 2 */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item mt-5">
              <h4 className="text-light mb-4">Contact</h4>
              <p className="text-secondary mb-3">Reach us for donations, volunteering, or inquiries.</p>
              <div className="d-flex flex-column">
                <h6 className="secondary mb-0">Our Address</h6>
                <div className="d-flex align-items-center border-bottom py-4">
                  <span className="flex-shrink-0 btn-square btn-bg-primary me-3 p-4">
                    <i className="fa fa-map-marker-alt text-dark-50"></i>
                  </span>
                  <small>
                    <a
                      href="https://maps.app.goo.gl/795RnFdNZENHhsNz8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body text-white-50"
                    >
                      Office No. 01, First Floor,
                      Adjacent to Jamia Masjid Bait-us-Salaam,
                      Azizabad, Karachi
                    </a>
                  </small>
                </div>
                <h6 className="secondary mt-4 mb-0">Call & WhatsApp Numbers:</h6>
                <div className="d-flex flex-column py-4">
                  <div className="d-flex align-items-center mb-3">
                    <span className="flex-shrink-0 btn-square btn-bg-primary me-3 p-3">
                      <i className="fa fa-phone-alt text-dark-50"></i>
                    </span>
                    <div className="d-flex flex-column text-white-50">
                      <small>
                        (Dr. Zakariya)
                      </small>
                      <small>
                        <a href="tel:03212410046" className="text-body text-white-50">
                          0321-2410046
                        </a>
                      </small>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <span className="flex-shrink-0 btn-square btn-bg-primary me-3 p-3">
                      <i className="fa fa-phone-alt text-dark-50"></i>
                    </span>
                    <div className="d-flex flex-column text-white-50">
                      <small>
                        (Dr. Ayub)
                      </small>
                      <small>
                        <a href="tel:03212637154" className="text-body text-white-50">
                          0321-2637154
                        </a>
                      </small>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <span className="flex-shrink-0 btn-square btn-bg-primary me-3 p-3">
                      <i className="fa fa-phone-alt text-dark-50"></i>
                    </span>
                    <div className="d-flex flex-column text-white-50">
                      <small>
                        (Office)
                      </small>
                      <small>
                        <a href="tel:03480089000" className="text-body text-white-50">
                          0348-0089000
                        </a>
                      </small>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <span className="flex-shrink-0 btn-square btn-bg-primary me-3 p-3">
                      <i className="fa fa-phone-alt text-dark-50"></i>
                    </span>
                    <div className="d-flex flex-column text-white-50">
                      <small>
                        (Office)
                      </small>
                      <small>
                        <a href="tel:02136346375" className="text-body text-white-50">
                          0213-6346375
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Item 3 */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item mt-5">
              <h4 className="text-light mb-4">Explore Link</h4>
              <div className="d-flex flex-column align-items-start">
                {[
                  "Home",
                  "About Us",
                  "Projects",
                  "Campuses",
                  "Mosques",
                  "Medical Services",
                  "Future Plans",
                  "Contact",
                ].map((link, i) => (
                  <a key={i} className="text-body text-white-50 mb-2 text-decoration-none" href="#">
                    <i className="fa fa-check secondary me-2"></i>
                    {link}
                  </a>
                ))}

              </div>
            </div>
          </div>

          {/* Footer Item 4 */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item mt-5">
              <h4 className="text-light mb-4">Our Campuses</h4>
<p className="text-secondary">Spreading knowledge across Karachi through our campuses:</p>
              <ul className="list-unstyled text-white-50">
                <li className="mb-2">• Jamia Dar-ul-Hadith Rehmania, Soldier Bazar</li>
                <li className="mb-2">• Madrasa Bait-us-Salaam School, Main Campus, Azizabad</li>
                <li className="mb-2">• Madrasa Bait-us-Salaam School, Dastagir Campus</li>
                <li className="mb-2">• Madrasa Bait-us-Salaam School, Surjani Campus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="border-top border-secondary pb-4"></div>
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 text-white-50">
            &copy; <a className="border-bottom secondary" href="https://www.jah.org">Jamat-e-Ahle Hadis</a>, All Rights Reserved.

          </div>
          <div className="col-md-6 text-center text-md-end text-white">
            <span className="text-white-50">Designed with</span> 💗
            <a className="border-bottom secondary fw-bold" href="https://softdesksolution.com">
              Soft Desk Solution LLC
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
