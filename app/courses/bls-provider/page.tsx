import type { Metadata } from "next";
import "./bls-provider.css";

export const metadata: Metadata = {
  title: "BLS Provider Course | FirstHand CPR Training",
  description:
    "BLS Provider training for healthcare professionals taught by firefighters, paramedics, and EMTs with real emergency-response experience.",
  alternates: { canonical: "/courses/bls-provider" },
};

const topics = [
  "High-quality CPR for adults, children, and infants",
  "Recognition of life-threatening emergencies",
  "Use of an Automated External Defibrillator (AED)",
  "Effective ventilations and airway management",
  "Relief of choking for adults, children, and infants",
  "Team dynamics and high-performance CPR",
  "Two-rescuer and multi-rescuer CPR",
];

const coverage = [
  "High-performance CPR",
  "Team dynamics and coordinated response",
  "Written and practical testing",
];

const materials = [
  "One-way valves and masks",
  "Required workbooks",
  "Student manuals and course materials",
];

export default function BlsProviderPage() {
  return (
    <main className="bls-page">
      <header className="bls-header">
        <a className="bls-home-link" href="/" aria-label="Return to FirstHand CPR Training homepage">
          <img src="/firsthand-banner-logo.png" alt="FirstHand CPR Training" />
        </a>
        <nav aria-label="Course page navigation">
          <a href="/#classes">Course Options</a>
          <a href="/#groups">Group Training</a>
          <a href="/#faq">FAQ</a>
        </nav>
      </header>

      <section className="bls-hero">
        <div className="bls-title-block">
          <p className="bls-eyebrow">Healthcare Professionals</p>
          <h1>BLS Provider Course</h1>
        </div>
        <div className="bls-description">
          <p>
            Focused, hands-on training designed to prepare healthcare providers
            to respond confidently as part of a high-performance team.
          </p>
          <p>
            This course follows current American Heart Association guidelines
            and emphasizes team dynamics, effective communication, and real-world application.
          </p>
        </div>
        <p className="bls-mission">
          FirstHand courses are taught by firefighters, paramedics, and EMT&apos;s who use their
          experience in emergency response to bring confidence and knowledge to every course.
        </p>
      </section>

      <div className="bls-red-rule" />

      <section className="bls-topics">
        <div>
          <h2>Topics Covered in Class</h2>
          <ul>{topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
        </div>
        <div className="bls-request-wrap">
          <a className="bls-request-button" href="/#contact">
            Request BLS<br />Provider Training
          </a>
        </div>
      </section>

      <section className="bls-facts" aria-label="BLS Provider course details">
        <div className="bls-fact bls-fact-cost">
          <span>Course Cost</span>
          <strong>$70</strong>
        </div>
        <div className="bls-fact">
          <span>Typical Runtime</span>
          <strong>3 hours</strong>
        </div>
        <div className="bls-list-block">
          <span>Course Coverage</span>
          <ul>{coverage.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div className="bls-list-block">
          <span>Materials Included</span>
          <ul>{materials.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="bls-service-area">
        <h2>Areas We Serve</h2>
        <div>
          <span>Knox County</span>
          <span>Blount County</span>
          <span>Anderson County</span>
          <span>Loudon County</span>
        </div>
      </section>

      <footer className="bls-footer">
        <p>CPR <i>•</i> AED <i>•</i> First Aid <i>•</i> BLS</p>
        <p>FirstHand CPR Training LLC</p>
      </footer>
    </main>
  );
}
