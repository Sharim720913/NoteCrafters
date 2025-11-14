"use client";
import "./home.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="home-container">
      <section className="hero-section">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Turn Your <span>Ideas</span> Into <br /> Action with{" "}
            <span>NoteCrafters</span>.
          </h1>

          <p>
            Simple, elegant, and smart note-taking for your creative thoughts.  
            Build, organize, and act on your ideas — all in one place.
          </p>

          <div className="input-box">
            <input type="text" placeholder="Enter your email" />
            <button>Get Started</button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
