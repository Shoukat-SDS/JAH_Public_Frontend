import React from "react"
import { Link } from "react-router-dom"
import "animate.css/animate.min.css"
import blogsData from "../../data/blogsData"

const BlogSection = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <h1 className="display-3 mb-5 animate__animated animate__fadeIn">
          Latest From <span className="primary">Our Blog</span>
        </h1>

        <div className="row g-4 justify-content-center">
          {blogsData.map((blog, index) => (
            <div className="col-lg-6 col-xl-4" key={blog.id}>
              <div
                className="blog-item animate__animated animate__fadeIn"
                style={{ animationDelay: `${0.1 + index * 0.2}s` }}
              >
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
                  </div>
                  <Link to={`/blog/${blog.id}`} className="d-inline-block h4 lh-sm mb-3 primary">
                    {blog.title}
                  </Link>
                  <p className="mb-4">
                    {blog.content.substring(0, 100)}...
                  </p>
                  <Link to={`/blog/${blog.id}`} className="btn btn-bg-primary text-white px-3">
                    More Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogSection