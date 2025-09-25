import React from "react";
import arrow from '../assets/arrow-right.png';
const NewReleaseCard = () => {
    return (
        <section className="px-0 sm:px-0 lg:px-0 py-12 lg:py-16">
            <div className="w-full"> {/* full width container */}

                <div className="relative bg-[#FF9100]  pt-16 pr-[200px] pb-16 pl-16 gap-2.5 rotate-0 opacity-100 rounded-tr-[24px] rounded-br-[24px] overflow-hidden">

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">

                        <div className="md:col-span-3">
                            <p className=" text-[#FFFFFF] font-figtree font-semibold not-italic text-[16px] leading-[16px] tracking-[0.03em] uppercase">
                                New Release
                            </p>
                            <h1 className="mt-3 text[#181818]  text-[48px] leading-[56px] tracking-[-0.01em] font-normal">
                                A promising nature
                                <br className="hidden sm:block" />
                                centric solution!
                            </h1>
                            <p className="mt-4 text[#181818] font-normal not-italic text-[20px] leading-[28px] tracking-[0em] pr-12">
                                Powered by our patented blend of Curcuminoids +
                                Xanthophylls, <span className="font-extrabold">iXAN </span>is a clinically validated innovation
                                for vision, cognition, liver wellness, skin health & overall wellness.
                                From seed science to bioactive precision,<span className="font-extrabold">iXAN </span> represents the mission
                                of creating plant‑based solutions with measurable impact.
                            </p>

                            <a
                                href="#learn-more"
                                className="mt-6 inline-flex items-center gap-2 font-semibold not-italic text-[20px] leading-[20px] tracking-[2%] lowercase text-[#003B1B]"
                            >
                                know more
                                <img src={arrow} alt="arrow" className="w-[16px] h-[16px] mt-2 " />
                            </a>
                        </div>

                        <div className="md:col-span-2">
                            <div className="md:-mr-8 md:translate-x-4 md:-translate-y-2">
                                <div className="bg-white text-gray-900 rounded-xl shadow-sm ring-1 ring-black/10 p-5 sm:p-6">

                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-amber-400 grid place-items-center text-white font-bold">
                                            i
                                        </div>
                                        <div>
                                            <div className="font-extrabold tracking-tight text-lg">
                                                iXAN
                                                <sup className="align-super text-[10px]">TM</sup>
                                            </div>
                                            <div className="text-[11px] -mt-0.5 text-gray-600">
                                                Curcuminoids+ XANthophylls
                                            </div>
                                        </div>
                                    </div>

                                    <p className="mt-3 text-[11px] text-gray-600">
                                        Patented Synergistic Anti‑Oxidant & Anti‑Inflammatory Composition
                                    </p>

                                    <hr className="my-3 border-gray-200" />

                                    <ul className="text-[11px] text-gray-800 space-y-1">
                                        <li>Sharper vision</li>
                                        <li>Enhanced cognitive function</li>
                                        <li>Healthier liver</li>
                                        <li>Radiant skin</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pointer-events-none absolute top-0 right-0 w-8 h-8 bg-white rounded-bl-2xl md:hidden" />
                    <div className="pointer-events-none absolute bottom-0 left-0 w-8 h-8 bg-white rounded-tr-2xl md:hidden" />
                </div>
            </div>
        </section>

    );
};

export default NewReleaseCard;
