"use client";

import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#003B1B] text-white sticky top-0 z-50">
      <div className="max-w-7xl lg:mx-auto  text-center md:px-4  px-6">
        <div className="flex justify-between items-center h-28">


          <a href="/" className="flex items-center">
            <img src={Logo} alt="FF Bioworks" className="w-[140px] h-[36px] sm:w-[150px] sm:h-[38px] md:w-[120px] md:h-[25px] lg:w-[180px] lg:h-[45px] xl:w-[200px] xl:h-[50px] " />
          </a>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-4 xl:space-x-10">
            <a href="#about" className="hover:text-green-300 font-medium text-[18px] transition duration-200   sm:text-[8px] md:text-[10px] lg:text-[16px] xl:text-[16px]">
              About Us
            </a>


            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 hover:text-green-300 font-medium text-[18px] transition duration-200 sm:text-[8px] md:text-[10px] lg:text-[16px] xl:text-[16px]">
                Business Verticals <FaChevronDown className="w-4 h-4 mt-1 text-2xl ml-2 " />
              </button>

              {/* {dropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-56 bg-white text-black shadow-lg rounded-md z-50 border border-gray-200">
                  <a
                    href="#seed"
                    className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 transition duration-200"
                  >
                    Seed Production
                  </a>
                  <a
                    href="#farming"
                    className="block px-4 py-3 hover:bg-gray-50 transition duration-200"
                  >
                    Contract Farming
                  </a>
                </div>
              )} */}
            </div>


            <Link to="/products" className="hover:text-green-300 font-medium text-[18px] transition duration-200 sm:text-[8px] md:text-[10px] lg:text-[16px] xl:text-[16px]">
              Products & Services
            </Link>
            <Link to="/innovation" className="hover:text-green-300 font-medium text-[18px] transition duration-200 sm:text-[8px] md:text-[10px] lg:text-[16px] xl:text-[16px]">
              Innovation & Impact
            </Link>
            <Link to="/resources" className="hover:text-green-300 font-medium text-[18px] transition duration-200 sm:text-[8px] md:text-[10px] lg:text-[16px] xl:text-[16px]">
              Resources
            </Link>


            <Link
              to="/contact"
              className="border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-green-900 transition duration-200 font-medium  sm:text-[8px] md:text-[10px] lg:text-[14px] xl:text-[16px] sm:px-2 sm:py-2 md:px-4 md:py-1 lg:px-6 lg:py-2 xl:px-6 xl:py-2"
            >
              Contact Us
            </Link>
          </div>


          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-green-900 transition duration-200"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>


      {isOpen && (
        <div className="md:hidden bg-green-900 border-t border-green-800 ">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a
              href="#about"
              className="block py-3 px-4 rounded-md hover:bg-green-800 transition duration-200 border-b border-green-700"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>

            {/* Mobile Dropdown */}
            <div className="border-b border-green-700">
              <button
                className="w-full text-left py-3 px-4 rounded-md flex justify-between items-center hover:bg-green-800 transition duration-200"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Business Verticals <FaChevronDown className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="pl-6 pb-2 space-y-1">
                  <a
                    href="#seed"
                    className="block py-2 px-4 rounded-md hover:bg-green-800 transition duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Seed Production
                  </a>
                  <a
                    href="#farming"
                    className="block py-2 px-4 rounded-md hover:bg-green-800 transition duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Contract Farming
                  </a>
                </div>
              )}
            </div>

            <Link
              to="/products"
              className="block py-3 px-4 rounded-md hover:bg-green-800 transition duration-200 border-b border-green-700"
              onClick={() => setIsOpen(false)}
            >
              Products & Services
            </Link>

            <Link
              to="/innovation"
              className="block py-3 px-4 rounded-md hover:bg-green-800 transition duration-200 border-b border-green-700"
              onClick={() => setIsOpen(false)}
            >
              Innovation & Impact
            </Link>

            <Link
              to="/resources"
              className="block py-3 px-4 rounded-md hover:bg-green-800 transition duration-200 border-b border-green-700"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>


            <div className="pt-2">
              <Link
                to="/contact"
                className="block text-center border-2 border-white px-4 py-4 rounded-full hover:bg-white hover:text-green-900 transition duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;