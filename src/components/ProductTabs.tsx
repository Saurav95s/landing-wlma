import { useState } from 'react'

const tabs = [
  { id: 'custom', label: 'Your custom app', suffix: '· branded' },
  { id: 'lc', label: 'Lead Connector' },
  { id: 'hl', label: 'Highlevel mobile app' },
] as const

type TabId = (typeof tabs)[number]['id']

export function ProductTabs() {
  const [active, setActive] = useState<TabId>('custom')

  return (
    <div
      className="inline-flex max-w-full items-center gap-0 overflow-x-auto rounded-full border border-black/[0.06] bg-white p-1 shadow-[0_1px_2px_rgba(0,0,0,0.04)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      role="tablist"
      aria-label="Product options"
    >
      {tabs.map((tab) => {
        const isActive = active === tab.id
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => setActive(tab.id)}
            className={
              isActive
                ? 'flex items-center gap-2 rounded-full bg-[#151b2b] px-[18px] py-2.5 text-sm font-semibold text-white'
                : 'rounded-full px-[18px] py-2.5 text-sm font-medium text-[#596070] hover:bg-black/[0.03]'
            }
          >
            {tab.id === 'custom' ? (
              <>
                <span>{tab.label}</span>
                <span className="font-normal text-white/60">·</span>
                <span className="font-medium text-white/70">branded</span>
              </>
            ) : (
              tab.label
            )}
          </button>
        )
      })}
    </div>
  )
}
