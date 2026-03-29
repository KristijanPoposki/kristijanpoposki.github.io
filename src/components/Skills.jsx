// src/components/Skills.jsx
const PRIMARY_SKILLS = ['React.js', 'JavaScript', 'HTML', 'CSS']
const SECONDARY_SKILLS = [
  'Python', 'C', 'Responsive Design',
  'Component Architecture', 'State Management', 'API Integration',
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <p className="section-label">Skills</p>
      <h2 className="section-title">Tech Stack</h2>
      <div className="skills-grid">
        {PRIMARY_SKILLS.map(skill => (
          <span key={skill} className="skill-tag primary">{skill}</span>
        ))}
        {SECONDARY_SKILLS.map(skill => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>
    </section>
  )
}
