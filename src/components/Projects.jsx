import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./Objective";
import { FaLinkedin, FaGithub, FaExternalLinkAlt, FaIndustry, FaImages, FaCar, FaTrophy, FaCheckCircle } from "react-icons/fa";

const projects = [
  {
    id: "beater-wheel",
    icon: <FaIndustry />,
    title: "Beater Wheel Management System",
    badge: "Internship Project · NLC India",
    color: "#22d3ee",
    description: "Developed a backend system to automate mill operations at NLC India, enabling precise time tracking, runtime calculation, and real-time status updates.",
    features: [
      "Automated mill operations with real-time status tracking",
      "Optimized database schemas for lifecycle tracking & rotor mapping",
      "Role-based access control for improved data integrity",
      "Operational efficiency improvements via RBAC implementation",
    ],
    tech: ["Java", "Spring Boot", "MySQL", "REST API", "JWT"],
    links: {
      linkedin: "https://linkedin.com/in/rishi-t-b79459294/",
      github: "https://github.com/Rishiv31",
    },
    featured: false,
  },
  {
    id: "gallery-xplore",
    icon: <FaImages />,
    title: "GalleryXplore",
    badge: "Image Gallery Platform",
    color: "#3b82f6",
    description: "Designed intuitive interfaces for an image gallery website with smooth browsing and interaction. Responsive across all devices with a clean, accessible design.",
    features: [
      "Responsive layout using HTML5 & CSS3",
      "Seamless cross-device browsing experience",
      "Clean UI focused on accessibility and UX",
    ],
    tech: ["HTML5", "CSS3", "JavaScript"],
    links: {
      linkedin: "https://linkedin.com/in/rishi-t-b79459294/",
      github: "https://github.com/Rishiv31",
    },
    featured: false,
  },
  {
    id: "rent-easee",
    icon: <FaCar />,
    title: "RentEasee",
    badge: "YUKTHI Innovation Challenge 2024 · Team Project",
    color: "#8b5cf6",
    description: "A smart vehicle rental platform with intuitive UX design, streamlined booking flow, and compliance features including KYC and GPS integration.",
    features: [
      "Wireframes & prototypes designed in Figma/Canva",
      "User research & competitive analysis conducted",
      "KYC, GPS & legal safety compliance integrated",
      "Booking flow optimization via UX research",
    ],
    tech: ["Figma", "Canva", "UX Research", "Product Design"],
    links: {
      linkedin: "https://linkedin.com/in/rishi-t-b79459294/",
      github: "https://github.com/Rishiv31",
    },
    featured: true,
    featuredLabel: "🏆 Innovation Challenge",
  },
];

import Tilt from "react-parallax-tilt";

export default function Projects() {
  const [ref, inView] = useInView();
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader tag="// 03" title="Projects" />
        <div ref={ref} className="grid lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7 }}
            >
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500} className="h-full">
                <div className={`glass-card cyber-border p-6 flex flex-col relative overflow-hidden group h-full ${p.featured ? "border-purple-500/30" : ""}`}>
                  {p.featured && (
                    <div className="absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded-full text-yellow-300"
                      style={{ background: "rgba(234,179,8,0.15)", border: "1px solid rgba(234,179,8,0.4)" }}>
                      {p.featuredLabel}
                    </div>
                  )}

                  {/* Glow line top */}
                  <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }} />

                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                      style={{ background: `${p.color}18`, color: p.color, border: `1px solid ${p.color}33` }}>
                      {p.icon}
                    </div>
                    <div className="flex gap-2">
                      <a href={p.links.linkedin} target="_blank" rel="noreferrer"
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all border border-white/5">
                        <FaLinkedin className="text-sm" />
                      </a>
                      <a href={p.links.github} target="_blank" rel="noreferrer"
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all border border-white/5">
                        <FaGithub className="text-sm" />
                      </a>
                    </div>
                  </div>

                  <h3 className="font-orbitron font-bold text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">{p.title}</h3>

                  <span className="text-xs font-fira mb-3 inline-block" style={{ color: p.color }}>▸ {p.badge}</span>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.description}</p>

                  <ul className="space-y-2 mb-5 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-gray-400">
                        <FaCheckCircle className="mt-0.5 flex-shrink-0" style={{ color: p.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {p.tech.map((t) => (
                      <span key={t} className="px-2 py-1 rounded-md text-xs font-fira font-medium"
                        style={{ background: `${p.color}12`, color: p.color, border: `1px solid ${p.color}25` }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
