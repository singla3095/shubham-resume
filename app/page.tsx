/* eslint-disable @next/next/no-img-element -- static export for GitHub Pages */

const experience = [
  {
    company: "Indeed",
    location: "Bengaluru, India",
    role: "Staff Software Engineer",
    period: "Jun 2025 - Present",
    previousRole: "Senior Software Engineer · Sep 2022 - Jun 2025",
    summary:
      "Architecting agentic AI systems that turn hiring context into useful, reliable action.",
    bullets: [
      "Architect and ship intelligent-agent and multi-agent systems with LangGraph for complex hiring workflows.",
      "Integrate and optimize multiple LLM APIs through custom tooling for reliable agent orchestration and product integration.",
      "Develop an AI-powered hiring agent for intelligent candidate sourcing and automation of early talent-acquisition workflows.",
      "Build a context-aware recommendation platform that uses user, employer, and job signals to recommend next-best actions.",
    ],
    skills: ["AI agents", "LangGraph", "LLM orchestration", "Python", "Recommender systems"],
  },
  {
    company: "Grab",
    location: "Singapore",
    role: "Senior Backend Engineer",
    period: "Jun 2019 - Sep 2022",
    summary:
      "Built core payment infrastructure for one of Southeast Asia's largest technology platforms.",
    bullets: [
      "Built the GrabPay debit-card platform from the ground up as one of the project's first engineers.",
      "Designed scalable, high-volume, low-latency services across Grab's payments ecosystem.",
      "Led a team of three engineers across system design, requirements, delivery quality, and code reviews.",
    ],
    skills: ["Go", "Payments", "Low latency", "High throughput"],
  },
  {
    company: "Works Applications",
    location: "Singapore",
    role: "Senior Software Engineer / Software Developer",
    period: "Oct 2016 - Jun 2019",
    summary:
      "Modernized enterprise commerce and inventory systems for a Japanese ERP platform.",
    bullets: [
      "Designed serverless architecture during an on-premise to AWS migration using Lambda, DynamoDB, S3, and Elasticsearch.",
      "Created Spark batch-processing systems on AWS Batch for large-scale file workflows.",
      "Delivered customer-facing commerce and inventory features from requirements through production.",
    ],
    skills: ["AWS", "Lambda", "DynamoDB", "Spark", "Elasticsearch"],
  },
  {
    company: "Walmart Labs",
    location: "Bengaluru, India",
    role: "Software Developer",
    period: "Jan 2016 - Jul 2016",
    summary:
      "Worked on customer-facing commerce systems for ASDA's e-commerce platform.",
    bullets: [
      "Built a reusable tooltip system for the customer-satisfaction team and shipped production-facing experience improvements.",
    ],
    skills: ["E-commerce", "Customer experience", "Frontend systems"],
  },
];

const skillGroups = [
  { title: "Languages", items: ["Java", "Go", "Python", "SQL"] },
  { title: "AI systems", items: ["LangGraph", "LLM APIs", "Generative AI", "Multi-agent systems"] },
  { title: "Backend", items: ["Kafka", "Redis", "Elasticsearch", "REST APIs"] },
  { title: "Platform", items: ["AWS", "Kubernetes", "Terraform", "Lambda", "AWS Batch"] },
  { title: "Data", items: ["MySQL", "MongoDB", "DynamoDB"] },
];

const careerPath = [
  { year: "2016", label: "Commerce", detail: "Walmart · Works" },
  { year: "2019", label: "Payments", detail: "Grab" },
  { year: "2022", label: "Hiring platforms", detail: "Indeed" },
  { year: "2025", label: "Agentic AI", detail: "Indeed · Staff" },
];

const currentFocus = [
  {
    label: "Agent architecture",
    title: "Systems where agents collaborate",
    description:
      "LangGraph-based orchestration, custom LLM tooling, and multi-agent workflows designed for production—not demos.",
  },
  {
    label: "Hiring intelligence",
    title: "Sourcing with more context",
    description:
      "An AI-powered hiring agent that supports candidate discovery and the earliest stages of talent acquisition.",
  },
  {
    label: "Decision systems",
    title: "The next useful action",
    description:
      "Recommendation systems that combine employer, user, and job context to surface strategically useful next steps.",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SectionTitle({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <header className="section-title">
      <p>{eyebrow}</p>
      <h2>{children}</h2>
    </header>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#top">Shubham Singla</a>
          <nav aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#focus">Current work</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
          </nav>
          <a className="header-resume" href="./Shubham-Singla-Staff-Engineer-Resume-2026.pdf" download>
            Résumé <span aria-hidden="true">↓</span>
          </a>
        </div>
      </header>

      <section className="hero container" aria-labelledby="hero-title">
        <p className="hello">Hello, I&apos;m</p>
        <h1 id="hero-title">Shubham Singla</h1>
        <p className="hero-role">Staff Software Engineer · AI Systems &amp; Distributed Platforms</p>
        <p className="hero-summary">
          I turn ambiguous product problems into dependable systems—from low-latency payments
          to intelligent agents that help employers make better hiring decisions.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="./Shubham-Singla-Staff-Engineer-Resume-2026.pdf" download>
            Download résumé (PDF) <span aria-hidden="true">↓</span>
          </a>
          <a className="button secondary" href="#focus">
            See what I build now <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="social-links" aria-label="Professional profiles">
          <a href="https://github.com/singla3095" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          <a href="https://www.linkedin.com/in/shubham-singla-864a55106/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          <a href="https://topmate.io/shubham_singla11" target="_blank" rel="noreferrer">Topmate <Arrow /></a>
          <a href="mailto:shubham101203095@gmail.com">Email <Arrow /></a>
        </div>
        <div className="career-path" aria-label="Career progression from commerce to agentic AI">
          <span className="career-line" aria-hidden="true" />
          {careerPath.map((stage, index) => (
            <div className={`career-stage${index === careerPath.length - 1 ? " is-current" : ""}`} key={stage.year}>
              <span className="career-dot" aria-hidden="true" />
              <small>{stage.year}</small>
              <strong>{stage.label}</strong>
              <em>{stage.detail}</em>
            </div>
          ))}
        </div>
      </section>

      <section className="about section container" id="about">
        <SectionTitle eyebrow="About">From transaction systems to intelligent agents.</SectionTitle>
        <div className="about-grid">
          <p className="about-copy">
            I&apos;m a Staff Software Engineer at Indeed with a decade of experience across
            e-commerce, enterprise software, payments, and AI in India and Singapore. My work
            sits between architecture and execution: clarify the real problem, design the right
            system, and help the team operate it with confidence.
          </p>
          <dl className="facts">
            <div><dt>10+</dt><dd>Years building production systems</dd></div>
            <div><dt>2</dt><dd>Countries: India and Singapore</dd></div>
            <div><dt>4</dt><dd>Product companies since 2016</dd></div>
          </dl>
        </div>
      </section>

      <section className="current-focus section" id="focus">
        <div className="container">
          <SectionTitle eyebrow="Building now">AI systems for real hiring decisions.</SectionTitle>
          <p className="focus-intro">
            My current work applies agentic architecture to practical hiring problems. The goal
            is not to add AI as a feature; it is to make complex workflows more useful, contextual,
            and reliable.
          </p>
          <div className="focus-grid">
            {currentFocus.map((item) => (
              <article className="focus-card" key={item.label}>
                <p>{item.label}</p>
                <h3>{item.title}</h3>
                <span>{item.description}</span>
              </article>
            ))}
          </div>
          <div className="focus-logic" aria-label="System flow">
            <span>Rich context</span><i aria-hidden="true">→</i>
            <span>Agent orchestration</span><i aria-hidden="true">→</i>
            <span>Useful action</span>
          </div>
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="container">
          <SectionTitle eyebrow="Experience">A decade of building at scale.</SectionTitle>
          <div className="timeline">
            {experience.map((job) => (
              <article className="job" key={job.company}>
                <div className="job-rail" aria-hidden="true"><span /></div>
                <div className="job-meta">
                  <p>{job.period}</p>
                  <p>{job.location}</p>
                </div>
                <div className="job-content">
                  <h3>{job.role}</h3>
                  <p className="company">{job.company}</p>
                  {"previousRole" in job && job.previousRole ? (
                    <p className="previous-role">Previously: {job.previousRole}</p>
                  ) : null}
                  <p className="job-summary">{job.summary}</p>
                  <ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                  <div className="tags" aria-label={`${job.company} skills`}>
                    {job.skills.map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects section container" id="projects">
        <SectionTitle eyebrow="Selected work">Products I build end to end.</SectionTitle>
        <div className="project-grid">
          <article className="project-card">
            <a className="project-visual stock-visual" href="https://singla3095.github.io/stock-trading/" target="_blank" rel="noreferrer" aria-label="Open NIFTY50 Trader Pro">
              <img src="./project-stock.png" alt="NIFTY50 Trader Pro market dashboard" />
            </a>
            <div className="project-body">
              <p className="project-kind">Market intelligence</p>
              <h3>NIFTY50 Trader Pro</h3>
              <p>A focused dashboard for reading market structure, momentum, technical signals, and portfolio state.</p>
              <div className="project-links">
                <a href="https://singla3095.github.io/stock-trading/" target="_blank" rel="noreferrer">Live project <Arrow /></a>
                <a href="https://github.com/singla3095/stock-trading" target="_blank" rel="noreferrer">Source <Arrow /></a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <a className="project-visual bio-visual" href="https://singla3095.github.io/digital-bio-maker/" target="_blank" rel="noreferrer" aria-label="Open Digital Bio Maker">
              <span className="browser-bar"><i /><i /><i /></span>
              <span className="bio-preview">
                <small>DIGITAL BIO MAKER</small>
                <strong>Your story,<br />beautifully presented.</strong>
                <em>Build my portfolio →</em>
              </span>
            </a>
            <div className="project-body">
              <p className="project-kind">Creator tooling</p>
              <h3>Digital Bio Maker</h3>
              <p>A no-code portfolio builder that turns a professional story into a clean, shareable digital presence.</p>
              <div className="project-links">
                <a href="https://singla3095.github.io/digital-bio-maker/" target="_blank" rel="noreferrer">Live project <Arrow /></a>
                <a href="https://github.com/singla3095/digital-bio-maker" target="_blank" rel="noreferrer">Source <Arrow /></a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="skills section" id="skills">
        <div className="container">
          <SectionTitle eyebrow="Toolkit">Technologies I use to ship reliable systems.</SectionTitle>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="credentials">
            <div>
              <p>Education</p>
              <h3>Bachelor&apos;s degree, Computer Science</h3>
              <span>Thapar Institute · 2012 - 2016</span>
            </div>
            <div>
              <p>Credential</p>
              <h3>MongoDB with Java Spring Boot</h3>
              <span>Issued Jun 2023</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact section container" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>Have a hard engineering problem?</h2>
        <p>I&apos;m always happy to talk about agentic AI, backend systems, engineering leadership, or an ambitious product idea.</p>
        <div className="contact-actions">
          <a className="button primary" href="mailto:shubham101203095@gmail.com">Start a conversation <span aria-hidden="true">→</span></a>
          <a className="button secondary" href="https://topmate.io/shubham_singla11" target="_blank" rel="noreferrer">Book time on Topmate <Arrow /></a>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <p>© 2026 Shubham Singla</p>
          <div><a href="https://github.com/singla3095">GitHub</a><a href="https://www.linkedin.com/in/shubham-singla-864a55106/">LinkedIn</a><a href="https://topmate.io/shubham_singla11">Topmate</a><a href="#top">Back to top ↑</a></div>
        </div>
      </footer>
    </main>
  );
}
