import React from 'react';
import { motion } from 'framer-motion';
import contactInfo from '../../content/contactInfo';

const ContactInfo = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="lg:w-1/2 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 border border-white/30 rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-16 h-16 border border-white/20 rounded-full"></div>
                <div className="absolute top-1/2 right-20 w-12 h-12 border border-white/25 rounded-full"></div>
            </div>

            <div className="relative z-10">
                <motion.h2 
                    className="mb-8 text-3xl lg:text-4xl font-bold text-center lg:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Get in Touch
                </motion.h2>

                <motion.div 
                    className="flex flex-row lg:flex-col justify-center items-center lg:justify-start lg:items-start space-x-4 lg:space-x-0 lg:space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {contactInfo.map((contact, index) => (
                        <motion.div
                            key={contact.id}
                            className="flex items-center justify-center lg:items-start lg:justify-start"
                            variants={itemVariants}
                        >
                            <a
                                href={contact.href}
                                target={
                                    contact.label === "LinkedIn" || contact.label === "GitHub"
                                        ? "_blank"
                                        : "_self"
                                }
                                rel={
                                    contact.label === "LinkedIn" || contact.label === "GitHub"
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                className="group flex flex-col items-center lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4 hover:text-gray-200 transition-all duration-300"
                                aria-label={contact.label}
                                title={contact.title}
                            >
                                <div className="w-16 h-16 lg:w-14 lg:h-14 flex items-center justify-center bg-white/20 backdrop-blur-sm text-white rounded-xl shadow-lg group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 border border-white/30">
                                    {contact.icon}
                                </div>
                                <span className="text-base lg:text-lg font-medium hidden lg:block group-hover:text-white transition-colors duration-300">
                                    {contact.text}
                                </span>
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default ContactInfo;