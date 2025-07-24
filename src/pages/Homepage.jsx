import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Stats from '../components/Stats'
import Foods from "../components/Foods";
import Farms from "../components/Farms";
import Gold from "../components/Gold";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Stats />
      <Foods />
      <Gold />
      <Farms />
      <Contact />
      <Footer />
    </>
  )
}

export default Homepage