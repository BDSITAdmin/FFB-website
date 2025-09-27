// src/components/HeroSection.jsx
import React from "react";
import heroImg from "../assets/HeroImage.png";
import vectorImg from "../assets/Vector (1).png";

const HeroSection = () => {
  return (
    <section className="relative bg-[#003B1B] text-white overflow-hidden">
      {/* Vector Image - touches left edge */}
      <div className="absolute left-0 top-0 h-full z-0">
        <img
          src={vectorImg}
          alt="Vector design"
          className="h-full object-contain md:block hidden"
        />
      </div>

      <div className="relative w-full max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between lg:pb-16 lg:pt-20  z-10">
        {/* Text Content */}
        <div className="flex-1 pl-0 md:pl-40 lg:pl-40 pt-10 md:pt-0 text-center md:text-left flex flex-col justify-center items-center md:items-start lg:pb-52 md:pb-32 ">
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
          <div className="flex justify-center md:justify-start mt-6 pb-6">
            <button className="px-6 py-3 bg-white text-[#003B1B] font-['Figtree'] text-[20px] leading-[20px] tracking-[0.02em] font-semibold hover:bg-green-800 hover:text-white transition w-[166px] h-[48px] rounded-full">
              Get in touch
            </button>
          </div>
        </div>


        {/* Hero Image */}
        <div className="flex-1 flex justify-center items-center z-30">
          <img
            src={heroImg}
            alt="Hero product"
            className="w-[250px] sm:w-[320px] md:w-[220px] lg:w-[350px] xl:w-[450px] 2xl:w-[610px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
