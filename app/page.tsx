"use client";

/* eslint-disable @next/next/no-img-element -- static GitHub Pages assets do not use an image optimizer */

import { useState } from "react";

const experience = [
  {
    company: "Indeed",
    mark: "I",
    location: "Bengaluru, India",
    period: "Sep 2022 - Present",
    role: "Software Engineer II",
    intro:
      "Leading backend and AI-focused work where product judgment, system reliability, and team execution meet.",
    highlights: [
      "Lead a team delivering high-impact projects across multiple domains, including an AI initiative that applies advanced machine learning models to product capabilities.",
      "Mentor junior engineers through design reviews, ownership growth, and practical production decision-making.",
      "Drive platform performance and user-engagement improvements while aligning engineering execution with strategic goals.",
    ],
    stack: ["Java", "Applied AI", "Distributed systems", "Technical leadership"],
    current: true,
  },
  {
    company: "Grab",
    mark: "G",
    location: "Singapore",
    period: "Jun 2019 - Sep 2022",
    role: "Senior Backend Engineer",
    intro:
      "Built core payment infrastructure for one of Southeast Asia's largest superapps.",
    highlights: [
      "Built the GrabPay debit-card platform from the ground up as one of the project's first engineers.",
      "Designed scalable, high-volume, low-latency architecture and developed services across Grab's payment ecosystem.",
      "Led a team of three engineers and owned system design, business requirements, engineering quality, and code reviews.",
    ],
    stack: ["Go", "Payments", "Low latency", "High throughput"],
  },
  {
    company: "Works Applications",
    mark: "W",
    location: "Singapore",
    period: "Oct 2016 - Sep 2019",
    role: "Software Engineer -> Senior Software Engineer",
    intro:
      "Modernized enterprise commerce and inventory systems for a Japanese ERP platform.",
    highlights: [
      "Designed serverless architecture during an on-premise to AWS migration using Lambda, DynamoDB, S3, and Elasticsearch.",
      "Created Spark batch-processing systems on AWS Batch for large-scale file workflows.",
      "Built user-facing commerce and inventory capabilities from customer requirements through production delivery.",
    ],
    stack: ["AWS", "Lambda", "DynamoDB", "Spark", "Elasticsearch"],
  },
  {
    company: "Walmart Labs",
    mark: "W",
    location: "Bengaluru, India",
    period: "Jan 2016 - Jul 2016",
    role: "Software Engineering Intern",
    intro: "Started in customer-facing commerce systems for ASDA's e-commerce platform.",
    highlights: [
      "Built a reusable tooltip system for ASDA's e-commerce experience as part of the customer-satisfaction team.",
      "Worked inside a large retail engineering environment and shipped production-facing user experience improvements.",
    ],
    stack: ["E-commerce", "Customer experience", "Frontend systems"],
  },
];

const projects = [
  {
    name: "NIFTY50 Trader Pro",
    type: "Market intelligence",
    image: "./project-stock.png",
    description:
      "A focused trading dashboard for reading market structure, momentum, technical signals, and portfolio state without visual noise.",
    live: "https://singla3095.github.io/stock-trading/",
    source: "https://github.com/singla3095/stock-trading",
    stack: ["React", "Market data", "Technical analysis"],
  },
  {
    name: "Digital Bio Maker",
    type: "Identity tooling",
    image: "./project-bio.png",
    description:
      "A portfolio builder that turns a professional story into a clean, shareable digital presence with no coding required.",
    live: "https://singla3095.github.io/digital-bio-maker/",
    source: "https://github.com/singla3095/digital-bio-maker",
    stack: ["React", "Design systems", "Creator tooling"],
  },
];

const skillGroups = [
  { label: "Languages", skills: ["Java", "Go", "SQL"] },
  { label: "Distributed systems", skills: ["Kafka", "Redis", "Elasticsearch", "Kubernetes"] },
  { label: "Cloud and delivery", skills: ["AWS", "Terraform", "Lambda", "AWS Batch"] },
  { label: "Data stores", skills: ["MySQL", "MongoDB", "DynamoDB"] },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <header className="section-heading">
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
    </header>
  );
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={`portfolio${darkMode ? " theme-dark" : ""}`} id="top">
      <div className="site-shell">
        <header className="topbar">
          <a className="brand" href="#top" aria-label="Shubham Singla, home">
            <span className="brand-mark" aria-hidden="true">SS</span>
            <span className="brand-copy">
              <strong>Shubham Singla</strong>
              <small>Backend / AI / Leadership</small>
            </span>
          </a>

          <nav className="nav" aria-label="Primary navigation">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              type="button"
              aria-label={darkMode ? "Use light theme" : "Use dark theme"}
              aria-pressed={darkMode}
              onClick={() => setDarkMode((value) => !value)}
            >
              <span aria-hidden="true">{darkMode ? "SUN" : "MOON"}</span>
            </button>
            <a className="nav-resume" href="./Shubham-Singla-Resume.pdf" download>
              Resume ↓
            </a>
          </div>
        </header>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-kicker"><span /> Bengaluru, India / Open to hard problems</p>
            <h1 id="hero-title">Shubham<br /><em>Singla.</em></h1>
            <p className="hero-role">Backend &amp; AI Engineer · Engineering Lead</p>
            <p className="hero-intro">
              I build dependable backend and AI products—from low-latency payment systems at Grab
              to technology that helps people find work at Indeed.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="./Shubham-Singla-Resume.pdf" download>
                Download résumé <span aria-hidden="true">↓</span>
              </a>
              <a className="button button-quiet" href="#experience">
                View experience <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="hero-links" aria-label="Professional profiles">
              <a href="https://www.linkedin.com/in/shubham-singla-864a55106/" target="_blank" rel="noreferrer">
                LinkedIn <Arrow />
              </a>
              <a href="https://github.com/singla3095" target="_blank" rel="noreferrer">
                GitHub <Arrow />
              </a>
              <a href="mailto:shubham101203095@gmail.com">Email <Arrow /></a>
            </div>
          </div>

          <aside className="production-card" aria-label="Professional overview">
            <div className="card-header">
              <span>Production record / 01</span>
              <span className="live-status"><i /> Active</span>
            </div>

            <div className="monogram" aria-hidden="true">
              <span>S</span><span>S</span>
              <small>2016—NOW</small>
            </div>

            <div className="career-track" aria-label="Career path">
              <div className="track-line" aria-hidden="true" />
              {[
                ["2016", "Walmart", "BLR"],
                ["2016", "Works", "SIN"],
                ["2019", "Grab", "SIN"],
                ["2022", "Indeed", "BLR"],
              ].map(([year, company, city], index) => (
                <div className={`track-stop${index === 3 ? " is-current" : ""}`} key={company}>
                  <span className="track-dot" aria-hidden="true" />
                  <small>{year}</small>
                  <strong>{company}</strong>
                  <em>{city}</em>
                </div>
              ))}
            </div>

            <div className="card-stats">
              <div><strong>10+</strong><span>years shipping</span></div>
              <div><strong>2</strong><span>countries</span></div>
              <div><strong>4</strong><span>product eras</span></div>
            </div>
          </aside>
        </section>

        <section className="signal-strip" aria-label="Professional focus">
          <span>Distributed systems</span>
          <span>Applied AI</span>
          <span>Payments</span>
          <span>Cloud platforms</span>
          <span>Team leadership</span>
        </section>

        <section className="experience-section" id="experience" aria-labelledby="experience-title">
          <SectionHeading
            label="Experience / 2016—present"
            title="Systems built where failure has consequences."
            description="A decade across commerce, enterprise platforms, payments, and applied AI—moving from individual execution to technical and team leadership."
          />

          <div className="experience-list">
            {experience.map((job, index) => (
              <article className={`experience-card${job.current ? " is-current" : ""}`} key={job.company}>
                <div className="experience-index">0{index + 1}</div>
                <div className="company-block">
                  <span className="company-mark" aria-hidden="true">{job.mark}</span>
                  <div>
                    <h3>{job.company}</h3>
                    <p>{job.location}</p>
                  </div>
                </div>
                <div className="role-block">
                  <div className="role-meta">
                    <div>
                      <h4>{job.role}</h4>
                      <p>{job.intro}</p>
                    </div>
                    <time>{job.period}</time>
                  </div>
                  <ul>
                    {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  <div className="tag-list" aria-label={`${job.company} technologies and focus areas`}>
                    {job.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section" id="projects" aria-labelledby="projects-title">
          <SectionHeading
            label="Selected projects"
            title="Ideas made inspectable."
            description="Side projects are where I keep product instincts sharp: choose a real problem, reduce the noise, and put a working version in people's hands."
          />

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <a className="project-image" href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
                  <img src={project.image} alt={`${project.name} interface preview`} />
                  <span className="project-open">Open live <Arrow /></span>
                </a>
                <div className="project-body">
                  <div className="project-meta">
                    <span>0{index + 1} / {project.type}</span>
                    <span>Live build</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-footer">
                    <div className="tag-list">
                      {project.stack.map((item) => <span key={item}>{item}</span>)}
                    </div>
                    <div className="project-links">
                      <a href={project.live} target="_blank" rel="noreferrer">Demo <Arrow /></a>
                      <a href={project.source} target="_blank" rel="noreferrer">Code <Arrow /></a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <a className="all-projects" href="https://github.com/singla3095?tab=repositories" target="_blank" rel="noreferrer">
            Explore all GitHub repositories <Arrow />
          </a>
        </section>

        <section className="skills-section" id="skills" aria-labelledby="skills-title">
          <div className="skills-intro">
            <p className="section-label">Technical range</p>
            <h2 id="skills-title">Deep backend roots.<br />Broad production range.</h2>
            <p>
              I choose technology from constraints, not fashion—latency, failure modes, team
              ownership, and the shape of the data come first.
            </p>
          </div>
          <div className="skills-groups">
            {skillGroups.map((group) => (
              <article key={group.label}>
                <h3>{group.label}</h3>
                <div className="skill-list">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="credentials-section" aria-label="Education and credentials">
          <article className="credential-card education-card">
            <span className="credential-number">01</span>
            <p className="section-label">Education</p>
            <h2>Computer Engineering</h2>
            <p>Thapar Institute of Engineering &amp; Technology</p>
            <time>Class of 2016</time>
          </article>
          <article className="credential-card">
            <span className="credential-number">02</span>
            <p className="section-label">Credentials</p>
            <h2>AWS Solutions Architect</h2>
            <p>Associate certification · Issued 2020</p>
            <div className="credential-rule" />
            <h3>MongoDB with Java Spring Boot</h3>
            <p>Issued 2023</p>
          </article>
        </section>

        <section className="operating-section" aria-labelledby="operating-title">
          <div>
            <p className="section-label">Operating principles</p>
            <h2 id="operating-title">How I show up.</h2>
          </div>
          <div className="principles-list">
            <article><span>01</span><div><h3>Reliability is product.</h3><p>Latency, failure modes, and observability belong in the product conversation.</p></div></article>
            <article><span>02</span><div><h3>Make ambiguity executable.</h3><p>Clarify the outcome, expose trade-offs, then build the smallest honest system.</p></div></article>
            <article><span>03</span><div><h3>Build teams, not bottlenecks.</h3><p>Good architecture creates leverage; good leadership distributes it.</p></div></article>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="section-label">Let&apos;s build something consequential</p>
            <h2 id="contact-title">Backend, AI, or a system nobody has simplified yet?</h2>
          </div>
          <div className="contact-panel">
            <p>Bengaluru, India · English + Hindi</p>
            <a className="button button-light" href="mailto:shubham101203095@gmail.com">
              Start a conversation <Arrow />
            </a>
            <a href="./Shubham-Singla-Resume.pdf" download>Download résumé ↓</a>
          </div>
        </section>

        <footer>
          <span>Shubham Singla · Backend &amp; AI Engineer</span>
          <div>
            <a href="https://www.linkedin.com/in/shubham-singla-864a55106/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a href="https://github.com/singla3095" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            <a href="#top">Top ↑</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
