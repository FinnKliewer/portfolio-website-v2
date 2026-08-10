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
                <title>Contact · Finn Kliewer</title>
                <meta
                    name="description"
                    content="Get in touch with me through my contact form or reach out via email, phone, LinkedIn, or GitHub."
                />
                <meta property="og:title" content="Contact · Finn Kliewer" />
            </Helmet>

            <main className="contact-page">
                <div className="site-page contact-page__inner">
                    <ContactHero />

                    <section id="contact-content" className="contact-artifact" aria-label="Contact options and message form">
                        <ContactInfo />
                        <ContactForm />
                    </section>
                </div>
            </main>
        </>
    );
}

export default Contact;
