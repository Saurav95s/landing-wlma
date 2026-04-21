const logos = [
  { icon: '✦', name: 'Evergreen Studios' },
  { icon: '⚓', name: 'North Harbor' },
  { icon: '◆', name: 'Lumen & Co.' },
  { icon: '◉', name: 'Kindling Group' },
  { icon: '◎', name: 'Wayfinder' },
] as const

function LogoItem({ icon, name }: { icon: string; name: string }) {
  return (
    <div className="flex shrink-0 items-center gap-2 px-8 text-[22px] font-bold text-[rgba(89,96,112,0.7)] sm:px-10">
      <span className="text-[rgba(89,96,112,0.6)]">{icon}</span>
      <span>{name}</span>
    </div>
  )
}

export function LogoCloud() {
  const sequence = [...logos, ...logos]

  return (
    <section className="mx-auto w-full max-w-[1112px] px-0 pb-20">
      <div className="border-t border-black/[0.08] pt-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.08em] text-[#596070]">
          Agencies shipping their own app
        </p>

        <div
          className="mt-8 hidden flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14 motion-reduce:flex"
          aria-label="Agency partner names"
        >
          {logos.map((l) => (
            <LogoItem key={l.name} icon={l.icon} name={l.name} />
          ))}
        </div>

        <div
          className="relative mt-8 overflow-hidden motion-reduce:hidden"
          role="region"
          aria-label="Agency partner names, scrolling"
        >
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#f9fafb] to-transparent sm:w-16"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#f9fafb] to-transparent sm:w-16"
            aria-hidden
          />

          <div className="logo-marquee-track">
            {sequence.map((l, i) => (
              <LogoItem key={`${l.name}-${i}`} icon={l.icon} name={l.name} />
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-black/[0.08]" />
      </div>
    </section>
  )
}
