import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { m, useInView, useReducedMotion } from "framer-motion";

const TimelineCard = ({ job, index, isActive, onActive }) => {
    const entryRef = useRef(null);
    const [logoFailed, setLogoFailed] = useState(false);
    const reduceMotion = useReducedMotion();
    const isInView = useInView(entryRef, {
        margin: "-34% 0px -46% 0px",
        amount: 0.12,
    });
    const hasEntered = useInView(entryRef, {
        once: true,
        margin: "0px 0px -12% 0px",
        amount: 0.14,
    });
    const monogram = job.company
        .split(/\s+/)
        .map((word) => word[0])
        .join("")
        .slice(0, 2);

    useEffect(() => {
        if (isInView) onActive(index);
    }, [index, isInView, onActive]);

    return (
        <m.li
            ref={entryRef}
            className={`experience-entry ${isActive ? "is-active" : ""}`}
            animate={reduceMotion ? undefined : {
                y: hasEntered ? (isActive ? 0 : 8) : 34,
                opacity: hasEntered ? (isActive ? 1 : 0.62) : 0,
                filter: hasEntered ? "blur(0px)" : "blur(5px)",
            }}
            transition={{ duration: hasEntered ? 0.52 : 0.68, ease: [0.16, 1, 0.3, 1] }}
            aria-current={isActive ? "step" : undefined}
        >
            <span className="experience-entry__node" aria-hidden="true" />

            <div className="experience-entry__meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <time>{job.duration}</time>
            </div>

            <div className="experience-entry__body">
                <div className="experience-entry__company">
                    <span className="experience-entry__logo">
                        {job.logo && !logoFailed
                            ? <img src={job.logo} alt="" loading="lazy" decoding="async" onError={() => setLogoFailed(true)} />
                            : <span className="experience-entry__monogram" aria-hidden="true">{monogram}</span>}
                    </span>
                    <span>{job.company}</span>
                </div>

                <h2>{job.title}</h2>
                <p>{job.description}</p>

                <div className="experience-entry__divider" aria-hidden="true">
                    <m.span
                        animate={reduceMotion ? undefined : { scaleX: isActive ? 1 : 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    />
                </div>
            </div>
        </m.li>
    );
};

TimelineCard.propTypes = {
    job: PropTypes.shape({
        company: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        logo: PropTypes.string,
        title: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    isActive: PropTypes.bool.isRequired,
    onActive: PropTypes.func.isRequired,
};

export default React.memo(TimelineCard);
