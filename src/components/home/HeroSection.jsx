import React from 'react';
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import headshotImage from '../../assets/headshot.webp';
import siteContent from "../../content/siteContent";

const HeroSection = ({ isVisible }) => {
    return (
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-16 min-h-[80vh]">
                {/* Profile Image with Enhanced Styling */}
                <div className="flex-shrink-0 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                    <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-2 shadow-2xl">
                        <img
                            src={headshotImage}
                            alt="Profile Picture"
                            className="w-full h-full rounded-full object-cover ring-4 ring-white/20"
                            loading="lazy"
                        />
                    </div>
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce delay-1000"></div>
                    <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce delay-500"></div>
                </div>

                {/* Content Section */}
                <div className="text-center lg:text-left max-w-2xl">
                    {/* Animated Name */}
                    <div className="relative mb-6">
                        <h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-lg dark:drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                            {siteContent.name}
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 rounded-full shadow-lg dark:shadow-purple-400/50"></div>
                    </div>

                    {/* Enhanced Title */}
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
                            Data Scientist & 
                        </h2>
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            ML Engineer
                        </h2>
                    </div>

                    {/* Enhanced Description */}
                    <p className="text-xl leading-relaxed mb-10 text-gray-800 dark:text-gray-300 max-w-xl">
                        Transforming complex data into 
                        <span className="font-semibold text-indigo-700 dark:text-indigo-400"> actionable insights</span>. 
                        Specializing in machine learning, statistical analysis, and predictive modeling.
                    </p>

                    {/* Enhanced Action Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <button
                            className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                            onClick={() => window.open('Finn_Kliewer_Resume.pdf', '_blank')}
                            aria-label="Download Resume"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative flex items-center">
                                <FaDownload className="mr-3" />
                                Download Resume
                            </div>
                        </button>

                        <div className="flex gap-3">
                            <a
                                href={siteContent.gitHubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-4 bg-white/30 dark:bg-white/10 backdrop-blur-sm border border-gray-300/50 dark:border-white/20 rounded-xl hover:bg-white/50 dark:hover:bg-white/20 transition-all duration-300 transform hover:scale-110 shadow-lg"
                                aria-label="GitHub Profile"
                            >
                                <FaGithub size={28} className="text-gray-800 dark:text-white group-hover:text-indigo-600 transition-colors duration-300" />
                            </a>
                            <a
                                href={siteContent.linkedinLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-4 bg-white/30 dark:bg-white/10 backdrop-blur-sm border border-gray-300/50 dark:border-white/20 rounded-xl hover:bg-white/50 dark:hover:bg-white/20 transition-all duration-300 transform hover:scale-110 shadow-lg"
                                aria-label="LinkedIn Profile"
                            >
                                <FaLinkedin size={28} className="text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors duration-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;