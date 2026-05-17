import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./Objective";
import { FaBuilding, FaDatabase, FaNetworkWired, FaCogs, FaLock, FaCalendarAlt } from "react-icons/fa";

const highlights = [
  { icon: <FaDatabase />, text: "Database Design & Optimization" },
  { icon: <FaNetworkWired />, text: "Networking & Infrastructure" },
  { icon: <FaCogs />, text: "Backend System Development" },
  { icon: <FaLock />, text: "Role-Based Access Control" },
];

export default function Internship() {
  const [ref, inView] = useInView();
  return (
    <section id="internship" className="py-24 relative" style={{ background: "rgba(255,255,255,0.01)" }}>
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative">
        <SectionHeader tag="// 04" title="Internship" />
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-card cyber-border p-8 lg:p-10"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Logo/Icon */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl"
                style={{ background: "linear-gradient(135deg, #22d3ee18, #3b82f618)", border: "1px solid #22d3ee33" }}>
                <FaBuilding className="text-cyan-400" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-3 items-start justify-between mb-2">
                <h3 className="font-orbitron font-bold text-xl text-white">
                  Neyveli Lignite Corporation India Limited
                </h3>
                <span className="px-3 py-1 rounded-full text-xs font-bold text-green-300"
                  style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)" }}>
                  ✓ Completed
                </span>
              </div>
              <div className="text-cyan-400 font-fira text-sm mb-1">▸ Database & Networking Intern</div>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                <FaCalendarAlt className="text-blue-400" />
                <span>Duration: 1 Month</span>
                <span className="mx-1">|</span>
                <span className="font-fira text-xs text-gray-500">NLCIL — Neyveli, Tamil Nadu</span>
              </div>

              <div className="glow-line mb-6 opacity-30" />

              <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-widest">Key Areas</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl"
                    style={{ background: "rgba(34,211,238,0.05)", border: "1px solid rgba(34,211,238,0.12)" }}
                  >
                    <span className="text-cyan-400 text-lg">{h.icon}</span>
                    <span className="text-gray-300 text-sm">{h.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl" style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.15)" }}>
                <p className="text-gray-400 text-sm leading-relaxed">
                  🏭 Built the <span className="text-blue-400 font-medium">Beater Wheel Management System</span> — a backend application to automate and monitor mill operations at NLC India using Java, Spring Boot, and MySQL.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
