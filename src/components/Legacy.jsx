import React from 'react';
import backgroundImage from "../assets/5.png";

const Legacy = () => {
  const backgroundStyle = {
      backgroundImage : `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }
  
    return (
      <div className="text-left py-16 bg-emerald-950">
          <div className='sm:px-28'>
              <section className="relative flex items-center w-full">
                  <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
                  <div className="relative flex-col items-start m-auto align-middle">
                      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                        <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                            <div className="max-w-xl text-center lg:text-left">
                                <div>
                                    <p class="text-white text-4xl sm:text-6xl font-semibold tracking-tighter">
                                        Building Tomorrow's<span class="underline leading-8 underline-offset-8	decoration-8 decoration-[#FFBF00]"> Legacy</span>
                                    </p>
                                    <p className="max-w-xl mt-4 text-base tracking-tight text-gray-100">
                                    GreenHeap Enterprises is a modern, impact-driven collective committed to enhancing everyday life through accessible innovation. Our purpose is to support individuals and families in reaching their goals—whether that means acquiring land, building financial security, or embracing healthier habits. 
                                    </p>
                                    <p className="max-w-xl mt-4 text-base tracking-tight text-gray-100">Through our three core ventures — Cashback Farms, GreenHeap Gold, and GreenHeap Foods — we’re redefining how people invest, live, and nourish themselves. Whether it’s simplifying land ownership through a seamless digital experience, offering reliable and rewarding gold investment options, or delivering wholesome, mindful food products tailored to today’s lifestyles — GreenHeap is here to make better living a reality for all.</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                            <img className="object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto " alt="hero" src= 'https://img.freepik.com/premium-photo/house-ahead-stacks-coins-light-gray-background_172429-2277.jpg' />
                        </div>
                      </div>
                  </div>
                  </div>
              </section>
          </div>
      </div>
    )
}

export default Legacy