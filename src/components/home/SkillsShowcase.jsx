import React from "react";
import { m, useReducedMotion } from "framer-motion";
import siteContent from "../../content/siteContent";

const SkillsShowcase = () => {
    const { home, education, educationStatement } = siteContent;
    const reduceMotion = useReducedMotion();

    return (
        <section className="leverage-map" aria-labelledby="focus-heading">
            <div className="leverage-map__intro">
                <h2 id="focus-heading">The layer beneath the outcome.</h2>
                <p>I stay broad in domain and precise in execution: build the foundation, improve the operating system, and make the next decision easier.</p>
            </div>

            <m.div
                className="leverage-map__system"
                initial={reduceMotion ? false : { y: 16, opacity: 0.84 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
                <svg className="leverage-map__track" viewBox="0 0 900 120" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M10 60h210l45-35h210l45 70h190l50-35h130" />
                </svg>
                <div className="leverage-map__nodes">
                    {home.focusAreas.map((area, index) => (
                        <article
                            key={area.title}
                            className="leverage-node"
                        >
                            <span className="leverage-node__signal" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                            <h3>{area.title}</h3>
                            <p>{area.description}</p>
                        </article>
                    ))}
                </div>
            </m.div>

            <section className="education-rail" aria-labelledby="education-heading">
                <div>
                    <h2 id="education-heading">Education</h2>
                    <p>{educationStatement}</p>
                </div>
                <ul>{education.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
        </section>
    );
};

export default React.memo(SkillsShowcase);
