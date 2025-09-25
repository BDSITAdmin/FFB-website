import React from "react";
import seedImg from '../assets/Seed-Production.jpg';
import farmingImg from '../assets/Contract-Farming.png';
import formulationsImg from '../assets/Innovative-Formulations.png';
import researchImg from '../assets/Contract-Research.png';
import arrow from '../assets/arrow-right.png';

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
            <div className="max-w-7xl mx-auto px-16">

                <div className="mb-10 lg:mb-12">
                    <h1 className="font-dmserif text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#003B1B] ">
                        Our Business Verticals
                    </h1>
                    <p className=" text-[#00622D]  text-[24px] leading-[32px] tracking-[-1%]">
                        Our edge lies in consistency, transparency, cost efficiency, and innovation control.
                    </p>
                </div>


                <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    {verticals.map((v, index) => (
                        <article
                            key={v.title}
                            className="bg-white  shadow-sm  border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300  gap-9 rotate-0 opacity-100 rounded-[12px] border p-9"
                        >

                            <div className="flex flex-col h-full">

                                <div className="w-full flex justify-center">
                                    <img
                                        src={v.img}
                                        alt={v.title}
                                        className="w-[462px] h-[297px] object-cover object-center rounded-[8px]"
                                    />
                                </div>
                                <div className="py-5 sm:py-6 ">
                                    <p className="text-[#00622D] font-semibold text-lg sm:text-xl mb-3 text-[24px] leading-[28px] tracking-[-2%]">
                                        {v.title}
                                    </p>
                                    <p className="text-[#181818] text-[20px] leading-[28px] tracking-[0%]">
                                        {v.desc}
                                    </p>

                                    <a
                                        href={v.href}
                                        className="mt-6 inline-flex items-center gap-2 font-semibold not-italic text-[20px] leading-[20px] tracking-[2%] lowercase text-[#003B1B]"
                                    >
                                        Know more
                                        <img src={arrow} alt="arrow" className="w-[16px] h-[16px] mt-2 " />
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