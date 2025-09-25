// src/components/HeroSection.jsx
import React from "react";
import heroImg from "../assets/HeroImage.png";
import vectorImg from "../assets/Vector (1).png";

const HeroSection = () => {
  return (
    <section className="relative bg-[#004225] text-white overflow-hidden">
      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-20">
        
        {/* Left Text */}
        <div className="flex-1 z-10">
          <p className="text-gray-300 text-sm mb-3">
            Rooted in India's Horticultural Heritage
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Seed Science to <br /> Sustainable Solutions.
          </h1>
          <p className="text-gray-300 mt-4 max-w-lg">
            Transforming agriculture through innovation; cultivating health from
            field to formulation.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-green-800 rounded-full font-semibold hover:bg-gray-200 transition">
            Get in touch
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative flex justify-center mt-10 md:mt-0">
          <img
            src={heroImg}
            alt="Hero product"
            className="w-[350px] md:w-[420px] relative z-10"
          />
        </div>
      </div>

      {/* Decorative Vector */}
      <div className="absolute bottom-0 right-0 w-full md:w-auto">
        <img src={vectorImg} alt="Vector design" className="w-full" />
      </div>
    </section>
  );
};

export default HeroSection;
