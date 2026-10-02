import { createRoot } from 'react-dom/client'
import { Icon } from './components'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <div className="not-found section-wrap">
    <p className="eyebrow">404 / Not found</p>
    <h1>That page is<br /><em>missing.</em></h1>
    <p>The requested page is not part of Nicholas Skiba's portfolio.</p>
    <a className="header-contact" href="./index.html">Back to portfolio <Icon name="arrow" size={15} /></a>
  </div>,
)
