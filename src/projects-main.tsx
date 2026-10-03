import { createRoot } from 'react-dom/client'
import { DetailShell, Icon, TagList } from './components'
import './styles.css'

type AdditionalProject = { title: string; slug: string; summary: string; tags: string[]; image?: string; alt?: string; repository?: string; repositoryLabel?: string }

const projects: AdditionalProject[] = [
  { title: 'CNC Bracket Design', slug: 'cnc-bracket', summary: 'SolidWorks bracket comparison connecting static FEA, drawing release, fixturing, and Mastercam toolpath planning.', tags: ['SolidWorks', 'FEA', 'CAM'], image: './assets/cnc-bracket-fea-comparison.jpg', alt: 'Simulated stress comparison for two CNC bracket variants', repository: 'https://github.com/NickSki17/Small-Projects-Public/tree/main/CNC-Bracket-Design' },
  { title: 'Arbor Press Design', slug: 'arbor-press', summary: 'Iterative arbor-press frame design using CAD revisions, static FEA, engineering drawings, and manufacturing planning.', tags: ['SolidWorks', 'FEA', 'Manufacturing'], image: './assets/arbor-press-p4-cropped.jpg', alt: 'CAD render of the Arbor Press P4 revision', repository: 'https://github.com/NickSki17/Small-Projects-Public/tree/main/Arbor-Press-Design' },
  { title: '6-DOF Robotic Arm', slug: 'robotic-arm', summary: 'Collaborative project - my contributions include diagnostics, serial testing, development tooling, ROS 2 scaffolding, and reduced simulation.', tags: ['Embedded', 'ROS 2', 'Python'], repository: 'https://github.com/ZachSkiba/Robot', repositoryLabel: 'Repository ↗' },
  { title: 'Physics Surrogate + Optimization', slug: 'physics-surrogate-optimization', summary: 'Partially implemented 3-DOF mass-spring-damper and modal-analysis foundation for later surrogate optimization.', tags: ['Python', 'Dynamics', 'Optimization'], repository: 'https://github.com/NickSki17/Small-Projects-Public/tree/main/Computational-Methods' },
]

function ProjectsPage() {
  return <DetailShell title="Additional Projects" eyebrow="Additional Projects" homeHref="./index.html" centerIntro>
    <p className="project-index-intro">A compact index of additional design, analysis, manufacturing, robotics, and dynamics work.</p>
    <section className="project-index-list" aria-label="Additional engineering projects">
      {projects.map((project) => <article className={`project-index-item${project.image ? '' : ' project-index-item--text'}`} key={project.slug}>
        <a className="project-index-primary" href={`./projects/${project.slug}.html`}>
          {project.image && <img className="project-index-media" src={project.image} alt={project.alt} loading="lazy" decoding="async" />}
          <div className="project-index-copy"><span className="eyebrow">Project</span><h2>{project.title}</h2><p>{project.summary}</p><TagList items={project.tags} /><span className="project-index-linkline">View project <Icon name="arrow" size={16} /></span></div>
        </a>
        {project.repository && <a className="project-index-repository" href={project.repository} target="_blank" rel="noreferrer">{project.repositoryLabel ?? 'GitHub ↗'}</a>}
      </article>)}
    </section>
  </DetailShell>
}

document.title = 'Additional Projects - Nicholas Skiba'
document.querySelector('meta[name="description"]')?.setAttribute('content', 'Additional mechanical engineering projects by Nicholas Skiba.')
createRoot(document.getElementById('root')!).render(<ProjectsPage />)
