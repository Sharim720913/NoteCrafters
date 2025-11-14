"use client";
import React, { useState } from "react";
import "./Header.css";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <h2>
          <span className="logo-red">Note</span>
          <span className="logo-black">Crafters</span>
        </h2>
      </div>

      {/* ===== Navigation Links ===== */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="/" className="nav-home">Home</a>
        <a href="/features" className="nav-features">Features</a>
        <a href="/about" className="nav-about">About</a>
        <a href="/contact" className="nav-contact">Contact</a>
      </nav>

      {/* ===== Menu Button (for mobile) ===== */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>
    </header>
  );
}


