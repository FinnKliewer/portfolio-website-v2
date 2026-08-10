import React, { useContext, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import { Helmet } from "react-helmet";
import { ThemeContext } from "../context/ThemeContext";
import HeroSection from "../components/home/HeroSection";
import SkillsShowcase from "../components/home/SkillsShowcase";

const Home = () => {
    const vantaRef = useRef(null);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        if (!vantaRef.current) return undefined;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const effect = NET({
            el: vantaRef.current,
            backgroundColor: theme === "light" ? 0xf4f5f7 : 0x0b1220,
            color: theme === "light" ? 0x5548e7 : 0x8177ff,
            points: 12.0,
            maxDistance: 22.0,
            spacing: 17.0,
            mouseControls: !reduceMotion,
            touchControls: !reduceMotion,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
        });

        return () => effect.destroy();
    }, [theme]);

    return (
        <>
            <Helmet>
                <title>Finn Kliewer · Platform Engineer</title>
                <meta name="description" content="Finn Kliewer is a Platform Engineer at Citadel who builds the systems, tooling, and platforms behind high-stakes engineering work." />
            </Helmet>
            <div className="portfolio-home" ref={vantaRef}>
                <div className="home-surface">
                    <HeroSection />
                    <SkillsShowcase />
                </div>
            </div>
        </>
    );
};

export default Home;
