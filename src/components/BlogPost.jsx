// BlogPost.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from "./Footer";
import { Link, useParams } from 'react-router-dom';
import client from '../client';
// If using Sanity Portable Text for rich text rendering
// npm install @portabletext/react
import { PortableText } from '@portabletext/react';

const BlogPost = () => {
  const [blogPost, setBlogPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    setIsLoading(true);
    client.fetch(
      `*[slug.current == $slug][0] {
        title,
        body,
        mainImage{
          asset -> {
            _id,
            url
          },
          alt
        },
        publishedAt,
        author->{
      name,
      
      image{
        asset -> {
        url
        }
      }
    }
      }`,
      { slug }
    )
      .then((data) => {
        console.log('Fetched blog post:', data); // <-- LOG HERE
        setBlogPost(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, [slug]);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="max-w-7xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
          <p>Loading...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!blogPost) {
    return (
      <>
        <Navbar />
        <div className="max-w-7xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
          <p>Blog post not found.</p>
          <Link to="/blog">&lt; Go Back</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-7xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto text-justify">
          <p className='mb-10 text-sm text-gray-800'>
            <Link to="/blog">&lt; Go Back</Link>
          </p>
          <div className="flex justify-between items-center mb-6">
            <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
              <div className="shrink-0">
                <img className="size-12 rounded-full" src={blogPost.author?.image?.asset?.url} alt="Avatar" />
              </div>
              <div className="grow">
                <div className="flex justify-between items-center gap-x-2">
                  <div>
                    <div className="hs-tooltip [--trigger:hover] [--placement:bottom] inline-block">
                      <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                        <span className="font-semibold text-gray-800 text-sm md:text-base">
                          {blogPost.author?.name}
                        </span>
                      </div>
                    </div>
                    <ul className="text-xs text-gray-500 text-xs md:text-sm">
                      <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full">
                        Published at: {new Date(blogPost.publishedAt).toLocaleDateString()}
                      </li>
                      <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full">
                        8 min read
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Main Image */}
          {blogPost.mainImage?.asset?.url && (
            <img
              src={blogPost.mainImage.asset.url}
              alt={blogPost.mainImage.alt || blogPost.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          )}
          {/* Title */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold md:text-3xl">{blogPost.title}</h2>
          </div>
          {/* Body */}
<<<<<<< HEAD
          <div className="prose prose-lg prose-slate max-w-none mt-10 leading-relaxed space-y-6 max-w-none mt-10 leading-relaxed space-y-4">
=======
          <div className="prose prose-lg max-w-none mt-6">
>>>>>>> 3a74bd0471442abbb7fccf0a02e94e909ba4ebd8
            {blogPost.body ? (
              <PortableText value={blogPost.body} />
            ) : (
              <p>No content available.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
