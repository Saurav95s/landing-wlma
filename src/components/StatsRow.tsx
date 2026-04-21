const stats = [
  { value: '3-5x', label: 'Higher MRR per client' },
  { value: '87%', label: 'Client retention boost' },
  { value: '14 days', label: 'Average launch time' },
  { value: '12K+', label: 'Apps live with agencies' },
] as const

export function StatsRow() {
  return (
    <section className="mx-auto w-full max-w-[1112px] px-0 py-12 sm:py-16">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col gap-1.5 text-left lg:max-w-[240px]"
          >
            <p className="bg-gradient-to-r from-[#7c3aed] to-[#9a48f2] bg-clip-text font-[family-name:var(--font-display-serif)] text-4xl italic leading-none tracking-[-0.02em] text-transparent sm:text-5xl lg:text-[64px] lg:leading-[64px]">
              {s.value}
            </p>
            <p className="text-base font-semibold leading-snug text-[#101828]">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
