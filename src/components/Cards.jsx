// App.js
import React from "react";
import FoodGif from "../assets/food.gif";
import FarmsGif from "../assets/farms.gif";
import GoldGif from "../assets/Gold.gif";

const cards = [
  {
    bgColor: "bg-blue-50",
    img : FarmsGif ,
    tag: "Greenheap",
    tagColor: "text-blue-600",
    title: "Greenheap Cashback Farms",
    description: "Real estate solutions with nature’s touch – sustainable plots and farmlands.",
    url : "https://cashbackfarms.com"
  },
  {
    bgColor: "bg-orange-50",
    img : FoodGif,
    tag: "Greenheap",
    tagColor: "text-amber-500",
    title: "Greenheap Foods",
    description: "Authentic Indian masalas and snacks that celebrate our culinary heritage.",
    url : "https://greenheapfoods.com"
  },
  {
    bgColor: "bg-purple-50",
    img : GoldGif,
    tag: "Greenheap",
    tagColor: "text-purple-600",
    title: "Greenheap DigiGold",
    description: "Secure and profitable gold investment plans tailored for all generations.",
    url : "https://greenheapgold.com"
  },
];

function Card({ card }) {
  return (
    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl">
      <div className={`h-full flex flex-col justify-center items-center ${card.bgColor} rounded-t-xl overflow-hidden`}>
        <img src = {card.img} alt = "greenheap websites" className="transition-transform duration-300 ease-in-out transform hover:scale-110"/>
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-xl font-semibold text-gray-800">
          {card.title}
        </h3>
        <p className="mt-3 text-gray-500">
          {card.description}
        </p>
      </div>
      <div className="mt-auto flex">
        <a href = {card.url} target="_blank" className={`w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl ${card.bgColor} text-slate-800 shadow-2xs hover:opacity-90 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none`}>
          Visit Site
        </a>
      </div>
    </div>
  );
}

export default function Cards() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
       <div className="w-full flex items-center flex-col gap-1 justify-center mb-16 px-4">
          <p className="text-sm sm:text-lg font-semibold text-rose-600">Our Expertise</p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-semibold">
            Explore our <span className="bg-clip-text bg-linear-to-tl from-teal-600 to-emerald-800 text-transparent">Services</span> that stand out
          </h3>
        </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <Card card={card} key={idx} />
        ))}
      </div>
    </div>
  );
}
