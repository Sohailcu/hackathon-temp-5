import React from 'react'
import Navbar from '../components/pricing-Components/HeaderAbout'
import PricingComp from '../components/pricing-Components/pricingcomp'
import FAQ from '../components/pricing-Components/pricingfaq'
import Footer from '../components/footer'

function Pricing() {
  return (
    <div>
        <Navbar/>
        <PricingComp/>
        <FAQ/>
        <Footer/>
    </div>
  )
}

export default Pricing
