import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import WhyChooseSection from '../Components/WhyChooseSection'
import PopularDestinations from '../Components/PopularDestinations'
import FormSection from '../Components/FormSection'
import Footer from '../Components/Footer'

function Home() {
    return (
        <>
            <HeroSection />
            <WhyChooseSection />
            <PopularDestinations />
            <FormSection/>
        </>
    )
}

export default Home