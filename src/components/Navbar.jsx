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
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">


          <a href="/" className="flex items-center">
            <img src={Logo} alt="FF Bioworks" className="w-[140px] h-[36px] sm:w-[150px] sm:h-[38px] md:w-[120px] md:h-[25px] lg:w-[180px] lg:h-[45px] xl:w-[200px] xl:h-[50px] " />
          </a>

          <div className="items-center hidden space-x-6 md:flex">
            <a href="#about" className="hover:text-green-300 font-medium text-[18px] transition duration-200   sm:text-[8px] md:text-[10px] lg:text-[14px] xl:text-[16px]">
              About Us
            </a>


            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 hover:text-green-300 font-medium text-[18px] transition duration-200 sm:text-[8px] md:text-[10px] lg:text-[14px] xl:text-[16px]">
                Business Verticals <FaChevronDown className="w-2 h-2 mt-1 ml-2 text-xl " />
              </button>

              {/* {dropdownOpen && (
                <div className="absolute left-0 z-50 w-56 mt-2 text-black bg-white border border-gray-200 rounded-md shadow-lg top-full">
                  <a
                    href="#seed"
                    className="block px-4 py-3 transition duration-200 border-b border-gray-100 hover:bg-gray-50"
                  >
                    Seed Production
                  </a>
                  <a
                    href="#farming"
                    className="block px-4 py-3 transition duration-200 hover:bg-gray-50"
                  >
                    Contract Farming
                  </a>
                </div>
              )} */}
            </div>


            <Link to="/products" className="hover:text-green-300 font-medium text-[18px] transition duration-200 sm:text-[8px] md:text-[10px] lg:text-[14px] xl:text-[16px]">
              Products & Services
            </Link>
            <Link to="/innovation" className="hover:text-green-300 font-medium text-[18px] transition duration-200 sm:text-[8px] md:text-[10px] lg:text-[14px] xl:text-[16px]">
              Innovation & Impact
            </Link>
            <Link to="/resources" className="hover:text-green-300 font-medium text-[18px] transition duration-200 sm:text-[8px] md:text-[10px] lg:text-[14px] xl:text-[16px]">
              Resources
            </Link>


            <Link
              to="/contact"
              className="border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-green-900 transition duration-200 font-medium text-[18px] sm:text-[8px] md:text-[10px] lg:text-[14px] xl:text-[16px] sm:px-2 sm:py-2 md:px-4 md:py-2 lg:px-4 lg:py-2 xl:px-6 xl:py-2"
            >
              Contact Us
            </Link>
          </div>


          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 transition duration-200 rounded-md hover:bg-green-900"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>


      {isOpen && (
        <div className="bg-green-900 border-t border-green-800 md:hidden ">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a
              href="#about"
              className="block px-4 py-3 transition duration-200 border-b border-green-700 rounded-md hover:bg-green-800"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>

            {/* Mobile Dropdown */}
            <div className="border-b border-green-700">
              <button
                className="flex items-center justify-between w-full px-4 py-3 text-left transition duration-200 rounded-md hover:bg-green-800"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Business Verticals <FaChevronDown className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="pb-2 pl-6 space-y-1">
                  <a
                    href="#seed"
                    className="block px-4 py-2 transition duration-200 rounded-md hover:bg-green-800"
                    onClick={() => setIsOpen(false)}
                  >
                    Seed Production
                  </a>
                  <a
                    href="#farming"
                    className="block px-4 py-2 transition duration-200 rounded-md hover:bg-green-800"
                    onClick={() => setIsOpen(false)}
                  >
                    Contract Farming
                  </a>
                </div>
              )}
            </div>

            <Link
              to="/products"
              className="block px-4 py-3 transition duration-200 border-b border-green-700 rounded-md hover:bg-green-800"
              onClick={() => setIsOpen(false)}
            >
              Products & Services
            </Link>

            <Link
              to="/innovation"
              className="block px-4 py-3 transition duration-200 border-b border-green-700 rounded-md hover:bg-green-800"
              onClick={() => setIsOpen(false)}
            >
              Innovation & Impact
            </Link>

            <Link
              to="/resources"
              className="block px-4 py-3 transition duration-200 border-b border-green-700 rounded-md hover:bg-green-800"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>


            <div className="pt-2">
              <Link
                to="/contact"
                className="block px-4 py-4 font-medium text-center transition duration-200 border-2 border-white rounded-full hover:bg-white hover:text-green-900"
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