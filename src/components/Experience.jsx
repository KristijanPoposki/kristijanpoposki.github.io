// src/components/Experience.jsx
const EXPERIENCE = [
  {
    id: 'nbrm',
    role: 'Back-End Developer',
    company: 'National Bank of the Republic of North Macedonia',
    type: 'Collaborative Project',
    desc: 'Worked on backend architecture — implemented repository and service layers, handled routing, built validation logic, and participated in debugging and code reviews across the full stack.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <p className="section-label">Experience</p>
      <h2 className="section-title">Work History</h2>
      <div className="timeline">
        {EXPERIENCE.map(({ id, role, company, type, desc }) => (
          <div key={id} className="timeline-item">
            <div className="timeline-dot" aria-hidden="true" />
            <p className="exp-role">{role}</p>
            <p className="exp-company">{company}</p>
            <p className="exp-type">{type}</p>
            <p className="exp-desc">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
