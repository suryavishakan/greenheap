import React, {useState, useRef} from 'react';
import logo from "../assets/navLogo.png";
// react router
import { Link } from 'react-router-dom';

const Footer = () => {
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
}

  return (
    <section className="py-10 sm:pt-16 lg:pt-24 bg-emerald-950">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-10 gap-x-12">
                <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                    <img className="w-auto h-8 md:j-12" src={logo} alt="logo" />
                    <p className="text-sm md:text-base leading-relaxed text-slate-100 mt-7">Connecting you to trusted solutions in food, real estate, and gold investment—all under one roof.</p>
                </div>

                <div>
                    <p className="text-sm font-semibold tracking-widest text-slate-100 uppercase">Company</p>

                    <ul className="mt-6 space-y-2 lg:space-y-4">
                        <li>
                            <Link to="/about" title="" className="flex text-sm md:text-base text-white transition-all duration-200 hover:text-rose-100 focus:text-rose-100"> About </Link>
                        </li>

                        <li>
                            <Link to="/blog" title="" className="flex text-sm md:text-base text-white transition-all duration-200 hover:text-rose-100 focus:text-rose-100"> Blog </Link>
                        </li>

                        <li>
                            <Link to="/contact" title="" className="flex text-sm md:text-base text-white transition-all duration-200 hover:text-rose-100 focus:text-rose-100"> Contact </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <p className="text-sm font-semibold tracking-widest text-slate-100 uppercase">Help</p>

                    <ul className="mt-6 space-y-2 md:space-y-4">
                        <li>
                            <a href="/" title="" className="flex text-sm md:text-base text-white transition-all duration-200 hover:text-rose-100 focus:text-rose-100"> Customer Support </a>
                        </li>

                        <li>
                            <a href="/" title="" className="flex text-sm md:text-base text-white transition-all duration-200 hover:text-rose-100 focus:text-rose-100"> Terms & Conditions </a>
                        </li>

                        <li>
                            <a href="/" title="" className="flex text-sm md:text-base text-white transition-all duration-200 hover:text-rose-100 focus:text-rose-100"> Privacy Policy </a>
                        </li>
                    </ul>
                </div>

                <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                    <p className="text-sm font-semibold tracking-widest text-slate-100 uppercase">Subscribe to newsletter</p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-6">
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_honey" style={{ display: 'none' }} />
                        <input type="hidden" name="_next" value="https://www.cashbackfarms.com" />

                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="block w-full p-3 lg:p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-orange-200 rounded-md focus:outline-none focus:border-orange-600 caret-orange-600 text-sm md:text-base"
                            />
                        </div>

                        <button type="submit" className="inline-flex items-center justify-center px-5 py-2 md:px-6 md:py-4 mt-3 font-semibold text-white transition-all duration-200 bg-orange-500 rounded-md hover:bg-orange-400 focus:bg-orange-400 cursor-pointer text-sm md:text-base">
                            Subscribe
                        </button>

                        {toastVisible && (
                            <div className="mt-2 p-2 rounded-md bg-green-600 text-white text-center transition">
                            ✅ Subscribed successfully!
                            </div>
                        )}
                    </form>

                </div>
            </div>

            <hr className="mt-16 mb-10 border-gray-200" />

            <p className="text-sm text-center text-slate-100">© Copyright 2025, All Rights Reserved by Greenheap</p>
        </div>
    </section>

  )
}

export default Footer