import React from 'react';
import Navbar from './Navbar';
import Footer from "./Footer";
import { Link } from 'react-router-dom';

const BlogPost = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
    <div className="max-w-5xl mx-auto text-justify">
        <p className='mb-10 text-sm text-gray-800'>
        <Link to = "/blog">&lt; Go Back</Link>
        </p>
        <div className="flex justify-between items-center mb-6">
        <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
            <div className="shrink-0">
            <img className="size-12 rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
            </div>

            <div className="grow">
            <div className="flex justify-between items-center gap-x-2">
                <div>
            
                <div className="hs-tooltip [--trigger:hover] [--placement:bottom] inline-block">
                    <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                    <span className="font-semibold text-gray-800">
                        Leyla Ludic
                    </span>

                    
                    <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 max-w-xs cursor-default bg-gray-900 divide-y divide-gray-700 shadow-lg rounded-xl dark:bg-neutral-950 dark:divide-neutral-700" role="tooltip">
                
                        <div className="p-4 sm:p-5">
                        <div className="mb-2 flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                            <div className="shrink-0">
                            <img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                            </div>

                            <div className="grow">
                            <p className="text-lg font-semibold text-gray-200 ">
                                Leyla Ludic
                            </p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 ">
                            Leyla is a Customer Success Specialist at Preline and spends her time speaking to in-house recruiters all over the world.
                        </p>
                        </div>
                        <div className="flex justify-between items-center px-4 py-3 sm:px-5">
                        <ul className="text-xs space-x-3">
                            <li className="inline-block">
                            <span className="font-semibold text-gray-200 ">56</span>
                            <span className="text-gray-400 ">articles</span>
                            </li>
                            <li className="inline-block">
                            <span className="font-semibold text-gray-200 ">1k+</span>
                            <span className="text-gray-400 ">followers</span>
                            </li>
                        </ul>

                        <div>
                            <button type="button" className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                            Follow
                            </button>
                        </div>
                        </div>
                
                    </div>
                    
                    </div>
                </div>
                <ul className="text-xs text-gray-500 ">
                    <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full">
                    Jan 18
                    </li>
                    <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full">
                    8 min read
                    </li>
                </ul>
                </div>

            
                <div>
                <button type="button" className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                    <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                    Tweet
                </button>
                </div>
            
            </div>
            </div>
        </div>
        </div>
        {/*  */}
        <div className="space-y-5 md:space-y-5">
            <div className="space-y-3">
                <h2 className="text-2xl font-bold md:text-3xl">Why Digital Real Estate Platforms Are Changing the Way America Buys Property?</h2>

                <p className="text-lg text-gray-800">The way Americans buy property is evolving. Gone are the days of long real estate tours, endless paperwork, and relying solely on brokers. Today, digital real estate platforms are making property buying faster, smarter, and more accessible for everyone.</p>
                <p className='text-gray-800 text-lg'>At the forefront of this shift is CashbackFarms by Greenheap Enterprises USA, a platform designed to simplify real estate — whether you’re buying your first mini-plot, investing in a dream home, or exploring property as a long-term asset.</p>
            </div>
            {/*  */}
            <p className="text-lg font-black">1. Easy Access and Transparency</p>
            <p className="text-lg text-gray-800">With digital platforms, buyers can browse verified listings, see real-time prices, explore neighborhoods virtually, and make decisions without the stress of hidden charges or unreliable agents. CashbackFarms, for example, gives users instant access to trusted plots and homes with clear details and cashback rewards that make ownership more rewarding.</p>
            {/*  */}
            <p className="text-lg font-black">2. Micro-Ownership is Changing the Game</p>
            <p className="text-lg text-gray-800">Not everyone is ready to buy an entire home or large piece of land. That’s why micro-ownership models — where you can invest in a property by square foot — are becoming popular. CashbackFarms makes this possible, letting everyday investors take their first step into real estate without heavy upfront costs.</p>
            {/*  */}
            <p className="text-lg font-black">3. Speed and Simplicity</p>
            <p className="text-lg text-gray-800">Through automated processes, digital documentation, and built-in payment gateways, platforms like CashbackFarms cut down what used to take weeks into a matter of days. From browsing to booking, everything is online — no long queues, no chasing paperwork.</p>
            {/*  */}
            <p className="text-lg font-black">4. Cashback and Rewards for Buyers</p>
            <p className="text-lg text-gray-800">Unlike traditional brokers, digital platforms offer cashback benefits and flexible investment options. This not only reduces the cost of purchase but also creates a more investor-friendly ecosystem where buyers feel valued.</p>
            {/*  */}
            <p className="text-lg font-black">5. A Smarter Future for Property Buyers</p>
            <p className="text-lg text-gray-800">The shift to digital platforms isn’t just a trend — it’s the future of real estate. By combining technology, transparency, and investor-friendly models, companies like Greenheap Enterprises USA are making property ownership accessible to everyone, not just the elite. If you’ve ever felt owning property in the USA was too complicated or expensive, it’s time to explore how digital platforms can make it simple, secure, and rewarding.</p>
        </div>
        
    </div>
    </div>
    <Footer />
    </>
  )
}

export default BlogPost