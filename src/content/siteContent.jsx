// src/content/siteContent.js
import {lazyWithPreload} from "../utils/lazyWithPreload";

const siteContent = {
    name: "Finn Kliewer",
    gitHubLink: "https://github.com/OX-S",
    linkedinLink: "https://www.linkedin.com/in/finnkliewer/",
    home: {
        heading: "I build the systems behind high-stakes work.",
        subheading:
            "Platform Engineer at Citadel. Software engineer by training, technical operator by instinct.",
        description:
            "I design the platforms, tooling, and production systems that give engineering teams more leverage. My background spans software engineering, platform work, and business fluency—with a bias toward work that compounds.",
        currentRole: "Platform Engineer · Citadel",
        previousRole: "Previously Software Engineer · Paycom",
        focusAreas: [
            {
                title: "Engineering leverage",
                description: "Platforms and developer workflows that make strong teams faster.",
            },
            {
                title: "Production systems",
                description: "Reliable software for environments where speed and precision matter.",
            },
            {
                title: "Technical judgment",
                description: "A systems view shaped by CS, markets, and business context.",
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
