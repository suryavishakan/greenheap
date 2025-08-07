// Newsletter.jsx

import React, { useState, useRef } from 'react';

const Newsletter = () => {
  const formRef = useRef(null);
  const [email, setEmail] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const data = new FormData(form);

    try {
      await fetch("https://formsubmit.co/suryavishakan050@gmail.com", {
        method: "POST",
        body: data,
      });

      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 3000);
      setEmail('');
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left"
          src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/5/girl-working-on-laptop.jpg"
          alt=""
        />
      </div>

      <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>
      <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-4xl">
            Stay in the loop with our Newsletter!
          </h2>
          <p className="mt-4 text-base text-gray-200">
            Sign up to receive exclusive updates, insightful articles, and the latest news delivered straight to your inbox.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 lg:mt-12"
          >
            <input type="hidden" name="_captcha" value="false" />
            <div className="flex flex-col items-center sm:flex-row sm:justify-center">
              <div className="flex-1 w-full min-w-0 px-4 sm:px-0">
                <div className="relative text-gray-100 focus-within:text-gray-200">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email address"
                    className="block w-full py-4 pl-10 pr-4 text-base text-white placeholder-gray-200 transition-all duration-200 border-1 border-gray-50 rounded-md sm:rounded-r-none caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    required
                    value={email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-md sm:mt-0 sm:rounded-l-none text-sm md:text-base sm:w-auto hover:bg-orange-600 focus:bg-orange-600"
              >
                Subscribe
              </button>
                <form action="#" method="POST" className="mt-8 lg:mt-12">
                    <div className="flex flex-col items-center sm:flex-row sm:justify-center">
                        <div className="flex-1 w-full min-w-0 px-4 sm:px-0">
                            <div className="relative text-gray-100 focus-within:text-gray-200">
                                <label htmlFor="email" className="sr-only"></label>
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter email address"
                                    className="block w-full py-4 pl-10 pr-4 text-base text-white placeholder-gray-200 transition-all duration-200 border-1 border-gray-50 rounded-md sm:rounded-r-none caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:mt-0 sm:rounded-l-none text-sm md:text-base sm:w-auto hover:bg-blue-700 focus:bg-blue-700">
                            Get instant access
                        </button>
                    </div>
                </form>
            </div>
          </form>

          {toastVisible && (
            <div className="mt-4 p-3 rounded-md bg-green-600 text-white text-center transition">
              ✅ Subscribed successfully!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
