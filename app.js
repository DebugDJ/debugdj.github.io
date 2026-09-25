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
  { name: "Tools", items: ["Salesforce", "Microsoft 365", "Teams", "Slack", "Git", "TeamViewer"] },
  { name: "Networking & identity", items: ["TCP/IP", "DNS", "DHCP", "Wi-Fi diagnostics", "MFA", "Authentication", "Account recovery"] },
];

const developmentAreas = [
  {
    name: "Front-end foundations",
    description: "Building semantic, responsive pages with HTML and CSS, with attention to layout, accessibility, and clear visual hierarchy.",
    tools: ["HTML", "CSS", "Responsive design", "Accessibility"],
  },
  {
    name: "React interfaces",
    description: "Creating reusable UI components and interactive experiences with React, JavaScript, and browser APIs.",
    tools: ["React", "JavaScript", "Components", "State"],
  },
  {
    name: "Workflow & delivery",
    description: "Using Git and developer tools to iterate on code, troubleshoot issues, and keep projects organized.",
    tools: ["Git", "GitHub", "Debugging", "Chrome DevTools"],
  },
];

function Header() {
  return (
    <header className="shell nav">
      <span className="site-name">Darren Cooper Jr.</span>
      <nav>
        <a href="#experience">Experience</a>
        <a href="#development">Development</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>
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

function Development() {
  return (
    <section id="development" className="shell section development">
      <p className="label">Development</p>
      <h2>Learning and building for the web.</h2>
      <div className="development-grid">
        {developmentAreas.map((area) => (
          <article key={area.name}>
            <h3>{area.name}</h3>
            <p>{area.description}</p>
            <div className="development-tools">
              {area.tools.map((tool) => <span key={tool}>{tool}</span>)}
            </div>
          </article>
        ))}
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

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    // Replace this address with the email where you want inquiries sent.
    window.location.href = `mailto:dncrjr@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="contact">
      <div className="shell contact-content">
        <div>
          <p className="label">Contact</p>
          <h2>Let’s talk.</h2>
          <p>Have a role or opportunity in mind? Send a message and I’ll follow up.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>
          <button type="submit">Send message</button>
        </form>
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
          <p className="label">Technical Support Specialist · Cybersecurity Student</p>
          <h1>Darren Cooper Jr.</h1>
          <p className="summary">Tier 2 technical support specialist and Cybersecurity &amp; Information Assurance student with 3+ years of experience supporting Apple and Intuit customers. I troubleshoot operating systems, SaaS applications, authentication, networking, and account-access issues — and communicate solutions clearly to people at every technical level.</p>
          <div className="quick">
            <div><strong>3+ years</strong><span>Remote support experience</span></div>
            <div><strong>90%+</strong><span>Customer satisfaction</span></div>
            <div><strong>95%+</strong><span>Quality assurance</span></div>
          </div>
        </section>
        <Experience />
        <Development />
        <Skills />
        <section id="education" className="shell education">
          <div>
            <p className="label">Education</p>
            <h2>Cybersecurity & Information Assurance Student</h2>
            <p>Bachelor of Science, in progress<br />Western Governors University · Millcreek, UT</p>
          </div>
          <div className="focus">
            <p className="label">Current focus</p>
            <p>Applying a security-first mindset to identity, access, customer data privacy, and technical troubleshooting.</p>
          </div>
        </section>
        <Contact />
      </main>
      <footer className="shell">© 2026 Darren Cooper Jr. <span>Technical Support · Cybersecurity · Customer Service</span></footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
