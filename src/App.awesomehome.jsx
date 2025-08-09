import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProfessionalHistory from "./pages/ProfessionalHistory";
import GitHubProjects from "./pages/GitHubProjects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <ThemeProvider>
            <div id="root-theme" data-theme="light">
                <Router>
                    <div className="bg-base-200 min-h-screen">
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/professional-history" element={<ProfessionalHistory />} />
                            <Route path="/github-projects" element={<GitHubProjects />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="*" element={<Home />} />
                        </Routes>
                        <Footer />
                    </div>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;