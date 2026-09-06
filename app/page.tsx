import Image from 'next/image';
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowUpRight,
  CodeXml,
  MapPin,
} from 'lucide-react';

const github = 'https://github.com/farhans-codes';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header shell" id="top">
        <a className="wordmark" href="#top" aria-label="Farhan — home">
          farhan<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
        </nav>
        <a className="nav-contact" href="#contact">
          Let’s talk <ArrowUpRight aria-hidden="true" />
        </a>
      </header>
      <main id="main">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> FLUTTER DEVELOPER · DHAKA, BD
            </p>
            <p className="hero-statement">
              A developer.
              <br />
              <span>A builder at heart.</span>
            </p>
            <p className="hero-description">
              I’m Farhan. I turn ideas into thoughtful mobile and desktop apps
              with Flutter.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowDown aria-hidden="true" />
              </a>
              <a
                className="button button-quiet"
                href="/farhan-mahi-cv.pdf"
                download
              >
                Download CV <ArrowDownToLine aria-hidden="true" />
              </a>
            </div>
            <div className="hero-links">
              <a href={github} target="_blank" rel="noreferrer">
                <CodeXml aria-hidden="true" /> GitHub{' '}
                <ArrowUpRight aria-hidden="true" />
              </a>
              <span>
                <MapPin aria-hidden="true" /> Dhaka, Bangladesh
              </span>
            </div>
          </div>
          <figure className="hero-portrait">
            <Image
              unoptimized
              src="/images/farhan-portrait.webp"
              alt="Muhammed Farhan Sadique Mahi"
              width="1122"
              height="1402"
              fetchPriority="high"
            />
          </figure>
          <h1 id="hero-title" className="hero-nameplate">
            FARHAN<span>.</span>
          </h1>
        </section>
        <div className="discipline-bar shell">
          <span>FROM IDEA TO EVERYDAY USE</span>
          <p>
            Flutter & Dart <i /> Clean Architecture <i /> Mobile & Desktop <i />{' '}
            On-device AI
          </p>
        </div>
        <section
          className="section shell"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED PERSONAL WORK</p>
              <h2 id="work-title">Built to be used.</h2>
            </div>
            <a
              className="text-link"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              All repositories <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <article className="featured-project">
            <div className="project-copy">
              <p className="eyebrow">FEATURED · OPEN SOURCE</p>
              <h3>AI Limit Status</h3>
              <p>
                Your AI usage, a glance away. A Flutter desktop companion that
                brings Codex and Claude usage limits to the macOS menu bar and
                Windows taskbar.
              </p>
              <div className="tags">
                <span>Flutter</span>
                <span>Dart</span>
                <span>macOS & Windows</span>
              </div>
              <div className="project-links">
                <a
                  className="button button-primary"
                  href={`${github}/ai_limit_status`}
                  target="_blank"
                  rel="noreferrer"
                >
                  View project <ArrowUpRight aria-hidden="true" />
                </a>
                <a
                  className="text-link"
                  href={`${github}/ai_limit_status/releases/latest`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get the app <ArrowDownToLine aria-hidden="true" />
                </a>
              </div>
              <p className="project-footnote">
                Independent community project · MIT licensed
              </p>
            </div>
            <figure className="app-preview">
              <span className="preview-label">A LITTLE LESS GUESSWORK.</span>
              <Image
                unoptimized
                src="/images/ai-limit-status.png"
                alt="Actual AI Limit Status macOS interface showing Codex and Claude usage limits"
                width="448"
                height="588"
                loading="lazy"
              />
              <figcaption>Actual app screenshot · macOS</figcaption>
            </figure>
          </article>
          <div className="project-grid">
            <article className="small-project">
              <div className="project-topline">
                <span className="eyebrow">02 / MOBILE APPLICATION</span>
                <CodeXml aria-hidden="true" />
              </div>
              <h3>Task Manager</h3>
              <p>
                A Flutter app for keeping tasks organised—from account sign-in
                to tracking new, in-progress, completed and cancelled work.
              </p>
              <div className="tags">
                <span>Flutter</span>
                <span>REST API</span>
                <span>Authentication</span>
              </div>
              <a
                className="text-link"
                href={`${github}/task_manager`}
                target="_blank"
                rel="noreferrer"
              >
                View source <ArrowUpRight aria-hidden="true" />
              </a>
            </article>
            <article className="small-project">
              <div className="project-topline">
                <span className="eyebrow">03 / ACADEMIC PROJECT</span>
                <CodeXml aria-hidden="true" />
              </div>
              <h3>Brain Tumour Classification</h3>
              <p>
                A research prototype connecting a TensorFlow image classifier to
                a Flask interface, with image uploads, predictions and
                downloadable reports.
              </p>
              <div className="tags">
                <span>Python</span>
                <span>TensorFlow</span>
                <span>Flask</span>
              </div>
              <a
                className="text-link"
                href={`${github}/brain_tumor_webapp`}
                target="_blank"
                rel="noreferrer"
              >
                View source <ArrowUpRight aria-hidden="true" />
              </a>
            </article>
          </div>
        </section>
        <section
          className="section shell about-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div>
            <p className="eyebrow">02 / ABOUT ME</p>
            <h2 id="about-title">
              A developer who cares
              <br />
              about the details.
            </h2>
          </div>
          <div>
            <p className="about-intro">
              I’m Muhammed Farhan Sadique Mahi, a Flutter developer based in
              Dhaka. I enjoy turning a design into an app that feels right—and
              making the code behind it just as considered.
            </p>
            <p className="about-body">
              My work spans mobile interfaces, desktop utilities, and applied
              AI. I use feature-first Clean Architecture and keep ownership of
              code quality, whether I write it by hand or work with AI coding
              tools.
            </p>
            <a className="text-link" href="/farhan-mahi-cv.pdf" download>
              Get my full CV <ArrowDownToLine aria-hidden="true" />
            </a>
            <div className="education-note">
              <p className="eyebrow">FOUNDATION</p>
              <h3>BSc in Computer Science & Engineering</h3>
              <p>Manarat International University · 2021–2025</p>
              <span>CGPA 3.37 / 4.00</span>
            </div>
          </div>
        </section>
        <section
          className="skills-section shell"
          aria-labelledby="skills-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE TOOLS BEHIND THE WORK</p>
              <h2 id="skills-title">My everyday toolkit.</h2>
            </div>
          </div>
          <div className="skill-grid">
            <div>
              <span className="skill-index">01</span>
              <h3>Build</h3>
              <p>
                Flutter · Dart
                <br />
                Material UI · Responsive UI
              </p>
            </div>
            <div>
              <span className="skill-index">02</span>
              <h3>Structure</h3>
              <p>
                Clean Architecture
                <br />
                Feature-first organisation
              </p>
            </div>
            <div>
              <span className="skill-index">03</span>
              <h3>Connect</h3>
              <p>
                REST APIs · SQL
                <br />
                Python · TensorFlow Lite
              </p>
            </div>
            <div>
              <span className="skill-index">04</span>
              <h3>Deliver</h3>
              <p>
                Git & GitHub
                <br />
                Android Studio · VS Code
              </p>
            </div>
          </div>
        </section>
        <section
          className="section shell"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / EXPERIENCE</p>
              <h2 id="experience-title">Learning. Building. Shipping.</h2>
            </div>
          </div>
          <div className="experience-row">
            <p>DEC 2025 — PRESENT</p>
            <div>
              <h3>Junior Flutter Developer</h3>
              <a
                className="text-link"
                href="https://irdfoundation.com/"
                target="_blank"
                rel="noreferrer"
              >
                IRD Foundation <ArrowUpRight aria-hidden="true" />
              </a>
              <p>
                Contributing to One Ummah as part of my work at IRD Foundation:
                translating Figma designs into Flutter, developing the Qibla
                compass and live-streaming features, and maintaining the app.
              </p>
              <a
                className="text-link employer-project"
                href="https://ummah.one/"
                target="_blank"
                rel="noreferrer"
              >
                One Ummah · Employer project <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="experience-row">
            <p>SEP 2025 — DEC 2025</p>
            <div>
              <h3>Intern Flutter Developer</h3>
              <p className="company-name">IRD Foundation</p>
              <p>
                Worked with senior engineers to translate UI requirements into
                reusable components, while gaining hands-on experience with the
                development lifecycle and Git workflows.
              </p>
            </div>
          </div>
          <div className="leadership-note">
            <p className="eyebrow">BEYOND THE CODE</p>
            <p>
              President, MIU CSE Club <span>2024</span>
            </p>
            <p>
              Campus Ambassador, Robomen BD <span>2023</span>
            </p>
          </div>
        </section>
        <section
          className="section research-section shell"
          id="research"
          aria-labelledby="research-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">04 / RESEARCH & PUBLICATIONS</p>
              <h2 id="research-title">Curiosity, put into practice.</h2>
            </div>
            <p className="section-aside">
              Exploring how machine learning
              <br />
              can solve practical problems.
            </p>
          </div>
          <article className="research-row">
            <span className="eyebrow">JOURNAL ARTICLE · 2026</span>
            <div>
              <h3>DeepMedScan</h3>
              <p>
                A CNN-driven brain tumour detection system with web-based
                clinical decision support.
              </p>
              <p className="research-meta">
                Co-author · International Journal of Artificial Intelligence in
                Healthcare
                <br />
                Vol. 1, No. 2 · pp. 148–159
              </p>
            </div>
            <a
              className="round-link"
              href="https://doi.org/10.1504/IJAIH.2026.154457"
              target="_blank"
              rel="noreferrer"
              aria-label="Read the DeepMedScan publication"
            >
              <ArrowUpRight aria-hidden="true" />
            </a>
          </article>
          <article className="research-row">
            <span className="eyebrow">ARXIV PREPRINT · 2025</span>
            <div>
              <h3>DragonFruitQualityNet</h3>
              <p>
                A lightweight convolutional neural network for real-time dragon
                fruit quality inspection on mobile devices.
              </p>
              <p className="research-meta">
                Co-author · Computer vision & on-device machine learning
              </p>
            </div>
            <a
              className="round-link"
              href="https://arxiv.org/abs/2508.07306"
              target="_blank"
              rel="noreferrer"
              aria-label="Read the DragonFruitQualityNet preprint"
            >
              <ArrowUpRight aria-hidden="true" />
            </a>
          </article>
        </section>
        <section
          className="contact-section shell"
          id="contact"
          aria-labelledby="contact-title"
        >
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2 id="contact-title">
            Let’s build something
            <br />
            <span>worth using.</span>
          </h2>
          <a className="contact-email" href="mailto:sadiquefarhan038@gmail.com">
            sadiquefarhan038@gmail.com <ArrowUpRight aria-hidden="true" />
          </a>
          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/muhammed-farhan-sadique-mahi-70a6431a6/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight aria-hidden="true" />
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight aria-hidden="true" />
            </a>
            <a href="tel:+8801881960259">
              +880 1881 960259 <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer shell">
        <a className="wordmark" href="#top" aria-label="Back to top">
          farhan<span>.</span>
        </a>
        <p>© 2026 Farhan</p>
        <a href={github} target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}
