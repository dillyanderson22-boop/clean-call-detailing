import Image from 'next/image'
import { Phone, Check } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { site, px, photos } from '@/lib/site'

export const metadata = {
  title: 'Services & packages — mobile detailing, ceramic & paint correction',
  description: 'Mobile detailing packages in Chandler & the East Valley: exterior wash & wax, interior deep clean, ceramic coating, paint correction, and wheel & headlight detail.',
}

const services = [
  { id: 'exterior', t: 'Exterior wash & wax', img: photos.exterior,
    d: 'A full hand wash that actually gets the dust and bug splatter Arizona throws at your paint — then sealed with wax for a clean, protected shine.',
    points: ['Hand wash & dry', 'Clay bar treatment', 'Wax / sealant', 'Tire shine & trim'] },
  { id: 'interior', t: 'Interior deep clean', img: photos.interior,
    d: 'Vacuum, steam and wipe-down of every surface, with leather and vinyl conditioned and glass left streak-free. Pet hair and spills included.',
    points: ['Full vacuum & steam', 'Leather / vinyl conditioning', 'Glass inside & out', 'Door jambs & console'] },
  { id: 'ceramic', t: 'Ceramic coating', img: photos.ceramic,
    d: 'Long-lasting protection that locks in gloss and makes future washes easier. Built to stand up to Arizona sun, heat and hard water.',
    points: ['Paint prep & decon', 'Professional ceramic coat', 'Hydrophobic finish', 'Easier maintenance'] },
  { id: 'correction', t: 'Paint correction', img: photos.gallery[3],
    d: 'Machine polishing that removes swirls, light scratches and oxidation so your paint looks deep and glossy again before coating or wax.',
    points: ['Swirl & scratch removal', 'Single or multi-stage', 'Gloss restoration', 'Pre-coating prep'] },
  { id: 'wheels', t: 'Wheels, trim & headlights', img: photos.wheels,
    d: 'Deep wheel and barrel cleaning, chrome and trim polishing, and headlight restoration to clear up that foggy, yellowed look.',
    points: ['Wheel & barrel detail', 'Chrome & trim polish', 'Headlight restoration', 'Engine bay (on request)'] },
]

export default function Services() {
  return (
    <>
      <Reveal className="mx-auto flex min-h-[58vh] max-w-shell flex-col justify-center px-5 pt-32 lg:px-10">
        <div data-reveal className="kicker text-accent">Services &amp; packages</div>
        <h1 data-reveal className="mt-5 max-w-4xl font-display text-[clamp(44px,8vw,116px)] font-semibold uppercase leading-[0.9] tracking-tight">
          Pick your level of clean.
        </h1>
        <p data-reveal className="mt-8 max-w-2xl text-xl leading-relaxed text-fg/85">
          Mix and match, or call and we&apos;ll build a package around your car and budget. All done at your place.
        </p>
      </Reveal>

      <div className="mx-auto max-w-shell px-5 lg:px-10">
        {services.map((s, i) => (
          <Reveal key={s.id} className="border-t border-line py-20">
            <div id={s.id} className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div data-reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={px(s.img, 1200)} alt={s.t} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div>
                <div data-reveal className="font-display text-5xl font-bold text-accent/25">0{i + 1}</div>
                <h2 data-reveal className="mt-2 font-display text-4xl font-semibold uppercase tracking-tight md:text-5xl">{s.t}</h2>
                <p data-reveal className="mt-4 max-w-md text-lg leading-relaxed text-fg/85">{s.d}</p>
                <ul data-reveal className="mt-6 grid grid-cols-2 gap-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted"><Check size={16} className="mt-0.5 shrink-0 text-accent" />{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mx-auto max-w-shell px-5 py-28 text-center lg:px-10">
        <h2 data-reveal className="font-display text-4xl font-semibold uppercase tracking-tight md:text-6xl">Not sure what your car needs?</h2>
        <p data-reveal className="mx-auto mt-5 max-w-md text-muted">Send a couple photos and we&apos;ll recommend the right package and price.</p>
        <a data-reveal href={site.phoneHref} className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-4 font-medium text-bg transition-colors duration-500 hover:bg-accent-dark">
          <Phone size={18} /> Call or text {site.phone}
        </a>
      </Reveal>
    </>
  )
}
