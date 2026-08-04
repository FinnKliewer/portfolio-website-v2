import React, { useState, useEffect } from 'react';

const ContactHero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center lg:text-left mb-6 lg:mb-8">
                <div className="relative">
                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight">
                        <span className="block text-gray-800 dark:text-white">
                            Talk about the work{' '}
                        </span>
                        <span className="block text-gray-800 dark:text-white">
                            that compounds.
                        </span>
                    </h1>

                    {/* Decorative Line */}
                    <div className="flex justify-center lg:justify-start mb-8">
                        <div className="w-32 lg:w-48 h-px bg-indigo-500 dark:bg-indigo-400"></div>
                    </div>

                    {/* Subtitle */}
                    <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        For platform engineering, software systems, and ambitious technical problems, send a note.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactHero;
