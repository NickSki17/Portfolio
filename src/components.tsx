import type { ReactNode } from 'react'

export type IconName = 'arrow' | 'github' | 'mail'

export function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': true as const }
  if (name === 'arrow') return <svg {...common}><path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  if (name === 'mail') return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  return <svg {...common}><path d="M15 21v-3.8a3.4 3.4 0 0 0-.9-2.6c3.1-.4 6.3-1.5 6.3-6.8a5.3 5.3 0 0 0-1.4-3.7 5 5 0 0 0-.1-3.6s-1.2-.4-3.8 1.4a13.2 13.2 0 0 0-7 0C6.5.1 5.3.5 5.3.5a5 5 0 0 0-.1 3.6 5.3 5.3 0 0 0-1.4 3.7c0 5.3 3.2 6.4 6.3 6.8a3.4 3.4 0 0 0-.9 2.6V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export function TagList({ items }: { items: string[] }) { return <div className="tag-list">{items.map((item) => <span className="tag" key={item}>{item}</span>)}</div> }

function scrollToContactAfterImagesLoad() {
  const target = document.getElementById('contact')
  if (!target) return
  const pendingImages = Array.from(document.images).filter((image) => !image.complete)
  if (pendingImages.length === 0) return
  const imagesLoaded = Promise.all(pendingImages.map((image) => new Promise<void>((resolve) => {
    image.addEventListener('load', () => resolve(), { once: true })
    image.addEventListener('error', () => resolve(), { once: true })
  })))
  pendingImages.forEach((image) => { image.loading = 'eager' })
  void imagesLoaded.then(() => target.scrollIntoView({ behavior: 'smooth', block: 'end' }))
}

export function ContactLink() {
  return <a className="header-contact" href="#contact" onClick={scrollToContactAfterImagesLoad}>Contact</a>
}

export function DetailShell({ children, title, eyebrow = 'Project', homeHref = '../index.html', backHref, backLabel, centerIntro = false }: { children: ReactNode; title: string; eyebrow?: string; homeHref?: string; backHref?: string; backLabel?: string; centerIntro?: boolean }) {
  return <div className={`detail-shell${centerIntro ? ' detail-shell--center-intro' : ''}`}><header className="site-header"><a className="wordmark" href={homeHref}>NS<span>.</span></a><nav className="detail-navigation" aria-label="Page navigation">{backHref && <a className="header-contact" href={backHref}>{backLabel ?? 'Back'} <Icon name="arrow" size={15} /></a>}<a className="header-contact" href={homeHref}>Back to portfolio <Icon name="arrow" size={15} /></a></nav></header><main className="detail-main section-wrap"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{children}</main><footer className="detail-footer section-wrap" id="contact">nskiba@hawk.illinoistech.edu</footer></div>
}
