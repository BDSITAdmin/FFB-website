import React from "react";

const verticals = [
    {
        title: "Seed Production, Testing & Trait Optimization",
        desc:
            "Developing high‑performance, disease‑tolerant seeds optimized for active compounds, colour, and yield through advanced breeding and genomic mapping.",
        img: "/images/vert-seed.jpg",
        href: "#seed",
    },
    {
        title: "Contract Farming",
        desc:
            "Partnering with over 4,500+ farmers to ensure ethical sourcing, fair pay, and sustainable agricultural practices with full traceability and digital integration.",
        img: "/images/vert-farming.jpg",
        href: "#farming",
    },
    {
        title: "Innovative Formulations",
        desc:
            "Harnessing nature and science to deliver clinically validated, plant‑based bioactives for high‑performance nutraceutical formulations.",
        img: "/images/vert-formulations.jpg",
        href: "#formulations",
    },
    {
        title: "Contract Research",
        desc:
            "Providing comprehensive R&D support across pre‑formulation, workflows, and clinical validation, empowering nutraceutical brands to launch with impact and assurance.",
        img: "/images/vert-research.jpg",
        href: "#research",
    },
];

const BusinessVerticals = () => {
    return (
        <section className="bg-[#E9F5EF] px-4 sm:px-6 lg:px-8 py-14">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="mb-8">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-green-900">
                        Our Business Verticals
                    </h2>
                    <p className="mt-2 text-sm text-green-900/70">
                        Our edge lies in consistency, transparency, cost efficiency, and innovation control.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-6 sm:gap-7 grid-cols-1 md:grid-cols-2">
                    {verticals.map((v) => (
                        <article
                            key={v.title}
                            className="bg-white rounded-xl shadow-[0_1px_0_0_rgba(16,24,40,0.05)] ring-1 ring-black/5 overflow-hidden"
                        >
                            {/* Image */}
                            <div className="relative">
                                <img
                                    src={v.img}
                                    alt={v.title}
                                    className="w-full h-44 sm:h-52 object-cover"
                                />
                            </div>

                            {/* Body */}
                            <div className="p-4 sm:p-5">
                                <h3 className="text-green-700 font-semibold text-base sm:text-lg">
                                    {v.title}
                                </h3>
                                <p className="mt-2 text-gray-600 text-sm leading-6">
                                    {v.desc}
                                </p>

                                <a
                                    href={v.href}
                                    className="mt-4 inline-flex items-center gap-2 text-green-700 text-sm font-medium"
                                >
                                    know more
                                    <span aria-hidden>→</span>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BusinessVerticals;
