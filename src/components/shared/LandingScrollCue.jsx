import React from "react";
import PropTypes from "prop-types";
import { m, useReducedMotion } from "framer-motion";

const LandingScrollCue = ({ targetId, label }) => {
    const reduceMotion = useReducedMotion();

    return (
        <m.a
            className="landing-scroll-cue"
            href={`#${targetId}`}
            aria-label={label}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: reduceMotion ? 0 : 0.55,
                delay: reduceMotion ? 0 : 0.9,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            <m.svg
                viewBox="0 0 24 30"
                aria-hidden="true"
                animate={reduceMotion ? undefined : { y: [0, 4, 0] }}
                transition={{
                    duration: 1.8,
                    delay: 1.3,
                    repeat: Infinity,
                    repeatDelay: 0.4,
                    ease: "easeInOut",
                }}
            >
                <path d="M12 2v23M5.5 18.5 12 25l6.5-6.5" />
            </m.svg>
        </m.a>
    );
};

LandingScrollCue.propTypes = {
    label: PropTypes.string.isRequired,
    targetId: PropTypes.string.isRequired,
};

export default LandingScrollCue;
