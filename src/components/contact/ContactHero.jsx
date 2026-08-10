import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import LandingScrollCue from '../LandingScrollCue';

const ContactHero = () => {
    const reduceMotion = useReducedMotion();
    const transition = {
        duration: reduceMotion ? 0 : 0.78,
        ease: [0.16, 1, 0.3, 1],
    };

    return (
        <header className="contact-hero">
            <motion.h1
                id="contact-title"
                initial={reduceMotion ? false : { y: 28, opacity: 0, filter: 'blur(7px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                transition={{ ...transition, delay: reduceMotion ? 0 : 0.08 }}
            >
                Talk about the work that compounds.
            </motion.h1>

            <motion.aside
                className="contact-hero__support landing-hero-support"
                aria-label="Direct contact"
                initial={reduceMotion ? false : { y: 22, scale: 0.985, opacity: 0, filter: 'blur(6px)' }}
                animate={{ y: 0, scale: 1, opacity: 1, filter: 'blur(0px)' }}
                transition={{ ...transition, delay: reduceMotion ? 0 : 0.28 }}
            >
                <p>
                    Good conversations start with a concrete problem, its operating
                    context, and the constraint that actually matters.
                </p>

                <div className="landing-hero-support__details">
                    <div>
                        <span>Useful context</span>
                        <strong>What you are building</strong>
                    </div>
                    <div>
                        <span>Useful constraint</span>
                        <strong>What makes it difficult</strong>
                    </div>
                </div>
            </motion.aside>

            <motion.span
                className="contact-hero__rule"
                aria-hidden="true"
                initial={reduceMotion ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: reduceMotion ? 0 : 1.08, delay: reduceMotion ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] }}
            />

            <LandingScrollCue targetId="contact-content" label="Scroll to contact options" />
        </header>
    );
};

export default ContactHero;
