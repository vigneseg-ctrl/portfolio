import './About.css'
const About = ()=>{
    return (
    <section id="about" className="section">
        <div className="container">
            <h2 className="section-title">About<span>Me</span></h2>
            <p className="section-sub">Who I am beyond the resume</p>
            <div className="about-grid">
                <div className="about-text">
                    <p>Senior Frontend Developer at HCL Technologies, Bangalore</p>
                    <p>Primary stack: React.js, JavaScript, Redux, TypeScript</p>
                </div>
                <div className="about-stats">
                    {[{
                        num:'4+',label:'Years of Experience'
                    }].map((stat)=>(
                        <div key={stat.label} className="stat-card"><span className="stat-num">{stat.num}</span>
                        <span className="stat-label">{stat.label}</span></div>
                    ))
                    }
                </div>
            </div>
        </div>

    </section>
    )
}
export default About;