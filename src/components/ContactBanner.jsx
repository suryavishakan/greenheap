import React from 'react'

const ContactBanner = () => {
  return (
    <div className="relative overflow-hidden bg-orange-50">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex justify-center">
                <a className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 focus:outline-hidden focus:border-gray-300" href="#contact">
                    Contact
                    <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-orange-400 font-semibold text-sm text-gray-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </span>
                </a>
            </div>
            <div className="mt-5 max-w-2xl text-center mx-auto">
                <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                    Let's Build Something Great
                    <span className="bg-clip-text bg-linear-to-tl from-green-600 to-teal-700 text-transparent"> Together</span>
                </h1>
            </div>

            <div className="mt-5 max-w-3xl text-center mx-auto">
                <p className="text-lg text-gray-800 ">Driven by purpose, defined by progress — the Green Heap journey is a story of bold decisions, lasting impact, and meaningful growth.</p>
            </div>
        </div>
    </div>
  )
}

export default ContactBanner