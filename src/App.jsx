import React from 'react';
// react router
import {Routes, Route, HashRouter} from 'react-router-dom';
// pages
import Home from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from './pages/Blog';
import BlogPost from "./components/BlogPost";
<<<<<<< HEAD
import NotFound from "./components/NotFound";
// scroll to top
import ScrollToTop from "./hooks/ScrollToTop";
import PrivacyPolicy from './components/PrivacyPolicy';

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
            <Route path = "/privacy-policy" element = {<PrivacyPolicy />} />
            <Route path = "*" element = {<NotFound />} />
         </Routes>
        </ScrollToTop>
    </HashRouter>
=======
// import GoldBlogPost from './components/GoldBlogPost';
// import FoodsBlogPost from './components/FoodsBlogPost';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index path = "/" element = {<Home />} />
      <Route path = "about" element = {<About />} />
      <Route path = "contact" element = {<Contact />} />
      <Route path = 'blog' element = {<Blog />} />
      <Route path = '/blog/:slug' element = {<BlogPost />} />
      {/* <Route path = '/blog/post-2' element = {<GoldBlogPost />} />
      <Route path = "/blog/post-3" element = {<FoodsBlogPost />} /> */}
    </Routes>
    </BrowserRouter>
>>>>>>> 3a74bd0471442abbb7fccf0a02e94e909ba4ebd8
  )
}

export default App;
