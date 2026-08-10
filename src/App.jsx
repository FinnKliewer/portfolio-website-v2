import React, { Suspense, useEffect } from "react";
import { domAnimation, LazyMotion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { pageRoutes, scheduleIdleRoutePreload } from "./routes";

function App() {
    useEffect(() => scheduleIdleRoutePreload(), []);

    return (
        <LazyMotion features={domAnimation} strict>
            <Router>
                <div className={"bg-base-200"}>
                    <Navbar />
                    <Suspense fallback={<main aria-label="Loading page" style={{ minHeight: "100vh" }} />}>
                        <Routes>
                            {pageRoutes.map(({ path, Component }) => (
                                <Route key={path} path={path} element={<Component />} />
                            ))}
                        </Routes>
                    </Suspense>
                    <Footer />
                </div>
            </Router>
        </LazyMotion>
    );
}

export default App;
