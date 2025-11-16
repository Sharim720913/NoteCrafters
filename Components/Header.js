"use client";
import React, { useState, useEffect } from "react";
import "./Header.css";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".navbar");
      if (window.scrollY > 80) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar">
      <div className="logo">
  {/* <img src="/NoteCraft Logo.png" alt="NoteCraft Logo" className="logo-img" /> */}
  <h2 className="logo-text">
    <span className="text-red">Note</span>
    <span className="text-black">Craft</span>
  </h2>
</div>


      {/* ===== Navigation Links ===== */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="/" className="nav-home">
          Home
        </a>
        <a href="/features" className="nav-features">
          Features
        </a>
        <a href="/about" className="nav-about">
          About
        </a>
        <a href="/contact" className="nav-contact">
          Contact
        </a>
      </nav>

      

      {/* ===== Menu Button (for mobile) ===== */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>
    </header>
  );
}

