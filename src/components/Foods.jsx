import React from 'react';
import foodBanner from "../assets/foodBanner.svg";

const Foods = () => {

  const backgroundStyle = {
    backgroundImage : `url(${foodBanner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }


  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-orange-50">
        <div className="flex flex-col bg-blend-overlay rounded-lg" style={backgroundStyle} id = "foods">
            <div className="py-32 px-5 ml-0 lg:ml-20">
                <div className="max-w-xl md:max-w-3xl text-left lg:text-left ">
                        <div>
                            <p className="text-white text-4xl sm:text-6xl font-semibold tracking-tighter">
                                Greenheap <span className="bg-clip-text bg-linear-to-tl from-yellow-400 to-amber-500 text-transparent">Foods</span>
                            </p>
                            <p className="max-w-72 md:max-w-xl mt-4 text-base tracking-tight text-slate-100 text-justify">
                            Where freshness meets flavor in every bite. We’re passionate about delivering nutritious, responsibly sourced products that nourish your body and delight your taste buds. Join us on a journey to better eating and discover the difference that quality makes. 
                            </p>
                        </div>
                        <div className="flex justify-left md:justify-center gap-3 mt-10 lg:justify-start">
                            <a className="inline-flex items-center justify-center text-sm font-semibold text-slate-100 duration-200 hover:text-orange-400 focus:outline-none focus-visible:outline-orange-400 hover:border-b-1 hover:border-orange-500" href="https://greenheapfoods.com/" target = "_blank" rel="noreferrer">
                            <span> Visit site &nbsp; → </span>
                            </a>
                        </div>
                        </div>
            </div>
        </div>
    </div>
  )
}

export default Foods