import { createRoot } from 'react-dom/client'
import { DetailShell, Icon, TagList } from './components'
import './styles.css'

const projects = [
  { title: 'CNC Bracket Design', slug: 'cnc-bracket', summary: 'SolidWorks bracket comparison connecting static FEA, drawing release, fixturing, and Mastercam toolpath planning.', tags: ['SolidWorks', 'FEA', 'CAM'], image: '../assets/cnc-bracket-fea-comparison.jpg', alt: 'Simulated stress comparison for two CNC bracket variants' },
  { title: 'Arbor Press Design', slug: 'arbor-press', summary: 'Iterative arbor-press frame design using CAD revisions, static FEA, engineering drawings, and manufacturing planning.', tags: ['SolidWorks', 'FEA', 'Manufacturing'], image: '../assets/arbor-press-p4.jpg', alt: 'CAD render of the student-designed Arbor Press P4 revision' },
  { title: '6-DOF Robotic Arm', slug: 'robotic-arm', summary: 'Collaborative project with selected contributions by Nicholas Skiba in diagnostics, serial testing, development tooling, ROS 2 scaffolding, and reduced simulation.', tags: ['Embedded', 'ROS 2', 'Python'] },
  { title: 'Physics Surrogate + Optimization', slug: 'physics-surrogate-optimization', summary: 'Partially implemented 3-DOF mass-spring-damper and modal-analysis foundation for later surrogate optimization.', tags: ['Python', 'Dynamics', 'Optimization'] },
]

function ProjectsPage() {
  return <DetailShell title="Additional Projects" eyebrow="Additional Projects" homeHref="./index.html">
    <p className="project-index-intro">A compact index of additional design, analysis, manufacturing, robotics, and dynamics work.</p>
    <section className="project-index-list" aria-label="Additional engineering projects">
      {projects.map((project) => <a className="project-index-item" href={`./projects/${project.slug}.html`} key={project.slug}>
        {project.image && <img className="project-index-media" src={project.image} alt={project.alt} loading="lazy" decoding="async" />}
        <div className="project-index-copy"><span className="eyebrow">Project</span><h2>{project.title}</h2><p>{project.summary}</p><TagList items={project.tags} /><span className="project-index-linkline">View project <Icon name="arrow" size={16} /></span></div>
      </a>)}
    </section>
  </DetailShell>
}

document.title = 'Additional Projects — Nicholas Skiba'
document.querySelector('meta[name="description"]')?.setAttribute('content', 'Additional mechanical engineering projects by Nicholas Skiba.')
createRoot(document.getElementById('root')!).render(<ProjectsPage />)
