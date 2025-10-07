// pages/Home/Home.jsx
import React from 'react'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'
import Sermon from '../../components/Sermons/Sermons'
import BlogSection from '../../components/BlogSection/BlogSection'

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Projects />
            {/* <Sermon />
            <BlogSection /> */}
        </>
    )
}
