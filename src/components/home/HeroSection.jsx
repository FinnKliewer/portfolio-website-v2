import React from 'react';
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import headshotImage from '../../assets/headshot.webp';
import siteContent from "../../content/siteContent";

const HeroSection = ({ isVisible }) => {
    return (
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 min-h-[80vh] px-4 pt-8 md:pt-16 lg:pt-0">
                {/* Profile Image with Enhanced Styling */}
                <div className="flex-shrink-0 relative group order-1 lg:order-none">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                    <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-2 shadow-2xl">
                        <img
                            src={headshotImage}
                            alt="Profile Picture"
                            className="w-full h-full rounded-full object-cover ring-4 ring-white/20"
                            loading="lazy"
                        />
                    </div>
                    {/* Floating Elements - Hidden on mobile */}
                    <div className="hidden sm:block absolute -top-4 -right-4 w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce delay-1000"></div>
                    <div className="hidden sm:block absolute -bottom-6 -left-6 w-4 h-4 lg:w-6 lg:h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce delay-500"></div>
                </div>

                {/* Content Section */}
                <div className="text-center lg:text-left max-w-2xl order-2 lg:order-none">
                    {/* Animated Name */}
                    <div className="relative mb-4 lg:mb-6">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 lg:mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-lg dark:drop-shadow-[0_0_20px_rgba(139,92,246,0.5)] leading-tight">
                            {siteContent.name}
                        </h1>
                        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 rounded-full shadow-lg dark:shadow-purple-400/50 mx-auto lg:mx-0"></div>
                    </div>

                    {/* Enhanced Title */}
                    <div className="mb-6 lg:mb-8">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-1 lg:mb-2 leading-tight">
                            Data Scientist & 
                        </h2>
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                            ML Engineer
                        </h2>
                    </div>

                    {/* Enhanced Description */}
                    <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-8 lg:mb-10 text-gray-800 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 px-4 lg:px-0">
                        Transforming complex data into 
                        <span className="font-semibold text-indigo-700 dark:text-indigo-400"> actionable insights</span>. 
                        Specializing in machine learning, statistical analysis, and predictive modeling.
                    </p>

                    {/* Enhanced Action Buttons */}
                    <div
                        className="flex flex-col lg:flex-row flex-wrap gap-3 lg:gap-4 justify-center lg:justify-start items-center">
                        <button
                            className="
                                group relative w-full lg:w-auto px-6 lg:px-8 py-3
                                inline-flex items-center justify-center gap-2
                                bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold
                                rounded-xl border border-transparent
                                shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden
                              "
                            onClick={() => window.open('Finn_Kliewer_Resume.pdf', '_blank')}
                            aria-label="Download Resume"
                        >
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                            <div className="relative inline-flex items-center justify-center gap-2">
                                <FaDownload className="w-5 h-5 lg:w-7 lg:h-7"/>
                                <span className="text-sm lg:text-base leading-none">Download Resume</span>
                            </div>
                        </button>


                        {/* Mobile: Full width social buttons, Desktop: Small icon buttons */}
                        <div className="flex lg:hidden w-full gap-3">
                            <a
                                href={siteContent.gitHubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group flex-1 flex items-center justify-center gap-3
                                    px-4 py-3
                                    bg-white/30 dark:bg-white/10 backdrop-blur-sm
                                    border border-gray-300/50 dark:border-white/20
                                    rounded-xl hover:bg-white/50 dark:hover:bg-white/20 transition-all duration-300 shadow-lg
                                "
                                aria-label="GitHub Profile"
                            >
                                <FaGithub size={20}
                                          className="text-gray-800 dark:text-white group-hover:text-indigo-600 transition-colors duration-300"/>
                                <span className="text-sm font-medium text-gray-800 dark:text-white">GitHub</span>
                            </a>
                            <a
                                href={siteContent.linkedinLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group flex-1 flex items-center justify-center gap-3
                                    px-4 py-3
                                    bg-white/30 dark:bg-white/10 backdrop-blur-sm
                                    border border-gray-300/50 dark:border-white/20
                                    rounded-xl hover:bg-white/50 dark:hover:bg-white/20 transition-all duration-300 shadow-lg
                                "
                                aria-label="LinkedIn Profile"
                            >
                                <FaLinkedin size={20}
                                            className="text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors duration-300"/>
                                <span className="text-sm font-medium text-gray-800 dark:text-white">LinkedIn</span>
                            </a>

                        </div>

                        {/* Desktop: Icon-only buttons */}
                        <div className="hidden lg:flex gap-3">
                            <a
                                href={siteContent.gitHubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group inline-flex items-center justify-center
                                    px-6 py-3
                                    bg-white/30 dark:bg-white/10 backdrop-blur-sm
                                    border border-gray-300/50 dark:border-white/20
                                    rounded-xl hover:bg-white/50 dark:hover:bg-white/20 transition-all duration-300 transform hover:scale-110 shadow-lg
                              "
                                aria-label="GitHub Profile"
                            >
                                <FaGithub size={28}
                                          className="text-gray-800 dark:text-white group-hover:text-indigo-600 transition-colors duration-300"/>
                            </a>
                            <a
                                href={siteContent.linkedinLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group inline-flex items-center justify-center
                                    px-6 py-3
                                    bg-white/30 dark:bg-white/10 backdrop-blur-sm
                                    border border-gray-300/50 dark:border-white/20
                                    rounded-xl hover:bg-white/50 dark:hover:bg-white/20 transition-all duration-300 transform hover:scale-110 shadow-lg
                                "
                                aria-label="LinkedIn Profile"
                            >
                                <FaLinkedin size={28}
                                            className="text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors duration-300"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;