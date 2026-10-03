export type ProjectStatus = 'completed' | 'in-progress' | 'planned'
export type MetricBasis = 'measured' | 'simulated' | 'calculated' | 'estimated' | 'manufacturer-specification' | 'requirement' | 'user-attested' | 'author-reported' | 'planned' | 'unknown'
export type Metric = { label: string; value: string; basis: MetricBasis; note?: string }
export type Figure = { src: string; alt: string; caption?: string; kind?: 'photo' | 'cad' | 'plot' | 'diagram' | 'screenshot' | 'video' }
export type Video = { src: string; poster: string; title: string; label: string }
export type CaseStudySection = { title: string; content: string }
export type CaseStudy = { slug: string; type: 'project' | 'experience'; status: ProjectStatus; title: string; organization?: string; date?: string; summary: string; role?: string; metrics?: Metric[]; sections: CaseStudySection[]; figures?: Figure[]; videos?: Video[]; videoAfterFirstFigure?: boolean; tags: string[]; repository?: string; repositoryLabel?: string; supportingWorkUrl?: string }

export const caseStudySlugs = {
  projects: ['four-bar-ev-charging-arm', 'hexapod', 'sustainable-chair', 'topology-optimization', 'bladed-disk-optimization', 'cnc-bracket', 'arbor-press', 'robotic-arm', 'physics-surrogate-optimization'],
  experience: ['progress-rail', 'deep-coat', 'fsae', 'triple-threat-services'],
} as const
