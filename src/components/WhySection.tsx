import { why } from '../figmaAssets'
import { ConversationsMock } from './ConversationsMock'
import { RevenueMock } from './RevenueMock'

export function WhySection() {
  return (
    <section className="mx-auto w-full max-w-[1112px] px-0 pb-16 pt-4">
      <h2 className="text-center text-3xl font-bold tracking-[-0.02em] text-[#10172a] sm:text-[56px] sm:leading-[64px] sm:tracking-[-1.12px]">
        Why ship your{' '}
        <span className="bg-gradient-to-r from-[#7c3aed] to-[#9a48f2] bg-clip-text font-[family-name:var(--font-display-serif)] italic text-transparent">
          own
        </span>{' '}
        app?
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-3 lg:mt-10">
        <article className="flex flex-col gap-4 rounded-3xl bg-[#ffedde] px-8 pt-8 pb-0">
          <p className="font-[family-name:var(--font-display-serif)] text-5xl italic leading-none text-[#ff8d26] sm:text-[56px]">
            01
          </p>
          <h3 className="text-2xl font-bold tracking-[-0.01em] text-[#101828]">
            Brand Authority
          </h3>
          <p className="text-[15px] leading-6 text-[#344054]">
            Your name, your icon, your colors — live on the App Store. Position
            your agency as the software company clients pay for.
          </p>
          <div className="relative mt-auto flex min-h-[182px] w-full max-w-[297px] flex-col items-center overflow-hidden rounded-t-2xl bg-white/50 px-4 pb-4 pt-6 shadow-[0_24px_48px_-12px_rgba(16,24,40,0.18)]">
            <div className="relative size-20 sm:size-[85px]">
              <img
                src={why.brandLogo}
                alt=""
                className="size-full object-contain"
              />
            </div>
            <p className="mt-4 text-center font-[family-name:var(--font-display-serif)] text-xl italic leading-snug tracking-[-0.03em] text-[#441f95] sm:text-[26px]">
              Riverfront
              <br />
              Spa & Hotels
            </p>
          </div>
        </article>

        <article className="flex flex-col gap-4 rounded-3xl bg-[#dbd0f8] px-8 pt-8 pb-0">
          <p className="font-[family-name:var(--font-display-serif)] text-5xl italic leading-none text-[#9a84fb] sm:text-[56px]">
            02
          </p>
          <h3 className="text-2xl font-bold tracking-[-0.01em] text-[#101828]">
            Client Retention
          </h3>
          <p className="text-[15px] leading-6 text-[#344054]">
            Daily-use engagement keeps your clients inside your ecosystem.
            Messaging, bookings, payments — all under your roof.
          </p>
          <div className="relative mt-auto h-[181px] w-full max-w-[297px] overflow-hidden rounded-t-2xl bg-white/70">
            <ConversationsMock />
          </div>
        </article>

        <article className="flex flex-col gap-4 rounded-3xl bg-[#e1f5e9] px-8 pt-8 pb-0">
          <p className="font-[family-name:var(--font-display-serif)] text-5xl italic leading-none text-[#039855] sm:text-[56px]">
            03
          </p>
          <h3 className="text-2xl font-bold tracking-[-0.01em] text-[#101828]">
            Revenue Growth
          </h3>
          <p className="text-[15px] leading-6 text-[#344054]">
            Charge premium monthly fees by bundling a native app into your
            offer. Average agency lifts MRR by 2–3×.
          </p>
          <div className="relative mt-auto min-h-[200px] w-full max-w-[297px] overflow-hidden rounded-t-2xl bg-transparent">
            <RevenueMock />
          </div>
        </article>
      </div>
    </section>
  )
}
