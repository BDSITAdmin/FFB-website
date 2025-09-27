// src/components/HeroSection.jsx
import React from "react";
import heroImg from "../assets/HeroImage.png";
import vectorImg from "../assets/Vector (1).png";

const HeroSection = () => {
  return (
    <section className="relative bg-[#003B1B] text-white overflow-hidden">
      <div className="relative z-10 flex flex-col-reverse items-center px-6 py-16 mx-auto max-w-7xl md:flex-row md:px-12 lg:px-16 md:py-20">

        {/* Vector Image - left aligned */}
        <div className="absolute left-0 top-[60%] -translate-y-1/2">
          <img
            src={vectorImg}
            alt="Vector design"
            className="w-[100%] h-auto object-contain md:block hidden"
          />
        </div>

        {/* Text Content */}
        <div className="z-20 text-center md:text-left">
          <p className="font-['Figtree'] font-medium lg:text-[20px] lg:leading-[20px] tracking-[0.04em] text-[#C6FCCE] mb-3">
            Rooted in India's Horticultural Heritage
          </p>
          <h1 className="md:text-[38px] lg:text-[48px]  lg:leading-[56px] tracking-[-0.01em] md:leading-[42px]">
            Seed Science to <br className="hidden sm:block" /> Sustainable
            Solutions.
          </h1>
          <p className="text-[#C5C5C5] md:text-[16px] lg:text-[18px]  xl:text-[20px] leading-[28px] tracking-normal mt-4 max-w-md mx-auto md:mx-0">
            Transforming agriculture through innovation; cultivating health from
            field to formulation.
          </p>
          <button className=" mt-4 px-4 py-2 lg:mt-4 lg:px-4 lg:py-2 xl:mt-6 xl:px-6 xl:py-3 bg-white text-[#003B1B] font-['Figtree']
          lg:text-[16px] xl:text-[20px] leading-[20px] tracking-[0.02em] font-semibold hover:bg-green-800 hover:text-white
           transition rounded-full">
            Get in touch
          </button>
        </div>

        {/* Hero Image - centered over vector */}
        <div className="relative z-30 flex items-center justify-center">
          <img
            src={heroImg}
            alt="Hero product"
            className="w-[250px] sm:w-[320px] md:w-[280px] lg:w-[360px] xl:w-[420px] relative md:top-8 md:left-0 lg:left-20 lg:top-10 xl:left-60  xl:top-12 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
