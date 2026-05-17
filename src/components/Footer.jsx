import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #22d3ee44, #3b82f644, #8b5cf644, transparent)" }} />
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="font-orbitron font-bold text-lg">
          <span className="text-cyan-400">&lt;</span>
          <span className="gradient-text">Rishi</span>
          <span className="text-cyan-400">.</span>
          <span className="text-purple-400">dev</span>
          <span className="text-cyan-400">/&gt;</span>
        </div>
        <p className="text-gray-500 text-sm flex items-center gap-1.5">
          Designed & Built with <FaHeart className="text-red-400 text-xs" /> by{" "}
          <span className="gradient-text font-semibold">Rishi T</span> · 2025
        </p>
        <div className="flex gap-3">
          {[
            { icon: FaLinkedin, href: "https://linkedin.com/in/rishi-t-b79459294/" },
            { icon: FaGithub, href: "https://github.com/Rishiv31" },
            { icon: FaEnvelope, href: "mailto:rishithangamuthu@gmail.com" },
          ].map(({ icon: Icon, href }, i) => (
            <a key={i} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              className="social-icon">
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
