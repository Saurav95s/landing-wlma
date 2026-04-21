import { sidebar } from '../figmaAssets'

const primaryItems: { label: string; icon: string }[] = [
  { label: 'Launchpad', icon: sidebar.nav.launchpad },
  { label: 'Dashboard', icon: sidebar.nav.dashboard },
  { label: 'Conversations', icon: sidebar.nav.conversations },
  { label: 'Calendars', icon: sidebar.nav.calendar },
  { label: 'Contacts', icon: sidebar.nav.contacts },
  { label: 'Opportunities', icon: sidebar.nav.opportunities },
  { label: 'Payments', icon: sidebar.nav.payments },
]

const secondaryItems: { label: string; icon: string; active?: boolean }[] = [
  { label: 'Marketing', icon: sidebar.nav.marketing },
  { label: 'Automation', icon: sidebar.nav.automation },
  { label: 'Sites', icon: sidebar.nav.sites },
  { label: 'Memberships', icon: sidebar.nav.memberships },
  { label: 'Media Storage', icon: sidebar.nav.mediaStorage },
  { label: 'Reputation', icon: sidebar.nav.reputation },
  { label: 'Reporting', icon: sidebar.nav.reporting },
  { label: 'App Marketplace', icon: sidebar.nav.appMarketplace },
  { label: 'Mobile App', icon: sidebar.nav.mobileApp, active: true },
]

function NavRow({
  label,
  icon,
  active,
}: {
  label: string
  icon: string
  active?: boolean
}) {
  return (
    <div
      className={`flex w-full cursor-default items-center gap-2 rounded-lg p-2 ${
        active ? 'bg-[#1d2939] text-white' : 'text-[#d0d5dd]'
      }`}
    >
      <span className="flex size-6 shrink-0 items-center justify-center">
        <img
          src={icon}
          alt=""
          className={`size-6 brightness-0 invert ${active ? 'opacity-100' : 'opacity-80'}`}
        />
      </span>
      <span className="min-w-0 flex-1 truncate text-base font-medium leading-6">
        {label}
      </span>
    </div>
  )
}

export function Sidebar() {
  return (
    <aside className="relative hidden h-full min-h-0 w-[280px] shrink-0 flex-col gap-5 overflow-hidden bg-[#101828] px-2 py-4 text-white lg:flex">
      <div className="flex min-h-0 flex-1 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="relative h-10 w-full">
            <img
              src={sidebar.logo}
              alt="HighLevel"
              className="h-full w-full object-contain object-left"
            />
          </div>
          <button
            type="button"
            className="flex w-full items-start gap-2 rounded-lg bg-[#344054] p-2 text-left"
          >
            <span className="min-w-0 flex-1 truncate text-sm font-medium leading-4 text-white/90">
              Headquarters 1800-PLUMBER-200..
            </span>
            <img
              src={sidebar.chevronRight}
              alt=""
              className="mt-0.5 size-4 shrink-0 opacity-70 brightness-0 invert"
            />
          </button>
        </div>

        <div className="flex gap-2">
          <div className="flex min-h-10 flex-1 items-center justify-between rounded-lg border border-[#344054] py-1 pl-2 pr-1">
            <div className="flex items-center gap-2">
              <img
                src={sidebar.searchIcon}
                alt=""
                className="size-4 opacity-80 brightness-0 invert"
              />
              <span className="text-base text-[#98a2b3]">Search</span>
            </div>
            <kbd className="rounded border border-[#344054] bg-[#344054] px-1 py-0.5 text-sm text-[#d0d5dd]">
              ⌘K
            </kbd>
          </div>
          <button
            type="button"
            className="flex shrink-0 items-center justify-center rounded-lg bg-[#344054] px-2.5 py-1.5"
            aria-label="Quick actions"
          >
            <img
              src={sidebar.quickAction}
              alt=""
              className="size-5 brightness-0 invert"
            />
          </button>
        </div>

        <nav
          className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto"
          aria-label="Primary"
        >
          <div className="flex flex-col gap-1">
            {primaryItems.map((item) => (
              <NavRow key={item.label} label={item.label} icon={item.icon} />
            ))}
          </div>
          <div className="my-1 h-px w-full bg-[#eaecf0]" />
          <div className="flex flex-col gap-1">
            {secondaryItems.map((item) => (
              <NavRow
                key={item.label}
                label={item.label}
                icon={item.icon}
                active={item.active}
              />
            ))}
          </div>
        </nav>
      </div>

      <div className="flex flex-col gap-2 border-t border-[#eaecf0] pt-2">
        <NavRow label="Settings" icon={sidebar.nav.settings} />
      </div>

      <button
        type="button"
        className="absolute bottom-6 -right-3 flex size-6 items-center justify-center rounded-xl bg-[#73e2a3] shadow-[0_1px_3px_rgba(16,24,40,0.1),0_1px_2px_rgba(16,24,40,0.06)]"
        aria-label="Collapse navigation"
      >
        <img src={sidebar.chevronLeft} alt="" className="size-3" />
      </button>
    </aside>
  )
}
