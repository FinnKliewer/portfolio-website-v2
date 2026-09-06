// src/pages/ProfessionalHistory.js
import React from "react";
import jobs from "../content/jobs";
import ProfessionalHero from "../components/professional/ProfessionalHero";
import TimelineContainer from "../components/professional/TimelineContainer";
import { useDocumentMetadata } from "../hooks/useDocumentMetadata";

function ProfessionalHistory() {
    useDocumentMetadata({
        title: "Experience · Finn Kliewer",
        description: "Finn Kliewer's experience across platform engineering, software engineering, technology research, and business.",
    });

    return (
        <main className="experience-page">
            <div className="site-page experience-page__inner">
                <ProfessionalHero />
                <TimelineContainer jobs={jobs} />
            </div>
        </main>
    );
}

export default ProfessionalHistory;
