import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { FaBullseye } from "react-icons/fa";

export default function Objective() {
  const [ref, inView] = useInView();
  return (
    <section id="objective" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader tag="// 01" title="Objective" />
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-card cyber-border p-8 lg:p-12 flex flex-col lg:flex-row gap-8 items-start"
        >
          <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
            style={{ background: "linear-gradient(135deg,#22d3ee22,#3b82f622)", border: "1px solid #22d3ee33" }}>
            <FaBullseye className="text-cyan-400" />
          </div>
          <div>
            <h3 className="font-orbitron text-xl font-bold text-white mb-4">Career Vision</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Eager to apply foundational technical skills and a collaborative mindset in a professional environment that values{" "}
              <span className="text-cyan-400 font-semibold">innovation</span>,{" "}
              <span className="text-blue-400 font-semibold">learning</span>, and{" "}
              <span className="text-purple-400 font-semibold">growth</span>.
              Committed to contributing to strategic goals, enhancing team performance, and continuously developing both personally and professionally.
            </p>
            <div className="glow-line mt-6 w-full opacity-40" />
            <div className="flex flex-wrap gap-3 mt-5">
              {["Innovation", "Problem Solving", "Team Collaboration", "Continuous Learning"].map((v) => (
                <span key={v} className="skill-tag">{v}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function SectionHeader({ tag, title }) {
  return (
    <div className="mb-14 text-center">
      <div className="section-tag mb-2">{tag}</div>
      <h2 className="font-orbitron font-black text-4xl lg:text-5xl gradient-text mb-4">{title}</h2>
      <div className="glow-line w-24 mx-auto" />
    </div>
  );
}
