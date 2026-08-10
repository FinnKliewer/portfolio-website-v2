import React from 'react';
import Trophy from '../../assets/icons/trophy.svg?react';
import ClassificationFlow from "../ClassificationFlow";
import SpotlightCard from "./SpotlightCard";

const GithubIcon = () => (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.776.42-1.304.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.29-1.552 3.296-1.23 3.296-1.23.656 1.653.244 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.625-5.475 5.921.432.37.815 1.102.815 2.222 0 1.606-.015 2.896-.015 3.286 0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" clipRule="evenodd" />
    </svg>
);

const metrics = [
    { value: '5K+', label: 'text samples' },
    { value: '0.95', label: 'F1 score' },
    { value: '<1s', label: 'response time' },
];

const EarlyTraceSlide = () => {
    return (
        <SpotlightCard variant="early-trace">
            <div className="spotlight-card__body grid gap-7 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.92fr)] lg:gap-12">
                <div className="project-summary flex min-w-0 flex-col">
                    <div className="flex items-center gap-3 text-sm font-semibold text-amber-700 dark:text-amber-300">
                        <Trophy className="h-6 w-6 shrink-0" aria-hidden="true" />
                        <span>Runner-up · Rutgers Spring 2025 Hackathon</span>
                    </div>

                    <h2 className="mt-5 text-[clamp(2.25rem,7vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-gray-950 dark:text-white">
                        EarlyTrace.ai
                    </h2>
                    <p className="mt-5 text-lg font-medium leading-snug text-gray-800 dark:text-gray-200 sm:text-xl">
                        An AI system for identifying dementia-related patterns in personal writing.
                    </p>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400">
                        Trained on 1.4 million tokens from blogs written by people with and without dementia, the system combines BGE-large-en-v1.5 sentence embeddings with an XGBoost classifier. The resulting model reached a 0.95 F1 score.
                    </p>

                    <div className="project-action">
                        <a
                            href="https://github.com/OX-S/early-trace"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-source-link"
                        >
                            <GithubIcon />
                            View EarlyTrace on GitHub
                        </a>
                    </div>
                </div>

                <div className="project-system-panel min-w-0 lg:border-l lg:border-gray-200 lg:pl-9 dark:lg:border-gray-800">
                    <h3 className="text-lg font-semibold text-gray-950 dark:text-white">How the system works</h3>
                    <ClassificationFlow />
                </div>
            </div>

            <dl className="spotlight-card__evidence project-metrics grid grid-cols-3">
                {metrics.map((metric) => (
                    <div key={metric.label} className="project-metric py-3 sm:py-0">
                        <dt className="text-sm text-gray-500 dark:text-gray-400">{metric.label}</dt>
                        <dd className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-gray-950 dark:text-white">{metric.value}</dd>
                    </div>
                ))}
            </dl>
        </SpotlightCard>
    );
};

export default EarlyTraceSlide;
