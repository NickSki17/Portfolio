import { createRoot } from 'react-dom/client'
import { DetailShell } from './components'
import { caseStudies } from './case-studies'
import './styles.css'

const slug = window.location.pathname.split('/').pop()?.replace('.html', '') ?? 'case-study'
const study = caseStudies[slug]
const title = study?.title ?? slug.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
const additionalProjectSlugs = ['cnc-bracket', 'arbor-press', 'robotic-arm', 'physics-surrogate-optimization']
const isAdditionalProject = additionalProjectSlugs.includes(slug)
const workUrl = study?.repository ?? study?.supportingWorkUrl
const workLinkLabel = study?.supportingWorkUrl ? 'GitHub ↗' : study?.repositoryLabel ?? 'GitHub repository ↗'

if (study) {
  document.title = `${study.title} - Nicholas Skiba`
  document.querySelector('meta[name="description"]')?.setAttribute('content', study.summary)
}

function DetailPage() {
  if (!study) return <DetailShell title={title} eyebrow="Project"><p className="detail-placeholder">Project not found.</p></DetailShell>
  const figures = study.figures ?? []
  const renderFigure = (figure: typeof figures[number]) => <figure key={figure.src}><img className={`figure-image figure-image--${figure.kind ?? 'photo'}`} src={figure.src} alt={figure.alt} loading="lazy" decoding="async" /><figcaption>{figure.caption}</figcaption></figure>
  const renderFigures = (items: typeof figures) => items.length > 0 && <section className="figure-grid" aria-label="Project figures">{items.map(renderFigure)}</section>
  const renderVideo = (video: NonNullable<typeof study.videos>[number]) => <figure className="video-card" key={video.src}><video controls preload="none" poster={video.poster} aria-label={`${video.label} ${video.title}`}><source src={video.src} type="video/mp4" /></video><figcaption><strong>{video.label}</strong> {video.title}</figcaption></figure>
  const renderVideos = () => study.videos && <section className="video-grid" aria-label="Project videos">{study.videos.map(renderVideo)}</section>
  const renderHexapodMedia = () => <section className="hexapod-media-grid" aria-label="Hexapod photos and video">{figures.slice(0, 1).map(renderFigure)}{study.videos?.map(renderVideo)}{figures.slice(1).map(renderFigure)}</section>
  const isHexapod = study.slug === 'hexapod'
  return <DetailShell title={study.title} eyebrow={study.slug === 'triple-threat-services' ? 'Experience' : study.type === 'experience' ? 'Engineering Experience' : 'Project'} backHref={isAdditionalProject ? '../projects.html' : undefined} backLabel={isAdditionalProject ? 'Back to Additional Projects' : undefined} centerIntro>
    <div className="detail-intro"><p>{study.summary}</p><div className="detail-meta"><span className={`status status--${study.status}`}>{study.status.replace('-', ' ')}</span>{study.organization && <span>{study.organization}</span>}{study.date && <span>{study.date}</span>}{study.role && <span>{study.role}</span>}</div>{workUrl && <a className="detail-repository" href={workUrl} target="_blank" rel="noreferrer">{workLinkLabel}</a>}</div>
    {study.metrics && <section className="metric-grid" aria-label="Evidence-backed metrics">{study.metrics.map((metric) => <article className="metric-card" key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong><small><b>{metric.basis}</b>{metric.note && ` - ${metric.note}`}</small></article>)}</section>}
    <div className="detail-sections">{study.sections.map((section) => <section className="detail-section" key={section.title}><h2>{section.title}</h2><p>{section.content}</p></section>)}</div>
    {isHexapod ? renderHexapodMedia() : study.videoAfterFirstFigure ? <>{renderFigures(figures.slice(0, 1))}{renderVideos()}{renderFigures(figures.slice(1))}</> : <>{renderFigures(figures)}{renderVideos()}</>}
  </DetailShell>
}

createRoot(document.getElementById('root')!).render(<DetailPage />)
