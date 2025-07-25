import React from 'react'
// components
import Navbar from './Navbar';
import Footer from "./Footer";
// react-router-dom
import { Link } from 'react-router-dom';

const FoodsBlogPost = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
    <div className="max-w-4xl mx-auto text-justify">
        <p className='mb-10 text-sm text-gray-800'>
        <Link to = "/blog">&lt; Go Back</Link>
        </p>
        {/*  */}
        <div className="space-y-5 md:space-y-5">
            <div className="space-y-3">
                <h2 className="text-xl font-bold md:text-3xl">Calorie-Based Meal Plans: The Smart Way to Eat Healthy in a Busy Life</h2>

                <p className="text-md md:text-lg text-gray-800">Life moves fast — and for most Americans, so do our meals.</p>
                <p className='text-gray-800 text-md md:text-lg'>Between work, family, and daily demands, eating healthy often feels like a challenge. Grabbing fast food or skipping meals becomes the norm, but over time, it impacts our energy, weight, and long-term health.</p>
                <p className="text-md md:text-lgtext-gray-800">That’s where calorie-based meal plans come in. Rather than relying on fad diets or restrictive routines, calorie-focused plans help you eat smarter — balancing convenience with nutrition.</p>
                <p className="text-md md:text-lg text-gray-800">Here’s why they work (and why more people are switching to them).</p>
            </div>
            {/*  */}
            <p className="text-lg md:text-xl font-black">1. Clarity Over Guesswork</p>
            <p className="text-md md:text-lg text-gray-800">Most of us underestimate how much we eat. Calorie-based meal plans give you clear control over portions and energy intake, helping you stay on track whether your goal is weight loss, muscle gain, or simply maintaining a healthy lifestyle.</p>
            {/*  */}
            <p className="text-lg md:text-xlfont-black">2. Perfect for Busy Schedules</p>
            <p className="text-md md:text-lg text-gray-800">With pre-designed, calorie-counted meals from GreenheapFoods, you don’t have to spend hours planning or cooking. Each meal is curated to meet your daily energy needs — so you can eat healthy even on your busiest days.</p>
            {/*  */}
            <p className="text-lg md:text-xl font-black">3. Helps with Weight Management (Without Starving)</p>
            <p className="text-md md:text-lg text-gray-800">Unlike crash diets, calorie-based plans are about balance, not restriction. You still enjoy your favorite foods — just in the right portions — so you feel satisfied while moving toward your health goals.</p>
            {/*  */}
            <p className="text-lg md:text-xl font-black">4. Tailored to Your Body</p>
            <p className="text-md md:text-lg text-gray-800">Everyone’s needs are different. GreenheapFoods uses tools like BMI calculators and nutritional analysis to customize meal plans based on your body type and activity level, making sure your meals work for you, not against you.</p>
            {/*  */}
            <p className="text-lg md:text-xl font-black">5. Better Energy, Better Focus</p>
            <p className="text-md md:text-lg text-gray-800">Eating the right calories helps avoid sugar crashes and fatigue. With balanced nutrition, you’ll notice better energy, focus, and productivity throughout the day.</p>
        </div>
        
    </div>
    </div>
    <Footer />
    </>
  )
}

export default FoodsBlogPost