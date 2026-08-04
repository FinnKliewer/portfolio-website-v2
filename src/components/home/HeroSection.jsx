import React from 'react';
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import headshotImage from '../../assets/headshot.webp';
import siteContent from "../../content/siteContent";

const HeroSection = ({ isVisible }) => {
    const { home } = siteContent;

    return (
        <section className={`hero-section transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] gap-12 lg:gap-20 items-end">
                <div className="max-w-4xl">
                    <h1 className="text-5xl sm:text-6xl lg:text-8xl font-semibold tracking-[-0.055em] leading-[0.94] text-gray-950 dark:text-white max-w-4xl">
                        {home.heading}
                    </h1>
                    <p className="mt-6 text-sm font-semibold tracking-[0.02em] text-indigo-600 dark:text-indigo-400">{home.currentRole}</p>
                    <p className="mt-7 text-xl sm:text-2xl leading-snug text-gray-700 dark:text-gray-300 max-w-2xl">
                        {home.subheading}
                    </p>
                    <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl">
                        {home.description}
                    </p>

                    <div className="mt-9 flex flex-col sm:flex-row flex-wrap gap-3 items-stretch sm:items-center">
                        <a
                            href={home.resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 rounded-full bg-gray-950 dark:bg-white px-5 py-3 text-sm font-semibold text-white dark:text-gray-950 transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            <FaDownload className="w-4 h-4" />
                            View résumé
                        </a>
                        <Link
                            to="/professional-history"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 px-5 py-3 text-sm font-semibold text-gray-800 dark:text-gray-200 transition-colors hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            See experience
                            <FaArrowRight className="w-3 h-3" />
                        </Link>
                    </div>

                    <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
                        <span>{home.previousRole}</span>
                        <span className="hidden sm:inline text-gray-300 dark:text-gray-700">/</span>
                        <span>Rutgers CS · Cornell MSBA</span>
                    </div>
                </div>

                <div className="relative lg:pb-4">
                    <div className="absolute -inset-5 rounded-[2rem] bg-indigo-500/10 dark:bg-indigo-400/10 blur-2xl" aria-hidden="true" />
                    <div className="relative rounded-[1.5rem] border border-gray-200/80 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-3 shadow-xl shadow-gray-900/5 dark:shadow-black/20">
                        <img
                            src={headshotImage}
                            alt="Finn Kliewer"
                            className="aspect-[4/5] w-full rounded-[1.1rem] object-cover object-top grayscale-[15%]"
                            loading="eager"
                        />
                        <div className="flex items-center justify-between gap-4 px-2 pt-4 pb-1">
                            <div>
                                <p className="text-sm font-semibold text-gray-900 dark:text-white">Technical operator</p>
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Software · Platforms · Systems</p>
                            </div>
                            <div className="flex gap-2">
                                <a href={siteContent.linkedinLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="social-link">
                                    <FaLinkedin />
                                </a>
                                <a href={siteContent.gitHubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="social-link">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
