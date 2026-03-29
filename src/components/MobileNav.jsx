// src/components/MobileNav.jsx
import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function MobileNav({ activeSection, onNavClick }) {
  const [open, setOpen] = useState(false)

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  function handleLinkClick(href) {
    setOpen(false)
    onNavClick(href)
  }

  return (
    <>
      <header className="mobile-topbar" aria-label="Mobile navigation">
        <span className="mobile-topbar-logo" aria-hidden="true">KP</span>
        <button
          className="mobile-hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? '✕' : '☰'}
        </button>
      </header>

      {open && (
        <div
          className="mobile-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav
        className={`mobile-overlay${open ? ' open' : ''}`}
        aria-label="Mobile site navigation"
        aria-hidden={!open}
      >
        {NAV_ITEMS.map(({ label, href }) => (
          <button
            key={href}
            className={`mobile-nav-link${activeSection === href.slice(1) ? ' active' : ''}`}
            onClick={() => handleLinkClick(href)}
          >
            {label}
          </button>
        ))}
      </nav>
    </>
  )
}
