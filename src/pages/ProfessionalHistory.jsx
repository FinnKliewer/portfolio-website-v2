// src/pages/ProfessionalHistory.js
import React from "react";
import { Helmet } from "react-helmet";
import jobs from "../content/jobs";
import ProfessionalHero from "../components/professional/ProfessionalHero";
import TimelineContainer from "../components/professional/TimelineContainer";

function ProfessionalHistory() {
    return (
        <>
            <Helmet>
                <title>Experience · Finn Kliewer</title>
                <meta
                    name="description"
                    content="Finn Kliewer's experience across platform engineering, software engineering, technology research, and business."
                />
            </Helmet>

            <main className="experience-page">
                <div className="site-page experience-page__inner">
                    <ProfessionalHero />
                    <TimelineContainer jobs={jobs} />
                </div>
            </main>
        </>
    );
}

export default ProfessionalHistory;
