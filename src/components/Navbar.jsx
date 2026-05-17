import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  { label: "Home", to: "home" },
  { label: "Objective", to: "objective" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Internship", to: "internship" },
  { label: "Education", to: "education" },
  { label: "Certifications", to: "certifications" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3 bg-navy-900/90 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-black/50" : "py-5 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="home" smooth duration={600} className="cursor-pointer">
          <span className="font-orbitron font-bold text-xl">
            <span className="text-cyan-400">&lt;</span>
            <span className="gradient-text">Rishi</span>
            <span className="text-cyan-400">.</span>
            <span className="text-purple-400">dev</span>
            <span className="text-cyan-400">/&gt;</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={600}
              spy
              onSetActive={() => setActive(item.to)}
              className={`nav-link cursor-pointer ${active === item.to ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <a href="/resume.pdf" download="Rishi_T_Resume.pdf" className="btn-primary text-white flex items-center gap-2 text-sm relative group overflow-hidden">
            <span className="relative z-10">Download CV</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-2xl text-cyan-400 p-2" aria-label="Toggle menu">
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-400 overflow-hidden ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="mx-6 mt-3 mb-4 glass-card p-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={600}
              onClick={() => setOpen(false)}
              className="nav-link cursor-pointer py-2 px-3 rounded-lg hover:bg-cyan-400/10 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
