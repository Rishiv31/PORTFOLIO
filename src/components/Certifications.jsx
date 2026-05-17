import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./Objective";
import { FaCloud, FaRobot, FaAward, FaCheckCircle } from "react-icons/fa";

const certs = [
  {
    icon: <FaCloud />,
    title: "Introduction to Cloud Computing",
    issuer: "NPTEL",
    color: "#22d3ee",
    badge: "Verified Certificate",
    desc: "Completed a structured course on cloud fundamentals, deployment models, service categories, and cloud infrastructure.",
  },
  {
    icon: <FaRobot />,
    title: "Prompt Engineering for ChatGPT",
    issuer: "Online Certification",
    color: "#8b5cf6",
    badge: "Verified Certificate",
    desc: "Mastered advanced prompt techniques, chain-of-thought reasoning, and AI interaction patterns for productivity.",
  },
];

export default function Certifications() {
  const [ref, inView] = useInView();
  return (
    <section id="certifications" className="py-24 relative" style={{ background: "rgba(255,255,255,0.01)" }}>
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative">
        <SectionHeader tag="// 06" title="Certifications" />
        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="glass-card cyber-border p-7 relative overflow-hidden group"
            >
              {/* Glow top border */}
              <div className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }} />
              {/* Glow bottom-right blob */}
              <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 pointer-events-none"
                style={{ background: cert.color }} />

              <div className="flex items-start gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}30` }}>
                  {cert.icon}
                </div>
                <div>
                  <h3 className="font-orbitron font-bold text-base text-white leading-snug mb-1">{cert.title}</h3>
                  <div className="font-fira text-sm" style={{ color: cert.color }}>▸ {cert.issuer}</div>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-5">{cert.desc}</p>

              <div className="flex items-center gap-2">
                <FaCheckCircle style={{ color: cert.color }} />
                <span className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: `${cert.color}12`, color: cert.color, border: `1px solid ${cert.color}25` }}>
                  {cert.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
