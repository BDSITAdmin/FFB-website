import React from "react";

const ProductsServices = () => {
    return (
        <section className="py-12 px-6 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                {/* Section Title */}
                <h2 className="text-2xl font-semibold text-green-900 mb-8">
                    Products & Services
                </h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/icons/seed.svg" alt="Seed Icon" className="w-6 h-6" />
                            <h3 className="font-semibold text-green-900">
                                Seed Innovation & Sustainable Farming
                            </h3>
                        </div>
                        <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                            <li>Precision phenotyping</li>
                            <li>Yield optimization trials</li>
                            <li>Next-gen precision agriculture</li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/icons/bio.svg" alt="Bio Icon" className="w-6 h-6" />
                            <h3 className="font-semibold text-green-900">
                                Functional Bioactives
                            </h3>
                        </div>
                        <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                            <li>Fortified food</li>
                            <li>Beverages</li>
                            <li>Dietary supplements</li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/icons/research.svg" alt="Research Icon" className="w-6 h-6" />
                            <h3 className="font-semibold text-green-900">
                                Advanced Contract Research
                            </h3>
                        </div>
                        <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                            <li>Formulation</li>
                            <li>Preclinical Studies</li>
                            <li>Clinical trial management</li>
                            <li>Regulatory filings</li>
                        </ul>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/icons/health.svg" alt="Health Icon" className="w-6 h-6" />
                            <h3 className="font-semibold text-green-900">Health Supplements</h3>
                        </div>
                        <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                            <li>Eye Health</li>
                            <li>Respiratory wellness</li>
                            <li>Liver wellness</li>
                            <li>Metabolic health</li>
                            <li>Prostate health</li>
                            <li>Men's health</li>
                            <li>Women’s wellness</li>
                            <li>Healthy aging</li>
                        </ul>
                    </div>
                </div>

                {/* Button */}
                <div className="mt-10">
                    <button className="bg-green-800 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
                        View all Products & Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductsServices;
