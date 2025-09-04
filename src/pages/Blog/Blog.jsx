// pages/Blog/Blog.jsx
import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import BlogSection from '../../components/BlogSection/BlogSection'

const Blog = () => {
  return (
    <div>
      <HeroSection
        title="Blog"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Blog" }
        ]}
      />
      <BlogSection />
    </div>

  )
}

export default Blog