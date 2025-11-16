"use client";

import { useEffect } from "react";
import "./Home.css";
import { motion } from "framer-motion";

export default function Home() {

  // ===== Fade-in Animation =====
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <main className="home-container">

      {/* ================= HERO SECTION ================= */}
      <section className="hero-section">

        <div className="hero-left fade-in">
          <h1 className="fade-in">
            Craft Smarter Notes with <span>NoteCraft</span>
          </h1>

          <p className="fade-in">
            Capture ideas, stay organized, and bring your thoughts to life — all in one place.
          </p>

          <button className="fade-in start-btn">Start Now</button>
        </div>

        {/* ❗ RIGHT IMAGE HIDE (we use background image in CSS) */}
        <div className="hero-right fade-in">
          <img src="/hero-bg.png" alt="Hero" className="hero-image" />
        </div>

      </section>

      {/* ================= FEATURES SECTION ================= */}
      <motion.section
        className="features"
        id="features"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Why Choose NoteCraft?</h2>

        <div className="feature-grid">

          <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
            <img src="/smartnotes.png" alt="Smart Notes" />
            <h3>Smart Notes</h3>
            <p>Organize, format, and find notes instantly with intelligent tools.</p>
          </motion.div>

          <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
            <img src="/workspace.png" alt="Workspace" />
            <h3>Seamless Workspace</h3>
            <p>Keep your projects structured and collaborate effortlessly.</p>
          </motion.div>

          <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
            <img src="/cloud.png" alt="Cloud Sync" />
            <h3>Cloud Sync</h3>
            <p>Access your notes from anywhere — safely stored in the cloud.</p>
          </motion.div>

          <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
            <img src="/focus.png" alt="Focus Mode" />
            <h3>Focus Mode</h3>
            <p>Eliminate distractions and focus on writing your best ideas.</p>
          </motion.div>

        </div>
      </motion.section>

      {/* ================= CTA SECTION ================= */}
      <motion.section
        className="cta"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Start Crafting Smarter Notes Today</h2>
        <p>Join thousands of creators using NoteCraft to stay productive.</p>
        <button className="cta-btn">Get Started for Free</button>
      </motion.section>

    </main>
  );
}
