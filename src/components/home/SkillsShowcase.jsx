import React from 'react';
import siteContent from "../../content/siteContent";

const SkillsShowcase = () => {
    const { home, education } = siteContent;

    return (
        <section aria-labelledby="focus-heading" className="border-y border-gray-200 dark:border-gray-800 py-10 lg:py-14">
            <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-20">
                <div>
                    <h2 id="focus-heading" className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-gray-950 dark:text-white">
                        The work I do
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400 max-w-sm">
                        I stay broad in domain and focused in leverage: build the technical foundation, improve the operating system, and make the next decision easier.
                    </p>
                    <div className="mt-8 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                        {education.map((item) => (
                            <p key={item}>{item}</p>
                        ))}
                    </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-8">
                    {home.focusAreas.map((area) => (
                        <div key={area.title} className="focus-area">
                            <h3 className="text-lg font-semibold text-gray-950 dark:text-white">{area.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{area.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsShowcase;
