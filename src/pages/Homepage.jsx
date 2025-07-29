import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Stats from '../components/Stats'
import Cards from '../components/Cards';
import Foods from "../components/Foods";
import Farms from "../components/Farms";
import Gold from "../components/Gold";
import Contact from "../components/Contact";
import Tabs from "../components/Tabs";
import Trusted from '../components/Trusted';
import Testimonials from "../components/Testimonials";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Stats />
      <Cards />
      <Tabs />
      <Testimonials />
      <Trusted />
      <Cta />
      <Contact />
      <Footer />
    </>
  )
}

export default Homepage