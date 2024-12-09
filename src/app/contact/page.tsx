import React from 'react'
import Footer from '../components/footer'
import ContactUs from '../components/contact-Components/contactus'
import Office from '../components/contact-Components/office'
import Navbar from '../components/contact-Components/HeaderAbout'


const ContactPage = () => {
  return (
    <>
        <Navbar/>
        <ContactUs />
        <Office />
        <Footer />
    </>
  )
}

export default ContactPage