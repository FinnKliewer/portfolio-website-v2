import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.subject) newErrors.subject = "Subject is required";
        if (!formData.message) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            try {
                const webhook_payload = {
                    content: `**New Contact Form Submission**\n**Name:** ${formData.name}\n**Email:** ${formData.email}\n**Subject:** ${formData.subject}\n**Message:** ${formData.message}`
                };

                const response = await fetch(process.env.REACT_APP_WEBHOOK_LINK, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(webhook_payload),
                });
                if (response.ok) {
                    console.log("Form Data:", formData);
                    setSubmitted(true);
                    setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                    setErrors({});
                } else {
                    console.error("Failed to submit form");
                }
            } catch (error) {
                console.error("Error submitting form", error);
            }
        } else {
            setErrors(validationErrors);
        }
    };

    const formVariants = {
        hidden: { opacity: 0, x: 30 },
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
        <motion.div 
            className="lg:w-1/2 p-8 lg:p-12 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <h2 className="mb-8 text-2xl lg:text-3xl font-bold text-center lg:text-left text-gray-800 dark:text-white">
                Send a Message
            </h2>
            
            {submitted && (
                <motion.div 
                    className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg text-green-700 dark:text-green-300 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    Thank you for your message! I'll get back to you soon.
                </motion.div>
            )}
            
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 ${
                            errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                        }`}
                        placeholder="Your Name"
                    />
                    {errors.name && (
                        <span className="text-red-500 text-sm mt-1 block">{errors.name}</span>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 ${
                            errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                        }`}
                        placeholder="you@example.com"
                    />
                    {errors.email && (
                        <span className="text-red-500 text-sm mt-1 block">{errors.email}</span>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Subject
                    </label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 ${
                            errors.subject ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                        }`}
                        placeholder="Subject"
                    />
                    {errors.subject && (
                        <span className="text-red-500 text-sm mt-1 block">{errors.subject}</span>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 border rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none ${
                            errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                        }`}
                        placeholder="Your message..."
                    ></textarea>
                    {errors.message && (
                        <span className="text-red-500 text-sm mt-1 block">{errors.message}</span>
                    )}
                </div>

                <div className="text-center lg:text-left">
                    <button
                        type="submit"
                        className="w-full lg:w-auto px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

export default ContactForm;