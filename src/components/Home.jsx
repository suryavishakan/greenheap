import React from 'react';
import video from "../assets/banner.mp4";

const Home = () => {
  return (
    <section className="min-h-9/10 py-24 relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

      {/* Main Content */}
      <div className="items-center py-10 px-8 mx-auto max-w-7xl lg:px-16 md:px-12 relative z-20">
        <div className="justify-center w-full text-center lg:p-10 max-auto">
          <div className="justify-center w-full mx-auto">
            <p className="sm:mt-8 mt-3 text-white text-4xl sm:text-6xl font-semibold tracking-tighter">
              Building <span className="underline leading-8 underline-offset-8	decoration-6 decoration-orange-400">Dreams</span>, Investing in Futures, Savoring Flavor.
            </p>
            <p className="sm:mt-8 mt-2.5 text-white sm:leading-loose text-lg font-normal tracking-tighter max-w-2xl mx-auto">
              From <span className='font-semibold'>authentic tastes </span>to <span className='font-semibold'>secure financial growth </span>and <span className='font-semibold'>real estate development</span>, <br /> we’re paving the way for a prosperous future.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center space-x-4 relative z-20">
        <a href='#foods' className="bg-orange-400 translate-y-1 text-[#fff] sm:text-lg text-xs font-bold py-2 md:py-2.5 px-3 md:px-6  rounded-full inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
          </svg>
          &nbsp; &nbsp;<span>Explore Now</span>
        </a>
      </div>
    </section>
  )
}

export default Home
