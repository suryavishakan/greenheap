import React from 'react';
import farmsGif from "../assets/farms.gif";
import backgroundImage from "../assets/6.png";

const Farms = () => {

  const backgroundStyle = {
      backgroundImage : `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }
  
  return (
    <div className="text-left py-20" style={backgroundStyle} id = "farms">
        <div className='sm:px-28'>
            <section className="relative flex items-center w-full">
                <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
                <div className="relative flex-col items-start m-auto align-middle">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                    <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                        <div className="max-w-xl text-center lg:text-left">
                        <div>
                            <p class="text-[#10172A] text-4xl sm:text-6xl font-semibold tracking-tighter">
                                Greenheap <span class="underline leading-8 underline-offset-8	decoration-8 decoration-teal-600">Cashback</span> Farms
                            </p>
                            <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                            Your gateway to rewarding agricultural investments. We blend modern farming with smart cashback opportunities, so you can cultivate your portfolio while supporting sustainable growth. Experience a fresh approach to investing—where your money works as hard as you do. Thanks for stopping by!
                            </p>
                        </div>
                        <div className="flex justify-center gap-3 mt-10 lg:justify-start">
                            <a className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600" href="https://www.cashbackfarms.com/" target='_blank' rel="noreferrer">
                            <span> Visit site &nbsp; → </span>
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                        <img className="object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto " alt="hero" 
                        src={farmsGif}
                         />
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Farms