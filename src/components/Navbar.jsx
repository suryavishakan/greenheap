// Navbar.jsx
import React, { useState } from 'react';
import logo from "../assets/navLogo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className='bg-emerald-950'>
      <header className="container flex flex-col mx-auto bg-emerald-950">
        <nav className="px-4 md:px-0 relative flex flex-wrap items-center justify-between w-full bg-emerald-950 py-4 shrink-0">
          <Link to="/">
            <img className="h-7 md:h-10" src={logo} alt="logo" />
          </Link>
          <div className="items-center justify-between hidden gap-12 text-slate-100 md:flex">
            <Link to="/" className="text-sm md:text-base font-bold hover:text-orange-500 hover:border-b-1 hover:border-orange-500">
              Home
            </Link>
            <Link to="/about" className="text-sm md:text-base font-bold hover:text-orange-500 hover:border-b-1 hover:border-orange-500">
              About Us
            </Link>
            <Link to='/blog' className="text-sm md:text-base font-bold hover:text-orange-500 hover:border-b-1 hover:border-orange-500">
              Blog
            </Link>
            <Link to='/contact' className="text-sm md:text-base font-bold hover:text-orange-500 hover:border-b-1 hover:border-orange-500">
              Contact
            </Link>
          </div>
          <button onClick={handleClick} className="flex md:hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z"
                fill="white"
              ></path>
            </svg>
          </button>
          <div
            className={`absolute left-0 right-0 md:hidden z-50 transition-all duration-500 ease-in-out flex flex-col items-start shadow-lg justify-start bg-emerald-950 px-6 rounded-b-2xl top-full gap-10
              ${menuOpen ? 'py-6 min-h-screen' : 'max-h-0 overflow-hidden'}
            `}
          >

            <Link to="/" className="text-sm font-normal text-white hover:text-orange-500 cursor-pointer hover:border-b-1 hover:border-orange-500">
              HOME
            </Link>
            <Link to='/about' className="text-sm font-normal text-white hover:text-orange-500 cursor-pointer hover:border-b-1 hover:border-orange-500">
              ABOUT US
            </Link>
            <Link to='/blog' className="text-sm font-normal text-white hover:text-orange-500 cursor-pointer hover:border-b-1 hover:border-orange-500">
              BLOG
            </Link>
            <Link to='/contact' className="text-sm font-normal text-white hover:text-orange-500 cursor-pointer hover:border-b-1 hover:border-orange-500">
              CONTACT
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
