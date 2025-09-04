// components/Sermons/Sermons.jsx

import React from "react";
import { motion } from "framer-motion";
import Image from "../../assets/sermon-1.jpg"
import Image1 from "../../assets/sermon-2.jpg"
import Image2 from "../../assets/sermon-3.jpg"

const sermons = [
  {
    img: Image,
    title: "How to get closer to Allah",
    date: "13 Nov 2023",
    author: "Admin",
  },
  {
    img: Image1,
    title: "Importance of Hajj in Islam",
    date: "13 Nov 2023",
    author: "Admin",
  },
  {
    img: Image2,
    title: "Importance of “Piller” of Islam",
    date: "13 Nov 2023",
    author: "Admin",
  },
];

const Sermon = () => {
  return (
    <div className="container-fluid sermon py-5">
      <div className="container py-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
          <p className="fs-5 text-uppercase secondary">Sermons</p>
          <h1 className="display-3 primary">Join The Islamic Community</h1>
        </div>
        <div className="row g-4 justify-content-center">
          {sermons.map((sermon, index) => (
            <div className="col-lg-6 col-xl-4" key={index}>
              <motion.div
                className="sermon-item"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="p-4 pb-0">
                  <div className="overflow-hidden">
                    <img src={sermon.img} className="img-fluid w-100" alt={sermon.title} />
                  </div>
                </div>
                <div className="p-4">
                  <div className="sermon-meta d-flex justify-content-between pb-2">
                    <div>
                      <small>
                        <i className="fa fa-calendar me-2 text-muted"></i>
                        <a href="" className="text-muted me-2">{sermon.date}</a>
                      </small>
                      <small>
                        <i className="fas fa-user me-2 text-muted"></i>
                        <a href="" className="text-muted">{sermon.author}</a>
                      </small>
                    </div>
                    <div>
                      <a href="" className="me-1"><i className="fas fa-video text-muted"></i></a>
                      <a href="" className="me-1"><i className="fas fa-headphones text-muted"></i></a>
                      <a href="" className="me-1"><i className="fas fa-file-alt text-muted"></i></a>
                      <a href=""><i className="fas fa-image text-muted"></i></a>
                    </div>
                  </div>
                  <a href="" className="d-inline-block h4 lh-sm mb-3 primary">{sermon.title}</a>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, aliquip ex ea commodo consequat.
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sermon;
