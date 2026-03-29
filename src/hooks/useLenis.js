import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'

export function useLenis() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis()
    lenisRef.current = lenis

    // Store the ticker callback so we can remove the same reference on cleanup
    const onTick = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(onTick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(onTick)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return lenisRef
}
