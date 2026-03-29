// src/components/Sidebar.jsx
const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Sidebar({ activeSection, onNavClick }) {
  return (
    <aside className="sidebar" aria-label="Site navigation">
      <div className="sidebar-inner">
        <div className="sidebar-avatar" aria-hidden="true">KP</div>
        <div className="sidebar-name">Kristijan Poposki</div>
        <div className="sidebar-title">Software Developer</div>
        <div className="sidebar-location">North Macedonia · Remote</div>

        <nav className="sidebar-nav">
          {NAV_ITEMS.map(({ label, href }) => (
            <button
              key={href}
              className={`nav-link${activeSection === href.slice(1) ? ' active' : ''}`}
              onClick={() => onNavClick(href)}
              aria-current={activeSection === href.slice(1) ? 'page' : undefined}
            >
              <span className="nav-dot" aria-hidden="true" />
              {label}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <a
            href="https://github.com/KristijanPoposki"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-footer-link"
          >
            <span aria-hidden="true">↗</span> GitHub
          </a>
          <a
            href="mailto:kristijanpoposkiwork@gmail.com"
            className="sidebar-footer-link"
          >
            <span aria-hidden="true">✉</span> Email
          </a>
        </div>
      </div>
    </aside>
  )
}
