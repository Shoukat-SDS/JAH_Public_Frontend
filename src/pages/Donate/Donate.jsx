import React from 'react'
import DonateItems from '../../components/DonateItems/DonateItems'
import HeroSection from '../../components/HeroSection/HeroSection'

const Donate = () => {
    return (
        <div>
            <HeroSection
                title="Donation"
                breadcrumbs={[
                    { label: "Home", path: "/" },
                    { label: "Donation" }
                ]}
            />

            <DonateItems />
        </div>
    )
}

export default Donate