'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Logo } from './Logo'

const links = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease-quint)] ${scrolled ? 'bg-bg/85 backdrop-blur-md border-b border-line' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-[72px] max-w-shell items-center justify-between px-5 lg:px-10">
        <Logo />
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="link-sweep text-sm text-fg/85 hover:text-fg">{l.label}</Link>
          ))}
          <a href="tel:+16026419134" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-colors duration-500 ease-[var(--ease-quint)] hover:bg-accent-dark">
            <Phone size={15} /> (602) 641-9134
          </a>
        </nav>
        <button onClick={() => setOpen(true)} className="md:hidden text-fg" aria-label="Open menu"><Menu /></button>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-bg md:hidden">
          <div className="flex h-[72px] items-center justify-between px-5">
            <Logo />
            <button onClick={() => setOpen(false)} className="text-fg" aria-label="Close menu"><X /></button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-display text-4xl uppercase tracking-tight text-fg py-2">{l.label}</Link>
            ))}
            <a href="tel:+16026419134" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-bg">
              <Phone size={17} /> (602) 641-9134
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
