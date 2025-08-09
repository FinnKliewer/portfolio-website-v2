// src/pages/Contact.js

import React from "react";
import { Helmet } from "react-helmet";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

function Contact() {
    return (
        <>
            <Helmet>
                <title>Contact Me - Finn Kliewer</title>
                <meta
                    name="Contact Me - Finn Kliewer"
                    content="Get in touch with me through my contact form or reach out via email, phone, LinkedIn, or GitHub."
                />
                <meta property="og:title" content="Contact Me - Finn Kliewer" />
            </Helmet>

            <div className="min-h-screen">
                <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-16 max-w-6xl">
                    {/* Hero Section */}
                    <ContactHero />
                    
                    {/* Contact Section */}
                    <div className="flex flex-col lg:flex-row w-full max-w-5xl mx-auto shadow-2xl rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50">
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;