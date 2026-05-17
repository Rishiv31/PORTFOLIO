import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./Objective";
import {
  FaCode, FaPalette, FaServer, FaTools, FaUsers, FaLanguage,
  FaJava, FaJs, FaDatabase, FaHtml5, FaCss3Alt, FaReact,
  FaGitAlt, FaGithub
} from "react-icons/fa";
import { SiSpringboot, SiPostman, SiMysql } from "react-icons/si";
import { MdSecurity, MdNetworkWifi } from "react-icons/md";

const skillCategories = [
  {
    icon: <FaCode />,
    title: "Programming Languages",
    color: "#22d3ee",
    skills: [
      { name: "Java", icon: <FaJava />, level: 85 },
      { name: "JavaScript", icon: <FaJs />, level: 75 },
      { name: "PL/SQL", icon: <FaDatabase />, level: 70 },
    ],
  },
  {
    icon: <FaPalette />,
    title: "Frontend",
    color: "#3b82f6",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, level: 90 },
      { name: "CSS3", icon: <FaCss3Alt />, level: 85 },
      { name: "ReactJS", icon: <FaReact />, level: 75 },
    ],
  },
  {
    icon: <FaServer />,
    title: "Backend & Database",
    color: "#8b5cf6",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot />, level: 80 },
      { name: "REST API", icon: <MdNetworkWifi />, level: 82 },
      { name: "JWT", icon: <MdSecurity />, level: 75 },
      { name: "MySQL", icon: <SiMysql />, level: 80 },
    ],
  },
  {
    icon: <FaTools />,
    title: "Tools & Deployment",
    color: "#06b6d4",
    skills: [
      { name: "Git", icon: <FaGitAlt />, level: 80 },
      { name: "GitHub", icon: <FaGithub />, level: 82 },
      { name: "Postman", icon: <SiPostman />, level: 78 },
    ],
  },
  {
    icon: <FaUsers />,
    title: "Soft Skills",
    color: "#10b981",
    tags: ["🤝 Teamwork", "💬 Communication", "🧩 Problem Solving", "🔄 Adaptability", "📚 Learning Agility"],
  },
  {
    icon: <FaLanguage />,
    title: "Languages",
    color: "#f59e0b",
    tags: ["🌐 English", "🇮🇳 Tamil"],
  },
];

import Tilt from "react-parallax-tilt";

export default function Skills() {
  const [ref, inView] = useInView();
  return (
    <section id="skills" className="py-24 relative" style={{ background: "rgba(255,255,255,0.01)" }}>
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeader tag="// 02" title="Skills" />
        <div ref={ref} className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500} className="h-full">
                <div className="glass-card cyber-border p-6 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                      style={{ background: `${cat.color}18`, color: cat.color, border: `1px solid ${cat.color}33` }}>
                      {cat.icon}
                    </div>
                    <h3 className="font-orbitron font-bold text-sm text-white">{cat.title}</h3>
                  </div>

                  {cat.skills ? (
                    <div className="space-y-4">
                      {cat.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-2 text-sm text-gray-300">
                              <span style={{ color: cat.color }}>{skill.icon}</span>
                              {skill.name}
                            </div>
                            <span className="text-xs font-fira" style={{ color: cat.color }}>{skill.level}%</span>
                          </div>
                          <div className="progress-bar">
                            <motion.div
                              className="progress-fill"
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : {}}
                              transition={{ delay: i * 0.1 + 0.4, duration: 1.2, ease: "easeOut" }}
                              style={{ background: `linear-gradient(90deg, ${cat.color}, #3b82f6)` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {cat.tags.map((tag) => (
                        <span key={tag} className="skill-tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
