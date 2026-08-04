import React from 'react';
import { motion } from 'framer-motion';
import placeholderLogo from '../../assets/placeholder.png';

const TimelineCard = ({ job, index, isEven }) => {
    const contentClass = isEven
        ? "timeline-start mb-10 md:text-end"
        : "timeline-end mb-10 md:text-start";

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            scale: 0.9,
            x: isEven ? -50 : 50
        },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.li
            className={!isEven ? "timeline-inverted" : ""}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
        >
            {/* Timeline Icon */}
            <div className="timeline-middle mx-4">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative p-2 bg-white dark:bg-gray-800 border-2 border-indigo-500/50 rounded-xl shadow-lg">
                        <img
                            src={job.logo || placeholderLogo}
                            alt={`${job.company} logo`}
                            className="w-12 h-12 object-contain rounded-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Content Card */}
            <div className={contentClass}>
                <div className="relative">
                    {/* Main Card */}
                    <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                        {/* Date Badge */}
                        <div className="inline-block mb-4">
                            <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium rounded-lg">
                                {job.duration}
                            </span>
                        </div>

                        {/* Job Details */}
                        <div className="mb-4">
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                                {job.title}
                            </h3>
                            <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                                {job.company}
                            </h4>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {job.description}
                        </p>
                    </div>
                </div>
            </div>
            <hr className="border-gray-200 dark:border-gray-700" />
        </motion.li>
    );
};

export default TimelineCard;
