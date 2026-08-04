import React, { useState, useEffect } from 'react';

const ProjectsHero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center lg:text-left mb-6 lg:mb-8">
                <div className="relative">
                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.05em] mb-4 leading-tight text-gray-950 dark:text-white">
                        Selected work.
                    </h1>

                    {/* Decorative Line */}
                    <div className="flex justify-center lg:justify-start mb-4">
                        <div className="w-24 lg:w-32 h-px bg-indigo-500 dark:bg-indigo-400"></div>
                    </div>

                    {/* Subtitle */}
                    <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        A set of software projects and technical experiments that show how I think, build, and investigate.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectsHero;
