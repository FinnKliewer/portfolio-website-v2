import React, { useState, useEffect } from 'react';

const ProfessionalHero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="max-w-3xl mb-14 lg:mb-20">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.055em] leading-[0.95] text-gray-950 dark:text-white">
                    Experience built around leverage.
                </h1>
                <p className="mt-7 text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                    From production software at Paycom to platform engineering at Citadel, each step has moved closer to the systems that let great teams do their best work.
                </p>
            </div>
        </div>
    );
};

export default ProfessionalHero;
