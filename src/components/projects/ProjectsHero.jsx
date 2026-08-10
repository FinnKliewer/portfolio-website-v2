import React from 'react';
import { m, useReducedMotion } from 'framer-motion';
import LandingScrollCue from '../LandingScrollCue';

const ProjectsHero = () => {
    const reduceMotion = useReducedMotion();
    const transition = {
        duration: reduceMotion ? 0 : 0.78,
        ease: [0.16, 1, 0.3, 1],
    };

    return (
        <header className="projects-hero">
            <m.h1
                id="selected-work-title"
                initial={reduceMotion ? false : { y: 28, opacity: 0, filter: 'blur(7px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                transition={{ ...transition, delay: reduceMotion ? 0 : 0.08 }}
            >
                Selected work.
            </m.h1>

            <m.aside
                className="projects-hero__support landing-hero-support"
                aria-label="Featured work overview"
                initial={reduceMotion ? false : { y: 22, scale: 0.985, opacity: 0, filter: 'blur(6px)' }}
                animate={{ y: 0, scale: 1, opacity: 1, filter: 'blur(0px)' }}
                transition={{ ...transition, delay: reduceMotion ? 0 : 0.28 }}
            >
                <p>
                    The work here is selected for the engineering decisions behind it,
                    not for surface area.
                </p>

                <div className="landing-hero-support__details">
                    <div>
                        <span>Focus</span>
                        <strong>Architecture and implementation</strong>
                    </div>
                    <div>
                        <span>Standard</span>
                        <strong>Decisions backed by evidence</strong>
                    </div>
                </div>
            </m.aside>

            <m.span
                className="projects-hero__rule"
                aria-hidden="true"
                initial={reduceMotion ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: reduceMotion ? 0 : 1.08, delay: reduceMotion ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] }}
            />

            <LandingScrollCue targetId="selected-work-content" label="Scroll to selected project case studies" />
        </header>
    );
};

export default ProjectsHero;
