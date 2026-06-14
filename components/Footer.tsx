import Link from 'next/link'
import { Phone, MapPin, Clock, Star } from 'lucide-react'
import { site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-line bg-bg2">
      <div className="mx-auto grid max-w-shell gap-12 px-5 py-20 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <div className="font-display text-3xl font-semibold uppercase leading-[0.95] tracking-tight">
            Clean Call <span className="text-accent">Car Detailing</span>
          </div>
          <p className="mt-4 max-w-sm text-muted">{site.tagline}</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm">
            <Star size={15} className="fill-sand text-sand" />
            <span className="font-medium">{site.rating}★</span>
            <span className="text-muted">· 5-star rated mobile detailing</span>
          </div>
        </div>
        <div>
          <h4 className="kicker text-muted">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link href="/about" className="link-sweep">About</Link></li>
            <li><Link href="/services" className="link-sweep">Services</Link></li>
            <li><Link href="/work" className="link-sweep">Work</Link></li>
            <li><Link href="/contact" className="link-sweep">Book now</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="kicker text-muted">Get in touch</h4>
          <address className="mt-5 space-y-3 text-sm not-italic text-fg/90">
            <a href={site.phoneHref} className="flex items-start gap-2.5 hover:text-accent"><Phone size={16} className="mt-0.5 text-accent" />{site.phone}</a>
            <div className="flex items-start gap-2.5"><MapPin size={16} className="mt-0.5 text-accent" />Mobile — we come to you across the East Valley</div>
            <div className="flex items-start gap-2.5"><Clock size={16} className="mt-0.5 text-accent" />By appointment · 7 days a week</div>
          </address>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-shell flex-col gap-2 px-5 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div>© {new Date().getFullYear()} {site.name}. Mobile detailing in {site.city} & the East Valley.</div>
          <a href="https://aydenbuilds.com" className="link-sweep hover:text-fg">Built by Ayden Anderson</a>
        </div>
      </div>
    </footer>
  )
}
