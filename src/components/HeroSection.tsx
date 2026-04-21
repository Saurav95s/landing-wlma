import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { hero } from '../figmaAssets'

/** Phrases after “into a …” — consonant-leading so “a” reads naturally */
const HERO_ROTATING_PHRASES = [
  'Software company',
  'Mobile powerhouse',
  'Product studio',
  'Growth engine',
  'Branded publisher',
  'Client platform',
  'Tech brand',
  'Revenue engine',
] as const

const HERO_PHRASE_INTERVAL_MS = 2800

function HeroRotatingPhrase() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % HERO_ROTATING_PHRASES.length)
    }, HERO_PHRASE_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [])

  const longest = HERO_ROTATING_PHRASES.reduce((a, b) =>
    a.length >= b.length ? a : b,
  )

  const phraseStyle =
    'bg-gradient-to-r from-[#7c3aed] to-[#ed60d8] bg-clip-text font-[family-name:var(--font-display-serif)] text-5xl italic text-transparent sm:text-7xl lg:text-[96px]'

  return (
    <span className="relative inline-block align-baseline">
      <span className={`${phraseStyle} invisible select-none`} aria-hidden>
        {longest}
      </span>
      <span
        className="absolute inset-0 flex items-center justify-start text-left"
        aria-live="polite"
        aria-atomic="true"
      >
        <span key={index} className={`hero-rotating-word ${phraseStyle}`}>
          {HERO_ROTATING_PHRASES[index]}
        </span>
      </span>
    </span>
  )
}

function StatCard({
  iconBg,
  iconSrc,
  title,
  subtitle,
  className,
}: {
  iconBg: string
  iconSrc: string
  title: string
  subtitle: string
  className?: string
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border border-black/[0.05] bg-white py-3 pl-3.5 pr-4 shadow-[0_10px_24px_-4px_rgba(0,0,0,0.1)] ${className ?? ''}`}
    >
      <div
        className={`flex size-9 shrink-0 items-center justify-center rounded-[18px] ${iconBg}`}
      >
        <img src={iconSrc} alt="" className="size-5" />
      </div>
      <div className="min-w-0 leading-tight">
        <p className="text-[17px] font-bold text-[#10172a]">{title}</p>
        <p className="text-xs text-[#596070]">{subtitle}</p>
      </div>
    </div>
  )
}

function PhoneShell({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`overflow-hidden rounded-[20.5px] border-[5px] border-[#333340] bg-[#171c2b] shadow-[0_15.4px_30.8px_-5px_rgba(0,0,0,0.35)] ${className ?? ''}`}
    >
      {children}
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative w-full overflow-visible rounded-[32px] bg-gradient-to-r from-[#fee3ca] via-[#fef1e8] to-[#f4e1f1] px-4 pb-24 pt-10 sm:px-8 sm:pb-28 sm:pt-14 lg:min-h-[920px]">
      <StatCard
        iconBg="bg-[#d1fadf]"
        iconSrc={hero.iconUser}
        title="+42%"
        subtitle="retention lift"
        className="stat-card-float stat-card-float--d0 absolute left-[2%] top-[52%] z-30 hidden w-[180px] lg:left-[4%] lg:top-[48%] lg:flex"
      />
      <StatCard
        iconBg="bg-[#fef0c7]"
        iconSrc={hero.iconStar}
        title="4.8"
        subtitle="avg rating"
        className="stat-card-float stat-card-float--d1 absolute left-[0%] top-[62%] z-30 hidden w-[180px] lg:flex"
      />
      <StatCard
        iconBg="bg-[#d1fadf]"
        iconSrc={hero.iconDownload}
        title="12.4k"
        subtitle="installs / agency"
        className="stat-card-float stat-card-float--d2 absolute right-[2%] top-[56%] z-30 hidden w-[180px] lg:right-[4%] lg:flex"
      />
      <StatCard
        iconBg="bg-[#fef0c7]"
        iconSrc={hero.iconBolt}
        title="18d"
        subtitle="avg time-to-ship"
        className="stat-card-float stat-card-float--d3 absolute bottom-[14%] right-[1%] z-30 hidden w-[180px] lg:flex"
      />

      <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
        <div className="mb-8 flex items-center gap-3 rounded-full border border-black/[0.06] bg-white py-2.5 pl-4 pr-5 shadow-[0_2px_6px_rgba(0,0,0,0.05)]">
          <div className="h-6 w-14 shrink-0">
            <img
              src={hero.avatars}
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
          <p className="text-sm font-semibold text-[#151b2b]">
            2,400+ agencies shipped an app last quarter
          </p>
        </div>

        <h1 className="max-w-[900px] text-balance text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-[#10172a] sm:text-6xl sm:leading-[1.05] lg:text-[88px] lg:leading-[96px] lg:tracking-[-2.64px]">
          <span className="block">Turn your agency</span>
          <span className="mt-1 block lg:mt-2">
            <span>into a </span>
            <HeroRotatingPhrase />
          </span>
        </h1>

        <p className="mt-6 max-w-[720px] text-pretty text-lg font-medium leading-7 text-[#596070]">
          A fully-branded iOS & Android app your clients download from the App
          Store — under your name, with your icon, running on HighLevel.
        </p>

        <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">
          <button
            type="button"
            className="inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#10172a] pl-6 pr-2 text-base font-semibold text-white"
          >
            Activate
            <span className="flex h-9 items-center rounded-full bg-[#ff8d26] px-3.5 text-base font-bold">
              $497/mo
            </span>
            <span className="flex size-9 items-center justify-center rounded-full bg-white text-base font-bold text-[#10172a]">
              ↗
            </span>
          </button>
          <button
            type="button"
            className="inline-flex h-12 items-center justify-center gap-3 rounded-full border border-black/[0.08] bg-white px-3 text-base font-semibold text-[#10172a] shadow-sm"
          >
            <span className="relative size-9 shrink-0">
              <img src={hero.play} alt="" className="size-full" />
            </span>
            Watch 60-sec tour
          </button>
        </div>
      </div>

      {/* Phone cluster — layer order matches Figma (70:1955): back center, left tilt, right tilt */}
      <div className="relative mx-auto mt-12 w-full max-w-[900px] px-2 sm:mt-16">
        <div className="relative mx-auto h-[min(72vw,400px)] max-w-[800px] sm:h-[420px] lg:h-[460px]">
          <div className="absolute left-1/2 top-0 z-[1] w-[min(46vw,252px)] max-w-[252px] -translate-x-1/2">
            <PhoneShell className="aspect-[252/546]">
              <img
                src={hero.homepage1}
                alt="App home"
                className="h-full w-full object-cover"
              />
            </PhoneShell>
          </div>

          <div className="absolute left-[-2%] top-[10%] z-[3] w-[min(46vw,252px)] max-w-[252px] sm:left-[0%] sm:top-[8%]">
            <div className="origin-center -rotate-[5.36deg]">
              <PhoneShell className="aspect-[252/546]">
                <div className="relative flex h-full w-full flex-col items-center bg-[#fcddf8] pt-[28%]">
                  <div className="relative w-[52%] max-w-[145px] aspect-square">
                    <img
                      src={hero.riverfrontLogo}
                      alt=""
                      className="size-full object-contain"
                    />
                  </div>
                  <p className="mt-[10%] text-center font-[family-name:var(--font-display-serif)] text-[clamp(1rem,3.2vw,2.1rem)] italic leading-tight tracking-[-0.05em] text-[#441f95]">
                    Riverfront
                    <br />
                    Spa & Hotels
                  </p>
                </div>
              </PhoneShell>
            </div>
          </div>

          <div className="absolute right-[-2%] top-[8%] z-[2] w-[min(46vw,252px)] max-w-[252px] sm:right-[0%] sm:top-[6%]">
            <div className="origin-center rotate-[5.69deg]">
              <PhoneShell className="aspect-[252/546]">
                <img
                  src={hero.homepage2}
                  alt="App dashboard"
                  className="h-full w-full object-cover"
                />
              </PhoneShell>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
