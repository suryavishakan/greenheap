import React from 'react'
// components
import Navbar from "../components/Navbar";
import ContactBanner from '../components/ContactBanner';
import ContactForm from "../components/Contact";
import Footer from "../components/Footer";
import Address from '../components/Address';

const Contact = () => {
  return (
    <>
        <Navbar />
        <ContactBanner />
        <Address />
        <ContactForm />
        <Footer />
    </>
  )
}

export default Contact