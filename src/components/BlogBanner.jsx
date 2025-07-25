import React from 'react'

const BlogBanner = () => {
  return (
    <div className="relative overflow-hidden bg-orange-50">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mt-5 max-w-4xl text-center mx-auto">
                <h3 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                    Insights from <br/>
                    <span className="bg-clip-text bg-linear-to-tl from-green-600 to-teal-700 text-transparent"> Greenheap Enterprises</span>
                </h3>
            </div>

            <div className="mt-5 max-w-3xl text-center mx-auto">
                <p className="text-lg text-gray-800 ">Driven by purpose, defined by progress — the Green Heap journey is a story of bold decisions, lasting impact, and meaningful growth.</p>
            </div>
        </div>
    </div>
  )
}

export default BlogBanner