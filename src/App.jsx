import React from 'react';
// react router
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// pages
import Home from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from './pages/Blog';
import BlogPost from "./components/BlogPost";
import GoldBlogPost from './components/GoldBlogPost';
import FoodsBlogPost from './components/FoodsBlogPost';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index path = "/" element = {<Home />} />
      <Route path = "about" element = {<About />} />
      <Route path = "contact" element = {<Contact />} />
      <Route path = 'blog' element = {<Blog />} />
      <Route path = '/blog/post-1' element = {<BlogPost />} />
      <Route path = '/blog/post-2' element = {<GoldBlogPost />} />
      <Route path = "/blog/post-3" element = {<FoodsBlogPost />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
