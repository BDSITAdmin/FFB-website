"use client";

import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-green-950 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src={Logo} alt="FF Bioworks" className="w-[168px] h-[41px]" />
            {/* <span className="font-bold text-lg">FF BIOWORKS</span> */}
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {/* Same page scroll */}
            <a href="#about" className="hover:text-green-300">
              About Us
            </a>

            {/* Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-green-300">
                Business Verticals <FaChevronDown className="w-3 h-3" />
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md z-50">
                  <a
                    href="#seed"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Seed Production
                  </a>
                  <a
                    href="#farming"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Contract Farming
                  </a>
                </div>
              )}
            </div>

            {/* Other page navigation */}
            <Link to="/products" className="hover:text-green-300">
              Products & Services
            </Link>
            <Link to="/innovation" className="hover:text-green-300">
              Innovation & Impact
            </Link>
            <Link to="/resources" className="hover:text-green-300">
              Resources
            </Link>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="border border-white px-4 py-1 rounded-full hover:bg-white hover:text-green-900 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-950 px-4 pb-4">
          <a
            href="#about"
            className="block py-2 border-b border-gray-700"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </a>

          {/* Dropdown inside mobile */}
          <button
            className="w-full text-left py-2 flex justify-between items-center border-b border-gray-700"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Business Verticals <FaChevronDown />
          </button>
          {dropdownOpen && (
            <div className="pl-4">
              <a
                href="#seed"
                className="block py-2"
                onClick={() => setIsOpen(false)}
              >
                Seed Production
              </a>
              <a
                href="#farming"
                className="block py-2"
                onClick={() => setIsOpen(false)}
              >
                Contract Farming
              </a>
            </div>
          )}

          <Link
            to="/products"
            className="block py-2 border-b border-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Products & Services
          </Link>
          <Link
            to="/innovation"
            className="block py-2 border-b border-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Innovation & Impact
          </Link>
          <Link
            to="/resources"
            className="block py-2 border-b border-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Resources
          </Link>

          <Link
            to="/contact"
            className="block text-center mt-3 border border-white px-4 py-2 rounded-full hover:bg-white hover:text-green-900 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
