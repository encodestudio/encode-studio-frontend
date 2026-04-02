import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import ServicesSection from '../components/sections/ServicesSection'
import ProductsSection from '../components/sections/ProductsSection'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import ProcessSection from '../components/sections/ProcessSection'
import CTASection from '../components/sections/CTASection'
const Home = () => {
    return (
        <>
            <HeroSection />
            <ServicesSection />
            <ProductsSection />
            <WhyChooseUs />
            <ProcessSection />
            <CTASection />
        </>
    )
}

export default Home