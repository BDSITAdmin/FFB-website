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
    },
];

export default function PrinciplesAndImpact() {
    return (
        <section className="w-full lg:py-16">
            <div className="mx-auto max-w-7xl">

                <div className="mb-12 md:mb-16 px-4 sm:px-6 md:px-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-6 text-[#003B1B] text-center md:text-left">
                        Our Principles
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                        {principles.map((principle, index) => (
                            <div
                                key={index}
                                className="text-center sm:text-left 
                   p-4 rounded-xl shadow-md bg-white 
                   sm:p-0 sm:rounded-none sm:shadow-none sm:bg-transparent"
                            >
                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-normal text-[#003B1B] mb-2">
                                    {principle.title}
                                </h3>
                                <p className=" sm:text-base md:text-lg font-normal  text-[#181818] font-['Figtree']  lg:text-[20px] leading-[24px] tracking-[-0.01em]">
                                    {principle.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-[#003B1B]  px-6 py-12 sm:px-10 md:px-16 lg:px-20 xl:px-32 text-center md:text-left  w-auto lg:h-[440px] p-[100px_74px] gap-[48px] opacity-100 rounded-[100px]">
                    <div className="max-w-7xl mx-auto lg:mt-10">

                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px]  md:leading-[52px]  text-[#C6FCCE] font-normal font-['DM_Serif_Display'] tracking-[-0.01em] ">
                            Impact in Numbers
                        </h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 xl:gap-4 text-center">
                            <div className="flex flex-col items-center justify-center p-4 sm:p-6">
                                <h3 className="font-[DM_Serif_Display] text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight text-[#C6FCCE]">
                                    4,500+
                                </h3>
                                <p className="text-base sm:text-lg md:text-xl lg:text-[16px]  leading-relaxed text-white mt-2">
                                    Farmers Engaged Across India
                                </p>
                            </div>

                            <div className="flex flex-col items-center justify-center p-4 sm:p-6">
                                <h3 className="font-[DM_Serif_Display] text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight text-[#C6FCCE]">
                                    5+
                                </h3>
                                <p className="text-base sm:text-lg md:text-xl lg:text-[16px] leading-relaxed text-white mt-2">
                                    Patented Ingredients (including iXAN®)
                                </p>
                            </div>

                            <div className="flex flex-col items-center justify-center p-4 sm:p-6">
                                <h3 className="font-[DM_Serif_Display] text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight text-[#C6FCCE]">
                                    6+
                                </h3>
                                <p className="text-base sm:text-lg md:text-xl leading-relaxed lg:text-[16px] text-white mt-2">
                                    Health <br /> Categories
                                </p>
                            </div>

                            <div className="flex flex-col items-center justify-center p-4 sm:p-6">
                                <h3 className="font-[DM_Serif_Display] text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight text-[#C6FCCE]">
                                    100%
                                </h3>
                                <p className="text-base sm:text-lg md:text-xl leading-relaxed lg:text-[16px] text-white mt-2">
                                    GMP-compliant <br /> Post-Harvest Systems
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section >
    );
}



