import { pricing } from '../figmaAssets'

/**
 * Pre Purchase — Pricing Page from Figma node 126:5043.
 * @see https://www.figma.com/design/diNWzHEjKGdqdNiVApMxDm/Landing-Test?node-id=126-5043
 */

type FeatureLine =
  | { kind: 'check'; text: string; multiline?: boolean }
  | { kind: 'checkGradient'; text: string }
  | { kind: 'xBold'; text: string }
  | { kind: 'xMuted'; text: string }
  | { kind: 'vibeAiExcluded' }
  | { kind: 'vibeAiIncluded' }

const gradientText =
  'bg-gradient-to-r from-[#155eef] to-[#0c3689] bg-clip-text font-bold text-transparent'

function Icon20({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="size-5 shrink-0" />
}

function FeatureList({ lines }: { lines: FeatureLine[] }) {
  return (
    <div className="flex flex-col gap-3 border-t border-[#eaecf0] pt-5">
      {lines.map((line, i) => {
        if (line.kind === 'check') {
          return (
            <div
              key={i}
              className={`flex gap-3 ${line.multiline ? 'items-start' : 'items-center'}`}
            >
              <Icon20 src={pricing.checkCircle} alt="" />
              <p className="text-[15px] font-medium leading-5 text-[#10172a]">{line.text}</p>
            </div>
          )
        }
        if (line.kind === 'checkGradient') {
          return (
            <div key={i} className="flex gap-3 items-center">
              <Icon20 src={pricing.checkCircle} alt="" />
              <p className={`flex-1 text-[15px] leading-5 ${gradientText}`}>
                {line.text}
              </p>
            </div>
          )
        }
        if (line.kind === 'xBold') {
          return (
            <div key={i} className="flex gap-3 items-start">
              <Icon20 src={pricing.xCircle} alt="" />
              <p className="flex-1 text-[15px] font-bold leading-5 text-[#1d2939]">
                {line.text}
              </p>
            </div>
          )
        }
        if (line.kind === 'xMuted') {
          return (
            <div key={i} className="flex gap-3 items-center">
              <Icon20 src={pricing.xCircle} alt="" />
              <p className="flex-1 text-[15px] font-medium leading-5 text-[#667085]">
                {line.text}
              </p>
            </div>
          )
        }
        if (line.kind === 'vibeAiExcluded') {
          return (
            <div key={i} className="flex gap-3 items-start">
              <Icon20 src={pricing.xCircle} alt="" />
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <p className={`text-[15px] font-bold leading-5 ${gradientText}`}>
                  Vibe Coding Builder (AI)
                </p>
                <p className="text-[13px] italic leading-[18px] text-[#10172a]">
                  *Create app features using AI—no manual working required
                </p>
              </div>
            </div>
          )
        }
        return (
          <div key={i} className="flex gap-3 items-start">
            <Icon20 src={pricing.checkCircle} alt="" />
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <p className={`text-[15px] font-bold leading-5 ${gradientText}`}>
                Vibe Coding Builder (AI)
              </p>
              <p className="text-[13px] italic leading-[18px] text-[#10172a]">
                *Create app features using AI—no manual working required
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const starterFeatures: FeatureLine[] = [
  { kind: 'check', text: 'Full branding (logo, colors, fonts, splash screen)' },
  { kind: 'check', text: 'App drawer customisation' },
  {
    kind: 'check',
    text: 'Published on App Store and Google Play store',
    multiline: true,
  },
  { kind: 'check', text: 'Top and bottom nav customisation' },
  { kind: 'xBold', text: 'Build fully custom app experiences for clients' },
  { kind: 'xMuted', text: 'Live preview before publish' },
  { kind: 'xMuted', text: 'Sub-account level control' },
  { kind: 'xMuted', text: 'White-glove service' },
]

const growthFeatures: FeatureLine[] = [
  { kind: 'checkGradient', text: 'Live preview before publish' },
  { kind: 'check', text: 'Everything in Starter' },
  { kind: 'check', text: 'Top nav customisation' },
  { kind: 'check', text: 'Bottom nav customisation' },
  { kind: 'check', text: 'Sub-account level control' },
  { kind: 'xBold', text: 'Build fully custom app experiences for clients' },
  { kind: 'vibeAiExcluded' },
  { kind: 'xMuted', text: 'White-glove service' },
]

const scaleFeatures: FeatureLine[] = [
  { kind: 'checkGradient', text: 'Build fully custom app experiences for clients' },
  { kind: 'vibeAiIncluded' },
  { kind: 'checkGradient', text: 'Unlimited builds per month' },
  { kind: 'check', text: 'Everything in Growth' },
  { kind: 'check', text: 'White-label Zap integration' },
  { kind: 'check', text: 'Priority updates' },
  { kind: 'check', text: 'White-glove service' },
  { kind: 'check', text: 'Dedicated Slack support channel' },
]

function StarterChartIcon() {
  return (
    <div className="relative size-5 shrink-0">
      <img
        src={pricing.starterChartB}
        alt=""
        className="pointer-events-none absolute inset-0 size-full max-w-none"
      />
      <img
        src={pricing.starterChartA}
        alt=""
        className="pointer-events-none absolute inset-0 size-full max-w-none"
      />
    </div>
  )
}

const faqItems = [
  {
    title: 'How long does it take to go live?',
    body: 'Most apps reach the app stores within 2 weeks. Apple typically reviews in 24–48 hours once submitted.',
  },
  {
    title: 'Can I switch plans later?',
    body: 'Yes. Upgrade any time — your branding, modules, and data carry over without rebuilding.',
  },
  {
    title: 'Who handles app store submission?',
    body: 'We do. Our team submits on your behalf and handles rejections and review back-and-forth.',
  },
] as const

export function PricingPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="-mx-4 bg-[#f7f8fa] px-4 pb-20 pt-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="mx-auto w-full max-w-[1112px]">
        <button
          type="button"
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#596070] transition-colors hover:text-[#10172a]"
        >
          <span aria-hidden className="text-base">
            ←
          </span>
          Back to overview
        </button>

        <header className="flex flex-col items-center gap-2 py-6 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#eef2fe] py-1.5 pl-3 pr-3.5">
            <img
              src={pricing.pillDot}
              alt=""
              className="size-1.5 shrink-0"
              aria-hidden
            />
            <span className="text-[13px] font-semibold text-[#004eeb]">Pricing</span>
          </div>
          <h1 className="max-w-[920px] text-[40px] font-bold leading-[56px] tracking-[-1.5px] text-[#10172a]">
            Choose your plan
          </h1>
          <p className="max-w-[900px] text-lg font-normal leading-6 text-[#596070] sm:text-2xl sm:leading-8">
            All plans include your branded iOS and Android app on both app stores.
          </p>
        </header>

        <div className="mt-6 grid grid-cols-1 items-start gap-4 md:grid-cols-3 lg:gap-4">
          {/* Starter */}
          <article className="mt-0 flex flex-col gap-5 rounded-3xl border border-[#eaecf0] bg-white p-8 shadow-[0px_4px_12px_0px_rgba(16,24,40,0.04)] md:mt-8">
            <div className="flex h-9 items-center gap-2">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#f2f4f7]">
                <StarterChartIcon />
              </div>
              <h2 className="text-xl font-bold text-[#101828]">Starter</h2>
            </div>
            <p className="min-h-[44px] text-[15px] font-bold leading-5 text-[#475467]">
              For agencies launching their first branded app
            </p>
            <div className="flex items-end gap-1 whitespace-nowrap">
              <span className="text-[60px] font-semibold leading-[72px] tracking-[-1.2px] text-[#10172a]">
                $99
              </span>
              <span className="pb-2 text-base font-normal leading-6 text-[#8892a2]">
                /month
              </span>
            </div>
            <button
              type="button"
              className="flex h-12 w-full items-center justify-center rounded-lg border border-[#d0d5dd] bg-white px-5 text-base font-semibold text-[#344054] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
            >
              Get started
            </button>
            <FeatureList lines={starterFeatures} />
          </article>

          {/* Growth — MOST POPULAR */}
          <div className="flex flex-col md:-mt-7">
            <div className="flex h-[72px] shrink-0 items-start justify-center rounded-t-3xl bg-gradient-to-r from-[#155eef] to-[#0c3689] px-3.5 pb-1.5 pt-2.5">
              <span className="text-[11px] font-semibold tracking-[1.2px] text-white">
                MOST POPULAR
              </span>
            </div>
            <article className="-mt-3 flex flex-col gap-5 rounded-3xl border-4 border-[#0c3689] bg-white p-8 pt-10 shadow-[0px_16px_40px_0px_rgba(21,94,239,0.12)]">
              <div className="flex h-9 items-center gap-2">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#d1e0ff]">
                  <img
                    src={pricing.growthRocket}
                    alt=""
                    className="size-5"
                  />
                </div>
                <h2 className="text-xl font-bold text-[#101828]">Growth</h2>
              </div>
              <p className="min-h-[44px] text-[15px] font-bold leading-5 text-[#475467]">
                For agencies scaling client apps with customization
              </p>
              <div className="flex items-end gap-1 whitespace-nowrap">
                <span className="text-[60px] font-semibold leading-[72px] tracking-[-1.2px] text-[#10172a]">
                  $249
                </span>
                <span className="pb-2 text-base font-normal leading-6 text-[#8892a2]">
                  /month
                </span>
              </div>
              <button
                type="button"
                className="flex h-12 w-full items-center justify-center rounded-lg border border-[#155eef] bg-[#155eef] px-5 text-base font-semibold text-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
              >
                Get started
              </button>
              <FeatureList lines={growthFeatures} />
            </article>
          </div>

          {/* Scale — MOST ADVANCED */}
          <div className="flex flex-col md:-mt-7">
            <div className="flex h-[72px] shrink-0 items-start justify-center rounded-t-3xl bg-gradient-to-b from-[#fdd567] to-[#977f3d] px-3.5 pb-1.5 pt-2.5">
              <span className="text-[11px] font-semibold tracking-[1.2px] text-[#101828]">
                MOST ADVANCED
              </span>
            </div>
            <article className="-mt-3 flex flex-col gap-5 rounded-3xl border-4 border-[#fee3ca] bg-gradient-to-b from-[#fffaeb] to-[#fef0c8] p-8 pt-10 shadow-[0px_20px_24px_0px_rgba(16,24,40,0.08),0px_8px_8px_0px_rgba(16,24,40,0.03)]">
              <div className="flex h-9 items-center gap-2">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-b from-[#fedf89] to-[#f9b700]">
                  <img src={pricing.scaleStar} alt="" className="size-5" />
                </div>
                <h2 className="bg-gradient-to-b from-[#fdb022] to-[#976914] bg-clip-text text-xl font-bold text-transparent">
                  Scale
                </h2>
              </div>
              <p className="min-h-[44px] text-[15px] font-bold leading-5 text-[#475467]">
                For agencies building advanced, fully custom app experiences
              </p>
              <div className="flex items-end gap-1 whitespace-nowrap">
                <span className="text-[60px] font-semibold leading-[72px] tracking-[-1.2px] text-[#10172a]">
                  $349
                </span>
                <span className="pb-2 text-base font-normal leading-6 text-[#8892a2]">
                  /month
                </span>
              </div>
              <button
                type="button"
                className="flex h-12 w-full items-center justify-center rounded-lg border-2 border-[#dc6803] bg-gradient-to-b from-[#fdb022] to-[#b97b08] px-5 text-base font-semibold text-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
              >
                Get started
              </button>
              <FeatureList lines={scaleFeatures} />
            </article>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-[810px] text-center text-base italic leading-6 text-[#596070]">
          All plans billed monthly. Cancel anytime. App store developer fees ($99/yr
          Apple, $25 one-time Google) are not included.
        </p>

        <div className="mt-10 flex flex-col overflow-hidden rounded-2xl bg-[#d0d5dd] md:flex-row md:rounded-2xl">
          {faqItems.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-1 flex-col gap-2 bg-[#eaecf0] p-4 ${
                index === 0 ? 'md:rounded-l-2xl' : ''
              } ${index === faqItems.length - 1 ? 'md:rounded-r-2xl' : ''} ${
                index > 0 ? 'border-t border-[#d0d5dd] md:border-l md:border-t-0' : ''
              }`}
            >
              <p className="text-[15px] font-bold leading-5 text-[#1d2939]">
                {item.title}
              </p>
              <p className="text-[15px] font-medium leading-5 text-[#667085]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
