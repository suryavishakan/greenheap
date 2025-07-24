import React from 'react';
import logo from "../assets/navLogo.png";

const Footer = () => {

  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24 bg-red-800">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                    <img className="w-auto h-16" src={logo} alt="logo" />
                    <p className="text-base leading-relaxed text-slate-100 mt-7">Connecting you to trusted solutions in food, real estate, and gold investment—all under one roof.</p>
                </div>

                <div>
                    <p className="text-sm font-semibold tracking-widest text-slate-100 uppercase">Company</p>

                    <ul className="mt-6 space-y-4">
                        <li>
                            <a href="/" title="" className="flex text-base text-white transition-all duration-200 hover:text-rose-100 focus:text-rose-100"> About </a>
                        </li>

                        <li>
                            <a href="/" title="" className="flex text-base text-white transition-all duration-200 hover:text-rose-100 focus:text-rose-100"> Blog </a>
                        </li>

                        <li>
                            <a href="/" title="" className="flex text-base text-white transition-all duration-200 hover:text-rose-100 focus:text-rose-100"> Contact </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <p className="text-sm font-semibold tracking-widest text-slate-100 uppercase">Help</p>

                    <ul className="mt-6 space-y-4">
                        <li>
                            <a href="/" title="" className="flex text-base text-white transition-all duration-200 hover:text-rose-100 focus:text-rose-100"> Customer Support </a>
                        </li>

                        <li>
                            <a href="/" title="" className="flex text-base text-white transition-all duration-200 hover:text-rose-100 focus:text-rose-100"> Terms & Conditions </a>
                        </li>

                        <li>
                            <a href="/" title="" className="flex text-base text-white transition-all duration-200 hover:text-rose-100 focus:text-rose-100"> Privacy Policy </a>
                        </li>
                    </ul>
                </div>

                <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                    <p className="text-sm font-semibold tracking-widest text-slate-100 uppercase">Subscribe to newsletter</p>

                    <form action="#" method="POST" className="mt-6">
                        <div>
                            <label for="email" className="sr-only">Email</label>
                            <input type="email" name="email" id="email" placeholder="Enter your email" className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                        </div>

                        <button type="submit" className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-orange-400 rounded-md hover:bg-[#FFBF00] focus:bg-[#FFBF00] cursor-pointer">Subscribe</button>
                    </form>
                </div>
            </div>

            <hr className="mt-16 mb-10 border-gray-200" />

            <p className="text-sm text-center text-slate-100">© Copyright 2025, All Rights Reserved by Greenheap</p>
        </div>
    </section>

  )
}

export default Footer