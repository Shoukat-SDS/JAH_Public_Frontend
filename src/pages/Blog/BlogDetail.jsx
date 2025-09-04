// pages/Blog/BlogDetail.jsx
import React from "react"
import { useParams } from "react-router-dom"
import HeroSection from "../../components/HeroSection/HeroSection"
import BlogDetailSection from "../../components/BlogDetailSection/BlogDetailSection"
import blogsData from "../../data/blogsData"

const BlogDetail = () => {
  const { id } = useParams()
  console.log(id)
  const blog = blogsData.find((b) => String(b.id) === id)

  if (!blog) {
    return <h2 className="text-center py-5">Blog Not Found</h2>
  }

  console.log(blog.title)

  return (
    <div>
      <HeroSection
        title={blog.title}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Blog", path: "/blog" },
          { label: blog.title },
        ]}
      />
      <BlogDetailSection blog={blog} />
    </div>
  )
}

export default BlogDetail
