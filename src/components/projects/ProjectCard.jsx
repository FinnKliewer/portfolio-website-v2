import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as GitCode } from "../../assets/icons/git-code.svg";
import { ReactComponent as GitStar } from '../../assets/icons/git-star.svg';
import { ReactComponent as GitFork } from '../../assets/icons/git-fork.svg';

const ProjectCard = ({ project, index }) => {
    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
            }
        }
    };

    const getLanguageColor = (language) => {
        const colors = {
            'JavaScript': 'from-yellow-400 to-orange-500',
            'Python': 'from-blue-500 to-green-500',
            'TypeScript': 'from-blue-600 to-blue-400',
            'React': 'from-cyan-400 to-blue-500',
            'Java': 'from-red-500 to-orange-600',
            'C++': 'from-purple-600 to-blue-600',
            'Go': 'from-cyan-500 to-blue-600',
            'Rust': 'from-orange-600 to-red-600',
            'default': 'from-gray-500 to-gray-600'
        };
        return colors[language] || colors.default;
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="group relative"
        >
            {/* Background Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
            
            {/* Main Card */}
            <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col">
                {/* Header */}
                <div className="mb-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            {project.name}
                        </a>
                    </h3>
                    
                    {/* Language Badge */}
                    {project.primary_language && (
                        <div className="inline-flex items-center gap-2 mb-3">
                            <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${getLanguageColor(project.primary_language)} text-white text-sm font-medium shadow-md`}>
                                <GitCode className="inline w-4 h-4 mr-1" />
                                {project.primary_language}
                            </div>
                        </div>
                    )}
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 flex-1">
                    {project.description || "No description available."}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                            <GitStar className="w-4 h-4" />
                            <span className="text-sm font-medium">{project.stars}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300">
                            <GitFork className="w-4 h-4" />
                            <span className="text-sm font-medium">{project.forks}</span>
                        </div>
                    </div>
                    
                    {/* View Project Button */}
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        View Project
                    </a>
                </div>

            </div>
        </motion.div>
    );
};

export default ProjectCard;