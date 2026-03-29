// src/hooks/useAnimations.js
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useAnimations() {
  useEffect(() => {
    // Give DOM time to paint before registering triggers
    const ctx = gsap.context(() => {

      // ── Section labels, H2s, body text ──────────────────────
      gsap.utils.toArray('.section-label, .section-title, .hero-sub, .exp-desc, .hero-h1').forEach(el => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            end: 'top 50%',
            scrub: true,
          },
        })
      })

      // ── Skill tags (stagger) ──────────────────────────────────
      gsap.from('.skill-tag', {
        opacity: 0,
        scale: 0.8,
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top bottom',
          end: 'top center',
          scrub: true,
        },
      })

      // ── Project card 1: slide from left ──────────────────────
      const cards = gsap.utils.toArray('.project-card')
      if (cards[0]) {
        gsap.from(cards[0], {
          opacity: 0,
          x: -60,
          scrollTrigger: {
            trigger: cards[0],
            start: 'top bottom',
            end: 'top 55%',
            scrub: true,
          },
        })
      }

      // ── Project card 2: slide from right ─────────────────────
      if (cards[1]) {
        gsap.from(cards[1], {
          opacity: 0,
          x: 60,
          scrollTrigger: {
            trigger: cards[1],
            start: 'top bottom',
            end: 'top 55%',
            scrub: true,
          },
        })
      }

      // ── Experience timeline items ─────────────────────────────
      gsap.utils.toArray('.timeline-item').forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          x: -40,
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'top center',
            scrub: true,
          },
        })
      })

      // ── Contact cards ─────────────────────────────────────────
      gsap.utils.toArray('.contact-card').forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 20,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'top 65%',
            scrub: true,
          },
        })
      })

    })

    return () => ctx.revert()
  }, [])
}
