import React, { useCallback, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import TimelineCard from "./TimelineCard";

const TimelineContainer = ({ jobs }) => {
    const timelineRef = useRef(null);
    const reduceMotion = useReducedMotion();
    const [activeIndex, setActiveIndex] = useState(0);
    const sortedJobs = useMemo(() => [...jobs].sort((a, b) => {
        if (a.order !== undefined || b.order !== undefined) {
            return (a.order ?? 99) - (b.order ?? 99);
        }
        const [aMonth, aYear] = a.startDate.split("/").map(Number);
        const [bMonth, bYear] = b.startDate.split("/").map(Number);
        return bYear - aYear || bMonth - aMonth;
    }), [jobs]);

    const activeJob = sortedJobs[activeIndex] || sortedJobs[0];
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start 52%", "end 58%"],
    });
    const timelineProgress = useSpring(scrollYProgress, {
        stiffness: 110,
        damping: 28,
        mass: 0.35,
    });
    const handleActive = useCallback((index) => setActiveIndex(index), []);

    return (
        <section id="experience-content" className="experience-route" ref={timelineRef} aria-label="Career timeline">
            <aside className="experience-route__overview-wrap" aria-label="Current timeline item">
                <div className="experience-overview">
                    <div className="experience-overview__topline">
                        <span>Career chronology</span>
                        <span>{String(activeIndex + 1).padStart(2, "0")} / {String(sortedJobs.length).padStart(2, "0")}</span>
                    </div>

                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            className="experience-overview__active"
                            key={`${activeJob.company}-${activeJob.title}`}
                            initial={reduceMotion ? false : { y: 18, opacity: 0, filter: "blur(6px)" }}
                            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                            exit={reduceMotion ? { opacity: 0 } : { y: -10, opacity: 0, filter: "blur(5px)" }}
                            transition={{ duration: reduceMotion ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span>{activeJob.company}</span>
                            <strong>{activeJob.title}</strong>
                            <p>{activeJob.description}</p>
                        </motion.div>
                    </AnimatePresence>

                    <div className="experience-overview__footer">
                        <div className="experience-overview__steps" aria-hidden="true">
                            {sortedJobs.map((job, index) => (
                                <i key={`${job.company}-${job.title}`} className={index <= activeIndex ? "is-active" : ""} />
                            ))}
                        </div>
                        <span className={activeJob.isCurrent ? "is-current" : ""}>
                            {activeJob.duration}
                        </span>
                    </div>
                </div>
            </aside>

            <div className="experience-route__timeline">
                <div className="experience-route__spine" aria-hidden="true">
                    <motion.span style={{ scaleY: reduceMotion ? 1 : timelineProgress }} />
                </div>

                <ol className="experience-list">
                    {sortedJobs.map((job, index) => (
                        <TimelineCard
                            key={`${job.company}-${job.title}`}
                            job={job}
                            index={index}
                            isActive={index === activeIndex}
                            onActive={handleActive}
                        />
                    ))}
                </ol>

            </div>
        </section>
    );
};

TimelineContainer.propTypes = {
    jobs: PropTypes.arrayOf(PropTypes.shape({
        company: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        endDate: PropTypes.string,
        isCurrent: PropTypes.bool,
        logo: PropTypes.string,
        order: PropTypes.number,
        startDate: PropTypes.string,
        title: PropTypes.string.isRequired,
    })).isRequired,
};

export default TimelineContainer;
