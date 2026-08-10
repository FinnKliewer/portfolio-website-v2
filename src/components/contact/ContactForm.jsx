import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const ContactForm = () => {
    const reduceMotion = useReducedMotion();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [submissionStatus, setSubmissionStatus] = useState('idle');

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        if (errors[name]) {
            setErrors((currentErrors) => ({ ...currentErrors, [name]: undefined }));
        }

        if (submissionStatus !== 'idle') {
            setSubmissionStatus('idle');
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Enter your name.";
        if (!formData.email.trim()) {
            newErrors.email = "Enter your email address.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email address.";
        }
        if (!formData.subject.trim()) newErrors.subject = "Add a subject.";
        if (!formData.message.trim()) newErrors.message = "Write a message.";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length === 0) {
            setSubmissionStatus('submitting');

            try {
                const webhookUrl = process.env.REACT_APP_WEBHOOK_LINK; // eslint-disable-line no-undef

                if (!webhookUrl) {
                    throw new Error('Contact webhook is not configured.');
                }

                const webhookPayload = {
                    content: `**New Contact Form Submission**\n**Name:** ${formData.name}\n**Email:** ${formData.email}\n**Subject:** ${formData.subject}\n**Message:** ${formData.message}`
                };

                const response = await fetch(webhookUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(webhookPayload),
                });

                if (response.ok) {
                    setSubmissionStatus('success');
                    setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                    setErrors({});
                } else {
                    setSubmissionStatus('error');
                }
            } catch (error) {
                console.error("Error submitting form", error);
                setSubmissionStatus('error');
            }
        } else {
            setErrors(validationErrors);
            setSubmissionStatus('idle');
        }
    };

    const fieldError = (fieldName) => errors[fieldName];

    return (
        <motion.section
            className="contact-form-panel"
            initial={reduceMotion ? false : { opacity: 0, x: 20, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.72, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="contact-form-panel__intro">
                <h2>Send a message.</h2>
                <p>Share the context, constraints, and what you’re trying to make happen.</p>
            </div>

            {submissionStatus === 'success' && (
                <motion.p
                    className="form-status form-status--success"
                    role="status"
                    initial={reduceMotion ? false : { opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.35 }}
                >
                    Message sent. Thanks for reaching out—I’ll get back to you soon.
                </motion.p>
            )}

            {submissionStatus === 'error' && (
                <motion.p
                    className="form-status form-status--error"
                    role="alert"
                    initial={reduceMotion ? false : { opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.35 }}
                >
                    The message could not be sent. Try again, or use the email link beside the form.
                </motion.p>
            )}

            <form onSubmit={handleSubmit} noValidate>
                <div className="form-grid">
                    <div className={`form-field ${fieldError('name') ? 'has-error' : ''}`}>
                        <label htmlFor="contact-name">Name</label>
                        <input
                            id="contact-name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            autoComplete="name"
                            aria-invalid={Boolean(fieldError('name'))}
                            aria-describedby={fieldError('name') ? 'contact-name-error' : undefined}
                            required
                        />
                        {fieldError('name') && <small id="contact-name-error">{fieldError('name')}</small>}
                    </div>

                    <div className={`form-field ${fieldError('email') ? 'has-error' : ''}`}>
                        <label htmlFor="contact-email">Email</label>
                        <input
                            id="contact-email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            autoComplete="email"
                            aria-invalid={Boolean(fieldError('email'))}
                            aria-describedby={fieldError('email') ? 'contact-email-error' : undefined}
                            required
                        />
                        {fieldError('email') && <small id="contact-email-error">{fieldError('email')}</small>}
                    </div>
                </div>

                <div className={`form-field ${fieldError('subject') ? 'has-error' : ''}`}>
                    <label htmlFor="contact-subject">Subject</label>
                    <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What would you like to discuss?"
                        aria-invalid={Boolean(fieldError('subject'))}
                        aria-describedby={fieldError('subject') ? 'contact-subject-error' : undefined}
                        required
                    />
                    {fieldError('subject') && <small id="contact-subject-error">{fieldError('subject')}</small>}
                </div>

                <div className={`form-field ${fieldError('message') ? 'has-error' : ''}`}>
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Include the useful details."
                        aria-invalid={Boolean(fieldError('message'))}
                        aria-describedby={fieldError('message') ? 'contact-message-error' : undefined}
                        required
                    />
                    {fieldError('message') && <small id="contact-message-error">{fieldError('message')}</small>}
                </div>

                <div className="contact-form__actions">
                    <button
                        type="submit"
                        className="site-action site-action--primary contact-submit"
                        disabled={submissionStatus === 'submitting'}
                    >
                        {submissionStatus === 'submitting' ? 'Sending…' : 'Send message'}
                        <FaArrowRight aria-hidden="true" />
                    </button>
                    <span>All fields are required.</span>
                </div>
            </form>
        </motion.section>
    );
};

export default ContactForm;
