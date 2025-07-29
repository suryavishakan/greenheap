import React, { useState } from "react";

const tabs = [
  {
    id: 1,
    title: "Made in India – Made for You",
    description:
      "Inspired by Indian heritage, crafted for today. Our products reflect authenticity and care.",
    iconPaths: [
      <path key="1" d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />,
      <path key="2" d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />,
      <path key="3" d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />,
      <path key="4" d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />,
      <path key="5" d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />,
    ],
    image:
      "https://m.media-amazon.com/images/I/817s5h12GyL.jpg",
  },
  {
    id: 2,
    title: "Diverse Portfolio",
    description:
      "From food to gold to real estate, we do it all. A one-stop solution for modern Indian needs.",
    iconPaths: [
      <path key="1" d="m12 14 4-4" />,
      <path key="2" d="M3.34 19a10 10 0 1 1 17.32 0" />,
    ],
    image:
      "https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&auto=format&fit=crop&w=560&h=720&q=80",
  },
  {
    id: 3,
    title: "Trustworthy Legacy",
    description:
      "A foundation build on honesty, quality, and customer trust. We deliver with consistency across every vertical.",
    iconPaths: [
      <path key="1" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />,
      <path key="2" d="M5 3v4" />,
      <path key="3" d="M19 17v4" />,
      <path key="4" d="M3 5h4" />,
      <path key="5" d="M17 19h4" />,
    ],
    image:
      "https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&auto=format&fit=crop&w=560&h=720&q=80",
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-emerald-950 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="max-w-7xl mx-auto relative p-6 md:p-16">
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <h2 className="text-2xl text-gray-100 font-bold sm:text-3xl">
              Fully customizable rules to match your unique needs
            </h2>
            <nav
              className="grid gap-4 mt-5 md:mt-10"
              aria-label="Tabs"
              role="tablist"
              aria-orientation="vertical"
            >
              {tabs.map((tab, idx) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`group text-start p-4 md:p-5 rounded-xl transition-colors ${
                    activeTab === idx
                      ? "bg-white shadow-md"
                      : "hover:bg-white hover:text-gray-800"
                  }`}
                  aria-selected={activeTab === idx}
                  aria-controls={`tab-panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  role="tab"
                  onClick={() => setActiveTab(idx)}
                >
                  <span className="flex gap-x-6 items-start">
                    <svg
                      className={`shrink-0 mt-1 size-6 md:size-7 transition-colors ${
                        activeTab === idx
                          ? "text-gray-800"
                          : "text-gray-100 group-hover:text-gray-800"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {tab.iconPaths}
                    </svg>
                    <span className="grow">
                      <span
                        className={`block text-lg font-semibold ${
                          activeTab === idx
                            ? "text-orange-600"
                            : "text-gray-100 group-hover:text-gray-800"
                        }`}
                      >
                        {tab.title}
                      </span>
                      <span
                        className={`block mt-1 ${
                          activeTab === idx
                            ? "text-gray-800"
                            : "text-gray-100 group-hover:text-gray-700"
                        }`}
                      >
                        {tab.description}
                      </span>
                    </span>
                  </span>
                </button>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              {tabs.map((tab, idx) => (
                <div
                  key={tab.id}
                  id={`tab-panel-${tab.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${tab.id}`}
                  className={activeTab === idx ? "" : "hidden"}
                >
                  <img
                    className="shadow-xl rounded-xl"
                    src={tab.image}
                    alt="Features"
                  />
                </div>
              ))}

              <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                <svg
                  className="w-16 h-auto text-orange-500"
                  width="121"
                  height="135"
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 grid grid-cols-12 size-full pointer-events-none">
          <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-emerald-950 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full"></div>
        </div>
      </div>
    </section>
  );
}
