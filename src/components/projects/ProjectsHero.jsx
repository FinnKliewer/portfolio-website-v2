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
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 leading-tight">
                        <span className="block text-gray-800 dark:text-white">
                            Writing{' '}
                        </span>
                        <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-lg dark:drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                            Code
                        </span>
                        <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-700 dark:text-gray-300 mt-2">
                            Breaking Boundaries
                        </span>
                    </h1>

                    {/* Decorative Line */}
                    <div className="flex justify-center lg:justify-start mb-4">
                        <div className="w-24 lg:w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-lg dark:shadow-purple-400/50"></div>
                    </div>

                    {/* Subtitle */}
                    <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Explore my open-source contributions and personal projects.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectsHero;