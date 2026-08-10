import React, { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext";
import HeroSection from "../components/home/HeroSection";
import SkillsShowcase from "../components/home/SkillsShowcase";
import { useDocumentMetadata } from "../hooks/useDocumentMetadata";

let homeScenePromise;

export const preloadHomeScene = () => {
    homeScenePromise ??= Promise.all([
        import("three"),
        import("vanta/dist/vanta.net.min"),
    ]).then(([THREE, vantaModule]) => ({
        THREE,
        NET: vantaModule.default || vantaModule,
    }));

    return homeScenePromise;
};

const VantaSurface = () => {
    const vantaRef = useRef(null);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        if (!vantaRef.current) return undefined;
        let effect;
        let isCurrent = true;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        preloadHomeScene().then(({ THREE, NET }) => {
            if (!isCurrent || !vantaRef.current) return;

            effect = NET({
                el: vantaRef.current,
                THREE,
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
        }).catch(() => undefined);

        return () => {
            isCurrent = false;
            effect?.destroy();
        };
    }, [theme]);

    return (
        <div className="portfolio-home" ref={vantaRef}>
            <div className="home-surface">
                <HeroSection />
                <SkillsShowcase />
            </div>
        </div>
    );
};

const Home = () => {
    useDocumentMetadata({
        title: "Finn Kliewer · Platform Engineer",
        description: "Finn Kliewer is a Platform Engineer at Citadel who builds the systems, tooling, and platforms behind high-stakes engineering work.",
    });

    return <VantaSurface />;
};

export default Home;
