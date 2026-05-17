import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaChevronDown, FaUser } from "react-icons/fa";

let photo1 = null;
try { photo1 = new URL("../assets/photo1.jpg", import.meta.url).href; } catch (e) { photo1 = null; }

const techBadges = [
  { label: "Java", icon: "☕", cls: "orbit-badge-1" },
  { label: "React", icon: "⚛️", cls: "orbit-badge-2" },
  { label: "MySQL", icon: "🗄️", cls: "orbit-badge-3" },
  { label: "Spring", icon: "🍃", cls: "orbit-badge-4" },
];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e) => setMousePos({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 grid-bg overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-400/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -8}px)` }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 text-sm font-fira mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Available for Opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-orbitron font-black text-5xl lg:text-7xl leading-tight mb-4"
            >
              Hi, I'm{" "}
              <span className="shimmer-text">Rishi T</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-fira text-lg lg:text-xl text-gray-400 mb-6 flex items-center gap-2"
            >
              <span className="text-cyan-400">// </span>
              <TypeAnimation
                sequence={[
                  "Java Full Stack Developer", 2000,
                  "Backend Engineer", 2000,
                  "React Developer", 2000,
                  "Problem Solver", 2000,
                  "IT Student @ HCET", 2000,
                ]}
                speed={50}
                repeat={Infinity}
                className="text-white"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 text-base lg:text-lg leading-relaxed mb-4 max-w-xl"
            >
              Recent <span className="text-cyan-400 font-medium">B.Tech IT</span> graduate crafting scalable, elegant digital solutions. Passionate about building robust backends and intuitive frontends.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex items-center gap-2 text-gray-500 text-sm mb-8"
            >
              <FaMapMarkerAlt className="text-cyan-400" />
              <span>Cuddalore, Tamil Nadu</span>
              <span className="mx-2 text-gray-700">|</span>
              <span className="text-cyan-400 font-medium">CGPA: 9.03/10</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link to="projects" smooth duration={600}>
                <button className="btn-primary text-white flex items-center gap-2">
                  🚀 View Projects
                </button>
              </Link>
              <a href="/resume.pdf" download="Rishi_T_Resume.pdf" className="btn-outline flex items-center gap-2">
                📄 Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-3"
            >
              {[
                { icon: FaLinkedin, href: "https://linkedin.com/in/rishi-t-b79459294/", label: "LinkedIn" },
                { icon: FaGithub, href: "https://github.com/Rishiv31", label: "GitHub" },
                { icon: FaEnvelope, href: "mailto:rishithangamuthu@gmail.com", label: "Email" },
                { icon: FaPhone, href: "tel:+917094031593", label: "Phone" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="social-icon" aria-label={label}>
                  <Icon />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center relative"
            style={{ transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 12}px)` }}
          >
            {/* Glow behind image */}
            <div className="absolute w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute w-64 h-64 rounded-full bg-blue-500/10 blur-2xl" />

            {/* Orbit ring */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full hero-ring" style={{ inset: "-20px" }} />
              <div className="absolute rounded-full hero-ring-2" style={{ inset: "-40px" }} />

              {/* Floating tech badges */}
              {techBadges.map((b) => (
                <div
                  key={b.label}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${b.cls}`}
                >
                  <div className="glass-card px-3 py-1.5 flex items-center gap-1.5 text-xs font-semibold text-white whitespace-nowrap hover:!transform-none shadow-lg">
                    <span>{b.icon}</span> {b.label}
                  </div>
                </div>
              ))}

              {/* Photo */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-cyan-400/20 shadow-2xl animate-float relative z-10 flex items-center justify-center"
                style={{ boxShadow: "0 0 40px rgba(34,211,238,0.2), 0 0 80px rgba(59,130,246,0.1)", background: photo1 ? undefined : "linear-gradient(135deg, #0d1224, #1a2035)" }}>
                {photo1 ? (
                  <img
                    src={photo1}
                    alt="Rishi T - Java Full Stack Developer"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
                  />
                ) : null}
                <div style={{ display: photo1 ? "none" : "flex" }} className="w-full h-full items-center justify-center flex-col gap-2">
                  <span className="font-orbitron font-black text-5xl gradient-text">RT</span>
                  <span className="text-xs text-gray-500 font-fira">Add photo1.jpg to src/assets/</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs animate-bounce">
        <span>Scroll Down</span>
        <FaChevronDown className="text-cyan-400" />
      </div>
    </section>
  );
}
