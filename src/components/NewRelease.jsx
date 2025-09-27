import React from "react";
import { GoArrowRight } from "react-icons/go";
import ixanImg from "../assets/ixanLogo.png";

const NewReleaseCard = () => {
    return (
        <section className="relative py-2 mt-16 overflow-hidden ">

            <div
                className="absolute left-0 top-0 bottom-0 bg-[#FF9100] rounded-tr-[24px] rounded-br-[24px]
                   w-[90vw] md:w-[90vw] lg:w-[75%]"
                aria-hidden="true"
            />
            <div className="relative mx-auto max-w-7xl ">
                <div className="grid items-center grid-cols-1 gap-8 py-4 md:grid-cols-5">
                    <div className="z-20 px-2 md:col-span-3 md:p-6 sm:px-2 lg:px-4">
                        <p className="text-[#C6FCCE] font-figtree font-semibold text-[16px] tracking-wide uppercase">
                            New Release
                        </p>
                        <h1 className="mt-3 text-[#181818] 
               text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
               leading-snug sm:leading-tight lg:leading-[1.2] 
               font-normal">
                            A promising nature
                            <br className="hidden sm:block" />
                            centric solution!
                        </h1>

                        <p className="mt-4 text-[#181818] 
              text-sm sm:text-base md:text-lg lg:text-xl 
              leading-relaxed sm:leading-[1.7] lg:leading-[1.8] 
              md:pr-10 lg:pr-20 xl:pr-32">
                            Powered by our patented blend of Curcuminoids + Xanthophylls,{" "}
                            <span className="font-extrabold">iXAN </span>
                            is a clinically validated innovation for vision, cognition, liver wellness, skin
                            health & overall wellness. From seed science to bioactive precision,{" "}
                            <span className="font-extrabold">iXAN </span>
                            represents the mission of creating plant-based solutions with
                            measurable impact.
                        </p>

                        <a
                            href="#newrelease"
                            className="mt-6 inline-flex items-center gap-2 font-semibold text-lg sm:text-xl text-[#003B1B] hover:text-green-500 transition-colors"
                        >
                            Know more
                            <GoArrowRight className="text-2xl font-bold" />
                        </a>
                    </div>
                    <div className="relative z-20 hidden md:col-span-2 md:block">
                        <div
                            className="bg-white rounded-xl shadow-xl sm:p-2 border border-[#FF9100]
           w-[500px] min-h-[350px]  
           md:absolute md:right-30 md:top-1/2 md:-translate-y-1/2 md:translate-x-1/6
           flex flex-col justify-center"
                        >
                            <div className="flex justify-center mb-6">
                                <img
                                    src={ixanImg}
                                    alt="iXAN product"
                                    className="w-[312px] h-[116px] object-contain"
                                />
                            </div>

                            <p className="text-center text-sm sm:text-base leading-relaxed text-[#181818] px-6 mb-6">
                                Patented Synergistic Anti-Oxidant & Anti-Inflammatory Composition
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-2 text-[#181818] font-semibold text-xs sm:text-sm uppercase">
                                <span>Sharper vision</span>
                                <div className="w-1 h-1 bg-[#181818] rounded-full" />
                                <span>Enhanced cognitive function</span>
                                <div className="w-1 h-1 bg-[#181818] rounded-full" />
                                <span>Healthier liver</span>
                                <div className="w-1 h-1 bg-[#181818] rounded-full" />
                                <span>Radiant skin</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NewReleaseCard;
