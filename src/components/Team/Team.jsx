// src/components/Team.jsx
import React from "react";
// import "animate.css/animate.min.css";
import TeamImage from "../../assets/team-1.jpg"
import TeamImage1 from "../../assets/team-2.jpg"
import TeamImage2 from "../../assets/team-3.jpg"
import TeamImage3 from "../../assets/team-4.jpg"

const teamData = {
  main: {
    name: "Anamul Hasan",
    role: "President",
    img: TeamImage,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. aliquip ex ea commodo consequat.",
    social: ["facebook", "twitter", "instagram", "linkedin"],
  },
  members: [
    {
      name: "Mustafa Kamal",
      role: "Imam",
      img: TeamImage1,
      delay: 0.2,
      social: ["facebook", "twitter", "instagram", "linkedin"],
    },
    {
      name: "Nahiyan Momen",
      role: "Teacher",
      img: TeamImage2,
      delay: 0.4,
      social: ["facebook", "twitter", "instagram", "linkedin"],
    },
    {
      name: "Asfaque Ali",
      role: "Volunteer",
      img: TeamImage3,
      delay: 0.6,
      social: ["facebook", "twitter", "instagram", "linkedin"],
    },
  ],
};

const Team = () => {
  return (
    <div className="container-fluid team py-5">
      <div className="container py-5">
        {/* Heading */}
        <div
          className="text-center mx-auto mb-5 animate__animated animate__fadeIn"
          style={{ maxWidth: "700px", animationDelay: "0.1s" }}
        >
          <p className="fs-5 text-uppercase secondary">Our Team</p>
          <h1 className="display-3 primary">Meet Our Organizer</h1>
        </div>

        <div className="row g-5">
          {/* Main Organizer */}
          <div className="col-lg-4 col-xl-5">
            <div
              className="team-img animate__animated animate__zoomIn"
              style={{ animationDelay: "0.1s" }}
            >
              <img src={teamData.main.img} className="img-fluid" alt={teamData.main.name} />
            </div>
          </div>

          <div className="col-lg-8 col-xl-7">
            <div
              className="team-item animate__animated animate__fadeIn"
              style={{ animationDelay: "0.1s" }}
            >
              <h1 className="primary">{teamData.main.name}</h1>
              <h5 className="fw-normal fst-italic secondary mb-4">{teamData.main.role}</h5>
              <p className="mb-4">{teamData.main.description}</p>
              <div className="team-icon d-flex pb-4 mb-4 border-bottom border-primary">
                {teamData.main.social.map((platform, i) => (
                  <a
                    key={i}
                    className="btn btn-bg-primary text-white me-2"
                    href="#"
                  >
                    <i className={`fab fa-${platform}`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Other Team Members */}
            <div className="row g-4">
              {teamData.members.map((member, index) => (
                <div className="col-md-4" key={index}>
                  <div
                    className="team-item animate__animated animate__zoomIn"
                    style={{ animationDelay: `${member.delay}s` }}
                  >
                    <img src={member.img} className="img-fluid w-100" alt={member.name} />
                    <div className="team-content text-dark text-center py-3">
                      <div className="team-content-inner">
                        <h5 className="mb-0 primary fw-bold">{member.name}</h5>
                        <p className="text-dark">{member.role}</p>
                        <div className="team-icon d-flex align-items-center justify-content-center">
                          {member.social.map((platform, i) => (
                            <a
                              key={i}
                              className="btn btn-bg-primary text-white btn-sm-square me-2 d-flex"
                              href="#"
                            >
                              <i className={`fab fa-${platform}`}></i>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
