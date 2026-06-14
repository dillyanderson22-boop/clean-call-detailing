import Image from 'next/image'
import Link from 'next/link'
import { Phone, Car, Hand, Clock } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { site, px, photos } from '@/lib/site'

export const metadata = {
  title: 'About — Owner-operated mobile detailing in the East Valley',
  description: 'Clean Call Car Detailing is an owner-operated mobile detailing service in Chandler, AZ. We come to your home or office and detail your car by hand.',
}

export default function About() {
  return (
    <>
      <Reveal className="mx-auto flex min-h-[72vh] max-w-shell flex-col justify-center px-5 pt-32 lg:px-10">
        <div data-reveal className="kicker text-accent">About us</div>
        <h1 data-reveal className="mt-5 max-w-5xl font-display text-[clamp(44px,8vw,116px)] font-semibold uppercase leading-[0.9] tracking-tight">
          A real detailer, <span className="text-accent">in your driveway.</span>
        </h1>
        <p data-reveal className="mt-8 max-w-2xl text-xl leading-relaxed text-fg/85">
          Clean Call is an owner-operated mobile detailing service based in Chandler. No franchise, no rushed assembly line — just careful, hand-done work brought straight to you.
        </p>
      </Reveal>

      <Reveal className="mx-auto grid max-w-shell items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:px-10">
        <div data-reveal className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image src={px(photos.interior, 1200)} alt="A freshly detailed car interior" fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" />
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-fg/85">
          <p data-reveal>The idea is simple: most people don&apos;t have time to sit at a detail shop for half a day. So we bring the shop to them — at home, at work, wherever the car sits.</p>
          <p data-reveal>Every detail is done by hand with professional products built for Arizona&apos;s heat, dust and sun. We take our time, we protect your paint, and we don&apos;t cut corners to rush to the next car.</p>
          <p data-reveal>From a quick exterior refresh to full ceramic coating, you get the same thing every time: a car that looks like it just rolled off the lot.</p>
          <a data-reveal href={site.phoneHref} className="inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 font-medium text-bg transition-colors duration-500 hover:bg-accent-dark">
            <Phone size={18} /> Call or text us
          </a>
        </div>
      </Reveal>

      <section className="border-y border-line bg-bg2">
        <Reveal className="mx-auto max-w-shell px-5 py-24 lg:px-10">
          <div data-reveal className="kicker mb-12 text-accent">What you can count on</div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Car, t: 'We come to you', d: 'Fully mobile with our own water and power. We set up wherever your car is parked.' },
              { icon: Hand, t: 'Detailed by hand', d: 'No automatic brushes. Every panel, wheel and surface is done carefully by hand.' },
              { icon: Clock, t: 'On your schedule', d: 'By appointment, seven days a week. We work around your day, not the other way around.' },
            ].map((v) => (
              <div key={v.t} data-reveal>
                <v.icon className="mb-4 text-accent" size={28} />
                <h3 className="font-display text-2xl font-semibold uppercase tracking-tight">{v.t}</h3>
                <p className="mt-3 text-muted">{v.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <Reveal className="mx-auto max-w-shell px-5 py-28 text-center lg:px-10">
        <h2 data-reveal className="font-display text-4xl font-semibold uppercase tracking-tight md:text-6xl">Ready when you are.</h2>
        <div data-reveal className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/work" className="rounded-full bg-accent px-8 py-4 font-medium text-bg transition-colors duration-500 hover:bg-accent-dark">See our work</Link>
          <Link href="/contact" className="rounded-full border border-line px-8 py-4 font-medium transition-colors duration-500 hover:border-fg/40">Book a detail</Link>
        </div>
      </Reveal>
    </>
  )
}
