import React from "react";

const principles = [
    {
        title: "Accessible",
        description: "Making premium health solutions affordable and globally available."
    },
    {
        title: "Reliable",
        description: "Ensuring consistent quality and trusted solutions for all."
    },
    {
        title: "Innovative",
        description: "Leveraging advanced technology to improve health outcomes."
    }
];

export default function PrinciplesAndImpact() {
    return (
        <section className="w-full py-16">
            <div className="mx-auto max-w-6xl">

                <div className="mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#003B1B] text-center md:text-left">
                        Our Principles
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {principles.map((principle, index) => (
                            <div key={index} className="text-center md:text-left">
                                <h3 className="text-2xl sm:text-3xl md:text-[36px] font-semibold text-[#003B1B] mb-2">
                                    {principle.title}
                                </h3>
                                <p className="text-base sm:text-lg md:text-[20px] text-[#181818]">
                                    {principle.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="bg-[#003B1B] rounded-3xl p-44 md:p-20 sm:p-12 py-16 text-center">
                    <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-[1.1] sm:leading-[1.2] md:leading-[52px] tracking-[-0.01em] mb-6 sm:mb-8 text-[#C6FCCE] text-center md:text-left ">
                        Impact in Numbers
                    </h1>

                    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-24 text-center">
                        <div className="flex flex-col items-center justify-center p-4 sm:p-6" >
                            <h3 className="font-[DM_Serif_Display] font-normal text-[64px] leading-[56px] tracking-[-0.01em] text-[#C6FCCE]">
                                4,500+
                            </h3>
                            <p className="text-[18px] leading-[28px] tracking-[0em] text-[#FFFFFF] mt-2">
                                Farmers Engaged Across India
                            </p>
                        </div>
                        <div>
                            <h3 className="font-[DM_Serif_Display] font-normal text-[64px] leading-[56px] tracking-[-0.01em] text-[#C6FCCE]">
                                5+
                            </h3>
                            <p className="text-[18px] leading-[28px] tracking-[0em] text-[#FFFFFF] mt-2">
                                Patented Ingredients (including iXAN®)
                            </p>
                        </div>
                        <div>
                            <h3 className="font-[DM_Serif_Display] font-normal text-[64px] leading-[56px] tracking-[-0.01em] text-[#C6FCCE]">
                                6+
                            </h3>
                            <p className="text-[18px] leading-[28px] tracking-[0em] text-[#FFFFFF] mt-2">
                                Health <br /> Categories
                            </p>
                        </div>
                        <div>
                            <h3 className="font-[DM_Serif_Display] font-normal text-[64px] leading-[56px] tracking-[-0.01em] text-[#C6FCCE]">
                                100%
                            </h3>
                            <p className="text-[18px] leading-[28px] tracking-[0em] text-[#FFFFFF] mt-2">
                                GMP-compliant
                                Post-Harvest Systems
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}



