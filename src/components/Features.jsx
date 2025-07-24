import React from 'react';

const Features = () => {
  return (
    <div className="flex py-16 items-center justify-center p-10 bg-white">
        <div className="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
            <div className="row-span-2 flex flex-col rounded-md border border-slate-200">
                <div className="h-1/2 flex-1"><img src='https://wealthxmagazine.com/wp-content/uploads/2025/04/How-to-Diversify-Your-Portfolio-and-Secure-Long-Term-Financial-Growth-Photoroom.webp' className="w-full object-cover object-right-top" alt="omnichannel" /></div>
                    <div className="p-10">
                        <h3 className="text-xl font-medium text-gray-700">Our Mission</h3>
                        <p className="mt-2 text-slate-500">To create sustainable value for our stakeholders through diversified business operations, innovative solutions, and unwavering commitment to excellence in everything we do.</p>
                    </div>
                </div>
                <div className="flex rounded-md border border-slate-200">
                <div className="flex-1 p-10">
                    <h3 className="text-xl font-medium text-gray-700">Our Vision</h3>
                    <p className="mt-2 text-slate-500">To be a leading diversified enterprise recognized for sustainable growth, innovation, and positive impact across gold investment, real estate, and culinary industries.</p>

                </div>

                <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
                    <div className="absolute inset-0">
                    <img src="https://imageio.forbes.com/specials-images/imageserve/67852ee9f434590fdab70d31/Education-concept--Brainstorm/960x0.jpg?format=jpg&width=960" className="h-full w-full object-cover object-left-top" alt="" />
                    </div>
                </div>
            </div>
            <div className="flex rounded-md border border-slate-200">
                <div className="flex-1 p-10">
                    <h3 className="text-xl font-medium text-gray-700">Our Values</h3>
                    <p className="mt-2 text-slate-500">Integrity, excellence, sustainability, and innovation form the cornerstone of our operations. We believe in building lasting relationships based on trust and mutual respect.</p>
                </div>
                <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
                    <div className="absolute inset-0">
                    <img src="https://padraig.ca/wp-content/uploads/2022/02/40089296_m.jpg" className="h-full w-full object-cover object-left-top" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features