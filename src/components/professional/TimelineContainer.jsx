import React from 'react';
import { motion } from 'framer-motion';
import TimelineCard from './TimelineCard';

const TimelineContainer = ({ jobs }) => {
    const sortedJobs = [...jobs].sort((a, b) => {
        if (a.order !== undefined || b.order !== undefined) {
            return (a.order ?? 99) - (b.order ?? 99);
        }
        const [aMonth, aYear] = a.startDate.split("/").map(Number);
        const [bMonth, bYear] = b.startDate.split("/").map(Number);
        return bYear - aYear || bMonth - aMonth;
    });

    return (
        <div className="relative">
            {/* Timeline */}
            <div className="relative">
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {sortedJobs.map((job, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <TimelineCard
                                key={index}
                                job={job}
                                index={index}
                                isEven={isEven}
                            />
                        );
                    })}

                    {/* Timeline Start */}
                    <motion.li
                        initial={{opacity: 0, scale: 0.9}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true, amount: 0.3}}
                        transition={{duration: 0.6, delay: sortedJobs.length * 0.2}}
                    >
                        <div className="timeline-middle mx-4">
                            <div className="w-3 h-3 rounded-full bg-base-300"/>
                        </div>
                        <div className="timeline-end mb-10"></div>
                    </motion.li>

                </ul>
            </div>
        </div>
    );
};

export default TimelineContainer;
