import './Experience.css';
const experiences = [{
company: 'HCL Technologies', role: 'Senior Frontend Developer',
duration: '2021 - Present', location: 'Bangalore, India',
points: [
'Built My State Street banking portal — React.js, JavaScript, Redux Toolkit',
'Developed MyHCL Tech employee portal — Context API, REST APIs',
'Improved load performance 40% via code splitting and lazy loading',
'Unit testing — 80%+ code coverage',
],
}];
const Experience = () => (
<section id="experience" className="section"><div className="container">
<h2 className="section-title">Work <span>Experience</span></h2>
<div className="timeline">
{experiences.map((exp, i) => (
<div key={i} className="timeline-item">
<div className="timeline-dot" />
<div className="timeline-card">
<div className="exp-header">
<div><h3 className="exp-role">{exp.role}</h3>
<p className="exp-company">{exp.company}</p></div>
<div className="exp-meta">
<span className="exp-duration">{exp.duration}</span>
<span className="exp-location">{exp.location}</span>
</div>
</div>
<ul className="exp-points">
{exp.points.map((pt, j) => <li key={j}>{pt}</li>)}
</ul>
</div>
</div>
))}
</div>
</div></section>
);
export default Experience;