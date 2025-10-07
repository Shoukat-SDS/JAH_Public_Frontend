// pages/About/About.jsx
import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import AboutSection from '../../components/About/About'
import Projects from '../../components/Projects/Projects'

const About = () => {
  return (
    <div>
      <HeroSection
        title="About Us"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "About Us" }
        ]}
      />

      <AboutSection />
      <Projects />
      {/* <TeamSection /> */}
    </div>
  )
}

export default About