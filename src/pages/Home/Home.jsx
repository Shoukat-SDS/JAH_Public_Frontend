import React from 'react'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Activities from '../../components/Projects/Projects'
import Sermon from '../../components/Sermons/Sermons'
import Blog from '../../components/Blog/Blog'
import Team from '../../components/Team/Team'
import Testimonial from '../../components/Testimonial/Testimonial'

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Activities />
            <Sermon />
            <Blog />
        </>
    )
}
