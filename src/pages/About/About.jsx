import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import AboutSection from '../../components/About/About'
import TeamSection from '../../components/Team/Team'

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
      <TeamSection />
    </div>
  )
}

export default About