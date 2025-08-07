import React, { useContext, useEffect, useRef, useState } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import { ThemeContext } from "../context/ThemeContext";
import { Helmet } from "react-helmet";
import HeroSection from '../components/home/HeroSection';
import SkillsShowcase from '../components/home/SkillsShowcase';
import FloatingElements from '../components/home/FloatingElements';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [vantaEffect, setVantaEffect] = useState(null);
    const vantaRef = useRef(null);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        setIsVisible(true);
    }, []);


    useEffect(() => {
        const backgroundColor = theme === 'light' ? 0xe8e8e8 : 0x1b2431;
        const color = theme === 'light' ? 0x6366f1 : 0x8b5cf6;

        const initVanta = () => {
            return NET({
                el: vantaRef.current,
                backgroundColor: backgroundColor,
                color: color,
                points: 12.0,
                maxDistance: 20.0,
                spacing: 15.0,
            });
        };

        if (!vantaEffect) {
            const effect = initVanta();
            setVantaEffect(effect);
        } else {
            vantaEffect.destroy();
            const effect = initVanta();
            setVantaEffect(effect);
        }

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [theme]);

    return (
        <>
            <Helmet>
                <title>Home - Finn Kliewer</title>
                <meta
                    name="Home - Finn Kliewer"
                    content="Passionate about transforming complex data into actionable insights. Specializing in machine learning, statistical analysis, and predictive modeling."
                />
            </Helmet>
            <div className="vanta-container min-h-screen w-full relative" ref={vantaRef}>
                {/* Floating Elements */}
                <FloatingElements />
                
                <div className="backdrop-blur-sm min-h-screen w-full relative z-10">
                    <div className="container mx-auto px-4 py-8">
                        {/* Hero Section */}
                        <HeroSection isVisible={isVisible} />
                        
                        {/* Skills Showcase */}
                        <div className="mb-20">
                            <SkillsShowcase />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;