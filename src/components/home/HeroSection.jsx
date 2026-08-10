import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import headshotImage from "../../assets/headshot.webp";
import siteContent from "../../content/siteContent";

const HeroSection = () => {
    const { home } = siteContent;
    const reduceMotion = useReducedMotion();
    const transition = { duration: reduceMotion ? 0 : 0.72, ease: [0.16, 1, 0.3, 1] };

    return (
        <section className="home-hero" aria-labelledby="home-title">
            <div className="home-hero__copy">
                <motion.h1
                    id="home-title"
                    className="home-hero__title"
                    initial={reduceMotion ? false : { y: 26, opacity: 0, filter: "blur(7px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ ...transition, delay: reduceMotion ? 0 : 0.08 }}
                >
                    {[
                        "I build the systems",
                        "behind high-stakes",
                        "work.",
                    ].map((line) => (
                        <span className="home-hero__line" key={line}>
                            <span>{line}</span>
                        </span>
                    ))}
                </motion.h1>

                <motion.div
                    className="home-hero__narrative"
                    initial={reduceMotion ? false : { y: 16, opacity: 0, filter: "blur(4px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ ...transition, delay: reduceMotion ? 0 : 0.42 }}
                >
                    <p className="home-hero__role"><span />{home.currentRole}</p>
                    <p className="home-hero__subheading">{home.subheading}</p>
                    <p className="home-hero__description">{home.description}</p>

                    <div className="home-hero__actions">
                        <a href={home.resumeLink} target="_blank" rel="noopener noreferrer" className="site-action site-action--primary">
                            <FaDownload aria-hidden="true" /> View résumé
                        </a>
                        <Link to="/github-projects" className="site-action site-action--quiet">
                            See selected work <FaArrowRight aria-hidden="true" />
                        </Link>
                    </div>
                </motion.div>
            </div>

            <motion.aside
                className="identity-module"
                initial={reduceMotion ? false : { y: 20, scale: 0.985, opacity: 0, filter: "blur(5px)" }}
                animate={{ y: 0, scale: 1, opacity: 1, filter: "blur(0px)" }}
                transition={{ ...transition, delay: reduceMotion ? 0 : 0.22 }}
                aria-label="Profile summary"
            >
                <div className="identity-module__signal" aria-hidden="true">
                    <span /><i /><i /><b />
                </div>
                <div className="identity-module__image-wrap">
                    <img src={headshotImage} alt="Finn Kliewer" className="identity-module__image" loading="eager" />
                    <div className="identity-module__scan" aria-hidden="true" />
                </div>
                <div className="identity-module__footer">
                    <div>
                        <strong>Technical operator</strong>
                        <span>Software · Platforms · Systems</span>
                    </div>
                    <div className="identity-module__socials">
                        <a href={siteContent.linkedinLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><FaLinkedin /></a>
                        <a href={siteContent.gitHubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><FaGithub /></a>
                    </div>
                </div>
            </motion.aside>

        </section>
    );
};

export default HeroSection;
