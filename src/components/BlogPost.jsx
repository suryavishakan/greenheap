import React from 'react';
import Navbar from './Navbar';
import Footer from "./Footer";
import { Link } from 'react-router-dom';

const BlogPost = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
    <div className="max-w-4xl mx-auto text-justify">
        <p className='mb-10 text-sm text-gray-800'>
        <Link to = "/blog">&lt; Go Back</Link>
        </p>
        <div className="flex justify-between items-center mb-6">
        <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
            <div className="shrink-0">
            <img className="size-12 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/avatar.jpg" alt="Avatar" />
            </div>

            <div className="grow">
            <div className="flex justify-between items-center gap-x-2">
                <div>
            
                <div className="hs-tooltip [--trigger:hover] [--placement:bottom] inline-block">
                    <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                    <span className="font-semibold text-gray-800 text-sm md:text-base">
                        Surya Vishakan Shunmuga Sundaram
                    </span>           
                    </div>
                </div>
                <ul className="text-xs text-gray-500 text-xs md:text-sm">
                    <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full">
                    July 22
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
        {/*  */}
        <div className="space-y-5 md:space-y-5">
            <div className="space-y-3">
                <h2 className="text-xl font-bold md:text-3xl">Why Digital Real Estate Platforms Are Changing the Way America Buys Property?</h2>

                <p className="text-base md:text-lg text-gray-800">The way Americans buy property is evolving. Gone are the days of long real estate tours, endless paperwork, and relying solely on brokers. Today, digital real estate platforms are making property buying faster, smarter, and more accessible for everyone.</p>
                <p className='text-gray-800 text-base md:text-lg'>At the forefront of this shift is CashbackFarms by Greenheap Enterprises USA, a platform designed to simplify real estate — whether you’re buying your first mini-plot, investing in a dream home, or exploring property as a long-term asset.</p>
            </div>
            {/*  */}
            <p className="text-lg md:text-xl font-bold text-black">1. Easy Access and Transparency</p>
            <p className="text-base md:text-lg text-gray-800">With digital platforms, buyers can browse verified listings, see real-time prices, explore neighborhoods virtually, and make decisions without the stress of hidden charges or unreliable agents. CashbackFarms, for example, gives users instant access to trusted plots and homes with clear details and cashback rewards that make ownership more rewarding.</p>
            {/*  */}
            <p className="text-lg md:text-xlfont-bold text-black">2. Micro-Ownership is Changing the Game</p>
            <p className="text-base md:text-lg text-gray-800">Not everyone is ready to buy an entire home or large piece of land. That’s why micro-ownership models — where you can invest in a property by square foot — are becoming popular. CashbackFarms makes this possible, letting everyday investors take their first step into real estate without heavy upfront costs.</p>
            {/*  */}
            <p className="text-lg md:text-xl font-bold text-black">3. Speed and Simplicity</p>
            <p className="text-base md:text-lg text-gray-800">Through automated processes, digital documentation, and built-in payment gateways, platforms like CashbackFarms cut down what used to take weeks into a matter of days. From browsing to booking, everything is online — no long queues, no chasing paperwork.</p>
            {/*  */}
            <p className="text-lg md:text-xl font-bold text-black">4. Cashback and Rewards for Buyers</p>
            <p className="text-base md:text-lg text-gray-800">Unlike traditional brokers, digital platforms offer cashback benefits and flexible investment options. This not only reduces the cost of purchase but also creates a more investor-friendly ecosystem where buyers feel valued.</p>
            {/*  */}
            <p className="text-lg md:text-xl font-bold text-black">5. A Smarter Future for Property Buyers</p>
            <p className="text-base md:text-lg text-gray-800">The shift to digital platforms isn’t just a trend — it’s the future of real estate. By combining technology, transparency, and investor-friendly models, companies like Greenheap Enterprises USA are making property ownership accessible to everyone, not just the elite. If you’ve ever felt owning property in the USA was too complicated or expensive, it’s time to explore how digital platforms can make it simple, secure, and rewarding.</p>
        </div>
        
    </div>
    </div>
    <Footer />
    </>
  )
}

export default BlogPost