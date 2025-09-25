import React from "react";

const Footer = () => {
    return (
        <footer className="bg-green-950 text-white py-8 px-6 w-full">
            <div className="max-w-7xl mx-auto">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">

                    {/* Company Info */}
                    <div className="w-full lg:w-1/3">
                        <img
                            src="/logo.png" // replace with your logo file
                            alt="FF Bioworks"
                            className="w-36 mb-4"
                        />
                        <p className="text-sm leading-relaxed">
                            FF Bioworks India Pvt Ltd. <br />
                            23, 17th Main, H.A.L 2nd Stage, <br />
                            Bengaluru, Karnataka, India
                        </p>
                        <p className="mt-3 text-sm">
                            Email:{" "}
                            <a
                                href="mailto:info@ffbioworks.com"
                                className="underline hover:text-green-300"
                            >
                                info@ffbioworks.com
                            </a>
                        </p>
                        <p className="text-sm">Contact Number: +91-80-49404943</p>

                        {/* Social Icons */}
                        <div className="flex gap-3 mt-4">
                            <a href="#" className="hover:opacity-80">
                                <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
                            </a>
                            <a href="#" className="hover:opacity-80">
                                <img src="/instagram.svg" alt="Instagram" className="w-8 h-8" />
                            </a>
                        </div>
                    </div>

                    {/* Services + Navigation */}
                    <div className="w-full lg:w-2/3 text-sm flex flex-col gap-4">
                        {/* Services Row */}
                        <div className="flex flex-wrap gap-x-4 gap-y-2 border-b border-gray-700 pb-3">
                            <span className="whitespace-nowrap">Seed Production, Testing & Trait Optimization</span>
                            <span className="hidden sm:inline">|</span>
                            <span className="whitespace-nowrap">Contract Farming</span>
                            <span className="hidden sm:inline">|</span>
                            <span className="whitespace-nowrap">Innovative Formulations</span>
                            <span className="hidden sm:inline">|</span>
                            <span className="whitespace-nowrap">Contract Research</span>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex flex-wrap gap-6 mt-2">
                            <a href="#" className="hover:underline">About Us</a>
                            <a href="#" className="hover:underline">Products and Services</a>
                            <a href="#" className="hover:underline">Innovation & Impact</a>
                            <a href="#" className="hover:underline">Resources</a>
                        </div>
                    </div>
                </div>

                {/* Bottom small text for mobile */}
                <div className="text-xs text-center mt-6 text-gray-400">
                    © {new Date().getFullYear()} FF Bioworks India Pvt Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
