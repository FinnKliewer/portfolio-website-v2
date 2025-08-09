import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import LoadingState from './LoadingState';

const AllProjectsSection = ({ projects, isLoading }) => {
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-16 max-w-6xl">
                {/* Section Header */}
                <motion.div 
                    className="text-center lg:text-left mb-12 lg:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-gray-800 dark:text-white">
                        All Projects
                    </h2>
                    <div className="flex justify-center lg:justify-start mb-6">
                        <div className="w-24 lg:w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0">
                        A comprehensive collection of my open-source contributions and personal projects.
                    </p>
                </motion.div>

                {/* Loading State */}
                {isLoading && <LoadingState />}

                {/* Projects Grid */}
                {!isLoading && projects.length > 0 && (
                    <motion.div 
                        className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr"
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {projects.map((project, index) => (
                            <ProjectCard 
                                key={index} 
                                project={project} 
                                index={index}
                            />
                        ))}
                    </motion.div>
                )}

                {/* Empty State */}
                {!isLoading && projects.length === 0 && (
                    <motion.div 
                        className="text-center py-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">No Projects Found</h3>
                        <p className="text-gray-600 dark:text-gray-400">Unable to fetch projects from GitHub at this time.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default AllProjectsSection;