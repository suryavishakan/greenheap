import React, { useState, useRef } from 'react';

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [toastVisible, setToastVisible] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-10 bg-orange-50 sm:py-16 lg:py-24" id = "contact">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          <div className="flex flex-col justify-between lg:py-5 px-2 lg:px-0">
            <div>
              <h2 className="text-2xl font-bold text-black sm:text-4xl lg:text-5xl">Let’s build your future—together.</h2>
              <p className="mt-4 text-gray-900 max-w-xl text-justify">
                From flavorful kitchens to gold savings and fertile lands, Greenheap Enterprises is here to bring your dreams to life.
                Reach out to begin your journey with us.
              </p>
            </div>
            <div className="hidden md:block md:mt-auto">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-6 text-lg text-gray-900">
                Greenheap helped me invest wisely in gold and secure a beautiful plot—everything under one roof.
              </blockquote>
              <div className="flex items-center mt-6">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/avatar.jpg"
                  alt="Customer Avatar"
                />
                <div className="ml-4">
                  <p className="text-base font-semibold text-gray-900">Surya Vishakan Sundaram</p>
                  <p className="text-sm text-gray-900">Greenheap Verified Customer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-12">
            <div className="bg-gray-50 rounded-md overflow-hidden shadow-md">
              <div className="p-6 sm:p-10">
                <h3 className="text-xl lg:text-3xl font-semibold text-black">Start a conversation</h3>
                <p className="mt-4 text-md text-gray-800">
                  Let us know what you're interested in, and we’ll guide you to the right team.
                </p>

                

                <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-6">
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_honey" style={{ display: 'none' }} />
                  <input type="hidden" name="_next" value="https://www.cashbackfarms.com" />

                  <div>
                    <label htmlFor="name" className="block text-sm md:text-base font-medium text-gray-900">
                      Your name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="block w-full px-4 py-4 mt-2 border border-gray-200 rounded-md focus:border-blue-600 text-sm md:text-base text-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm md:text-base font-medium text-gray-900">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="block w-full px-4 py-4 mt-2 border border-gray-200 rounded-md focus:border-blue-600 text-sm md:text-base text-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm md:text-base font-medium text-gray-900">
                      Your Message / Inquiry
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      className="block w-full px-4 py-4 mt-2 border border-gray-200 rounded-md resize-y text-sm md:text-base focus:border-blue-600 text-black"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full px-4 py-4 font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-400"
                    >
                      Send Message
                    </button>
                  </div>
                </form>

                {toastVisible && (
                  <div className="mt-4 p-3 rounded-md bg-green-600 text-white text-center transition">
                    ✅ Form submitted successfully!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
