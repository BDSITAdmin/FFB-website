import React from "react";

const NewReleaseCard = () => {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-10">
            <div className="max-w-6xl mx-auto">
                {/* Orange panel */}
                <div className="relative rounded-2xl bg-[#F59E0B] text-white p-6 sm:p-8 md:p-10 overflow-hidden">
                    {/* Corner radius accent to mimic screenshot’s pill ends */}
                    <div className="absolute right-0 bottom-0 w-32 h-10 bg-white/0 rounded-tl-2xl pointer-events-none" />

                    {/* Content grid */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                        {/* Left copy */}
                        <div className="md:col-span-3">
                            <p className="uppercase tracking-wide text-xs md:text-[11px] font-medium opacity-90">
                                New Release
                            </p>
                            <h3 className="mt-2 text-2xl sm:text-3xl font-semibold leading-snug">
                                A promising nature
                                <br className="hidden sm:block" />
                                centric solution!
                            </h3>
                            <p className="mt-4 text-white/90 text-sm leading-6">
                                Powered by our patented blend of Curcuminoids +
                                Xanthophylls, iXAN is a clinically validated innovation
                                for vision, cognition, liver wellness, skin health &
                                overall wellness. From seed science to bioactive
                                precision, iXAN represents the mission of creating
                                plant‑based solutions with measurable impact.
                            </p>

                            <a
                                href="#learn-more"
                                className="mt-5 inline-flex items-center gap-2 text-white text-sm font-medium underline underline-offset-4 decoration-white/60 hover:decoration-white transition"
                            >
                                know more
                                <span aria-hidden>→</span>
                            </a>
                        </div>

                        {/* Right floating badge */}
                        <div className="md:col-span-2">
                            <div className="md:-mr-8 md:translate-x-4 md:-translate-y-2">
                                <div className="bg-white text-gray-900 rounded-xl shadow-sm ring-1 ring-black/10 p-5 sm:p-6">
                                    {/* Replace with logo/image */}
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
                                        Patented Synergistic Anti‑Oxidant & Anti‑Inflammatory
                                        Composition
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

                    {/* Rounded cutouts to match screenshot corners */}
                    <div className="pointer-events-none absolute top-0 right-0 w-8 h-8 bg-white rounded-bl-2xl md:hidden" />
                    <div className="pointer-events-none absolute bottom-0 left-0 w-8 h-8 bg-white rounded-tr-2xl md:hidden" />
                </div>
            </div>
        </section>
    );
};

export default NewReleaseCard;
