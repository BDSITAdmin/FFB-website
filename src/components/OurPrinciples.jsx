import React from 'react';

const OurPrinciples = () => {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Our Principles Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Principles</h2>

                    {/* Three Principle Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {/* Card 1 */}
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessible</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We're committed to creating solutions that are
                                affordable and globally available
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessible</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We're committed to creating solutions that are
                                affordable and globally available
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessible</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We're committed to creating solutions that are
                                affordable and globally available
                            </p>
                        </div>
                    </div>
                </div>

                {/* Impact in Numbers Section */}
                <div className="bg-green-800 rounded-3xl p-8 md:p-12 text-white">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">Impact in Numbers</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Stat 1 */}
                        <div>
                            <div className="text-3xl md:text-4xl font-bold mb-2">4,500+</div>
                            <div className="text-sm text-green-200">
                                Farmers Engaged
                                <br />
                                Across India
                            </div>
                        </div>

                        {/* Stat 2 */}
                        <div>
                            <div className="text-3xl md:text-4xl font-bold mb-2">5+</div>
                            <div className="text-sm text-green-200">
                                Featured Ingredients
                                <br />
                                (including AYUSH)
                            </div>
                        </div>

                        {/* Stat 3 */}
                        <div>
                            <div className="text-3xl md:text-4xl font-bold mb-2">6+</div>
                            <div className="text-sm text-green-200">
                                Health
                                <br />
                                Categories
                            </div>
                        </div>

                        {/* Stat 4 */}
                        <div>
                            <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
                            <div className="text-sm text-green-200">
                                GMP-compliant
                                <br />
                                Third-Party Systems
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPrinciples;
