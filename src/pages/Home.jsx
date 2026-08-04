import React, { useContext, useEffect, useRef, useState } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import { Helmet } from "react-helmet";
import { ThemeContext } from "../context/ThemeContext";
import HeroSection from '../components/home/HeroSection';
import SkillsShowcase from '../components/home/SkillsShowcase';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const vantaRef = useRef(null);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        if (!vantaRef.current) return undefined;

        const effect = NET({
            el: vantaRef.current,
            backgroundColor: theme === 'light' ? 0xf7f7f5 : 0x111827,
            color: theme === 'light' ? 0x6366f1 : 0x818cf8,
            points: 12.0,
            maxDistance: 22.0,
            spacing: 17.0,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
        });

        return () => {
            effect.destroy();
        };
    }, [theme]);

    return (
        <>
            <Helmet>
                <title>Finn Kliewer · Platform Engineer</title>
                <meta
                    name="description"
                    content="Finn Kliewer is a Platform Engineer at Citadel who builds the systems, tooling, and platforms behind high-stakes engineering work."
                />
            </Helmet>
            <div className="portfolio-home vanta-container min-h-screen w-full relative" ref={vantaRef}>
                <div className="relative z-10 pt-16 lg:pt-20 backdrop-blur-[1px]">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14 max-w-7xl">
                        <HeroSection isVisible={isVisible} />
                        <div className="mt-20 lg:mt-28 mb-16 lg:mb-24">
                            <SkillsShowcase />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
