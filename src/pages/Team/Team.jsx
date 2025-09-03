import React from 'react'

function Team() {
  return (
    <div>
      <HeroSection
        title="Team"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Team" }
        ]}
      />

    

    </div>
  )
}

export default Team