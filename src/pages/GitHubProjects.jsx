import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProjectsHero from "../components/projects/ProjectsHero";
import AllProjectsSection from "../components/projects/AllProjectsSection";
import EarlyTraceSlide from "../components/spotlight/EarlyTraceSlide";
import MandelbrotSlide from "../components/spotlight/MandelbrotSlide";
import { useDocumentMetadata } from "../hooks/useDocumentMetadata";
import { useRepositoryProjects } from "../hooks/useRepositoryProjects";

const CarouselArrow = ({ className, direction, onClick }) => {
    const Icon = direction === 'previous' ? FaChevronLeft : FaChevronRight;

    return (
        <button
            type="button"
            className={`${className || ''} carousel-arrow`}
            onClick={onClick}
            aria-label={`${direction === 'previous' ? 'Previous' : 'Next'} showcase project`}
        >
            <Icon aria-hidden="true" />
        </button>
    );
};

CarouselArrow.propTypes = {
    className: PropTypes.string,
    direction: PropTypes.oneOf(['previous', 'next']).isRequired,
    onClick: PropTypes.func,
};

const carouselSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6500,
    speed: 550,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: true,
    prevArrow: <CarouselArrow direction="previous" />,
    nextArrow: <CarouselArrow direction="next" />,
    accessibility: true,
    swipeToSlide: true,
    cssEase: "cubic-bezier(0.22, 1, 0.36, 1)",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
            },
        },
    ],
};

function GitHubProjects() {
    const {
        projects: repoProjects,
        isLoading,
        hasError: hasLoadError,
        retry: loadProjects,
    } = useRepositoryProjects();

    useDocumentMetadata({
        title: "Selected Work · Finn Kliewer",
        description: "Selected software projects and technical experiments by Finn Kliewer.",
    });

    return (
        <React.Fragment>
            <main className="projects-page">
                <div className="projects-page__hero-shell">
                    <ProjectsHero />
                </div>

                <div id="selected-work-content" className="landing-scroll-target" aria-hidden="true" />

                <section className="projects-showcase px-3 sm:px-6 lg:px-8 pb-20 lg:pb-28" aria-label="Showcase projects">
                    <div className="mx-auto max-w-7xl">
                        <Slider {...carouselSettings} className="selected-work-carousel">
                            <div className="spotlight-slide">
                                <EarlyTraceSlide />
                            </div>
                            <div className="spotlight-slide">
                                <MandelbrotSlide />
                            </div>
                        </Slider>
                    </div>
                </section>

                <AllProjectsSection
                    projects={repoProjects}
                    isLoading={isLoading}
                    hasError={hasLoadError}
                    onRetry={loadProjects}
                />
            </main>
        </React.Fragment>
    );
}

export default GitHubProjects;
