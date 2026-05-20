import './Skills.css'
const skillGroups = [
    {
        category:'Core' ,
        Skills : [
            {
                name:'React.js',
                level:95
            },
            {
                name:'JavaScript',
                level:97
            },
            {
                name:'TypeScript',
                level:80
            },
            {
                name:'HTML & CSS',
                level:95
            }
        ] 
    },
    {
        category:'State Management',
        Skills:[
            {
                name:'Redux Toolkit',
                level:'90'
            },
            {
                name:'Context API',
                level:'92'
            }
        ]
    },
    {
        category:'Testing',
        Skills:[
            {
                name:'Unit testing',
                level:80
            },
            {
                name:'React Testing Library',
                level:85
            }
        ]
    },
    {
        category:'Tools',
        Skills:[
            {
                name:'GIT , CI/CD',
                level:90
            }
        ]
    }
]
const Skills = () => {
    return (
<section id="skills" className="section"><div className="container">
<h2 className="section-title">Tech <span>Stack</span></h2>
<div className="skills-grid">
{skillGroups.map(group => (
<div key={group.category} className="skill-group">
<h3 className="skill-category">{group.category}</h3>
{group.Skills.map(skill => (
<div key={skill.name} className="skill-item">
<div className="skill-header">
<span className="skill-name">{skill.name}</span>
<span className="skill-pct">{skill.level}%</span>
</div>
<div className="skill-bar-bg">
<div className="skill-bar-fill"
style={{ width: `${skill.level}%` }} />
</div>
</div>
))}
</div>
))}
</div>
</div></section>
    )
}
export default Skills;