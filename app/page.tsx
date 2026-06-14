import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowUpRight, Star, MapPin, Sparkles, Car, Droplets, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { Counter } from '@/components/Counter'
import { site, px, photos } from '@/lib/site'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-bg2 grain">
        <Image src={px(photos.hero, 2000)} alt="Mobile car detailing in progress on a sports car in the East Valley" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/25 to-bg/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/75 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-shell px-5 pb-16 lg:px-10 lg:pb-24">
          <div className="kicker flex items-center gap-3 text-accent">
            <span className="h-px w-8 bg-accent" /> Mobile detailing · Chandler &amp; East Valley
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(46px,8vw,120px)] font-semibold uppercase leading-[0.92] tracking-tight">
            We bring the <span className="text-accent">detail shop</span> to you.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg/85">
            Interior and exterior detailing, ceramic coating and paint correction — done in your driveway. You don&apos;t go anywhere; your car just gets clean.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={site.phoneHref} className="inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 font-medium text-bg transition-colors duration-500 ease-[var(--ease-quint)] hover:bg-accent-dark">
              <Phone size={18} /> Call or text {site.phone}
            </a>
            <Link href="/work" className="group inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 font-medium text-fg backdrop-blur-sm transition-colors duration-500 hover:border-fg/40">
              See the results <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="border-y border-line bg-bg2">
        <div className="mx-auto flex max-w-shell flex-wrap items-center justify-between gap-x-10 gap-y-4 px-5 py-5 text-sm lg:px-10">
          <span className="inline-flex items-center gap-2 text-fg/80"><Star size={16} className="fill-sand text-sand" /> 5-star rated detailing</span>
          <span className="inline-flex items-center gap-2 text-fg/80"><Car size={16} className="text-accent" /> 100% mobile — we come to you</span>
          <span className="inline-flex items-center gap-2 text-fg/80"><MapPin size={16} className="text-accent" /> Serving the East Valley</span>
          <span className="inline-flex items-center gap-2 text-fg/80"><Clock size={16} className="text-accent" /> By appointment, 7 days</span>
        </div>
      </div>

      {/* SERVICES */}
      <Reveal className="mx-auto max-w-shell px-5 py-28 lg:px-10 lg:py-36">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div data-reveal className="kicker text-accent">What we do</div>
            <h2 data-reveal className="mt-4 max-w-2xl font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight md:text-7xl">
              From quick refresh to showroom finish.
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-muted">
            Every package is done by hand with pro-grade products — at your home or office, on your schedule.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-12">
          <div data-reveal className="group relative overflow-hidden rounded-2xl md:col-span-7">
            <div className="relative aspect-[16/11] w-full">
              <Image src={px(photos.ceramic, 1400)} alt="Detailer applying ceramic coating to a vehicle" fill sizes="(max-width:768px) 100vw, 58vw" className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-quint)] group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
            </div>
            <div className="absolute bottom-0 p-7">
              <Sparkles className="mb-3 text-accent" />
              <h3 className="font-display text-3xl font-semibold uppercase tracking-tight md:text-4xl">Ceramic coating &amp; paint correction</h3>
              <p className="mt-2 max-w-md text-sm text-fg/80">Lock in a deep gloss and protect your paint from Arizona sun. We cut out swirls and seal it so washing gets easier.</p>
            </div>
          </div>

          <div className="flex flex-col gap-5 md:col-span-5">
            {[
              { icon: Droplets, t: 'Exterior wash & wax', d: 'Hand wash, clay bar, tire shine and wax — every panel, wheel and window done right.' },
              { icon: Car, t: 'Interior deep clean', d: 'Vacuum, steam, leather and vinyl conditioning, glass and a full wipe-down of every surface.' },
              { icon: ShieldCheck, t: 'Wheels & trim detail', d: 'Deep wheel and barrel cleaning, chrome and trim polish, and headlight restoration.' },
            ].map((s) => (
              <div key={s.t} data-reveal className="flex flex-1 flex-col justify-center rounded-2xl border border-line bg-card p-7 transition-colors duration-500 hover:border-accent/40">
                <s.icon className="mb-3 text-accent" />
                <h3 className="font-display text-2xl font-semibold uppercase tracking-tight">{s.t}</h3>
                <p className="mt-2 text-sm text-muted">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <Link href="/services" className="link-sweep inline-flex items-center gap-2 font-display uppercase tracking-wide text-accent">
            See all packages <ArrowUpRight size={18} />
          </Link>
        </div>
      </Reveal>

      {/* NUMBERS */}
      <section className="border-y border-line bg-bg2">
        <Reveal className="mx-auto max-w-shell px-5 py-24 lg:px-10">
          <div data-reveal className="kicker mb-12 text-accent">Why book Clean Call</div>
          <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
            {[
              { v: <Counter to={5.0} decimals={1} />, l: 'Star rated' },
              { v: <><Counter to={100} />%</>, l: 'Mobile — we travel' },
              { v: <Counter to={7} />, l: 'Cities served' },
              { v: <Counter to={7} />, l: 'Days a week' },
            ].map((n, i) => (
              <div key={i} data-reveal>
                <div className="font-display text-6xl font-bold text-accent md:text-7xl">{n.v}</div>
                <div className="mt-2 text-sm uppercase tracking-wide text-muted">{n.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* PROCESS */}
      <Reveal className="mx-auto max-w-shell px-5 py-28 lg:px-10 lg:py-36">
        <div data-reveal className="kicker text-accent">How it works</div>
        <h2 data-reveal className="mt-4 max-w-2xl font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight md:text-6xl">
          Three steps. Zero hassle.
        </h2>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {[
            { n: '01', t: 'Call or text', d: 'Tell us your vehicle and what you want done. We give you a straight price and a time that works.' },
            { n: '02', t: 'We come to you', d: 'We pull up to your home or office with everything we need — water and power included.' },
            { n: '03', t: 'Drive away clean', d: 'You get back a car that looks and feels brand new, without ever leaving your driveway.' },
          ].map((s) => (
            <div key={s.n} data-reveal className="bg-bg p-8 lg:p-10">
              <div className="font-display text-5xl font-bold text-accent/30">{s.n}</div>
              <h3 className="mt-4 font-display text-2xl font-semibold uppercase tracking-tight">{s.t}</h3>
              <p className="mt-3 text-muted">{s.d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* WORK PREVIEW */}
      <Reveal className="mx-auto max-w-shell px-5 pb-28 lg:px-10 lg:pb-36">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <div data-reveal className="kicker text-accent">Recent work</div>
            <h2 data-reveal className="mt-4 font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight md:text-6xl">The finish.</h2>
          </div>
          <Link href="/work" className="link-sweep hidden items-center gap-2 font-display uppercase tracking-wide text-accent sm:inline-flex">
            See all <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {photos.gallery.slice(0, 6).map((id, i) => (
            <div key={id} data-reveal className={`group relative overflow-hidden rounded-xl ${i === 0 ? 'col-span-2 row-span-2 aspect-square md:aspect-auto' : 'aspect-[4/3]'}`}>
              <Image src={px(id, 900)} alt="Clean Call Car Detailing result" fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-quint)] group-hover:scale-[1.05]" />
            </div>
          ))}
        </div>
      </Reveal>

      {/* PROMISE */}
      <section className="border-y border-line bg-bg2">
        <Reveal className="mx-auto max-w-shell px-5 py-24 lg:px-10">
          <div data-reveal className="kicker mb-12 text-accent">The Clean Call promise</div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { t: 'We come to you', d: 'Home, office or apartment — we bring our own water and power and set up wherever you park.' },
              { t: 'By hand, done right', d: 'No rushed automatic-wash job. Every car is detailed by hand with professional products.' },
              { t: 'You see it before you pay', d: 'We walk the finished car with you. If something isn’t right, we make it right on the spot.' },
            ].map((t, i) => (
              <div key={i} data-reveal className="flex flex-col rounded-2xl border border-line bg-bg p-7">
                <CheckCircle2 className="mb-4 text-accent" />
                <h3 className="font-display text-2xl font-semibold uppercase tracking-tight">{t.t}</h3>
                <p className="mt-3 text-muted">{t.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <Reveal className="mx-auto max-w-shell px-5 py-28 text-center lg:px-10 lg:py-36">
        <h2 data-reveal className="mx-auto max-w-3xl font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight md:text-7xl">
          Book your detail today.
        </h2>
        <p data-reveal className="mx-auto mt-6 max-w-md text-muted">
          Call or text for a quick quote. We&apos;ll come to you anywhere in the East Valley.
        </p>
        <div data-reveal className="mt-9 flex flex-wrap justify-center gap-4">
          <a href={site.phoneHref} className="inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-4 font-medium text-bg transition-colors duration-500 hover:bg-accent-dark">
            <Phone size={18} /> {site.phone}
          </a>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-line px-8 py-4 font-medium transition-colors duration-500 hover:border-fg/40">
            Book online
          </Link>
        </div>
      </Reveal>
    </>
  )
}
