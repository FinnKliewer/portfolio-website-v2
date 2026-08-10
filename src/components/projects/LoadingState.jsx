import React from 'react';
import { m, useReducedMotion } from 'framer-motion';

const LoadingState = () => {
    const skeletonCards = Array.from({ length: 6 }, (_, i) => i);
    const reduceMotion = useReducedMotion();

    return (
        <div role="status" aria-label="Loading public repositories">
            <span className="sr-only">Loading public repositories.</span>
            <div className="repository-grid repository-grid--loading" aria-hidden="true">
                {skeletonCards.map((index) => (
                    <m.div
                        key={index}
                        className="repository-card repository-card--loading"
                        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: reduceMotion ? 0 : 0.42, delay: reduceMotion ? 0 : index * 0.045, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="repository-card__topline">
                            <span className="skeleton-line skeleton-line--short" />
                            <span className="skeleton-line skeleton-line--index" />
                        </div>
                        <span className="skeleton-line skeleton-line--title" />
                        <div className="repository-card__skeleton-copy">
                            <span className="skeleton-line" />
                            <span className="skeleton-line" />
                            <span className="skeleton-line skeleton-line--copy-short" />
                        </div>
                        <div className="repository-card__footer">
                            <span className="skeleton-line skeleton-line--meta" />
                            <span className="skeleton-line skeleton-line--action" />
                        </div>
                    </m.div>
                ))}
            </div>
        </div>
    );
};

export default LoadingState;
