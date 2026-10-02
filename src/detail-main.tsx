import { createRoot } from 'react-dom/client'
import { DetailShell } from './components'
import './styles.css'

const slug = window.location.pathname.split('/').pop()?.replace('.html', '') ?? 'case-study'
const title = slug.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

createRoot(document.getElementById('root')!).render(<DetailShell title={title}><p className="detail-placeholder">Case-study content scaffold. Evidence-backed content will be loaded in Stage B.</p></DetailShell>)
