import { Phone, Mail, Car, Clock } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { ContactForm } from '@/components/ContactForm'
import { site } from '@/lib/site'

export const metadata = {
  title: 'Contact — book mobile car detailing in Chandler, AZ',
  description: 'Call or text Clean Call Car Detailing at (602) 641-9134, or request a booking online. Mobile detailing across Chandler, Gilbert, Mesa and the East Valley.',
}

export default function Contact() {
  return (
    <>
      <Reveal className="mx-auto flex min-h-[44vh] max-w-shell flex-col justify-center px-5 pt-32 lg:px-10">
        <div data-reveal className="kicker text-accent">Contact</div>
        <h1 data-reveal className="mt-5 max-w-4xl font-display text-[clamp(44px,8vw,116px)] font-semibold uppercase leading-[0.9] tracking-tight">
          Let&apos;s book your detail.
        </h1>
      </Reveal>

      <Reveal className="mx-auto grid max-w-shell gap-14 px-5 py-20 lg:grid-cols-2 lg:px-10">
        <div data-reveal>
          <h2 className="kicker mb-8 text-muted">Reach us directly</h2>
          <div className="space-y-6 text-lg">
            <a href={site.phoneHref} className="flex items-center gap-4 hover:text-accent">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-card text-accent"><Phone size={18} /></span>
              <span><span className="block text-sm text-muted">Call or text</span>{site.phone}</span>
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-4 hover:text-accent">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-card text-accent"><Mail size={18} /></span>
              <span><span className="block text-sm text-muted">Email</span>{site.email}</span>
            </a>
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-card text-accent"><Car size={18} /></span>
              <span><span className="block text-sm text-muted">Service</span>100% mobile — we come to you</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-card text-accent"><Clock size={18} /></span>
              <span><span className="block text-sm text-muted">Hours</span>By appointment · 7 days a week</span>
            </div>
          </div>
          <div className="mt-8 rounded-xl border border-line bg-card p-5 text-sm text-muted">
            <span className="font-medium text-fg">Service area:</span> {site.areas.join(', ')} and the greater East Valley.
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-line">
            <iframe title="Service area map — Chandler, AZ" src="https://www.google.com/maps?q=Chandler,AZ&z=11&output=embed" className="h-64 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
        <div data-reveal className="rounded-2xl border border-line bg-bg2 p-7 lg:p-9">
          <h2 className="mb-6 font-display text-3xl font-semibold uppercase tracking-tight">Request a booking</h2>
          <ContactForm />
        </div>
      </Reveal>
    </>
  )
}
