import React from 'react';
import mandelbrotImage from '../../assets/mandelbrot1.webp';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import SpotlightCard from "./SpotlightCard";

const GithubIcon = () => (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.776.42-1.304.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.29-1.552 3.296-1.23 3.296-1.23.656 1.653.244 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.625-5.475 5.921.432.37.815 1.102.815 2.222 0 1.606-.015 2.896-.015 3.286 0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

const MandelbrotSlide = () => {
    return (
        <SpotlightCard variant="mandelbrot">
            <div className="mandelbrot-layout grid flex-1 content-between gap-9 lg:grid-cols-[minmax(0,1.25fr)_minmax(15rem,0.75fr)] lg:content-stretch lg:gap-12">
                <div className="flex min-w-0 flex-col">
                    <h2 className="text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-gray-950 dark:text-white">
                        PyOpenGL Mandelbrot
                    </h2>
                    <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
                        A real-time Mandelbrot renderer built with OpenGL and GLSL shaders. Smooth iteration counts reduce banding, cosine-based color mapping creates high-contrast detail, and FP64 precision supports deep interactive zooming.
                    </p>

                    <a
                        href="https://github.com/OX-S/pyopengl-mandelbrot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-source-link mt-7 self-start"
                    >
                        <GithubIcon />
                        View Mandelbrot on GitHub
                    </a>

                    <div className="mandelbrot-formula-grid mt-6 grid gap-7 border-t border-gray-200 pt-8 dark:border-gray-800 min-[520px]:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] md:grid-cols-2 lg:pt-8">
                        <section className="min-w-0">
                            <h3 className="font-semibold text-gray-950 dark:text-white">Smooth iteration count</h3>
                            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                Interpolates the raw iteration count into a continuous value.
                            </p>
                            <div className="formula-scroll mandelbrot-formula mandelbrot-formula--smooth mt-4" tabIndex="0" aria-label="Smooth iteration count formula">
                                <BlockMath math={`\\tilde{n} = i + 1 - \\frac{\\ln\\!\\left(\\frac{\\ln|z|}{\\ln 2}\\right)}{\\ln 2}`} />
                            </div>
                        </section>

                        <section className="min-w-0">
                            <h3 className="font-semibold text-gray-950 dark:text-white">Cosine color mapping</h3>
                            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                Maps the smooth iteration parameter <InlineMath math="t" /> to an RGB color.
                            </p>
                            <div className="formula-scroll mandelbrot-formula mandelbrot-formula--color mt-4" tabIndex="0" aria-label="Cosine color mapping formula">
                                <BlockMath math={`\\text{color} = 0.5 + 0.5\\,\\cos\\!\\left(2\\pi\\, t + \\begin{pmatrix} 0 \\\\ 0.8 \\\\ 1.5 \\end{pmatrix}\\right)`} />
                            </div>
                        </section>
                    </div>
                </div>

                <figure className="spotlight-media aspect-[16/9] min-w-0 self-start overflow-hidden rounded-xl bg-black lg:relative lg:min-h-0 lg:aspect-auto lg:h-auto lg:self-stretch">
                    <img
                        src={mandelbrotImage}
                        alt="A colorful high-precision rendering of the Mandelbrot set"
                        className="h-full w-full object-cover object-center lg:absolute lg:inset-0"
                        width="583"
                        height="790"
                        loading="lazy"
                        decoding="async"
                    />
                </figure>
            </div>
        </SpotlightCard>
    );
};

export default MandelbrotSlide;
