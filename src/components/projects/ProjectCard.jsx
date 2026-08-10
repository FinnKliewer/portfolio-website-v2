import React from 'react';
import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { ReactComponent as GitStar } from '../../assets/icons/git-star.svg';
import { ReactComponent as GitFork } from '../../assets/icons/git-fork.svg';

const ProjectCard = ({ project, index }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 22, filter: 'blur(5px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.62,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    const getLanguageColor = (language) => {
        const colors = {
            JavaScript: '#f1e05a',
            Python: '#3572a5',
            TypeScript: '#3178c6',
            React: '#61dafb',
            Java: '#b07219',
            'C++': '#f34b7d',
            Go: '#00add8',
            Rust: '#dea584',
            default: '#8e96a5',
        };
        return colors[language] || colors.default;
    };

    return (
        <m.article
            variants={cardVariants}
            className="repository-card"
            role="listitem"
        >
            <div className="repository-card__topline">
                <span className="repository-card__language">
                    <i style={{ '--language-color': getLanguageColor(project.primary_language) }} aria-hidden="true" />
                    {project.primary_language || 'Repository'}
                </span>
                <span aria-label={`Repository ${index + 1}`}>{String(index + 1).padStart(2, '0')}</span>
            </div>

            <h3>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.name}
                </a>
            </h3>

            <p>{project.description || 'A public repository from my ongoing body of work.'}</p>

            <footer className="repository-card__footer">
                <div className="repository-card__stats" aria-label="Repository statistics">
                    <span aria-label={`${project.stars || 0} stars`}>
                        <GitStar aria-hidden="true" /> {project.stars || 0}
                    </span>
                    <span aria-label={`${project.forks || 0} forks`}>
                        <GitFork aria-hidden="true" /> {project.forks || 0}
                    </span>
                </div>

                <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.name} on GitHub`}
                >
                    <FaArrowUpRightFromSquare aria-hidden="true" />
                </a>
            </footer>
        </m.article>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        description: PropTypes.string,
        forks: PropTypes.number,
        name: PropTypes.string.isRequired,
        primary_language: PropTypes.string,
        stars: PropTypes.number,
        url: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
};

export default React.memo(ProjectCard);
