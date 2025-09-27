import React from "react";
import foterlogo from '../assets/footer-logo.png';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';


const Footer = () => {
    return (
        <footer className="bg-[#003B1B] text-white py-8 px-6 w-full">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">


                    <div className="w-full lg:w-1/3 mt-4">
                        <img
                            src={foterlogo}
                            alt="FF Bioworks"
                            className="w-[168px] h-[41.86px] mb-4"
                        />
                        <p className="font-[Figtree] font-normal text-[16px] leading-[24px] tracking-[-0.01em]">
                            FF Bioworks India Pvt Ltd. <br />
                            23, 17th Main, HAL 2nd Stage, Bengaluru, <br />
                            Karnataka, India
                        </p>
                        <p className="mt-3 font-[Figtree] font-normal text-[16px] leading-[24px] tracking-[-0.01em]">
                            Email:{" "}
                            <a
                                href="mailto:info@ffbioworks.com"

                            >
                                info@ffbioworks.com
                            </a>
                        </p>
                        <p className="mt-1 font-[Figtree] font-normal text-[16px] leading-[24px] tracking-[-0.01em]">Contact Number: +91-80-41494049</p>


                        <div className="flex gap-[16px] mt-4">
                            <a href="#" className="hover:opacity-80">
                                <img src={linkedin} alt="LinkedIn" className="w-[44px] h-[44px" />
                            </a>
                            <a href="#" className="hover:opacity-80">
                                <img src={instagram} alt="Instagram" className="w-[44px] h-[44px" />
                            </a>
                        </div>
                    </div>


                    <div className="w-full lg:w-2/3 text-sm flex flex-col gap-4 lg:mt-24">

                        <div className="flex flex-wrap items-center gap-4  pb-3 font-[Figtree] font-medium not-italic lg:text-[14px] leading-[20px] tracking-[0.02em] text-[#C6FCCE]">
                            <span className="whitespace-nowrap">Seed Production, Testing & Trait Optimization</span>

                            <div className="hidden sm:block h-6 border-1 border-[#C6FCCE]"></div>
                            <span className="whitespace-nowrap">Contract Farming</span>

                            <div className="hidden sm:block h-6 border-1 border-[#C6FCCE]"></div>
                            <span className="whitespace-nowrap">Innovative Formulations</span>

                            <div className="hidden sm:block h-6 border-1 border-[#C6FCCE]"></div>
                            <span className="whitespace-nowrap">Contract Research</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-6 mt-2  font-[Figtree] font-medium not-italic lg:text-[20px] leading-[20px] tracking-[0.02em] text-[#C6FCCE] ">
                            <div className="hidden sm:block h-6 "></div>
                            <span className="whitespace-nowrap">About Us</span>

                            <div className="hidden sm:block h-6 border-1 border-[#C6FCCE]"></div>
                            <span className="whitespace-nowrap">Products and Services</span>

                            <div className="hidden sm:block h-6 border-1 border-[#C6FCCE]"></div>
                            <span className="whitespace-nowrap">Innovation & Impact</span>
                            <div className="hidden sm:block h-6 border-1 border-[#C6FCCE]"></div>
                            <span className="whitespace-nowrap">Resources</span>
                        </div>
                    </div>
                </div>


            </div>
        </footer >
    );
};

export default Footer;
