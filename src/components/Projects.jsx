// src/components/Projects.jsx
const PROJECTS = [
  {
    id: 'pos',
    tag: 'Full-Stack',
    name: 'POS System',
    desc: 'Real-time restaurant ordering system with QR menus, multi-language support (MK/SQ/EN), live order tracking, and waiter dashboard.',
    badges: ['React', 'Supabase', 'Tailwind', 'Realtime'],
    href: null,
  },
  {
    id: 'nbrm',
    tag: 'Collaborative',
    name: 'National Bank of NMK — Web App',
    desc: 'Collaborated in a team on a web-based application. Focused on backend architecture — repository layers, service layers, routing, and validation logic.',
    badges: ['React', 'Team Project'],
    href: 'https://sporedi.nbrm.mk',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <p className="section-label">Projects</p>
      <h2 className="section-title">What I've Built</h2>
      <div className="projects-grid">
        {PROJECTS.map(({ id, tag, name, desc, badges, href }) => {
          const isClickable = Boolean(href)
          const inner = (
            <>
              <p className="project-tag">{tag}</p>
              <h3 className="project-name">{name}</h3>
              <p className="project-desc">{desc}</p>
              <div className="project-badges">
                {badges.map(b => <span key={b} className="badge">{b}</span>)}
              </div>
            </>
          )
          return isClickable ? (
            <a
              key={id}
              className="project-card clickable"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} — opens external site`}
            >
              {inner}
            </a>
          ) : (
            <div key={id} className="project-card">
              {inner}
            </div>
          )
        })}
      </div>
    </section>
  )
}
