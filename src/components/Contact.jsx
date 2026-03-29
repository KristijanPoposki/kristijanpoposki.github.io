// src/components/Contact.jsx
const CONTACTS = [
  {
    id: 'email',
    icon: '✉',
    label: 'Email',
    value: 'kristijanpoposkiwork@gmail.com',
    href: 'mailto:kristijanpoposkiwork@gmail.com',
  },
  {
    id: 'github',
    icon: '↗',
    label: 'GitHub',
    value: 'github.com/KristijanPoposki',
    href: 'https://github.com/KristijanPoposki',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <p className="section-label">Contact</p>
      <h2 className="section-title">Get in Touch</h2>
      <div className="contact-grid">
        {CONTACTS.map(({ id, icon, label, value, href }) => (
          <a
            key={id}
            href={href}
            className="contact-card"
            target={href.startsWith('https://') ? '_blank' : undefined}
            rel={href.startsWith('https://') ? 'noopener noreferrer' : undefined}
          >
            <div className="contact-icon" aria-hidden="true">{icon}</div>
            <div>
              <p className="contact-label">{label}</p>
              <p className="contact-value">{value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
