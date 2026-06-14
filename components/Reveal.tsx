'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

export function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll('[data-reveal]')
    const ctx = gsap.context(() => {
      els.forEach((el) => {
        gsap.fromTo(el, { y: 38, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1.1, ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])
  return <div ref={ref} className={className}>{children}</div>
}
