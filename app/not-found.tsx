import Link from 'next/link'
export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="font-display text-[clamp(90px,18vw,220px)] font-bold leading-none text-accent">404</div>
      <p className="mt-4 max-w-md text-xl text-muted">This page is cleaner than your car — there&apos;s nothing here.</p>
      <Link href="/" className="mt-10 rounded-full bg-accent px-8 py-4 font-medium text-bg transition-colors duration-500 hover:bg-accent-dark">Back home</Link>
    </section>
  )
}
