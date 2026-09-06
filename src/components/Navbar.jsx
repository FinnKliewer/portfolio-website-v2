import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import siteContent from "../content/siteContent";
import { ThemeContext } from "../context/ThemeContext";
import DarkThemeIcon from "../assets/icons/dark-theme.svg?react";
import LightThemeIcon from "../assets/icons/light-theme.svg?react";
import { preloadRoute } from "../routes";

function BrandMark() {
    return (
        <span className="site-route-mark site-brand__favicon" aria-hidden="true" />
    );
}

function Navbar() {
    const { brand, links } = siteContent.navbar;
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const scrollFrame = useRef(null);
    const location = useLocation();
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        const updateScrolledState = () => {
            scrollFrame.current = null;
            const nextIsScrolled = window.scrollY > 24;
            setIsScrolled((currentIsScrolled) => currentIsScrolled === nextIsScrolled
                ? currentIsScrolled
                : nextIsScrolled);
        };
        const handleScroll = () => {
            if (scrollFrame.current === null) {
                scrollFrame.current = window.requestAnimationFrame(updateScrolledState);
            }
        };

        updateScrolledState();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (scrollFrame.current !== null) window.cancelAnimationFrame(scrollFrame.current);
        };
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    const prefetch = useCallback((path) => {
        preloadRoute(path);
    }, []);

    return (
        <nav className={`site-nav ${isScrolled || isMobileMenuOpen ? "site-nav--active" : ""}`} aria-label="Primary navigation">
            <div className="site-nav__inner">
                <Link to="/" className="site-brand" aria-label="Finn Kliewer, home">
                    <BrandMark />
                    <span>{brand}</span>
                </Link>

                <div className="site-nav__links" aria-label="Main pages">
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => `site-nav__link ${isActive ? "is-active" : ""}`}
                            onPointerEnter={() => prefetch(link.path)}
                            onFocus={() => prefetch(link.path)}
                            onTouchStart={() => prefetch(link.path)}
                        >
                            <span>{link.name}</span>
                        </NavLink>
                    ))}
                </div>

                <div className="site-nav__controls">
                    <button
                        type="button"
                        className="theme-control"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                        aria-pressed={theme === "dark"}
                    >
                        <span className="theme-control__track" aria-hidden="true">
                            <m.span
                                className="theme-control__thumb"
                                animate={{ x: theme === "dark" ? 22 : 0 }}
                                transition={{ duration: reduceMotion ? 0 : 0.22, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {theme === "dark" ? <DarkThemeIcon /> : <LightThemeIcon />}
                            </m.span>
                        </span>
                    </button>

                    <button
                        type="button"
                        className={`menu-control ${isMobileMenuOpen ? "is-open" : ""}`}
                        onClick={() => setMobileMenuOpen((open) => !open)}
                        aria-label={`${isMobileMenuOpen ? "Close" : "Open"} navigation menu`}
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span />
                        <span />
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <m.div
                        className="mobile-nav"
                        initial={reduceMotion ? false : { clipPath: "inset(0 0 100% 0)" }}
                        animate={{ clipPath: "inset(0 0 0% 0)" }}
                        exit={reduceMotion ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
                        transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="mobile-nav__route" aria-hidden="true"><BrandMark /></div>
                        <div className="mobile-nav__links">
                            {links.map((link, index) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    className="mobile-nav__link"
                                    onFocus={() => prefetch(link.path)}
                                    onTouchStart={() => prefetch(link.path)}
                                >
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                        <p className="mobile-nav__note">Platform engineering · software systems · technical leverage</p>
                    </m.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;
