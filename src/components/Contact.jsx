import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./Objective";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const contacts = [
  { icon: <FaPhone />, label: "Phone", value: "+91 7094031593", href: "tel:+917094031593", color: "#22d3ee" },
  { icon: <FaEnvelope />, label: "Email", value: "rishithangamuthu@gmail.com", href: "mailto:rishithangamuthu@gmail.com", color: "#3b82f6" },
  { icon: <FaLinkedin />, label: "LinkedIn", value: "linkedin.com/in/rishi-t-b79459294", href: "https://linkedin.com/in/rishi-t-b79459294/", color: "#0ea5e9", external: true },
  { icon: <FaGithub />, label: "GitHub", value: "github.com/Rishiv31", href: "https://github.com/Rishiv31", color: "#8b5cf6", external: true },
  { icon: <FaMapMarkerAlt />, label: "Location", value: "Cuddalore, Tamil Nadu", color: "#10b981" },
];

export default function Contact() {
  const [ref, inView] = useInView();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n---\nSender Email: ${email}`);
    
    window.location.href = `mailto:rishithangamuthu@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader tag="// 07" title="Get In Touch" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center text-gray-400 text-lg mb-12 max-w-2xl mx-auto"
        >
          I'm currently open to opportunities. Whether you have a question or just want to say hi —{" "}
          <span className="text-cyan-400 font-medium">my inbox is always open!</span>
        </motion.p>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {contacts.map((c, i) => {
            const Wrapper = c.href ? motion.a : motion.div;
            const extraProps = c.href
              ? { href: c.href, target: c.external ? "_blank" : undefined, rel: c.external ? "noreferrer" : undefined }
              : {};
            return (
              <Wrapper
                key={c.label}
                {...extraProps}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="contact-card glass-card cyber-border no-underline group"
                style={{ textDecoration: "none" }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${c.color}15`, color: c.color, border: `1px solid ${c.color}30`,
                    boxShadow: `0 0 0px ${c.color}` }}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 0 20px ${c.color}55`}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}
                >
                  {c.icon}
                </div>
                <div className="font-orbitron text-xs font-bold uppercase tracking-widest text-gray-500">{c.label}</div>
                <div className="text-sm text-gray-300 group-hover:text-white transition-colors text-center break-all">{c.value}</div>
              </Wrapper>
            );
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <form 
            onSubmit={handleSubmit}
            className="glass-card cyber-border p-8 flex flex-col gap-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-gray-400 font-fira">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  className="bg-navy-900/50 border border-cyan-400/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-gray-400 font-fira">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  className="bg-navy-900/50 border border-cyan-400/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-gray-400 font-fira">Message</label>
              <textarea 
                name="message" 
                id="message" 
                rows="4" 
                required 
                className="bg-navy-900/50 border border-cyan-400/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                placeholder="Hello Rishi, I'd like to discuss an opportunity..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="btn-primary text-white flex items-center justify-center gap-3 text-base px-8 py-4 mt-2"
            >
              <FaEnvelope /> Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
