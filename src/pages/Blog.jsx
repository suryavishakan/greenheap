import React from 'react';
// components
import Navbar from "../components/Navbar";
import BlogBanner from '../components/BlogBanner';
import BlogPost from '../components/Blog';
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <>
        <Navbar />
        <BlogBanner />
        <BlogPost />
        <Newsletter />
        <Footer />
    </>
  )
}

export default Blog