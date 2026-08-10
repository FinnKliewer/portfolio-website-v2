import React from 'react';
import PropTypes from 'prop-types';
import { motion, useReducedMotion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import LoadingState from './LoadingState';

const AllProjectsSection = ({ projects, isLoading, hasError, onRetry }) => {
    const reduceMotion = useReducedMotion();
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: reduceMotion ? 0 : 0.065,
            },
        },
    };
    const entrance = reduceMotion ? false : { y: 24, opacity: 0, filter: 'blur(6px)' };
    const settled = { y: 0, opacity: 1, filter: 'blur(0px)' };

    return (
        <section className="repository-index" aria-labelledby="repository-index-title">
            <div className="repository-index__inner">
                <motion.header
                    className="repository-index__header"
                    initial={entrance}
                    whileInView={settled}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: reduceMotion ? 0 : 0.72, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 id="repository-index-title">All projects.</h2>
                    <p>
                        A broader index of public repositories, including web systems,
                        graphics, tooling, and earlier experiments.
                    </p>

                    {!isLoading && !hasError && (
                        <span className="repository-index__status">
                            {projects.length} public {projects.length === 1 ? 'repository' : 'repositories'}
                        </span>
                    )}
                </motion.header>

                {isLoading && <LoadingState />}

                {!isLoading && !hasError && projects.length > 0 && (
                    <motion.div
                        className="repository-grid"
                        role="list"
                        aria-label="Public repositories"
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.08 }}
                    >
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.url || project.name}
                                project={project}
                                index={index}
                            />
                        ))}
                    </motion.div>
                )}

                {!isLoading && hasError && (
                    <motion.div
                        className="repository-empty repository-empty--error"
                        role="alert"
                        initial={entrance}
                        animate={settled}
                        transition={{ duration: reduceMotion ? 0 : 0.58, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span aria-hidden="true" />
                        <div>
                            <h3>GitHub data is unavailable.</h3>
                            <p>The selected case studies above are still available. Try the repository index again when you’re ready.</p>
                        </div>
                        <button type="button" className="site-action site-action--quiet" onClick={onRetry}>
                            Try again
                        </button>
                    </motion.div>
                )}

                {!isLoading && !hasError && projects.length === 0 && (
                    <motion.div
                        className="repository-empty"
                        initial={entrance}
                        whileInView={settled}
                        viewport={{ once: true }}
                        transition={{ duration: reduceMotion ? 0 : 0.58, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span aria-hidden="true" />
                        <div>
                            <h3>No public repositories found.</h3>
                            <p>The featured case studies above remain available.</p>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

AllProjectsSection.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired,
    onRetry: PropTypes.func.isRequired,
};

export default AllProjectsSection;
