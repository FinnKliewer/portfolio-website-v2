import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import contactInfo from '../../content/contactInfo';

const ContactInfo = () => {
    const reduceMotion = useReducedMotion();
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: reduceMotion ? 0 : 0.075,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 14 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: reduceMotion ? 0 : 0.55,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <motion.aside
            className="contact-channels"
            initial={reduceMotion ? false : { opacity: 0, x: -20, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.72, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="contact-channels__intro">
                <h2>Reach me directly.</h2>
                <p>Email, phone, LinkedIn, and GitHub—choose the channel that fits the conversation.</p>
            </div>

            <motion.nav
                className="contact-channels__list"
                aria-label="Direct contact channels"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {contactInfo.map((contact) => (
                    <motion.a
                        key={contact.id}
                        href={contact.href}
                        target={contact.label === 'LinkedIn' || contact.label === 'GitHub' ? '_blank' : undefined}
                        rel={contact.label === 'LinkedIn' || contact.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                        className="contact-channel"
                        aria-label={`${contact.label}: ${contact.text}`}
                        title={contact.title}
                        variants={itemVariants}
                    >
                        <span className="contact-channel__icon" aria-hidden="true">
                            {contact.icon}
                        </span>
                        <span>
                            <small>{contact.label}</small>
                            <strong>{contact.text}</strong>
                        </span>
                        <FaArrowRight aria-hidden="true" />
                    </motion.a>
                ))}
            </motion.nav>
        </motion.aside>
    );
};

export default ContactInfo;
