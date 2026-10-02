import { createRoot } from 'react-dom/client'
import { DetailShell } from './components'
import { caseStudies } from './case-studies'
import './styles.css'

const slug = window.location.pathname.split('/').pop()?.replace('.html', '') ?? 'case-study'
const study = caseStudies[slug]
const title = study?.title ?? slug.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

if (study) {
  document.title = `${study.title} — Nicholas Skiba`
  document.querySelector('meta[name="description"]')?.setAttribute('content', study.summary)
}

function DetailPage() {
  if (!study) return <DetailShell title={title}><p className="detail-placeholder">Case study not found.</p></DetailShell>
  return <DetailShell title={study.title}>
    <div className="detail-intro"><p>{study.summary}</p><div className="detail-meta"><span className={`status status--${study.status}`}>{study.status.replace('-', ' ')}</span>{study.organization && <span>{study.organization}</span>}{study.date && <span>{study.date}</span>}{study.role && <span>{study.role}</span>}</div></div>
    {study.metrics && <section className="metric-grid" aria-label="Evidence-backed metrics">{study.metrics.map((metric) => <article className="metric-card" key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong><small><b>{metric.basis}</b>{metric.note && ` — ${metric.note}`}</small></article>)}</section>}
    <div className="detail-sections">{study.sections.map((section) => <section className="detail-section" key={section.title}><h2>{section.title}</h2><p>{section.content}</p></section>)}</div>
    {study.figures && <section className="figure-grid" aria-label="Project figures">{study.figures.map((figure) => <figure key={figure.src}><img src={figure.src} alt={figure.alt} loading="lazy" decoding="async" /><figcaption>{figure.caption}</figcaption></figure>)}</section>}
  </DetailShell>
}

createRoot(document.getElementById('root')!).render(<DetailPage />)
