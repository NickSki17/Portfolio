import { useEffect } from 'react'
import { Icon, TagList } from './components'

const featuredProjects = [
  { title: 'Four-Bar EV Charging Arm', slug: 'four-bar-ev-charging-arm', summary: 'A constrained linkage combining MATLAB kinematics, optimization, embedded control, and prototype testing.', tags: ['Mechanical design', 'MATLAB', 'Prototyping'], image: 'assets/four-bar-physical-poster.jpg', alt: 'Assembled Four-Bar EV charging arm prototype with its linkage and actuator', mediaKind: 'photo' },
  { title: 'FEA Topology Optimization', slug: 'topology-optimization', summary: 'A minimum-cost bracket study using ANSYS topology optimization and mesh convergence.', tags: ['ANSYS', 'FEA', 'Optimization'], image: 'assets/topology-stress.jpg', alt: 'Simulated stress contour on the topology-optimized bracket', mediaKind: 'technical' },
  { title: 'Bladed Disk Optimization', slug: 'bladed-disk-optimization', summary: 'A rotating-component study using cyclic-symmetry FEA and prestressed modal analysis.', tags: ['CAE', 'Rotordynamics', 'FEA'], image: 'assets/bladed-disk-radial-result.jpg', alt: 'Simulated radial tip deflection on the bladed disk', mediaKind: 'technical' },
  { title: 'Sustainable Foam-Core Chair', slug: 'sustainable-chair', summary: 'An interlocking chair developed through CAD, FEA-informed iteration, fabrication, and load trials.', tags: ['CAD', 'FEA', 'Testing'], image: 'assets/chair-before-test.jpg', alt: 'Foam-core chair prototype before the incremental load trial', mediaKind: 'photo' },
  { title: 'Bio-Inspired Hexapod', slug: 'hexapod', summary: 'A six-legged prototype using an alternating tripod gait, servo actuation, and Arduino control.', tags: ['Mechatronics', 'Embedded', 'Fabrication'], image: 'assets/hexapod-body.jpg', alt: 'Assembled hexapod prototype with MDF chassis and leg mechanisms', mediaKind: 'photo-contain' },
]

const experience = [
  { title: 'Engine Controls Engineering Intern', organization: 'Progress Rail, a Caterpillar Company', date: 'May 2026 – August 2026', slug: 'progress-rail' },
  { title: 'Engineering Intern', organization: 'Deep Coat Industries', date: 'May 2025 – August 2025; December 2025 – January 2026', slug: 'deep-coat' },
  { title: 'Formula SAE Chassis Design', organization: 'Illinois Institute of Technology', date: 'August 2026 – present', slug: 'fsae' },
]

const skills = {
  'CAD / Design': ['SolidWorks', 'Autodesk Inventor', 'AutoCAD', 'Mastercam', 'Revit', 'GD&T', 'Design for Manufacturing'],
  'Analysis / Simulation': ['ANSYS / FEA', 'MATLAB', 'Optimization', 'Structural analysis', 'Engineering modeling'],
  'Programming / Embedded': ['Python', 'MATLAB', 'Arduino / C++', 'Teensy', 'PlatformIO', 'Serial communication'],
  'Manufacturing / Testing': ['CNC / machining', 'Laser cutting', '3D printing', 'Welding', 'Instrumentation', 'Calibration'],
}

function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    }), { threshold: 0.12 })
    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-shell">
      <header className="site-header" id="top">
        <a className="wordmark" href="#top">NS<span>.</span></a>
        <nav aria-label="Primary navigation"><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#education">Education</a></nav>
        <a className="header-contact" href="mailto:nskiba@hawk.illinoistech.edu">Get in touch <Icon name="arrow" size={15} /></a>
      </header>

      <main>
        <section className="hero section-wrap" aria-labelledby="hero-title"><div className="hero-kicker">Mechanical systems / CAD / CAE / testing</div><h1 id="hero-title">Nicholas <em>Skiba</em></h1><div className="hero-bottom"><p className="hero-copy">Mechanical engineering student focused on mechanical design, analysis, prototyping, and experimental validation.</p><p className="hero-lede">Mechanical Engineering / Mechanical &amp; Aerospace Engineering</p></div></section>

        <section className="section-wrap section-block" id="experience" aria-labelledby="experience-title"><SectionHeading number="01" title="Experience" id="experience-title" /><div className="experience-list">{experience.map((item, index) => <a className="experience-row" href={`./experience/${item.slug}.html`} key={item.slug} data-reveal><span className="experience-index">0{index + 1}</span><span><strong>{item.title}</strong><small>{item.organization}</small></span><time>{item.date}</time><Icon name="arrow" size={18} /></a>)}</div></section>

        <section className="section-wrap section-block" id="projects" aria-labelledby="projects-title"><SectionHeading number="02" title="Selected projects" id="projects-title" /><div className="project-grid">{featuredProjects.map((project, index) => <a className={`project-card project-card--${index + 1}`} href={`./projects/${project.slug}.html`} key={project.slug} data-reveal><div className="project-card-top"><span className="project-number">0{index + 1}</span><Icon name="arrow" size={20} /></div><img className={`project-card-media project-card-media--${project.mediaKind}`} src={project.image} alt={project.alt} loading="lazy" decoding="async" /><div><h3>{project.title}</h3><p>{project.summary}</p><TagList items={project.tags} /></div></a>)}</div><div className="project-index-link"><a href="./projects.html">Browse additional projects <Icon name="arrow" size={18} /></a></div></section>

        <section className="section-wrap section-block split-block" id="skills" aria-labelledby="skills-title"><SectionHeading number="03" title="Skills" id="skills-title" /><div className="skills-grid">{Object.entries(skills).map(([category, items]) => <div className="skill-group" key={category} data-reveal><h3>{category}</h3><TagList items={items} /></div>)}</div></section>

        <section className="section-wrap section-block education-block" id="education" aria-labelledby="education-title"><SectionHeading number="04" title="Education" id="education-title" /><div className="education-card" data-reveal><div><p className="eyebrow">Illinois Institute of Technology</p><h3>Co-Terminal B.S. Mechanical Engineering<br />/ M.S. Mechanical &amp; Aerospace Engineering</h3><p>Minor in Engineering Graphics &amp; CAD</p><p className="education-coursework">Coursework: Advanced CAD/CAM/CAE, machine design, mechanics of solids, manufacturing, controls, computational mechanics, and dynamics.</p></div><div className="education-meta"><span>August 2023 – December 2027 expected</span><strong>B.S. GPA 3.59<br />M.S. GPA 4.00</strong><small>Dean&apos;s List · August 2023 – December 2025</small></div></div></section>
      </main>

      <footer className="site-footer section-wrap"><div><a className="wordmark" href="#top">NS<span>.</span></a></div><div className="footer-links"><a href="mailto:nskiba@hawk.illinoistech.edu">nskiba@hawk.illinoistech.edu</a><a href="mailto:nskiba@hawk.illinoistech.edu">Resume available on request</a></div><small>© 2026 Nicholas Skiba</small></footer>
    </div>
  )
}

function SectionHeading({ number, title, id }: { number: string; title: string; id: string }) { return <div className="section-heading"><span>{number}</span><h2 id={id}>{title}</h2></div> }

export default App
