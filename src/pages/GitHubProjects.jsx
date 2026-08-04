import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import { Helmet } from "react-helmet";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import ProjectsHero from "../components/projects/ProjectsHero";
import AllProjectsSection from "../components/projects/AllProjectsSection";
import EarlyTraceSlide from "../components/SpotlightProjectSlides/EarlyTraceSlide";
import MandelbrotSlide from "../components/SpotlightProjectSlides/MandelbrotSlide";

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
    speed: 550,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
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
    const [repoProjects, setRepoProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const configuredApiUrl = process.env.REACT_APP_API_URL; // eslint-disable-line no-undef
        const baseUrl = configuredApiUrl
            ? configuredApiUrl.replace(/\/$/, "")
            : "";
        
        setIsLoading(true);
        fetch(`${baseUrl}/api/repos`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setRepoProjects(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching repo data:', error);
                setIsLoading(false);
            });
    }, []);

    return (
        <React.Fragment>
            <Helmet>
                <title>Selected Work · Finn Kliewer</title>
                <meta
                    name="description"
                    content="Selected software projects and technical experiments by Finn Kliewer."
                />
            </Helmet>

            <div className="min-h-screen pt-16 lg:pt-20">
                {/* Hero Section */}
                <div className="container mx-auto px-4 lg:px-8 py-4 lg:py-8 max-w-6xl">
                    <ProjectsHero />
                </div>

                <section className="px-3 sm:px-6 lg:px-8 pb-20 lg:pb-28" aria-label="Showcase projects">
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

                {/* All Projects Section */}
                <AllProjectsSection projects={repoProjects} isLoading={isLoading} />
            </div>
        </React.Fragment>
    );
}

export default GitHubProjects;
