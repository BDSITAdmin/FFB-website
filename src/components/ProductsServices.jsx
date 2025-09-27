import React from "react";
import seedIcon from "../assets/seed.png";
import bioIcon from "../assets/bio.png";
import researchIcon from "../assets/research.png";
import healthIcon from "../assets/health.png";

const services = [
    {
        icon: seedIcon,
        title: "Seed Innovation & Sustainable Farming",
        features: [
            "Precision phenotyping",
            "Yield optimization",
            "Next-gen precision agriculture",
        ],
    },
    {
        icon: bioIcon,
        title: "Functional Bioactives",
        features: ["Fortified food", "Beverages", "Dietary supplements"],
    },
    {
        icon: researchIcon,
        title: "Advanced Contract Research",
        features: [
            "Formulation",
            "Preclinical Studies",
            "Clinical trial management",
            "Regulatory filings",
        ],
    },
    {
        icon: healthIcon,
        title: "Health Supplements",
        features: [
            "Eye health",
            "Respiratory wellness",
            "Liver wellness",
            "Metabolic health",
            "Prostate health",
            "Men's health",
            "Women's wellness",
            "Healthy aging",
        ],
    },
];

export default function ProductsServices() {
    return (
        <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                <div className="mb-10 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight md:leading-[52px] tracking-[-0.01em] mb-6 sm:mb-8 text-[#003B1B] text-center md:text-left">
                        Products & Services
                    </h2>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 sm:gap-8 mb-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#DCF1E5] rounded-2xl p-5 sm:p-6 
              hover:shadow-[0_4px_6px_#00600E33] 
              transition-shadow duration-300
              hover:border hover:border-[#003B1B]"
                        >
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                                <img
                                    src={service.icon}
                                    alt={`${service.title} icon`}
                                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                                />
                            </div>

                            <h3 className="font-[DM_Serif_Display] text-xl sm:text-2xl md:text-[28px] lg:text-[32px] leading-snug text-[#003B1B] py-3 sm:py-4">
                                {service.title}
                            </h3>

                            <ul className="space-y-2 mt-2">
                                {service.features.map((feature, featureIndex) => (
                                    <li
                                        key={featureIndex}
                                        className="font-[Figtree] text-sm sm:text-base md:text-[18px] leading-relaxed flex items-start text-[#6F6F6F]"
                                    >
                                        <span className="text-[#6F6F6F] mr-2 mt-1 text-xs">•</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className="flex justify-center">
                    <button className="bg-[#00622D] text-white w-full sm:w-auto px-6 py-3 rounded-full text-base sm:text-lg md:text-[20px] font-[Figtree] font-semibold transition-colors hover:bg-green-950">
                        View all Products & Services
                    </button>
                </div>
            </div>
        </section>
    );
}
