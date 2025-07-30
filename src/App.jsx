import React from 'react';
// react router
import {Routes, Route, HashRouter} from 'react-router-dom';
// pages
import Home from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from './pages/Blog';
import BlogPost from "./components/BlogPost";
import NotFound from "./components/NotFound";
// scroll to top
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  return (
    <HashRouter>
        <ScrollToTop>
          <Routes>
            <Route index path = "/" element = {<Home />} />
            <Route path = "/about" element = {<About />} />
            <Route path = "/contact" element = {<Contact />} />
            <Route path = '/blog' element = {<Blog />} />
            <Route path = '/blog/:slug' element = {<BlogPost />} />
            <Route path = "*" element = {<NotFound />} />
         </Routes>
        </ScrollToTop>
    </HashRouter>
  )
}

export default App;
