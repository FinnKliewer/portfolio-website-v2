import React, { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import { Helmet } from "react-helmet";

import ProjectsHero from "../components/projects/ProjectsHero";
import AllProjectsSection from "../components/projects/AllProjectsSection";
import EarlyTraceSlide from "../components/SpotlightProjectSlides/EarlyTraceSlide";
import MandelbrotSlide from "../components/SpotlightProjectSlides/MandelbrotSlide";

function GitHubProjects() {
    const [repoProjects, setRepoProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const baseUrl = process.env.REACT_APP_API_URL
            ? process.env.REACT_APP_API_URL.replace(/\/$/, "")
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

    const slideRefs = useRef([]);
    const [maxHeight, setMaxHeight] = useState(0);
    const observerRef = useRef(null);

    const slides = [
        <EarlyTraceSlide key={1} />,
        <MandelbrotSlide key={2} />,
        // <EarlyTraceSlide key={3} />,
    ];

    // Use ResizeObserver to determine the max height among slides (with some padding)
    useEffect(() => {
        observerRef.current = new ResizeObserver(entries => {
            const heights = entries.map(entry => {
                const contentDiv = entry.target.querySelector('.bg-base-100');
                return contentDiv ? contentDiv.offsetHeight + 32 : 0; // 32px padding compensation
            });
            setMaxHeight(Math.max(...heights));
        });
        return () => observerRef.current?.disconnect();
    }, []);

    useEffect(() => {
        slideRefs.current.forEach(ref => {
            if (ref) observerRef.current.observe(ref);
        });
    }, [slides]);

    const settings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 20000,
        lazyLoad: true,
        cssEase: "ease-out",
    };

    const [scaleFactor, setScaleFactor] = useState(1);
    const baseWidth = 1920;

    useEffect(() => {
        const handleResize = () => {
            const currentWidth = window.innerWidth;
            const scale = Math.min(currentWidth / baseWidth, 1);
            setScaleFactor(scale);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const effectiveSlideHeight = maxHeight;

    return (
        <React.Fragment>
            <Helmet>
                <title>GitHub Projects - Finn Kliewer</title>
                <meta
                    name="GitHub Projects - Finn Kliewer"
                    content="Writing code, breaking boundaries."
                />
            </Helmet>

            <div className="min-h-screen pt-16 lg:pt-20">
                {/* Hero Section */}
                <div className="container mx-auto px-4 lg:px-8 py-4 lg:py-8 max-w-6xl">
                    <ProjectsHero />
                </div>

                {/* Carousel Section - Keep exactly as is */}
                {/* Outer container that uses the scaled dimensions */}
                <div
                    style={{
                        width: `${baseWidth * scaleFactor}px`,
                        height: effectiveSlideHeight ? `${effectiveSlideHeight * scaleFactor}px` : 'auto',
                        margin: '0 auto',
                        overflow: 'hidden'
                    }}
                >
                    {/* Scaled container */}
                    <div
                        style={{
                            transform: `scale(${scaleFactor})`,
                            transformOrigin: 'top left',
                            width: `${baseWidth}px`,
                            position: 'relative'
                        }}
                    >
                        <div className="p-4 mx-auto w-3/4">
                            <div className="relative mb-16 fade-edges">
                                <Slider {...settings}>
                                    {slides.map((slide, index) => (
                                        <div
                                            key={index}
                                            ref={el => slideRefs.current[index] = el}
                                            className="transition-all duration-300"
                                            style={{
                                                minHeight: effectiveSlideHeight > 0 ? `${effectiveSlideHeight}px` : 'auto',
                                                padding: '0.75rem'
                                            }}
                                        >
                                            {React.cloneElement(slide, {
                                                className: `${slide.props.className || ''} h-full`
                                            })}
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>

                {/* All Projects Section */}
                <AllProjectsSection projects={repoProjects} isLoading={isLoading} />
            </div>
        </React.Fragment>
    );
}

export default GitHubProjects;