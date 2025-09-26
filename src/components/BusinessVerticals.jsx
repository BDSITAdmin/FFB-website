import React from "react";
import seedImg from '../assets/Seed-Production.jpg';
import farmingImg from '../assets/Contract-Farming.png';
import formulationsImg from '../assets/Innovative-Formulations.png';
import researchImg from '../assets/Contract-Research.png';

import { GoArrowRight } from "react-icons/go";

const verticals = [
    {
        title: "Seed Production, Testing & Trait Optimization",
        desc: "Developing high-performance, disease-tolerant seeds optimized for active compounds, colour, and yield through advanced breeding and genomic mapping.",
        img: seedImg,
        href: "#seed",
    },
    {
        title: "Contract Farming",
        desc: "Partnering with over 4,500+ farmers to ensure ethical sourcing, fair pay, and sustainable agricultural practices with full traceability and digital integration.",
        img: farmingImg,
        href: "#farming",
    },
    {
        title: "Innovative Formulations",
        desc: "Harnessing nature and science to deliver clinically validated, plant-based bioactives for high-performance nutraceutical formulations.",
        img: formulationsImg,
        href: "#formulations",
    },
    {
        title: "Contract Research",
        desc: "Providing comprehensive R&D support across pre-formulation, workflows, and clinical validation, empowering nutraceutical brands to launch with impact and assurance.",
        img: researchImg,
        href: "#research",
    },
];

const BusinessVerticals = () => {
    return (
        <section className="bg-[#DCF1E5] px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="max-w-7xl mx-auto">

                <div className="mb-10 lg:mb-12 text-center lg:text-left">
                    <h1 className="font-dmserif text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#003B1B] mb-4">
                        Our Business Verticals
                    </h1>
                    <p className="text-[#00622D] text-lg sm:text-xl lg:text-[24px] leading-7 sm:leading-8 tracking-[-0.01em]">
                        Our edge lies in consistency, transparency, cost efficiency, and innovation control.
                    </p>
                </div>

                <div className="grid gap-8 sm:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    {verticals.map((v) => (
                        <article
                            key={v.title}
                            className="bg-white border-gray-100 overflow-hidden shadow-md rounded-[12px] border p-6 md:p-9 hover:border-[#003B1B] hover:shadow-[5px_6px_20px_6px_#00600E33] transition-shadow duration-300 w-full mx-auto flex flex-col"
                        >
                            {/* Card content container */}
                            <div className="flex flex-col flex-grow">
                                <div className="w-full flex justify-center">
                                    <img
                                        src={v.img}
                                        alt={v.title}
                                        className="w-full max-w-full h-auto object-cover object-center rounded-[8px]"
                                    />
                                </div>

                                <div className="py-5 sm:py-6 flex flex-col flex-grow">
                                    <p className="text-[#00622D] font-semibold text-lg sm:text-xl lg:text-[24px] mb-3">
                                        {v.title}
                                    </p>
                                    <p className="text-[#181818] text-base sm:text-lg lg:text-[20px] leading-6 sm:leading-7 lg:leading-8">
                                        {v.desc}
                                    </p>

                                    {/* Spacer pushes button to bottom */}
                                    <div className="flex-grow"></div>

                                    <a
                                        href={v.href}
                                        className="mt-6 inline-flex items-center gap-2 font-semibold text-base sm:text-lg lg:text-[20px] leading-[20px] tracking-[2%] lowercase text-[#003B1B] hover:text-green-600 transition-colors duration-200"
                                    >
                                        Know more
                                        <GoArrowRight className="text-2xl mt-1 sm:mt-2" />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>

    );
};

export default BusinessVerticals;