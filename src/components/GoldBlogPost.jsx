import React from 'react'
// components
import Navbar from './Navbar';
import InvestingSteps from './InvestingSteps';
import Footer from "./Footer";
// react-router-dom
import { Link } from 'react-router-dom';

const GoldBlogPost = () => {
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
                    <span className="font-semibold text-gray-800">
                        Surya Vishakan Shunmuga Sundaram
                    </span>           
                    </div>
                </div>
                <ul className="text-xs text-gray-500 ">
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
                <h2 className="text-2xl font-bold md:text-3xl">Why More Americans Are Buying Gold Digitally? (And How You Can Too)</h2>

                <p className="text-lg text-gray-800">Gold has always been a trusted investment — a way to protect wealth, hedge against inflation, and secure a stable future. But in today’s fast-paced, digital-first world, Americans are shifting from buying gold in physical stores to buying it online.</p>
                <p className='text-gray-800 text-lg'>So, what’s driving this shift toward digital gold? And how can you start investing safely and easily?</p>
            </div>
            {/*  */}
            <p className="text-xl font-bold text-black">1. Convenience You Can’t Ignore</p>
            <p className="text-lg text-gray-800">Gone are the days of visiting local dealers, negotiating prices, and storing bulky gold at home. With platforms like GreenheapGold, investors can buy, store, and even sell gold digitally — all from their phone or laptop. No middlemen, no wasted time.</p>
            {/*  */}
            <p className="text-xl font-bold text-black">2. Lower Costs, Higher Security</p>
            <p className="text-lg text-gray-800">Digital gold eliminates storage headaches and the need for insurance on physical holdings. Platforms like GreenheapGold store your gold in secure, insured vaults, so you get ownership without the risks. Plus, transparent pricing means you’re paying market rates without hidden dealer markups.</p>
            {/*  */}
            <p className="text-xl font-bold text-black">3. Flexibility for All Budgets</p>
            <p className="text-lg text-gray-800">Not everyone can start with large investments. Digital gold allows you to buy gold for as little as $1, making it accessible to beginners and small investors while still offering the ability to scale up easily.</p>
            {/*  */}
            <p className="text-xl font-bold text-black">4. Easy Liquidity</p>
            <p className="text-lg text-gray-800">Need quick access to cash? Unlike physical gold, digital gold can be sold instantly at market prices. Platforms like GreenheapGold let you convert your holdings into cash within minutes, so your wealth stays flexible.</p>
            {/*  */}
            <p className="text-xl font-bold text-black">5. Future-Ready Investment</p>
            <p className="text-lg text-gray-800">As the world goes digital, investors want speed, transparency, and security. Digital gold provides all three. With GreenheapGold, you not only buy and hold gold, but you can also explore options like systematic investment plans (SIPs) and cashback rewards to grow your wealth faster.</p>
        </div>
        
    </div>
    </div>
    <InvestingSteps />
    <p className='text-center text-lg text-gray-800 mx-auto mb-20'>Gold remains one of the safest investments in history. Going digital just makes it smarter, faster, and more rewarding.</p>
    <Footer />
    </>
  )
}

export default GoldBlogPost