import React, { useState } from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1";

const roles = [
  {
    company: "Apple Inc.",
    title: "AppleCare Tier 2 Advisor",
    dates: "Jun 2022 — Mar 2024",
    note: "Promoted from Tier 1 based on technical performance and customer support excellence.",
    points: [
      "Diagnosed complex macOS, iOS, Apple ID, iCloud, MFA, activation, synchronization, and authentication issues.",
      "Owned cases from intake through resolution; performed root-cause analysis and wrote detailed escalation documentation.",
      "Maintained 90%+ CSAT and 95%+ QA while meeting productivity and service-level expectations.",
    ],
  },
  {
    company: "Intuit, Inc.",
    title: "TurboTax Product Support Expert",
    dates: "Feb 2021 — Apr 2022",
    note: "Remote support for customers using sensitive financial software on Windows and macOS.",
    points: [
      "Resolved installation, update, licensing, login, browser compatibility, and application-functionality issues.",
      "Used remote support and screen sharing to explain technical steps in plain language.",
      "Documented cases in Salesforce and updated internal knowledge-base content after product changes.",
    ],
  },
];

const skillGroups = [
  { name: "Platforms", items: ["Windows 10/11", "macOS", "iOS", "iPadOS"] },
  { name: "Support", items: ["Incident management", "Root cause analysis", "Case ownership", "Escalation management", "Knowledge documentation"] },
  { name: "Tools", items: ["Salesforce", "ServiceNow", "Microsoft 365", "Teams", "Slack", "Git", "TeamViewer"] },
  { name: "Networking & identity", items: ["TCP/IP", "DNS", "DHCP", "Wi-Fi diagnostics", "MFA", "Authentication", "Account recovery"] },
];

function Header() {
  return (
    <header className="shell nav">
      <a className="brand" href="#top">DC<span>.</span></a>
      <nav>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
      </nav>
      <a className="outline" href="https://github.com/DebugDJ" target="_blank" rel="noreferrer">GitHub ↗</a>
    </header>
  );
}

function Experience() {
  const [openRole, setOpenRole] = useState(0);

  return (
    <section id="experience" className="shell section">
      <p className="label">Experience</p>
      <h2>Technical support with ownership.</h2>
      <div className="roles">
        {roles.map((role, index) => {
          const isOpen = openRole === index;
          return (
            <article className="role" key={role.company}>
              <button
                className="role-head"
                onClick={() => setOpenRole(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <div>
                  <p className="company">{role.company}</p>
                  <h3>{role.title}</h3>
                </div>
                <div className="role-date">{role.dates}<span>{isOpen ? "−" : "+"}</span></div>
              </button>
              <p className="role-note">{role.note}</p>
              {isOpen && (
                <ul>
                  {role.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="shell section">
        <p className="label">Core skills</p>
        <h2>Tools and systems I work with.</h2>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article key={group.name}>
              <h3>{group.name}</h3>
              <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="shell hero">
          <p className="label">Technical Support Specialist</p>
          <h1>Darren Cooper Jr.</h1>
          <p className="summary">Tier 2 technical support specialist with 3+ years of experience supporting Apple and Intuit customers. I troubleshoot operating systems, SaaS applications, authentication, networking, and account-access issues — and communicate solutions clearly to people at every technical level.</p>
          <div className="quick">
            <div><strong>3+ years</strong><span>Remote support experience</span></div>
            <div><strong>90%+</strong><span>Customer satisfaction</span></div>
            <div><strong>95%+</strong><span>Quality assurance</span></div>
          </div>
        </section>
        <Experience />
        <Skills />
        <section id="education" className="shell education">
          <div>
            <p className="label">Education</p>
            <h2>Cybersecurity & Information Assurance</h2>
            <p>Bachelor of Science, in progress<br />Western Governors University · Millcreek, UT</p>
          </div>
          <div className="focus">
            <p className="label">Current focus</p>
            <p>Applying a security-first mindset to identity, access, customer data privacy, and technical troubleshooting.</p>
          </div>
        </section>
        <section className="contact">
          <div className="shell">
            <p className="label">Connect</p>
            <h2>View my work and professional profile on GitHub.</h2>
            <a href="https://github.com/DebugDJ" target="_blank" rel="noreferrer">github.com/DebugDJ ↗</a>
          </div>
        </section>
      </main>
      <footer className="shell">© 2026 Darren Cooper Jr. <span>Technical Support · Cybersecurity</span></footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
