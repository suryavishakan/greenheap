import React from 'react';
// react router
import { Link } from 'react-router-dom';

const Cta = () => {
  return (
    <div className="bg-white py-2 sm:py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative isolate overflow-clip bg-emerald-950 px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div aria-hidden="true" className="absolute right-0 top-0 -z-10 aspect-square w-full max-w-3xl translate-x-3/4 rounded-full bg-orange-100/30 blur-[10rem] lg:-top-[40rem] lg:left-1/2 lg:-translate-x-1/2"></div>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-start">
                <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-4xl">Want to partner with us?</h2>
                <p className="mt-6 text-base text-gray-300">We're excited to talk to you about the requirements and business goals.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link to="/contact" className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-gray-100 hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Schedule a call</Link>
                <Link to="/contact" className="text-sm font-semibold leading-6 text-white">Send an email</Link>
                </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8 lg:h-auto">
                <img width="1920" height="1139" className="absolute left-0 top-0 w-[58rem] max-w-none rounded-2xl bg-white/5 ring-1 ring-white/10 lg:top-14" src="https://www.intercom.com/blog/wp-content/uploads/2020/04/Intercom-app-service-partner-hero-1800x840.png" alt="dashboard screenshot" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Cta