import type { ReactNode } from 'react'

/** Simplified inbox UI matching the Figma “Client Retention” card preview. */
export function ConversationsMock() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-t-2xl bg-white/80 text-[10px] shadow-[0_24px_48px_-12px_rgba(16,24,40,0.18)]">
      <div className="flex items-center border-b border-[#eaecf0] px-3 pt-2">
        <div className="flex flex-1">
          <Tab label="Team" count={20} active />
          <Tab label="My" count={32} />
          <Tab label="Internal" count={45} />
        </div>
        <div className="mx-1 h-4 w-px bg-[#d0d5dd]" />
        <button
          type="button"
          className="flex size-8 items-center justify-center text-[#667085]"
          aria-label="Layout"
        >
          ☰
        </button>
      </div>
      <div className="flex gap-1.5 overflow-x-auto px-3 py-2">
        <Pill icon="⛭">Filters</Pill>
        <Pill icon="⇅">Sort</Pill>
        <Pill>Unread (980)</Pill>
        <Pill>Starred</Pill>
      </div>
      <div className="flex flex-1 flex-col gap-0 overflow-y-auto px-3 pb-3">
        <ThreadRow
          name="Koray Okumus"
          preview="Hi Olivia how are you?"
          time="12:02 PM"
          accent="#d4b2af"
          unread={2}
        />
        <ThreadRow
          name="Drew Cano"
          preview="Can you review the latest?"
          time="11:45 AM"
          accent="#a6c8ff"
        />
        <ThreadRow
          name="Phoenix Baker"
          preview="Invoice attached"
          time="Yesterday"
          accent="#fcd6d6"
        />
      </div>
    </div>
  )
}

function Tab({
  label,
  count,
  active,
}: {
  label: string
  count: number
  active?: boolean
}) {
  return (
    <button
      type="button"
      className={`flex flex-1 items-center justify-center gap-1 border-b-[3px] px-2 py-2 font-semibold ${
        active
          ? 'border-[#004eeb] text-[#004eeb]'
          : 'border-transparent font-medium text-[#667085]'
      }`}
    >
      <span>{label}</span>
      <span
        className={`rounded px-1.5 py-0.5 text-[9px] font-medium ${
          active ? 'bg-[#eff4ff] text-[#004eeb]' : 'bg-[#f2f4f7] text-[#344054]'
        }`}
      >
        {count}
      </span>
    </button>
  )
}

function Pill({
  children,
  icon,
}: {
  children: ReactNode
  icon?: string
}) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#f2f4f7] px-2 py-1 font-medium text-[#344054]">
      {icon ? <span className="opacity-70">{icon}</span> : null}
      {children}
    </span>
  )
}

function ThreadRow({
  name,
  preview,
  time,
  accent,
  unread,
}: {
  name: string
  preview: string
  time: string
  accent: string
  unread?: number
}) {
  return (
    <div className="flex gap-2 border-b border-[#eaecf0] py-2.5 last:border-0">
      <div className="relative shrink-0">
        <div
          className="size-8 rounded-full"
          style={{ backgroundColor: accent }}
        />
        {unread ? (
          <span className="absolute -bottom-0.5 -right-0.5 flex min-w-[14px] items-center justify-center rounded-md bg-[#d1fadf] px-1 text-[8px] font-semibold text-[#039855]">
            {unread}
          </span>
        ) : null}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <span className="font-semibold text-[#475467]">{name}</span>
          <span className="shrink-0 text-[#004eeb]">{time}</span>
        </div>
        <p className="mt-0.5 truncate font-medium text-[#475467]">{preview}</p>
      </div>
    </div>
  )
}
