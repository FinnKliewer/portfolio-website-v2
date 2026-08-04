import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import siteContent from "../content/siteContent";
import { ThemeContext } from '../context/ThemeContext';
import { ReactComponent as DarkThemeIcon } from '../assets/icons/dark-theme.svg';
import { ReactComponent as LightThemeIcon } from '../assets/icons/light-theme.svg';

function Navbar() {
    const { brand, links } = siteContent.navbar;
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const prefetch = (link) => {
        if (link.component && link.component.preload) {
            link.component.preload()
                .then(() => {
                    console.log(`${link.name} component prefetched`);
                })
                .catch((err) => {
                    console.error(`Error prefetching ${link.name}:`, err);
                });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled || isMobileMenuOpen
                ? 'bg-white dark:bg-gray-900 border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg' 
                : 'bg-transparent border-b border-transparent'
        }`}>
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Brand */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="group">
                            <span className="text-xl lg:text-2xl font-semibold tracking-[-0.03em] text-gray-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                {brand}
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                to={link.path}
                                className="group relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-all duration-300 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                                onMouseEnter={() => prefetch(link)}
                            >
                                <span className="relative z-10">{link.name}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Link>
                        ))}
                    </div>

                    {/* Theme Toggle & Mobile Menu */}
                    <div className="flex items-center space-x-4">
                        {/* Theme Toggle */}
                        <div className="relative">
                            <label className="group cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only"
                                    onChange={toggleTheme}
                                    checked={theme === "dark"}
                                    aria-label="Toggle Dark/Light Theme"
                                />
                                <div className="relative w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full transition-colors duration-300 group-hover:bg-gray-400 dark:group-hover:bg-gray-500">
                                    <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 flex items-center justify-center ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}>
                                        {theme === 'dark' ? (
                                            <DarkThemeIcon className="w-3 h-3 text-gray-700" />
                                        ) : (
                                            <LightThemeIcon className="w-3 h-3 text-yellow-500" />
                                        )}
                                    </div>
                                </div>
                            </label>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-300"
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            <div className="w-6 h-6 relative">
                                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 top-3 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden absolute left-0 right-0 top-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden z-50`}>
                    <div className="py-4 space-y-2 border-t border-gray-200/50 dark:border-gray-700/50 bg-white dark:bg-gray-900 shadow-lg">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                to={link.path}
                                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-all duration-300 mx-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu Backdrop */}
                {isMobileMenuOpen && (
                    <div 
                        className="fixed inset-0 bg-black/20 z-40 lg:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{ top: '64px' }} // Start below navbar
                    />
                )}
            </div>
        </nav>
    );
}

export default Navbar;
