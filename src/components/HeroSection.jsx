// src/components/HeroSection.jsx
import React from "react";
import heroImg from "../assets/HeroImage.png";
import vectorImg from "../assets/Vector (1).png";


const HeroSection = () => {
  return (
    <section className="relative bg-[#003B1B] text-white overflow-hidden">
      {/* Decorative Vector as Background */}
      <div className="absolute inset-0">
        <img
          src={vectorImg}
          alt="Vector design"
          className="w-full h-full object-cover opacity-90 md:block hidden"
        />
      </div>


      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12 lg:px-16 py-16 md:py-24 z-10">


        {/* Left Text */}
        <div className="flex-1 text-center md:text-left mt-10 md:mt-0">
          <p className="font-['Figtree'] font-medium text-[20px] leading-[20px] tracking-[0.04em] text-[#C6FCCE] mb-3">
            Rooted in India's Horticultural Heritage
          </p>
          <h1 className="text-[48px] leading-[56px] tracking-[-0.01em] md:leading-tight">
            Seed Science to <br className="hidden sm:block" /> Sustainable
            Solutions.
          </h1>
          <p className="text[#C5C5C5] text-[20px] leading-[28px] tracking-normal mt-4 max-w-md mx-auto md:mx-0">
            Transforming agriculture through innovation; cultivating health from
            field to formulation.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-[#003B1B] font-['Figtree']  text-[20px] leading-[20px] tracking-[0.02em] font-semibold hover:bg-green-800 hover:text-[white] transition w-[166px] h-[48px] gap-2.5 opacity-100 pt-[14px] pr-[24px] pb-[14px] pl-[24px] rounded-full">
            Get in touch
          </button>
        </div>


        {/* Right Hero Image */}
        <div className="flex-1 relative flex justify-center md:justify-end">
          <img
            src={heroImg}
            alt="Hero product"
            className="w-[250px] sm:w-[320px] md:w-[420px] lg:w-[480px] relative z-20"
          />
        </div>
      </div>
    </section>
  );
};


export default HeroSection; 