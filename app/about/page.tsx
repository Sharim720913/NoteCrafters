"use client";

import "./about.css";

export default function About() {
  return (
    <main className="about-wrapper">

      {/* OUR VISION */}
      <section className="section-block">
        <h1 className="mix-title">
          <span className="black">OUR </span>
          <span className="red">VISION</span>
        </h1>

        <p className="para-text">
          To become a trusted academic-support platform that helps students learn
          confidently, think independently, and grow through understanding —
          not shortcuts.
        </p>
      </section>

      {/* OUR MISSION */}
      <section className="section-block">
        <h1 className="mix-title">
          <span className="black">OUR </span>
          <span className="red">MISSION</span>
        </h1>

        <p className="para-text">
          Our mission is to simplify learning by offering clear explanations,
          structured resources, and personalized academic support that
          strengthens skills and builds confidence.
        </p>
      </section>

      {/* OUR VALUES */}
      <section className="section-block">
        <h1 className="mix-title">
          <span className="black">OUR </span>
          <span className="red">VALUES</span>
        </h1>

        <p className="value-line"><b>1. Integrity:</b> Honest learning & responsible guidance.</p>
        <p className="value-line"><b>2. Empowerment:</b> Helping students grow independently.</p>
        <p className="value-line"><b>3. Clarity:</b> Simplifying complex ideas clearly.</p>
        <p className="value-line"><b>4. Reliability:</b> Timely, high-quality academic support.</p>
        <p className="value-line"><b>5. Growth Mindset:</b> Every learner can improve with the right guidance.</p>

      </section>

    </main>
  );
}
