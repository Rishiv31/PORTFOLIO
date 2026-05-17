import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-50 w-11 h-11 rounded-xl flex items-center justify-center text-white transition-all duration-300 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      style={{ background: "linear-gradient(135deg, #22d3ee, #3b82f6)", boxShadow: "0 0 20px rgba(34,211,238,0.4)" }}
    >
      <FaChevronUp />
    </button>
  );
}
