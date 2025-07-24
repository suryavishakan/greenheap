import React from 'react'
import Navbar from "../components/Navbar";
import AboutUs from '../components/About';
import Legacy from '../components/Legacy';
import Features from "../components/Features";
import Timeline from '../components/Timeline';
import Leadership from '../components/Leadership';
import Join from '../components/Join';
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutUs />
      <Legacy />
      <Features />
      <Timeline />
      <Leadership />
      <Join />
      <Footer />
    </>
  )
}

export default About