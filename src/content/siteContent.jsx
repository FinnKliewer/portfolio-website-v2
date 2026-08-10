// src/content/siteContent.js
import {lazyWithPreload} from "../utils/lazyWithPreload";

const siteContent = {
    name: "Finn Kliewer",
    gitHubLink: "https://github.com/OX-S",
    linkedinLink: "https://www.linkedin.com/in/finnkliewer/",
    home: {
        heading: "I build the systems behind high-stakes work.",
        subheading:
            "Software engineer by training. I work across platforms, infrastructure, and markets.",
        description:
            "I build reliable systems and developer tooling for environments where speed, precision, and technical judgment matter.",
        currentRole: "Platform Engineer · Citadel",
        previousRole: "Previously Software Engineer · Paycom",
        focusAreas: [
            {
                title: "Engineering leverage",
                description: "Platforms and developer workflows that let strong teams move faster without losing control.",
            },
            {
                title: "Production systems",
                description: "Reliable software for environments where speed, precision, and operating discipline matter.",
            },
            {
                title: "Technical judgment",
                description: "A systems view shaped by computer science, markets, and business context.",
            },
        ],
        resumeLink: "/resume.pdf",
    },
    education: [
        "B.S. Computer Science · Rutgers University",
        "M.S. Business Analytics · Cornell University",
    ],
    navbar: {
        brand: "Finn Kliewer",
        links: [
            {
                name: "Home",
                path: "/",
                component:  lazyWithPreload(() => import(/* webpackPrefetch: true */ '../pages/Home')),
            },
            {
                name: "Experience",
                path: "/professional-history",
                component:  lazyWithPreload(() => import(/* webpackPrefetch: true */ '../pages/ProfessionalHistory')),
            },
            {
                name: "Selected Work",
                path: "/github-projects",
                component:  lazyWithPreload(() => import(/* webpackPrefetch: true */ '../pages/GitHubProjects')),
            },
            {
                name: "Contact",
                path: "/contact",
                component:  lazyWithPreload(() => import(/* webpackPrefetch: true */ '../pages/Contact')),
            },
        ],
    },
};

export default siteContent;
