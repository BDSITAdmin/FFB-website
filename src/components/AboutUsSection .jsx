import React from 'react';

const AboutUsSection = () => {
    return (
        <section className="relative bg-white px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-6xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold text-green-900 mb-10">
                    About Us
                </h2>

                {/* Hero collage */}
                <div className="relative mx-auto max-w-4xl">
                    {/* layered semicircles */}
                    <div className="relative w-full h-0 pb-[52%] mx-auto">
                        {/* back arcs */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[95%] h-[95%] rounded-b-[0] rounded-t-full bg-green-200/70" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[78%] h-[78%] rounded-b-[0] rounded-t-full bg-green-700/90" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[60%] h-[60%] rounded-b-[0] rounded-t-full bg-green-900" />
                        </div>

                        {/* foreground images - update sources */}
                        <img
                            src="/images/farmer.png"
                            alt="farmer"
                            className="absolute left-2 md:left-6 bottom-0 w-40 md:w-56 object-contain"
                        />
                        <img
                            src="/images/woman.png"
                            alt="woman smiling"
                            className="absolute right-2 md:right-6 -bottom-1 w-44 md:w-64 object-contain"
                        />
                        <img
                            src="/images/center-items.png"
                            alt="bottles and flowers"
                            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-52 md:w-72 object-contain"
                        />
                    </div>
                </div>

                {/* Logo + paragraph */}
                <div className="mt-10 md:mt-12 mx-auto max-w-3xl">
                    <div className="flex items-start gap-4 justify-center md:justify-start">
                        <img
                            src="/images/ff-bioworks-logo.png"
                            alt="FF Bioworks"
                            className="w-16 h-16 object-contain"
                        />
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base text-left">
                            In Bangalore, FF Bioworks (FFB) is an associate company of Plant Lipids, building a fully
                            integrated nutraceutical ecosystem that connects farm to formulation. From precision cultivation and seed
                            innovation to sustainable farming, functional bioactives, and advanced contract research — we steward the
                            entire journey from soil to science. Every step is rooted in purpose, driven by data, and designed to unlock
                            the full potential of plant‑based solutions.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-8">
                    <a
                        href="#about"
                        className="inline-block bg-green-700 hover:bg-green-800 text-white text-sm md:text-base px-6 py-3 rounded-full transition-colors"
                    >
                        Know more About Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
