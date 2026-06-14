import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Clean Call Car Detailing — home">
      <span className="grid h-9 w-9 place-items-center rounded-[7px] bg-accent text-bg font-display font-bold text-lg leading-none transition-transform duration-500 ease-[var(--ease-quint)] group-hover:-translate-y-0.5">
        C
      </span>
      <span className="font-display font-semibold uppercase leading-[0.95] tracking-tight text-fg">
        <span className="block text-[13px]">Clean Call</span>
        <span className="block text-[13px] text-accent">Car Detailing</span>
      </span>
    </Link>
  )
}
