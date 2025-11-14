"use client";
import React, { useState } from "react";
import "./contact.css";
import { Mail, Phone, MapPin } from "lucide-react"; // ✅ for icons

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting NoteCrafters! 🎉");
    setFormData({ name: "", email: "", category: "", message: "" });
  };

  return (
    <main className="contact-main">
      <div className="contact-wrapper">
        {/* LEFT SIDE - INFO SECTION */}
        <div className="contact-info">
          <h2>Get in Touch 📩</h2>
          <p>
            Whether you're a student, teacher, or institution — we’d love to hear from you.
            Reach out to NoteCrafters and let's craft something amazing together!
          </p>

          <div className="info-box">
            <div className="info-item">
              <Phone className="icon" /> <span>+91 98765 43210</span>
            </div>
            <div className="info-item">
              <Mail className="icon" /> <span>support@notecrafters.in</span>
            </div>
            <div className="info-item">
              <MapPin className="icon" /> <span>Greater Noida, Uttar Pradesh, India</span>
            </div>
          </div>

          <div className="categories">
            <h4>We work with:</h4>
            <ul>
              <li>🏫 Schools — for student note management</li>
              <li>🎓 Colleges — for collaborative study resources</li>
              <li>💼 Professionals — for productivity notes</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE - FORM SECTION */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="school">School</option>
              <option value="college">College</option>
              <option value="other">Other</option>
            </select>

            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </main>
  );
}
