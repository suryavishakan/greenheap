import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// sanity client
import client from '../client';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    console.log(posts.length);
    useEffect(() => {
        client.fetch(
            `*[_type == "post"] {
                title,
                slug,
                body,
                mainImage {
                    asset -> {
                        _id,
                        url
                    },
                    alt
                }
            }`
        )
        .then((data) => setPosts(data))
        .catch(console.error);
    }, []);
  return (
    <section className="bg-white">
        <div className="container px-6 py-10 mx-auto">

            {posts.map((post) => (
            <div className="mt-8 lg:-mx-6 lg:flex lg:items-center" key = {post.slug.current}>
                <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={post.mainImage.asset.url} alt={post.title} />
                <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">

                    <a href="#" className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline md:text-3xl">
                        {post.title}
                    </a>

                    <p className="mt-3 text-sm text-gray-500 md:text-sm">
                        The way Americans buy property is evolving. Gone are the days of long real estate tours, endless paperwork, and relying solely on brokers...
                    </p>

                    <Link to={`/blog/${post.slug.current}`} className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</Link>
                </div>
            </div>
            ))}           
        </div>
    </section>
  )
}

export default Blog