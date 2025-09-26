import React from 'react';
import aboutImage from '../assets/about-us-image.png';
import ffLogo from '../assets/ff-bioworks-logo.png';

const AboutUsSection = () => {
    return (
        <section className="relative bg-white px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-6xl mx-auto text-center">

                <h2 className=" text-[#003B1B] font-normal not-italic text-[48px] leading-[52px] tracking-[-0.01em] mb-10">
                    About Us
                </h2>

                <div className="">
                    <img
                        src={aboutImage}
                        alt="About Us"
                        className="w-full max-w-[979px] h-auto object-cover object-center mx-auto"
                    />
                </div>

                <div className="mt-10 md:mt-12 mx-auto max-w-3xl">
                    <div className="flex items-start justify-center sm:justify-start mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                        <img
                            src={ffLogo}
                            alt="FF Bioworks"
                            className="w-[200px] h-[50px] sm:w-[250px] sm:h-[62px] md:w-[280px] md:h-[70px] lg:w-[300px] lg:h-[75px] xl:w-[320px] xl:h-[80px] object-contain"
                        />
                    </div>
                    <p className="text-[#181818] text-[20px] leading-[28px] tracking-[0em] text-left">
                        Founded in 2016 in Bangalore, FF Bioworks (FFB) is an associate company of Plant Lipids, building a fully integrated nutraceutical ecosystem that connects farm to formulation. From precision cultivation and seed innovation to sustainable farming, functional bioactives, and advanced contract research - we steward the entire journey from soil to science. Every step is rooted in purpose, driven by data, and designed to unlock the full potential of plant-based solutions.
                    </p>
                    <div className="mt-8 text-left flex gap-20">
                        <a
                            href="#about"
                            className="w-[249px] h-[48px] px-6 py-[14px] gap-2.5 rotate-0 opacity-100 rounded-full text-[20px] leading-[20px] tracking-[0.02em] bg-[#00622D] text-[#FFFFFF] hover:bg-green-950 flex items-center justify-center font-[Figtree] font-semibold not-italic transition-colors"
                        >
                            Know more About Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
