import React, { useContext, useEffect, useLayoutEffect, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext";
import HeroSection from "../components/home/HeroSection";
import SkillsShowcase from "../components/home/SkillsShowcase";
import { useDocumentMetadata } from "../hooks/useDocumentMetadata";
import { optimizeVantaNet } from "../utils/optimizeVantaNet";

const VANTA_THEMES = {
    light: { backgroundColor: 0xf4f5f7, color: 0x5548e7 },
    dark: { backgroundColor: 0x0b1220, color: 0x8177ff },
};

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
    const effectRef = useRef(null);
    const themeRef = useRef(theme);
    themeRef.current = theme;

    useEffect(() => {
        if (!vantaRef.current) return undefined;
        let effect;
        let isCurrent = true;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        preloadHomeScene().then(({ THREE, NET }) => {
            if (!isCurrent || !vantaRef.current) return;
            const palette = VANTA_THEMES[themeRef.current];

            effect = NET({
                el: vantaRef.current,
                THREE,
                ...palette,
                points: 12.0,
                maxDistance: 22.0,
                spacing: 17.0,
                showDots: false,
                mouseControls: !reduceMotion,
                touchControls: !reduceMotion,
                gyroControls: false,
                minHeight: 200.0,
                minWidth: 200.0,
                scale: 1.0,
                scaleMobile: 1.0,
            });
            optimizeVantaNet(effect, THREE);
            effectRef.current = effect;
        }).catch(() => undefined);

        return () => {
            isCurrent = false;
            effectRef.current = null;
            effect?.destroy();
        };
    }, []);

    useLayoutEffect(() => {
        effectRef.current?.setThemeColors?.(VANTA_THEMES[theme]);
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
