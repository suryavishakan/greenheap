import React from 'react';
import { Link } from 'react-router-dom';


const Join = () => {
    const backgroundStyle = {
            backgroundImage : `url('https://uniqueemployment.com/wp-content/uploads/2016/11/Temp_to_hire_worker.jpeg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: 75
        }
  return (
    <section className="py-10 bg-neutral-800 sm:py-16 lg:py-24 bg-blend-overlay" style = {backgroundStyle}>
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center">
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Join Our Journey</h2>
                <p className="text-md font-medium text-gray-100 max-w-3xl mx-auto">Whether you're looking for investment opportunities, real estate solutions, or culinary experiences, we're here to help you succeed.</p>
                <div className="flex flex-col items-center justify-center px-16 mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row lg:mt-12 sm:px-0">
                    <Link to="/contact" title="" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-400 border border-transparent rounded-md sm:w-auto hover:bg-blue-700 focus:bg-blue-700" role="button"> Contact Us </Link>
                    <Link href="/contact" title="" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-transparent border border-slate-100 rounded-md sm:w-auto hover:bg-white hover:text-black focus:bg-white focus:text-black" role="button">
                        <svg className="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Send a mail
                    </Link>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Join