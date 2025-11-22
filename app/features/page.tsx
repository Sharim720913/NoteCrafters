"use client";
import React from "react";
import "./features.css";
import Image from "next/image";

export default function Features() {
  const features = [
    {
      title: "Smart Notes",
      desc: "Capture your thoughts instantly and keep them organized in one place.",
      img: "/smartnotes.png",
    },
    {
      title: "Workspace Sync",
      desc: "Seamlessly sync your notes across devices for a fluid experience.",
      img: "/workspace.png",
    },
    {
      title: "Cloud Backup",
      desc: "Never lose your data again — we auto-save everything securely in the cloud.",
      img: "/cloud.png",
    },
    {
      title: "Focus Mode",
      desc: "Stay distraction-free with a minimal writing interface that boosts clarity.",
      img: "/focus.png",
    },
    {
      title: "Workspace Sync",
      desc: "Seamlessly sync your notes across devices for a fluid experience.",
      img: "/workspace.png",
    },
    {
      title: "Cloud Backup",
      desc: "Never lose your data again — we auto-save everything securely in the cloud.",
      img: "/cloud.png",
    },
    {
      title: "Focus Mode",
      desc: "Stay distraction-free with a minimal writing interface that boosts clarity.",
      img: "/focus.png",
    },
  ];

  return (
    <div className="features-container">
      <h1 className="features-title">✨ Powerful Features of NoteCrafters</h1>
      <p className="features-subtitle">
        Everything you need to create, organize, and master your notes.
      </p>

      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <Image
              src={item.img}
              alt={item.title}
              width={300}
              height={300}
              className="feature-image"
            />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
