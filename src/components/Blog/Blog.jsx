// src/components/Blog.jsx
import React from "react";
import "animate.css/animate.min.css"; // Animate.css for fadeIn effects
import Image from "../../assets/blog-1.jpg"
import Image1 from "../../assets/blog-2.jpg"
import Image2 from "../../assets/blog-3.jpg"

const blogs = [
  {
    title: "Importance of “Piller” of Islam",
    img: Image,
    date: "01 Jan 2045",
    comments: 12,
  },
  {
    title: "How to get closer to Allah",
    img: Image1,
    date: "01 Jan 2045",
    comments: 12,
  },
  {
    title: "Importance of Hajj in Islam",
    img: Image2,
    date: "01 Jan 2045",
    comments: 12,
  },
];

const Blog = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <h1 className="display-3 mb-5 animate__animated animate__fadeIn">
          Latest From <span className="primary">Our Blog</span>
        </h1>

        <div className="row g-4 justify-content-center">
          {blogs.map((blog, index) => (
            <div className="col-lg-6 col-xl-4" key={index}>
              <div className={`blog-item animate__animated animate__fadeIn`} style={{ animationDelay: `${0.1 + index * 0.2}s` }}>
                <div className="blog-img position-relative overflow-hidden">
                  <img src={blog.img} className="img-fluid w-100" alt={blog.title} />
                  <div className="btn-bg-primary d-inline px-3 py-2 text-center text-white position-absolute top-0 end-0">
                    {blog.date}
                  </div>
                </div>
                <div className="p-4">
                  <div className="blog-meta d-flex justify-content-between pb-2">
                    <div>
                      <small>
                        <i className="fas fa-user me-2 text-muted"></i>By Admin
                      </small>
                      <small className="ms-2">
                        <i className="fa fa-comment-alt me-2 text-muted"></i>
                        {blog.comments} Comments
                      </small>
                    </div>
                    <div>
                      <a href="#">
                        <i className="fas fa-bookmark text-muted"></i>
                      </a>
                    </div>
                  </div>
                  <a href="#" className="d-inline-block h4 lh-sm mb-3 primary">
                    {blog.title}
                  </a>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <a href="#" className="btn btn-bg-primary text-white px-3">
                    More Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
