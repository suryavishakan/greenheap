import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <section className="bg-white">
        <div className="container px-6 py-10 mx-auto">
            <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://butterflymx.com/wp-content/uploads/2022/03/Digital-Real-Estate-1.jpg?_t=1717191603"alt="" />
                <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">

                    <a href="#" className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline md:text-3xl">
                        Why Digital Real Estate Platforms Are Changing the Way America Buys Property?
                    </a>

                    <p className="mt-3 text-sm text-gray-500 md:text-sm">
                        The way Americans buy property is evolving. Gone are the days of long real estate tours, endless paperwork, and relying solely on brokers...
                    </p>

                    <Link to="/blog/post-1" className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</Link>
                </div>
            </div>


            <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://jupiter.money/blog/wp-content/uploads/2023/05/Digital-Gold-Investment-1.jpg"alt="" />

                <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                    <a href="#" className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline md:text-3xl">
                        Why More Americans Are Buying Gold Digitally? (And How You Can Too)
                    </a>

                    <p className="mt-3 text-sm text-gray-500 md:text-sm">
                        Gold has always been a trusted investment — a way to protect wealth, hedge against inflation, and secure a stable future. But in today’s fast-paced, digital-first world, Americans are shifting from buying gold in physical stores to buying it online.
                    </p>

                    <Link to = '/blog/post-2' className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</Link>
                </div>
            </div>

            <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://media.istockphoto.com/id/1248786671/photo/weekly-meal-plan-meal-prep-concept-raw-food-ingredients-in-boxes.jpg?s=612x612&w=0&k=20&c=juA56QAIa4MqbQ5N2gNdx3LIhSjb1slb6P0I7dGJ4gY=" alt="" />

                <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                    <a href="#" className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline md:text-3xl">
                        Calorie-Based Meal Plans: The Smart Way to Eat Healthy in a Busy Life
                    </a>

                    <p className="mt-3 text-sm text-gray-500 md:text-sm">
                        Discover why calorie-based meal plans help busy Americans stay healthy, manage weight, and eat smarter — without giving up convenience or taste.
                    </p>

                    <Link to = '/blog/post-3' className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog