import React from "react";
import seedIcon from '../assets/seed.png';
import bioIcon from '../assets/bio.png';
import researchIcon from '../assets/research.png';
import healthIcon from '../assets/health.png';


const services = [
    {
        icon: seedIcon,
        title: "Seed Innovation & Sustainable Farming",
        features: [
            "Precision phenotyping",
            "Yield optimization",
            "Next-gen precision agriculture"
        ]
    },
    {
        icon: bioIcon,
        title: "Functional Bioactives",
        features: [
            " Fortified food",
            "Beverages",
            "Dietary supplements"



        ]
    },
    {
        icon: researchIcon,
        title: "Advanced Contract Research",
        features: [
            "Formulation",
            "Preclinical Studies",
            "Clinical trial management",
            "Regulatory filings"
        ]
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
            "Healthy aging"


        ]
    }
];

export default function ProductsServices() {
    return (
        <section className="w-full bg-white py-16">
            <div className="mx-auto max-w-7xl px-6">


                <div className="mb-12">
                    <h2 className="text-[48px] leading-[52px] tracking-[-0.01em] mb-8 text-[#003B1B]">
                        Products & Services
                    </h2>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#DCF1E5] rounded-2xl p-6 
                shadow-none 
                hover:shadow-[0_4px_6px_#00600E33] 
                transition-shadow duration-300
                hover:border hover:border-[#003B1B]"
                        >

                            <div className="w-12 h-12  rounded-xl flex items-center justify-center">
                                <img
                                    src={service.icon}
                                    alt={`${service.title} icon`}
                                    className="w-[48px] h-[46px] object-contain "

                                />
                            </div>


                            <h3 className="font-[DM_Serif_Display] font-normal not-italic text-[32px] leading-[42px] tracking-[-0.01em]  text-[#003B1B] py-4">
                                {service.title}
                            </h3>


                            <ul className="space-y-2 mt-2">
                                {service.features.map((feature, featureIndex) => (
                                    <li
                                        key={featureIndex}
                                        className="font-[Figtree] font-normal  text-[18px] leading-[24px] tracking-[0em] flex items-start text-[#6F6F6F]"
                                    >
                                        <span className="text-[#6F6F6F] mr-2 mt-1 text-xs">•</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>


                <div className="flex justify-center">
                    <button className="bg-[#00622D] text-white w-[317px] h-[48px] px-6 py-[14px] gap-[10px] rounded-full  text-[20px] leading-[20px] tracking-[0.02em] hover:bg-green-950 flex items-center justify-center font-[Figtree] font-semibold not-italic transition-colors">
                        View all Products & Services
                    </button>
                </div>
            </div>
        </section>
    );
}
