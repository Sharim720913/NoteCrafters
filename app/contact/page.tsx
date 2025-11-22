"use client";

import Image from "next/image";
import "./contact.css";

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-shell">
        {/* HEADER */}
        <header className="contact-header-row">
          <div>
            <h1 className="contact-heading">
              CONTACT <span>US</span>
            </h1>
            <p className="contact-tagline">
              Our friendly team would love to hear from you. Tell us how we can help.
            </p>
          </div>
        </header>

        {/* MAIN TWO-COLUMN GRID */}
        <div className="contact-main-grid">
          {/* LEFT: 3D IMAGE CARD */}
          <div className="contact-image-column">
            <div className="contact-image-card">
              <Image
                src="/ContactImage.png"
                alt="NoteCraft Contact Illustration"
                width={700}
                height={500}
                priority
                className="contact-hero-img"
              />
            </div>
          </div>

          {/* RIGHT: FORM CARD */}
          <div className="contact-form-column">
            <div className="contact-form-card">
              <h2 className="form-title">Get in touch</h2>
              <p className="form-subtitle">
                Fill out the form and we’ll get back to you within 24 hours.
              </p>

              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" type="text" placeholder="Enter your name" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      type="text"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    placeholder="Tell us briefly what you need help with…"
                  />
                </div>

                <button type="submit" className="send-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* CONTACT INFO + HOURS */}
        <section className="contact-info-section">
          <div className="info-block">
            <h3>Contact Information</h3>
            <p>📧 support@notecraft.com</p>
            <p>📞 +91 9876543210</p>
            <p>📍 New Delhi, India</p>
          </div>

          <div className="info-block">
            <h3>Business Hours</h3>
            <p>
              <strong>Mon–Fri:</strong> 9am – 8pm
            </p>
            <p>
              <strong>Saturday:</strong> 9am – 6pm
            </p>
            <p>
              <strong>Sunday:</strong> Closed
            </p>
          </div>
        </section>

        {/* FAKE MAP CARD (NO API KEY NEEDED) */}
        <section className="contact-map-card">
          <div className="map-header">
            <span className="map-dot" />
            <span className="map-title">NoteCraft Office Location (Preview)</span>
          </div>

          <div className="map-body">
            <div className="map-grid" />
            <div className="map-marker">
              <span>📍</span>
              <p>New Delhi, India</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
