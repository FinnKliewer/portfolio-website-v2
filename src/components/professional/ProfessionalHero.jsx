import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import LandingScrollCue from "../LandingScrollCue";

const ProfessionalHero = () => {
    const reduceMotion = useReducedMotion();
    const transition = {
        duration: reduceMotion ? 0 : 0.82,
        ease: [0.16, 1, 0.3, 1],
    };

    return (
        <header className="experience-hero">
            <motion.h1
                initial={reduceMotion ? false : { y: 28, opacity: 0, filter: "blur(7px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ ...transition, delay: reduceMotion ? 0 : 0.08 }}
            >
                Experience.
            </motion.h1>

            <motion.div
                className="experience-hero__support landing-hero-support"
                initial={reduceMotion ? false : { y: 24, opacity: 0, filter: "blur(6px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ ...transition, delay: reduceMotion ? 0 : 0.3 }}
            >
                <p>
                    The throughline is not a title or an industry. It is owning the
                    foundations other engineers rely on.
                </p>

                <div className="landing-hero-support__details">
                    <div>
                        <span>Range</span>
                        <strong>Product software to platforms</strong>
                    </div>
                    <div>
                        <span>Bias</span>
                        <strong>Reliability under pressure</strong>
                    </div>
                </div>
            </motion.div>

            <motion.span
                className="experience-hero__rule"
                aria-hidden="true"
                initial={reduceMotion ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: reduceMotion ? 0 : 1.1, delay: reduceMotion ? 0 : 0.58, ease: [0.16, 1, 0.3, 1] }}
            />

            <LandingScrollCue targetId="experience-content" label="Scroll to career timeline" />
        </header>
    );
};

export default ProfessionalHero;
