// src/content/jobs.js
import paycomLogo from "../assets/paycom.png";
import citadelLogo from "../assets/citadel.svg";
import sevenTrainLogo from "../assets/seventrain.jpg";
import tigerAALogo from "../assets/tigeraa.jpg";
import RJWBLogo from "../assets/rwjbarnabashealth.jpg";
import tedsenLogo from "../assets/tedsen.png";

const jobs = [
    {
        title: "Platform Engineer",
        company: "Citadel",
        duration: "Aug 2026 - Present",
        startDate: "08/2026",
        isCurrent: true,
        description:
            "Building the platforms, tooling, and systems that help a high-performance engineering organization ship with speed and reliability.",
        logo: citadelLogo,
        order: 0,
    },
    {
        title: "Software Engineer",
        company: "Paycom",
        duration: "Aug 2024 - Jul 2026",
        startDate: "08/2024",
        endDate: "07/2026",
        description:
            "Built and maintained production software in a large-scale enterprise environment, developing the engineering foundation I now bring to platform work.",
        logo: paycomLogo,
        order: 1,
    },
    {
        title: "Venture Developer",
        company: "Seventrain Ventures",
        duration: "May 2023 - Dec 2025",
        startDate: "05/2023",
        endDate: "12/2025",
        description:
            "Evaluated technology businesses and translated technical, market, and operating signals into investment perspectives.",
        logo: sevenTrainLogo,
        order: 2,
    },
    {
        title: "Summer Analyst",
        company: "Tiger Advisory",
        duration: "May 2024 - Jul 2024",
        startDate: "05/2024",
        endDate: "07/2024",
        description:
            "Technology and investment research across emerging businesses.",
        logo: tigerAALogo,
        order: 3,
    },
    {
        title: "Research Assistant",
        company: "RWJBarnabas Health",
        duration: "Feb 2024 - Jul 2024",
        startDate: "02/2024",
        endDate: "07/2024",
        description:
            "Applied technical and analytical research in a healthcare environment.",
        logo: RJWBLogo,
        order: 4,
    },
    {
        title: "Summer Intern",
        company: "Adolf Tedsen GmbH",
        duration: "Jun 2022 - Jul 2022",
        startDate: "06/2022",
        endDate: "07/2022",
        description:
            "Early experience working across technology and business in an international operating environment.",
        logo: tedsenLogo,
        order: 5,
    },
];

export default jobs;
