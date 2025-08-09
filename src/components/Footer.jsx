import React from "react";
import { Link } from "react-router-dom";
import siteContent from "../content/siteContent";
import { ReactComponent as EmailIcon } from "../assets/icons/email.svg";
import { ReactComponent as PhoneIcon } from "../assets/icons/phone-call.svg";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer() {
    return (
        <footer className="relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
            
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full blur-xl"></div>
                <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <h2 className="text-3xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                                {siteContent.navbar.brand}
                            </h2>
                            <p className="text-gray-300 leading-relaxed max-w-md">
                                Passionate about transforming complex data into actionable insights through innovative technology solutions and creative problem-solving.
                            </p>
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex space-x-4">
                            <a
                                href={siteContent.gitHubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                                aria-label="GitHub Profile"
                            >
                                <FaGithub className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                            </a>
                            <a
                                href={siteContent.linkedinLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                                aria-label="LinkedIn Profile"
                            >
                                <FaLinkedin className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {siteContent.navbar.links.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-indigo-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Get in Touch</h3>
                        <div className="space-y-4">
                            <a
                                href="mailto:finn.kliewer@gmail.com"
                                className="group flex items-center text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                                aria-label="Email"
                            >
                                <div className="p-2 bg-white/10 rounded-lg mr-3 group-hover:bg-indigo-500/20 transition-colors duration-300">
                                    <EmailIcon className="h-4 w-4" />
                                </div>
                                <span className="text-sm">finn.kliewer@gmail.com</span>
                            </a>
                            <a
                                href="tel:+12017472660"
                                className="group flex items-center text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                                aria-label="Phone"
                            >
                                <div className="p-2 bg-white/10 rounded-lg mr-3 group-hover:bg-indigo-500/20 transition-colors duration-300">
                                    <PhoneIcon className="h-4 w-4" />
                                </div>
                                <span className="text-sm">+1 (201) 747-2660</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700/50 pt-8">
                    <div className="flex justify-center md:justify-start">
                        <div className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} Finn Kliewer. All rights reserved.
                        </div>
                    </div>
                </div>

                {/* Decorative Line */}
                <div className="flex justify-center mt-8">
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;