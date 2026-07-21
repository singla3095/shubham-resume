const career = [
  {
    date: "2016 · BLR",
    company: "Walmart Labs",
    role: "Software Engineering Intern",
    summary: "Built customer-experience tooling for ASDA's commerce platform.",
  },
  {
    date: "2016–2019 · SIN",
    company: "Works Applications",
    role: "Software Engineer → Senior",
    summary: "Moved enterprise systems from on-premise infrastructure to AWS and serverless architecture.",
  },
  {
    date: "2019–2022 · SIN",
    company: "Grab",
    role: "Senior Backend Engineer",
    summary: "Built GrabPay debit-card systems on high-volume, low-latency architecture.",
  },
  {
    date: "2022–NOW · BLR",
    company: "Indeed",
    role: "Software Engineer II · AI + Backend",
    summary: "Leading AI-focused backend initiatives and mentoring engineers who ship responsibly.",
    current: true,
  },
];

const skills = [
  "Java",
  "Go",
  "AWS",
  "Kafka",
  "Kubernetes",
  "Terraform",
  "Redis",
  "Elasticsearch",
  "MySQL",
  "MongoDB",
  "DynamoDB",
];

const projects = [
  {
    name: "NIFTY50 Trader Pro",
    kicker: "Market intelligence",
    description:
      "A focused trading interface for reading live market structure, momentum, and technical signals with clarity.",
    live: "https://singla3095.github.io/stock-trading/",
    source: "https://github.com/singla3095/stock-trading",
  },
  {
    name: "Digital Bio Maker",
    kicker: "Identity tooling",
    description:
      "A portfolio builder that turns a professional story into a clean, shareable digital presence.",
    live: "https://singla3095.github.io/digital-bio-maker/",
    source: "https://github.com/singla3095/digital-bio-maker",
  },
];

function ExternalArrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main id="top">
      <div className="page-shell">
        <header className="topbar">
          <a className="identity" href="#top" aria-label="Shubham Singla, home">
            <span className="identity-mark" aria-hidden="true" />
            <span>Shubham Singla</span>
          </a>
          <nav className="nav" aria-label="Primary navigation">
            <a href="#journey">Journey</a>
            <a href="#work">Work</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="availability">
            <span className="pulse" aria-hidden="true" />
            Bengaluru · IST
          </div>
        </header>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-title-wrap">
            <p className="eyebrow">Backend × AI × Leadership</p>
            <h1 id="hero-title">
              Systems that <span>move</span> people.
            </h1>
          </div>
          <div className="hero-copy">
            <p>
              I’m <strong>Shubham Singla</strong>, an engineering leader building dependable AI
              and backend systems—from high-volume payments to products that help people find work.
            </p>
            <div className="hero-actions">
              <a
                className="button"
                href="https://www.linkedin.com/in/shubham-singla-864a55106/"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn <ExternalArrow />
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/singla3095"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub <ExternalArrow />
              </a>
            </div>
          </div>
        </section>

        <section className="flight-band" id="journey" aria-labelledby="journey-title">
          <div className="radar-rings" aria-hidden="true" />
          <header className="band-header">
            <span id="journey-title">Career flight path / 2016–present</span>
            <strong>Four production eras · one operating system</strong>
          </header>
          <div className="flight-grid">
            {career.map((stop) => (
              <article className={`stop${stop.current ? " current" : ""}`} key={stop.company}>
                <span className="stop-date">{stop.date}</span>
                <h2>{stop.company}</h2>
                <p className="stop-role">{stop.role}</p>
                <p>{stop.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <header className="section-heading">
            <p className="section-kicker">Selected systems</p>
            <h2 id="work-title">Where architecture meets consequence.</h2>
            <p>
              I work best when the problem is still blurry, the stakes are real, and the answer has
              to survive production—not just the presentation.
            </p>
          </header>

          <div className="case-grid">
            <article className="case-card case-primary">
              <div className="case-index">CURRENT / INDEED</div>
              <div className="case-copy">
                <p className="case-label">Applied AI · Backend platforms · Team leverage</p>
                <h3>Turn frontier capability into a product people can trust.</h3>
                <p>
                  Leading AI-focused and backend initiatives, connecting product intent to reliable
                  system design, improving platform performance, and helping engineers grow into
                  larger ownership.
                </p>
              </div>
              <div className="case-tags" aria-label="Indeed focus areas">
                <span>AI delivery</span>
                <span>Platform performance</span>
                <span>Technical leadership</span>
              </div>
            </article>

            <article className="case-card case-dark">
              <div className="case-index">2019–2022 / GRAB</div>
              <div className="case-copy">
                <p className="case-label">Payments · Distributed systems · Singapore</p>
                <h3>Build payments that cannot blink.</h3>
                <p>
                  Helped build GrabPay’s debit-card platform from the ground up, designing scalable,
                  high-volume, low-latency services while leading a team of three engineers.
                </p>
              </div>
              <div className="case-tags" aria-label="Grab focus areas">
                <span>High throughput</span>
                <span>Low latency</span>
                <span>Team of 3</span>
              </div>
            </article>

            <article className="case-card case-compact">
              <div className="case-index">2016–2019 / WORKS APPLICATIONS</div>
              <div className="case-copy">
                <p className="case-label">Enterprise · Cloud modernization</p>
                <h3>Move the foundation without stopping the business.</h3>
                <p>
                  Designed an AWS serverless architecture using Lambda, DynamoDB, S3,
                  Elasticsearch, Spark, and AWS Batch during an on-premise migration.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="proof-grid" aria-label="Operating range and capabilities">
          <article className="proof-card operating-card">
            <p className="proof-label">Operating range</p>
            <div className="operating-layout">
              <div>
                <h2>From uncertain problem to resilient production.</h2>
                <p>
                  Product judgment, architecture, and team execution—especially where AI behavior
                  meets distributed-systems reality.
                </p>
              </div>
              <div className="metric-panel">
                <div className="metric">10<span>+</span></div>
                <p>Years shipping across India + Singapore</p>
              </div>
            </div>
          </article>

          <article className="proof-card stack-card">
            <p className="proof-label">Systems stack</p>
            <div className="stack-list" aria-label="Technical skills">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        </section>

        <section className="projects-section" id="projects" aria-labelledby="projects-title">
          <header className="projects-heading">
            <div>
              <p className="section-kicker">Built in public</p>
              <h2 id="projects-title">Side projects with a pulse.</h2>
            </div>
            <a
              href="https://github.com/singla3095?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              All repositories <ExternalArrow />
            </a>
          </header>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-number">0{index + 1}</div>
                <p className="project-kicker">{project.kicker}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Open live project <ExternalArrow />
                  </a>
                  <a href={project.source} target="_blank" rel="noreferrer">
                    Source <ExternalArrow />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="principles" aria-labelledby="principles-title">
          <div className="principles-title">
            <p className="section-kicker">How I operate</p>
            <h2 id="principles-title">Clear decisions. Durable systems. Stronger teams.</h2>
          </div>
          <div className="principle-list">
            <article>
              <span>Signal 01</span>
              <h3>Reliability is product.</h3>
              <p>Latency, failure modes, and observability belong in the product conversation.</p>
            </article>
            <article>
              <span>Signal 02</span>
              <h3>Make ambiguity executable.</h3>
              <p>Clarify the outcome, expose the trade-offs, then build the smallest honest system.</p>
            </article>
            <article>
              <span>Signal 03</span>
              <h3>Build teams, not bottlenecks.</h3>
              <p>Good architecture creates leverage; good leadership distributes it.</p>
            </article>
          </div>
        </section>

        <section className="credentials" aria-label="Education and credentials">
          <article>
            <p className="proof-label">Education</p>
            <h2>Computer Engineering</h2>
            <p>Thapar Institute of Engineering &amp; Technology · 2016</p>
          </article>
          <article>
            <p className="proof-label">Credentials</p>
            <h2>AWS Solutions Architect – Associate</h2>
            <p>Certified 2020–2023 · MongoDB with Java Spring Boot, 2023</p>
          </article>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="contact-kicker">Open channel</p>
            <h2 id="contact-title">Building serious AI for messy real-world systems?</h2>
          </div>
          <div className="contact-actions">
            <a className="button button-light" href="mailto:shubham101203095@gmail.com">
              Start a conversation <ExternalArrow />
            </a>
            <p>Bengaluru, India · English + Hindi</p>
          </div>
        </section>

        <footer>
          <span>Designed for clarity · Engineered for consequence</span>
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/shubham-singla-864a55106/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ExternalArrow />
            </a>
            <a href="https://github.com/singla3095" target="_blank" rel="noreferrer">
              GitHub <ExternalArrow />
            </a>
            <a href="#top">Return to top ↑</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
