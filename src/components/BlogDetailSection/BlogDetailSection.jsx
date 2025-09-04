// components/BlogDetailSection/BlogDetailSection.jsx
import React from "react"
import ReactMarkdown from "react-markdown"; // Import ReactMarkdown
import remarkGfm from "remark-gfm";

const BlogDetailSection = ({ blog }) => {
  if (!blog) return null

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h1 className="display-4">{blog.title}</h1>
        <p className="text-muted">{blog.date} | {blog.comments} Comments</p>
      </div>

      <div className="mb-4">
        <img src={blog.img} alt={blog.title} className="img-fluid rounded shadow w-100 blog-image" />
      </div>

      <div className="content">
        {/* <p style={{ whiteSpace: "pre-line" }}>{blog.content}</p> */}
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{blog.content}</ReactMarkdown>
      </div>
    </div>
  )
}

export default BlogDetailSection

