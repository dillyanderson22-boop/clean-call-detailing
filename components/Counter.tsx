'use client'
import { useEffect, useRef, useState } from 'react'

export function Counter({ to, decimals = 0, suffix = '', prefix = '' }:
  { to: number; decimals?: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [val, setVal] = useState(0)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    let raf = 0
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now()
        const dur = 1600
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur)
          const eased = 1 - Math.pow(1 - p, 3)
          setVal(to * eased)
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
        obs.disconnect()
      }
    }, { threshold: 0.4 })
    obs.observe(node)
    return () => { obs.disconnect(); cancelAnimationFrame(raf) }
  }, [to])
  return <span ref={ref}>{prefix}{val.toFixed(decimals)}{suffix}</span>
}
