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

            <div className="min-h-screen pt-16 lg:pt-20">
                <div className="container mx-auto px-4 lg:px-8 py-4 lg:py-8 max-w-6xl">
                    {/* Hero Section */}
                    <ProfessionalHero />
                    
                    {/* Timeline Section */}
                    <TimelineContainer jobs={jobs} />
                </div>
            </div>
        </>
    );
}

export default ProfessionalHistory;
