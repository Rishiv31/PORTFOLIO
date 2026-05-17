import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Objective from "./components/Objective";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Internship from "./components/Internship";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBg from "./components/ParticlesBg";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div className={`relative min-h-screen bg-navy-900 transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}>
      <ParticlesBg />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Objective />
        <Skills />
        <Projects />
        <Internship />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
