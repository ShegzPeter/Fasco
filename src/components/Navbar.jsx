import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        
        {/* Logo Section */}
        <div className="ml-4">
          <img src="/images/logo.png" alt="Logo" className="w-[171px] h-[38px]" />
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`flex-grow md:flex md:items-center md:justify-center ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col  md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-[16px] text-gray-700 font-custom ">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">Deals</li>
            <li className="hover:text-black cursor-pointer">New Arrivals</li>
            <li className="hover:text-black cursor-pointer">Packages</li>
            {/* Sign In Button visible on all screens */}
            <li className="hover:text-black cursor-pointer">Sign In</li>
          </ul>
        </div>

        {/* Sign Up Button hidden on mobile screens */}
        <div className="mr-4 hidden md:block">
          <button className="w-[130px] h-[56px] bg-black text-white rounded-[12px] hover:bg-gray-800 transition duration-300 shadow-xl font-custom">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu - Removed duplicate links */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          {/* <ul className="flex flex-col space-y-4 p-4 text-gray-700">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">Deals</li>
            <li className="hover:text-black cursor-pointer">New Arrivals</li>
            <li className="hover:text-black cursor-pointer">Packages</li>
            <li className="hover:text-black cursor-pointer">Sign In</li>
          </ul> */}
        </div>
      )}
    </div>
  );
}

export default Navbar;