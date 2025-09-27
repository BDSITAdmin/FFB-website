// src/components/HeroSection.jsx
import React from "react";
import heroImg from "../assets/HeroImage.png";
import vectorImg from "../assets/Vector (1).png";

const HeroSection = () => {
  return (
    <section className="relative bg-[#003B1B] text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto flex flex-col-reverse  md:flex-row items-center px-6 md:px-12 lg:px-16 py-16 md:py-20 z-10">

        {/* Vector Image - left aligned */}
        <div className="absolute left-0 top-[60%] -translate-y-1/2">
          <img
            src={vectorImg}
            alt="Vector design"
            className="w-[90%] h-auto object-contain md:block hidden"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left z-20">
          <p className="font-['Figtree'] font-medium lg:text-[20px] lg:leading-[20px] tracking-[0.04em] text-[#C6FCCE] mb-3">
            Rooted in India's Horticultural Heritage
          </p>
          <h1 className="lg:text-[48px] lg:leading-[56px] tracking-[-0.01em] md:leading-tight">
            Seed Science to <br className="hidden sm:block" /> Sustainable
            Solutions.
          </h1>
          <p className="text-[#C5C5C5] md:text-[20px] lg:text-[20px] leading-[28px] tracking-normal mt-4 max-w-md mx-auto md:mx-0">
            Transforming agriculture through innovation; cultivating health from
            field to formulation.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-[#003B1B] font-['Figtree'] text-[20px] leading-[20px] tracking-[0.02em] font-semibold hover:bg-green-800 hover:text-white transition w-[166px] h-[48px] rounded-full">
            Get in touch
          </button>
        </div>

        {/* Hero Image - centered over vector */}
        <div className="relative flex justify-center items-center z-30">
          <img
            src={heroImg}
            alt="Hero product"
            className="w-[250px] sm:w-[320px] md:w-[400px] lg:w-[400px] relative md:left-35  md:top-15 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
