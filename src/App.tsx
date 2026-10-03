import { useEffect } from 'react'
import { ContactLink, Icon, TagList } from './components'

const featuredProjects = [
  { title: 'Four-Bar EV Charging Arm', slug: 'four-bar-ev-charging-arm', summary: 'A constrained linkage combining MATLAB kinematics, optimization, embedded control, and prototype testing.', tags: ['Mechanical design', 'MATLAB', 'Prototyping'], image: 'assets/four-bar-physical-poster.jpg', alt: 'Assembled Four-Bar EV charging arm prototype with its linkage and actuator', mediaKind: 'photo', repository: 'https://github.com/NickSki17/Four-Bar-EV-Charging-Arm' },
  { title: 'FEA Topology Optimization', slug: 'topology-optimization', summary: 'A minimum-cost bracket study using ANSYS topology optimization and mesh convergence.', tags: ['ANSYS', 'FEA', 'Optimization'], image: 'assets/topology-stress.jpg', alt: 'Simulated stress contour on the topology-optimized bracket', mediaKind: 'technical', repository: 'https://github.com/NickSki17/Small-Projects-Public/tree/main/FEA-Topology-Optimization' },
  { title: 'Bladed Disk Optimization', slug: 'bladed-disk-optimization', summary: 'A rotating-component study using cyclic-symmetry FEA and prestressed modal analysis.', tags: ['CAE', 'Rotordynamics', 'FEA'], image: 'assets/bladed-disk-radial-result-cropped.jpg', alt: 'Simulated radial tip deflection on the bladed disk at 4,500 RPM', mediaKind: 'technical', repository: 'https://github.com/NickSki17/Small-Projects-Public/tree/main/FEA-Bladed-Disk-Optimization' },
  { title: 'Sustainable Foam-Core Chair', slug: 'sustainable-chair', summary: 'An interlocking chair developed through CAD, FEA-informed iteration, fabrication, and load trials.', tags: ['CAD', 'FEA', 'Testing'], image: 'assets/chair-before-test-thumbnail-cropped.jpg', alt: 'Full foam-core chair prototype before the incremental load trial', mediaKind: 'photo-contain', repository: 'https://github.com/NickSki17/Sustainable-Chair' },
  { title: 'Bio-Inspired Hexapod', slug: 'hexapod', summary: 'A six-legged prototype using an alternating tripod gait, servo actuation, and Arduino control.', tags: ['Mechatronics', 'Embedded', 'Fabrication'], image: 'assets/hexapod-front.jpg', alt: 'Full view of the assembled hexapod robot, including its chassis and legs', mediaKind: 'photo-contain', repository: 'https://github.com/NickSki17/Hexapod-Robot' },
]

const experience = [
  { title: 'Engine Controls Engineering Intern', organization: 'Progress Rail, a Caterpillar Company', date: 'May 2026 – August 2026', slug: 'progress-rail' },
  { title: 'Engineering Intern', organization: 'Deep Coat Industries', date: 'May 2025 – August 2025; December 2025 – January 2026', slug: 'deep-coat' },
  { title: 'Formula SAE Chassis Design', organization: 'Illinois Institute of Technology', date: 'August 2026 – present', slug: 'fsae' },
  { title: 'Business Owner / Operator', organization: 'Triple Threat Services', date: 'May 2024 – present', description: 'Co-founded and operate a mobile automotive detailing business, managing customer acquisition, scheduling, pricing, purchasing, financial tracking, customer communication, and service delivery.' },
]

const skills = {
  'CAD / Design': ['SolidWorks', 'Autodesk Inventor', 'AutoCAD', 'Mastercam', 'GD&T', 'Design for Manufacturing'],
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
        <nav aria-label="Primary navigation"><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#education">Education</a><ContactLink /></nav>
      </header>

      <main>
        <section className="hero section-wrap" aria-labelledby="hero-title"><div className="hero-kicker">Mechanical systems / CAD / CAE / testing</div><h1 id="hero-title">Nicholas <em>Skiba</em></h1><div className="hero-bottom"><p className="hero-copy">Mechanical engineering student focused on mechanical design, robotics, analysis, prototyping, and experimental validation.</p><div className="hero-contact-links" aria-label="Contact and profile links"><a href="https://github.com/NickSki17" target="_blank" rel="noreferrer">GitHub</a><span aria-hidden="true">·</span><a href="https://www.linkedin.com/in/nicholas-skiba-477b6b287" target="_blank" rel="noreferrer">LinkedIn</a><span aria-hidden="true">·</span><a href="mailto:nskiba@hawk.illinoistech.edu">Email</a></div><p className="hero-lede">B.S. Mechanical Engineering · M.S. Mechanical &amp; Aerospace Engineering</p></div></section>

        <section className="section-wrap section-block" id="experience" aria-labelledby="experience-title"><SectionHeading number="01" title="Experience" id="experience-title" /><div className="experience-list">{experience.map((item, index) => {
          const content = <><span className="experience-index">0{index + 1}</span><span><strong>{item.title}</strong><small>{item.organization}</small>{item.description && <small>{item.description}</small>}</span><time>{item.date}</time>{item.slug && <Icon name="arrow" size={18} />}</>
          return item.slug
            ? <a className="experience-row" href={`./experience/${item.slug}.html`} key={item.title} data-reveal>{content}</a>
            : <div className="experience-row" key={item.title} data-reveal>{content}</div>
        })}</div></section>

        <section className="section-wrap section-block" id="projects" aria-labelledby="projects-title"><SectionHeading number="02" title="Selected projects" id="projects-title" /><div className="project-grid">{featuredProjects.map((project, index) => <article className={`project-card project-card--${index + 1}`} key={project.slug} data-reveal><a className="project-card-primary" href={`./projects/${project.slug}.html`}><div className="project-card-top"><span className="project-number">0{index + 1}</span><Icon name="arrow" size={20} /></div><img className={`project-card-media project-card-media--${project.mediaKind}`} src={project.image} alt={project.alt} loading="lazy" decoding="async" /><div className="project-card-copy"><h3>{project.title}</h3><p>{project.summary}</p><TagList items={project.tags} /></div></a><a className="project-card-repository" href={project.repository} target="_blank" rel="noreferrer" aria-label={`GitHub repository for ${project.title}`}>GitHub ↗</a></article>)}</div><div className="project-index-link"><a href="./projects.html">Browse Additional Projects <Icon name="arrow" size={18} /></a></div></section>

        <section className="section-wrap section-block split-block" id="skills" aria-labelledby="skills-title"><SectionHeading number="03" title="Skills" id="skills-title" /><div className="skills-grid">{Object.entries(skills).map(([category, items]) => <div className="skill-group" key={category} data-reveal><h3>{category}</h3><TagList items={items} /></div>)}</div></section>

        <section className="section-wrap section-block education-block" id="education" aria-labelledby="education-title"><SectionHeading number="04" title="Education" id="education-title" /><div className="education-card" data-reveal><div><p className="eyebrow">Illinois Institute of Technology</p><h3>Co-Terminal B.S. Mechanical Engineering<br />/ M.S. Mechanical &amp; Aerospace Engineering</h3><p>Minor in Engineering Graphics &amp; CAD</p><p className="education-coursework">Coursework: Advanced CAD/CAM/CAE, Design of Machine Elements, Advanced Mechanics of Solids, Manufacturing Processes, Systems and Controls, Computational Mechanics, Dynamics, Thermodynamics, Fluid Mechanics, Materials Science.</p></div><div className="education-meta"><span>August 2023 – December 2027 expected</span><strong>B.S. GPA 3.59<br />M.S. GPA 4.00</strong><small>Dean&apos;s List · August 2023 – December 2025</small></div></div></section>
      </main>

      <footer className="site-footer section-wrap" id="contact"><div><a className="wordmark" href="#top">NS<span>.</span></a></div><div className="footer-links"><a href="https://github.com/NickSki17" target="_blank" rel="noreferrer">GitHub</a><span aria-hidden="true">·</span><a href="https://www.linkedin.com/in/nicholas-skiba-477b6b287" target="_blank" rel="noreferrer">LinkedIn</a><span aria-hidden="true">·</span><a href="mailto:nskiba@hawk.illinoistech.edu">Email</a></div><small>© 2026 Nicholas Skiba</small></footer>
    </div>
  )
}

function SectionHeading({ number, title, id }: { number: string; title: string; id: string }) { return <div className="section-heading"><span>{number}</span><h2 id={id}>{title}</h2></div> }

export default App
