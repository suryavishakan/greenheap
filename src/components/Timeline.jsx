import React from 'react';
import ladder from "../assets/ladder.jpg";

const Timeline = () => {
    const backgroundStyle = {
        backgroundImage : `url(${ladder})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: 25
    }

  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-[#021c10] bg-blend-overlay" style = {backgroundStyle}>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Our Journey</h2>
                <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-slate-100">How we evolved from a single business to a diversified enterprise.</p>
            </div>

            <div className="relative mt-12 lg:mt-20">
                <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                    <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                </div>

                <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                    <div>
                        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-yellow-600 rounded-full shadow">
                            <span className="text-xl font-semibold text-black"> 1 </span>
                        </div>
                        <h3 className="mt-6 text-xl font-semibold leading-tight text-slate-100 md:mt-10">Real Estate Foundation</h3>
                        <p className="mt-4 text-base text-slate-100">Started with real estate development and property investment. Launched residential and commercial projects with focus on sustainable development.</p>
                    </div>

                    <div>
                        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-yellow-600 rounded-full shadow">
                            <span className="text-xl font-semibold text-blaclk"> 2 </span>
                        </div>
                        <h3 className="mt-6 text-xl font-semibold leading-tight text-slate-100 md:mt-10">Gold Investment Expansion</h3>
                        <p className="mt-4 text-base text-slate-100">Expanded into gold chit investment. Built a strong foundation in gold market analysis and client portfolio management.</p>
                    </div>

                    <div>
                        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-yellow-600 rounded-full shadow">
                            <span className="text-xl font-semibold text-black"> 3 </span>
                        </div>
                        <h3 className="mt-6 text-xl font-semibold leading-tight text-slate-100 md:mt-10">Culinary Ventures</h3>
                        <p className="mt-4 text-base text-slate-100">Diversified into Indian food business with restaurants and catering services. Bringing authentic flavors and cultural experiences to new markets.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Timeline