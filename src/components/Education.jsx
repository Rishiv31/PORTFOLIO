import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./Objective";
import { FaGraduationCap, FaSchool, FaBookOpen, FaCalendarAlt, FaStar } from "react-icons/fa";

const educations = [
  {
    icon: <FaGraduationCap />,
    degree: "B.Tech Information Technology",
    institution: "Hindusthan College of Engineering and Technology",
    location: "Coimbatore",
    year: "2022 – 2026",
    score: "CGPA: 9.03/10",
    color: "#22d3ee",
    current: false,
    graduated: true,
  },
  {
    icon: <FaSchool />,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Green Tech Matriculation Higher Secondary School",
    location: "Cuddalore",
    year: "2022",
    score: "87.5%",
    color: "#3b82f6",
    current: false,
  },
  {
    icon: <FaBookOpen />,
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Maharishi Vidhya Mandir Higher Secondary School",
    location: "Cuddalore",
    year: "2020",
    score: "94.4%",
    color: "#8b5cf6",
    current: false,
  },
];

export default function Education() {
  const [ref, inView] = useInView();
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader tag="// 05" title="Education" />
        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-7 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "linear-gradient(180deg, #22d3ee, #3b82f6, #8b5cf6)" }} />

          <div className="space-y-8">
            {educations.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="flex gap-6 items-start"
              >
                {/* Dot */}
                <div className="hidden sm:flex flex-shrink-0 w-14 justify-center">
                  <div className="w-4 h-4 rounded-full mt-6 z-10 relative"
                    style={{ background: edu.color, boxShadow: `0 0 12px ${edu.color}` }} />
                </div>

                {/* Card */}
                <div className="flex-1 glass-card cyber-border p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 bottom-0 w-1 rounded-l-2xl"
                    style={{ background: edu.color }} />

                  <div className="flex flex-wrap gap-3 items-start justify-between mb-3 pl-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                        style={{ background: `${edu.color}18`, color: edu.color, border: `1px solid ${edu.color}33` }}>
                        {edu.icon}
                      </div>
                      <div>
                        <h3 className="font-orbitron font-bold text-base text-white leading-tight">{edu.degree}</h3>
                        <div className="text-gray-400 text-sm mt-0.5">{edu.institution}</div>
                        <div className="text-gray-600 text-xs">{edu.location}</div>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="px-3 py-1 rounded-full text-xs font-bold mb-1"
                        style={{ background: `${edu.color}15`, color: edu.color, border: `1px solid ${edu.color}30` }}>
                        <FaStar className="inline mr-1" />{edu.score}
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 text-xs justify-end">
                        <FaCalendarAlt className="text-xs" /> {edu.year}
                      </div>
                    </div>
                  </div>

                  {edu.current && (
                    <div className="pl-3 mt-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-green-300"
                        style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.25)" }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Currently Pursuing
                      </span>
                    </div>
                  )}
                  {edu.graduated && (
                    <div className="pl-3 mt-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-cyan-300"
                        style={{ background: "rgba(34,211,238,0.12)", border: "1px solid rgba(34,211,238,0.3)" }}>
                        🎓 Graduated — 2026
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
