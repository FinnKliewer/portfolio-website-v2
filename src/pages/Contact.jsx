// src/pages/Contact.js

import React from "react";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import { useDocumentMetadata } from "../hooks/useDocumentMetadata";

function Contact() {
    useDocumentMetadata({
        title: "Contact · Finn Kliewer",
        description: "Get in touch with me through my contact form or reach out via email, phone, LinkedIn, or GitHub.",
        openGraphTitle: "Contact · Finn Kliewer",
    });

    return (
        <main className="contact-page">
            <div className="site-page contact-page__inner">
                <ContactHero />

                <section id="contact-content" className="contact-artifact" aria-label="Contact options and message form">
                    <ContactInfo />
                    <ContactForm />
                </section>
            </div>
        </main>
    );
}

export default Contact;
