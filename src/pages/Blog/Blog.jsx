import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'

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
    </div>
  )
}

export default Blog