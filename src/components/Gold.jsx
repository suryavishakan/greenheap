import React from 'react';
import foodBanner from "../assets/goldBanner.svg";

const Gold = () => {
  const backgroundStyle = {
      backgroundImage : `url(${foodBanner})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
}
 
  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-orange-50 py-10">
        <div className="flex flex-col items-end bg-blend-overlay rounded-lg" style={backgroundStyle} id="foods">
            <div className="py-32 px-5 mr-0 lg:mr-20 self-end">
            <div className="max-w-xl md:max-w-3xl text-right lg:text-right">
                <div>
                <p className="text-white text-4xl sm:text-6xl font-semibold tracking-tighter">
                    Greenheap <span className="bg-clip-text bg-linear-to-tl from-amber-500 to-amber-300 text-transparent">Gold</span>
                </p>
                <p className="max-w-72 md:max-w-xl mt-4 text-base tracking-tight text-gray-100">
                    Where your financial future shines bright. We specialize in secure, innovative gold investment solutions designed to help you grow and protect your wealth. Discover how our expertise, transparency, and commitment to excellence set us apart in the world of precious metals. Thank you for choosing us as your trusted investment partner!
                </p>
                </div>
                <div className="flex justify-end md:justify-end gap-3 mt-10 lg:justify-end">
                <a className="inline-flex items-center justify-center text-sm font-semibold text-gray-100 duration-200 hover:text-orange-400 focus:outline-none focus-visible:outline-orange-400 hover:border-b-1 hover:border-orange-500" href="https://greenheapdigigold.com/" target="_blank" rel="noreferrer">
                    <span> Visit site &nbsp; → </span>
                </a>
                </div>
            </div>
            </div>
        </div>
    </div>

  )
}

export default Gold