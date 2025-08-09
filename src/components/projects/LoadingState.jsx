import React from 'react';
import { motion } from 'framer-motion';

const LoadingState = () => {
    const skeletonCards = Array.from({ length: 6 }, (_, i) => i);

    return (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {skeletonCards.map((index) => (
                <motion.div
                    key={index}
                    className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 rounded-2xl p-6 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                    {/* Header Skeleton */}
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                            <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded-lg mb-3 w-3/4 animate-pulse"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-20 animate-pulse"></div>
                        </div>
                        <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                    </div>

                    {/* Description Skeleton */}
                    <div className="space-y-2 mb-6">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6 animate-pulse"></div>
                    </div>

                    {/* Stats Skeleton */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                                <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                                <div className="w-6 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                            </div>
                            <div className="flex items-center space-x-1">
                                <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                                <div className="w-6 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                            </div>
                        </div>
                        <div className="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default LoadingState;