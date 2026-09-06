import React from 'react';

const steps = [
    {
        title: 'Text samples',
        description: 'Raw blog posts and personal writing',
    },
    {
        title: 'BGE transformer',
        description: 'Creates 1,024-dimensional sentence embeddings',
    },
    {
        title: 'XGBoost classifier',
        description: 'Identifies dementia-related text patterns',
    },
    {
        title: 'Prediction',
        description: 'Returns the final classification',
    },
];

const ClassificationFlow = () => {
    return (
        <ol className="mt-5 space-y-3">
            {steps.map((step, index) => (
                <li key={step.title} className="relative flex gap-4 pb-3 last:pb-0">
                    {index < steps.length - 1 && (
                        <span className="absolute left-[0.875rem] top-8 h-[calc(100%-1rem)] w-px bg-gray-200 dark:bg-gray-700" aria-hidden="true" />
                    )}
                    <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-950 text-xs font-semibold text-white dark:bg-white dark:text-gray-950">
                        {index + 1}
                    </span>
                    <div className="min-w-0 pt-0.5">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{step.title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{step.description}</p>
                    </div>
                </li>
            ))}
        </ol>
    );
};

export default ClassificationFlow;
