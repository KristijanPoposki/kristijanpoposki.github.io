// src/components/Hero.jsx
import { useEffect, useState } from 'react'

const TYPEWRITER_TEXT = 'Software Developer'
const CHAR_DELAY_MS = 80

export default function Hero({ onViewProjects }) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(TYPEWRITER_TEXT.slice(0, i + 1))
      i++
      if (i >= TYPEWRITER_TEXT.length) clearInterval(interval)
    }, CHAR_DELAY_MS)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="section">
      <p className="hero-label">Hello, world.</p>
      <h1 className="hero-h1">I'm Kristijan, a</h1>
      <div className="hero-typewriter-line" aria-label="Software Developer">
        <span aria-hidden="true">{displayed}</span>
        <span className="hero-cursor" aria-hidden="true" />
      </div>
      <p className="hero-sub">
        I build clean, fast, and reliable web applications. Based in North Macedonia,
        open to remote opportunities worldwide.
      </p>
      <div className="hero-ctas">
        <button className="btn-primary" onClick={onViewProjects}>
          View Projects
        </button>
      </div>
    </section>
  )
}
