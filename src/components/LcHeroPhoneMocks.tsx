/**
 * Lead Connector tab — in-phone marketing mocks.
 * Tuned to HighLevel brand colors (Nurture Blue, Space Blue, tints) per BrandKit;
 * swap for raster exports from Figma frame 92:4157 when available.
 * @see https://www.figma.com/design/diNWzHEjKGdqdNiVApMxDm/Landing-Test?node-id=92-4157
 * @see https://marketing.gohighlevel.com/brandkit
 */

function LcStatusBar() {
  return (
    <div className="flex h-7 shrink-0 items-center justify-between bg-white px-3 pt-1.5 text-[8px] font-semibold text-[#07223D]">
      <span>9:41</span>
      <span
        className="h-3.5 w-[52px] rounded-full bg-[#07223D]"
        aria-hidden
      />
      <span className="flex items-center gap-0.5" aria-hidden>
        <span className="text-[7px]">●●●</span>
        <span className="text-[7px]">▮</span>
      </span>
    </div>
  )
}

export function LcPhoneScreenCenter() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-[#f6f8fa] text-[#07223D]">
      <LcStatusBar />
      <div className="flex items-center justify-between border-b border-[#e4e7ec] bg-white px-2.5 py-2">
        <span className="text-[10px] font-bold tracking-tight">Conversations</span>
        <span
          className="flex size-7 items-center justify-center rounded-full bg-[#E7F3FE] text-[11px] text-[#2896FB]"
          aria-hidden
        >
          ⌕
        </span>
      </div>
      <div className="flex border-b border-[#e4e7ec] bg-white px-1">
        {[
          { label: 'Team', count: 20, active: true },
          { label: 'My', count: 32 },
          { label: 'Unread', count: 45 },
        ].map((t) => (
          <button
            key={t.label}
            type="button"
            className={`flex flex-1 flex-col items-center gap-0.5 border-b-[2.5px] py-2 text-[8px] font-semibold ${
              t.active
                ? 'border-[#2896FB] text-[#2896FB]'
                : 'border-transparent text-[#667085]'
            }`}
          >
            <span>{t.label}</span>
            <span
              className={`rounded px-1 py-px text-[7px] font-medium ${
                t.active ? 'bg-[#E7F3FE] text-[#2896FB]' : 'bg-[#f2f4f7] text-[#475467]'
              }`}
            >
              {t.count}
            </span>
          </button>
        ))}
      </div>
      <div className="flex gap-1 border-b border-[#f2f4f7] bg-white px-2 py-1.5">
        {['Filters', 'Sort', 'Unread'].map((t, i) => (
          <span
            key={t}
            className={`shrink-0 rounded-full px-2 py-0.5 text-[7px] font-semibold ${
              i === 0
                ? 'bg-[#07223D] text-white'
                : 'bg-[#f2f4f7] text-[#667085]'
            }`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <LcThread
          name="Koray Okumus"
          snippet="Can we move the call to 3pm?"
          time="12:02"
          dot="#c7d7fe"
          unread
        />
        <LcThread
          name="Drew Cano"
          snippet="Sent the contract over — lmk"
          time="11:45"
          dot="#fcd6d6"
        />
        <LcThread
          name="Phoenix Baker"
          snippet="New lead from Facebook Form"
          time="Yesterday"
          dot="#d5f5d3"
          unread
        />
        <LcThread
          name="Olivia Chen"
          snippet="Thanks, all set on our side"
          time="Mon"
          dot="#fde68a"
        />
      </div>
    </div>
  )
}

export function LcPhoneScreenRight() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-[#f6f8fa] text-[#07223D]">
      <LcStatusBar />
      <div className="border-b border-[#e4e7ec] bg-white px-2.5 py-2">
        <p className="text-[10px] font-bold">Opportunities</p>
        <p className="text-[7px] font-medium text-[#667085]">Pipeline · this week</p>
      </div>
      <div className="flex flex-1 gap-1 overflow-hidden p-1">
        {[
          { title: 'New', tint: 'bg-[#E7F3FE]', items: ['Riverside HVAC', 'Nova Dental'] },
          { title: 'Booked', tint: 'bg-[#FEF9E1]', items: ['Peak Fitness'] },
          { title: 'Won', tint: 'bg-[#E4FBEA]', items: ['Atlas Legal'] },
        ].map((col) => (
          <div
            key={col.title}
            className={`flex min-w-0 flex-1 flex-col gap-1 rounded-lg ${col.tint} p-1`}
          >
            <p className="px-0.5 text-[7px] font-bold uppercase tracking-wide text-[#667085]">
              {col.title}
            </p>
            {col.items.map((name) => (
              <div
                key={name}
                className="rounded-md border border-[#e4e7ec] bg-white px-1.5 py-1.5 shadow-[0_1px_2px_rgba(7,34,61,0.06)]"
              >
                <p className="truncate text-[8px] font-semibold">{name}</p>
                <p className="mt-0.5 text-[7px] font-medium text-[#667085]">
                  $2.4k · 12d in stage
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function LcPhoneScreenLeft() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-gradient-to-b from-[#095DC3] via-[#2896FB] to-[#E7F3FE] text-white">
      <LcStatusBar />
      <div className="flex flex-1 flex-col items-center px-3 pt-[10%] text-center">
        <div className="flex size-16 items-center justify-center rounded-[22px] bg-white/95 shadow-[0_12px_32px_-8px_rgba(7,34,61,0.45)]">
          <svg
            viewBox="0 0 40 40"
            className="size-9"
            aria-hidden
          >
            <rect
              x="6"
              y="6"
              width="28"
              height="28"
              rx="8"
              className="fill-[#2896FB]"
            />
            <path
              d="M14 22c3-4 9-4 12 0"
              className="fill-none stroke-white stroke-[2.2] stroke-linecap-round"
            />
            <circle cx="16" cy="17" r="2" className="fill-white" />
            <circle cx="24" cy="17" r="2" className="fill-white" />
          </svg>
        </div>
        <p className="mt-4 text-[11px] font-bold tracking-tight drop-shadow-sm">
          Lead Connector
        </p>
        <p className="mt-1.5 max-w-[150px] text-[8px] font-medium leading-relaxed text-white/90">
          Your clients’ HighLevel workspace — App Store &amp; Google Play.
        </p>
        <div className="mt-auto mb-[14%] flex w-full flex-col gap-1.5 px-1">
          <div className="rounded-xl bg-white/95 px-2.5 py-2 text-left text-[#07223D] shadow-lg">
            <p className="text-[7px] font-bold uppercase tracking-wide text-[#667085]">
              Today
            </p>
            <p className="mt-0.5 text-[9px] font-semibold">3 calls · 14 tasks due</p>
            <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-[#E7F3FE]">
              <div className="h-full w-[58%] rounded-full bg-[#17D94B]" />
            </div>
          </div>
          <div className="flex justify-center gap-2 opacity-95">
            <span className="rounded-md bg-black/20 px-2 py-1 text-[6px] font-semibold">
              App Store
            </span>
            <span className="rounded-md bg-black/20 px-2 py-1 text-[6px] font-semibold">
              Google Play
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function LcThread({
  name,
  snippet,
  time,
  dot,
  unread,
}: {
  name: string
  snippet: string
  time: string
  dot: string
  unread?: boolean
}) {
  return (
    <button
      type="button"
      className="flex w-full items-start gap-2 border-b border-[#f2f4f7] bg-white px-2.5 py-2 text-left"
    >
      <span
        className="mt-0.5 size-7 shrink-0 rounded-full ring-1 ring-black/[0.04]"
        style={{ backgroundColor: dot }}
        aria-hidden
      />
      <span className="min-w-0 flex-1">
        <span className="flex items-baseline justify-between gap-1">
          <span className="truncate text-[9px] font-semibold text-[#07223D]">
            {name}
          </span>
          <span className="shrink-0 text-[7px] font-medium text-[#667085]">
            {time}
          </span>
        </span>
        <span className="mt-0.5 flex items-center gap-1">
          {unread ? (
            <span
              className="size-1.5 shrink-0 rounded-full bg-[#2896FB]"
              aria-hidden
            />
          ) : null}
          <span className="truncate text-[8px] font-medium text-[#667085]">
            {snippet}
          </span>
        </span>
      </span>
    </button>
  )
}
