// src/content/contactInfo.js

import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const contactInfo = [
    {
        id: 1,
        href: "mailto:finn.kliewer@gmail.com",
        icon: <FaEnvelope size={24} />,
        label: "Email",
        title: "Send an Email",
        text: "finn.kliewer@gmail.com",
    },
    {
        id: 2,
        href: "tel:+12017472660",
        icon: <FaPhone size={24} />,
        label: "Phone",
        title: "Call Me",
        text: "+1 (201) 747-2660",
    },
    {
        id: 3,
        href: "https://www.linkedin.com/in/finnkliewer/",
        icon: <FaLinkedin size={24} />,
        label: "LinkedIn",
        title: "LinkedIn Profile",
        text: "LinkedIn",
    },
    {
        id: 4,
        href: "https://github.com/OX-S",
        icon: <FaGithub size={24} />,
        label: "GitHub",
        title: "GitHub Profile",
        text: "GitHub",
    },
];

export default contactInfo;
