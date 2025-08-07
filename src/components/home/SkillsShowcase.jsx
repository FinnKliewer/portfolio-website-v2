import React from 'react';
import { SiPython, SiTensorflow, SiScikitlearn, SiTableau, SiReact, SiSqlite } from "react-icons/si";

const SkillsShowcase = () => {
    const skills = [
        { 
            icon: <SiPython />, 
            name: "Python", 
            color: "from-yellow-400 to-blue-500"
        },
        { 
            icon: <SiTensorflow />, 
            name: "TensorFlow", 
            color: "from-orange-400 to-red-500"
        },
        { 
            icon: <SiScikitlearn />, 
            name: "Scikit-learn", 
            color: "from-blue-400 to-indigo-500"
        },
        { 
            icon: <SiTableau />, 
            name: "Tableau", 
            color: "from-blue-500 to-purple-500"
        },
        { 
            icon: <SiReact />, 
            name: "ReactJS", 
            color: "from-cyan-400 to-blue-500"
        },
        { 
            icon: <SiSqlite />, 
            name: "SQL", 
            color: "from-green-400 to-blue-500"
        }
    ];

    return (
        <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 dark:from-purple-500/10 via-pink-500/20 dark:via-pink-500/10 to-indigo-500/20 dark:to-indigo-500/10 rounded-3xl blur-xl"></div>
            
            {/* Main Container */}
            <div className="relative backdrop-blur-xl bg-white/60 dark:bg-black/10 border border-gray-300/30 dark:border-white/20 rounded-3xl p-10 shadow-2xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h3 className="text-4xl font-black mb-4">
                        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Technical Arsenal
                        </span>
                    </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group relative"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Card Content */}
                            <div className="relative bg-white/95 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-300/40 dark:border-white/40 hover:border-gray-400/60 dark:hover:border-white/60 transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 shadow-lg hover:shadow-2xl">
                                {/* Icon Container */}
                                <div className="flex justify-center mb-6">
                                    <div className={`p-5 rounded-2xl bg-gradient-to-br ${skill.color} text-white text-4xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                                        {skill.icon}
                                    </div>
                                </div>
                                
                                {/* Skill Info */}
                                <div className="text-center">
                                    <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                                        {skill.name}
                                    </h4>
                                </div>

                                {/* Subtle Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Accent */}
                <div className="flex justify-center mt-8">
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default SkillsShowcase;