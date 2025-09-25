import React from "react";

const principles = [
    {
        title: "Accessible",
        description: "Making premium health solutions affordable and globally available."
    },
    {
        title: "Accessible",
        description: "Making premium health solutions affordable and globally available."
    },
    {
        title: "Accessible",
        description: "Making premium health solutions affordable and globally available."
    }
];

const impactStats = [
    {
        number: "4,500+",
        label: "Farmers Engaged Across India"
    },
    {
        number: "5+",
        label: "Patented Ingredients (Including GCSPP)"
    },
    {
        number: "6+",
        label: "Health Categories"
    },
    {
        number: "100%",
        label: "GMP-compliant Pilot Manufacturing"
    }
];

export default function PrinciplesAndImpact() {
    return (
        <section className="w-full  py-16">
            <div className="mx-auto max-w-6xl ">

                {/* Our Principles Section */}
                <div className="mb-16">
                    <h2 className="text-[48px] leading-[52px] tracking-[-0.01em] mb-8 text-[#003B1B]">
                        Our Principles
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {principles.map((principle, index) => (
                            <div key={index} className="text-left">
                                <h2 className="text-[36px] leading-[42px] tracking-[-0.01em] text-[#003B1B] mb-3">
                                    {principle.title}
                                </h2>
                                <p className="text-[20px] leading-[24px] tracking-[-0.01em] text-[#181818]">
                                    {principle.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-[#003B1B] rounded-3xl p-44 md:p-20 sm:p-10">
                    <h1 className=" text-[48px] leading-[52px] tracking-[-0.01em] mb-8 text-[#C6FCCE]">
                        Impact in Numbers
                    </h1>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-24">
                        {impactStats.map((stat, index) => (
                            <div key={index} className="text-left">
                                <div className="flex items-baseline mb-2">
                                    <span className=" font-[DM_Serif_Display] font-normal text-[64px] leading-[56px] tracking-[-0.01em] text-[#C6FCCE]">
                                        {stat.number}
                                    </span>
                                    <span className="text-2xl lg:text-3xl font-bold text-white ml-1">
                                        {stat.unit}
                                    </span>
                                </div>
                                <p className="text-[20px] leading-[28px] tracking-[0em] text-center text-[#FFFFFF]">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
