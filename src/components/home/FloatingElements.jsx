import React from 'react';

const FloatingElements = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating Geometric Shapes */}
            <div className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-bounce opacity-40 dark:opacity-60" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
            <div className="absolute top-40 right-20 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rotate-45 animate-pulse opacity-30 dark:opacity-50" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-32 left-20 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-50 dark:opacity-70" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
            <div className="absolute top-60 left-1/3 w-5 h-5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse opacity-25 dark:opacity-40" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-20 right-1/4 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rotate-45 animate-bounce opacity-40 dark:opacity-60" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }}></div>
            
            {/* Larger Floating Elements */}
            <div className="absolute top-1/4 right-10 w-12 h-12 bg-gradient-to-br from-indigo-500/15 dark:from-indigo-500/20 to-purple-500/15 dark:to-purple-500/20 rounded-full animate-pulse" style={{ animationDelay: '2.5s', animationDuration: '6s' }}></div>
            <div className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-gradient-to-br from-pink-500/15 dark:from-pink-500/20 to-red-500/15 dark:to-red-500/20 rounded-full animate-bounce" style={{ animationDelay: '3s', animationDuration: '5s' }}></div>
            
            {/* Subtle Lines */}
            <div className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-transparent via-purple-500/20 dark:via-purple-500/30 to-transparent animate-pulse" style={{ animationDelay: '4s' }}></div>
            <div className="absolute bottom-1/4 right-0 w-24 h-px bg-gradient-to-l from-transparent via-blue-500/20 dark:via-blue-500/30 to-transparent animate-pulse" style={{ animationDelay: '5s' }}></div>
        </div>
    );
};

export default FloatingElements;