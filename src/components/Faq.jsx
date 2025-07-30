// Faq.jsx

import React, { useState } from 'react';

const faqData = [
  {
    question: "What products does Greenheap Foods offer?",
    answer:
      "We specialize in high-quality Indian masalas, chat items, and traditional spice blends made with authentic ingredients and no preservatives.",
  },
  {
    question: "Are your masalas preservative-free?",
    answer:
      "Absolutely. Our masalas are made using traditional recipes and contain no artificial preservatives or colors.",
  },
  {
    question: "Is my gold investment safe?",
    answer:
      "Yes, your investments are stored in certified vaults with insurance coverage. Our platform ensures complete transparency and compliance.",
  },
  {
    question: "Can I convert my digital gold into physical gold?",
    answer:
      "Yes, you can request delivery of physical gold at your registered address. Minimum conversion quantity and charges apply.",
  },
  {
    question: "Do you provide land ownership documents?",
    answer:
      "Yes, we ensure complete transparency with all necessary legal documentation including title deed, registration, and patta.",
  },
  {
    question: "Do you offer EMI or installment plans?",
    answer:
      "Yes, flexible payment plans are available. Please contact our sales team for more information.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="max-w-xs">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
              Frequently<br />asked questions
            </h2>
            <p className="mt-1 hidden md:block text-gray-600">
              Answers to the most frequently asked questions.
            </p>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="divide-y divide-gray-200">
            {faqData.map((item, idx) => (
              <div
                className={`pt-6 pb-3 ${idx === 0 ? 'pt-0' : ''}`}
                key={item.question}
              >
                <button
                  className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-orange-500 focus:outline-none"
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-collapse-${idx}`}
                  onClick={() => handleToggle(idx)}
                  type="button"
                >
                  {item.question}
                  <span>
                    <svg
                      className={`block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
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
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-collapse-${idx}`}
                  className={`w-full overflow-hidden transition-[max-height] duration-300 ${openIndex === idx ? 'max-h-96' : 'max-h-0'}`}
                  style={{ maxHeight: openIndex === idx ? '500px' : '0px' }}
                  role="region"
                  aria-labelledby={`faq-heading-${idx}`}
                >
                  <p className="text-gray-600 px-1 pb-2 pt-1">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
