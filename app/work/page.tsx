import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { site, px, photos } from '@/lib/site'

export const metadata = {
  title: 'Work — mobile detailing results across the East Valley',
  description: 'See exterior, interior, ceramic coating and paint correction results from Clean Call Car Detailing around Chandler, Gilbert, Mesa and the East Valley.',
}

const captions = [
  'Full exterior detail · Chandler',
  'Foam wash & decon · Gilbert',
  'Wheel & barrel detail · Mesa',
  'Paint correction · Tempe',
  'Spray sealant finish · Ahwatukee',
  'Interior leather reset · Chandler',
  'Gloss-black paint detail · Sun Lakes',
  'Two-bucket hand wash · Gilbert',
  'Daily driver refresh · Queen Creek',
  'Ceramic gloss close-up · East Valley',
]

export default function Work() {
  return (
    <>
      <Reveal className="mx-auto flex min-h-[50vh] max-w-shell flex-col justify-center px-5 pt-32 lg:px-10">
        <div data-reveal className="kicker text-accent">Our work</div>
        <h1 data-reveal className="mt-5 max-w-4xl font-display text-[clamp(44px,8vw,116px)] font-semibold uppercase leading-[0.9] tracking-tight">
          The results speak.
        </h1>
        <p data-reveal className="mt-8 max-w-2xl text-xl leading-relaxed text-fg/85">
          A look at recent details — exterior, interior, ceramic and correction work from around the East Valley.
        </p>
      </Reveal>

      <Reveal className="mx-auto max-w-shell px-5 pb-24 lg:px-10">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {photos.gallery.map((id, i) => (
            <figure key={id} data-reveal className="group relative break-inside-avoid overflow-hidden rounded-xl">
              <Image src={px(id, 1000)} alt={captions[i]} width={1000} height={i % 3 === 0 ? 1300 : 750} sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" className="h-auto w-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-quint)] group-hover:scale-[1.04]" />
              <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-bg/85 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <figcaption className="text-sm font-medium text-fg">{captions[i]}</figcaption>
              </div>
            </figure>
          ))}
        </div>
      </Reveal>

      <section className="border-t border-line bg-bg2">
        <Reveal className="mx-auto max-w-shell px-5 py-24 text-center lg:px-10">
          <h2 data-reveal className="font-display text-4xl font-semibold uppercase tracking-tight md:text-6xl">Want your car to look like this?</h2>
          <div data-reveal className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={site.phoneHref} className="inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-4 font-medium text-bg transition-colors duration-500 hover:bg-accent-dark"><Phone size={18} /> {site.phone}</a>
            <Link href="/contact" className="rounded-full border border-line px-8 py-4 font-medium transition-colors duration-500 hover:border-fg/40">Book a detail</Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
