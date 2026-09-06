import { m } from "framer-motion";
import React from 'react';
import Astronaut from "../assets/icons/astronaut.svg?react";
import { useDocumentMetadata } from "../hooks/useDocumentMetadata";


function NotFound() {
    useDocumentMetadata({ title: "404 - Finn Kliewer" });

    return (
        <div
            className="h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
                <m.div
                    className="absolute top-20 w-32 md:w-48"
                    initial={{y: -10}}
                    animate={{y: 10}}
                    transition={{repeat: Infinity, repeatType: "reverse", duration: 2}}
                >
                    <Astronaut className="w-full h-full fill-current"/>
                </m.div>

                <h1 className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    404
                </h1>
                <p className="text-lg md:text-2xl mt-4 opacity-80">
                    Oops! Looks like you’ve drifted too far into space.
                </p>
                <p className="text-md opacity-60 mt-1">
                    This page doesn’t exist in this galaxy.
                </p>

                {/* Glowing Home Button */}
                <button
                    className="mt-6 btn btn-primary btn-wide border-2 border-primary hover:bg-transparent hover:text-primary hover:border-primary transition-all duration-300"
                    onClick={() => (window.location.href = '/')}
                    aria-label="Take Me Home">
                    Take Me Home
                </button>

        </div>
    );
}

export default NotFound;
