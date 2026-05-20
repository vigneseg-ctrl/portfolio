import './Project.css';
const projects = [
{ 
    title: 'My State Street',
    desc: 'Online banking portal for State Street Corp. Account dashboard, transaction history, real time balance update.',
tags: ['React.js', 'TypeScript', 'Redux Toolkit', 'Jest']},
//github: 'https://github.com/vigneswaran', live: '#' },
{ title: 'MyHCL Tech',
desc: 'Internal employee portal. Leave management, team collaboration',
tags: ['React.js', 'Context API', 'REST APIs', 'Storybook']},
//github: 'https://github.com/vigneswaran', live: '#' },
];
const Projects = () => (
<section id="projects" className="section"><div className="container">
<h2 className="section-title">Featured <span>Projects</span></h2>
<div className="projects-grid">
{projects.map(project => (
<div key={project.title} className="project-card">
<div className="card-top">
<span className='folder-icon'>&#128193;</span>
<div className="card-links">
</div>
<h3 className="card-title">{project.title}</h3>
<p className="card-desc">{project.desc}</p>
</div>
<div className="card-tags">
{project.tags.map(tag => (
<span key={tag} className="tag">{tag}</span>
))}
</div>
</div>
))}
</div>
</div></section>
);
export default Projects;