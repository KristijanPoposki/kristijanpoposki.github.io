import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLenis } from './hooks/useLenis'
import { useAnimations } from './hooks/useAnimations'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  const lenisRef = useLenis()
  useAnimations()
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']

    const triggers = sections.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      return ScrollTrigger.create({
        trigger: el,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => setActiveSection(id),
        onEnterBack: () => setActiveSection(id),
      })
    }).filter(Boolean)

    return () => triggers.forEach(t => t.kill())
  }, [])

  function handleNavClick(href) {
    const target = document.querySelector(href)
    if (target) lenisRef.current?.scrollTo(target)
  }

  return (
    <div className="layout">
      <Sidebar activeSection={activeSection} onNavClick={handleNavClick} />
      <main className="main-content">
        <Hero onViewProjects={() => handleNavClick('#projects')} />
        <hr className="section-divider" />
        <About />
        <hr className="section-divider" />
        <Skills />
        <hr className="section-divider" />
        <Projects />
        <hr className="section-divider" />
        <Experience />
        <hr className="section-divider" />
        <Contact />
      </main>
    </div>
  )
}
