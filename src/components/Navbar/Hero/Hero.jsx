import './Hero.css';
// At the top of Hero.js
import profilePhoto from '../assets/images/vigneswaran-portfolio.png'

// In JSX
<img src={profilePhoto} alt="Vigneswaran - Frontend Developer" className="hero-photo" />
 
// ── Tech stack pills data ────────────────────────────────────
// Add or remove technologies here — they render automatically
const techStack = [
  'React.js',
  'JavaScript',
  'TypeScript',
  'Redux Toolkit',
  'Jest',
  'Cypress',
];
 
// ── Hero Component ───────────────────────────────────────────
const Hero = () => {
  return (
    <section id="hero" className="hero">
 
      {/* Container limits max-width and centers content */}
      <div className="container">
 
        {/* Two-column layout: text (left) + photo (right) */}
        <div className="hero-inner">
 
          {/* ── LEFT SIDE — Text Content ── */}
          <div className="hero-content">
 
            {/* Small greeting line above name */}
            <p className="hero-greeting">Hi, I'm</p>
 
            {/* Main heading — your full name */}
            {/* Only ONE h1 allowed per page — most important heading */}
            <h1 className="hero-name">
              Vigneswaran
              {/* Wrap second part in span to colour it teal */}
              <span className="accent">H</span>
            </h1>
 
            {/* Job role — h2 because it is secondary to your name */}
            <h2 className="hero-role">
              Senior Frontend Developer
            </h2>
 
            {/* Short bio / tagline */}
            <p className="hero-tagline">
              Building fast, accessible, and beautiful web interfaces
              — 4+ years with React.js, JavaScript &amp; TypeScript at HCL Technologies.
            </p>
 
            {/* ── CTA Buttons ── */}
            <div className="hero-cta">
 
              {/* Primary button — scrolls to Projects section */}
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
 
              {/* Outline button — opens resume in new tab */}
              {/* rel="noopener noreferrer" is a SECURITY requirement with target="_blank" */}
              <a
                href="/portfolio/Vigneswaran_resume.pdf"
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
 
            </div>
 
            {/* ── Tech Stack Pills ── */}
            {/* .map() generates a pill for each tech in the array above */}
            <div className="hero-stack">
              {techStack.map((tech) => (
                // key prop is required by React when rendering lists
                <span key={tech} className="stack-tag">
                  {tech}
                </span>
              ))}
            </div>
 
          </div>
          {/* ── END LEFT SIDE ── */}
 
          {/* ── RIGHT SIDE — Profile Photo ── */}
          <div className="hero-image-wrapper">
 
            {/* Ring div creates the glowing circular frame */}
            <div className="hero-image-ring">
 
              {/* 
                Replace src with your actual photo path.
                Photo must be placed at: src/assets/images/profile.jpg
                object-fit: cover in CSS keeps it circular without stretching
              */}
              <img
                src={profilePhoto}
                alt="Vigneswaran H - Senior Frontend Developer"
                className="hero-photo"
              />
 
            </div>
          </div>
          {/* ── END RIGHT SIDE ── */}
 
        </div>
        {/* ── END hero-inner ── */}
 
      </div>
      {/* ── END container ── */}
 
    </section>
  );
};
 
export default Hero;
 