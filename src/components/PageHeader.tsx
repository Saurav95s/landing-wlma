import { header } from '../figmaAssets'

export function PageHeader() {
  return (
    <header className="flex w-full shrink-0 items-center justify-between border-b border-[#eaecf0] bg-white px-4 py-2 shadow-[0_1px_2px_rgba(16,24,40,0.05)] sm:px-4">
      <p className="text-xl font-semibold leading-[30px] tracking-normal text-[#101828]">
        Mobile App
      </p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="relative flex size-8 items-center justify-center rounded-full bg-[#6938ef]"
          aria-label="AI assistant"
        >
          <img
            src={header.iconStars}
            alt=""
            className="size-[18px] brightness-0 invert"
          />
        </button>
        <button
          type="button"
          className="relative flex size-8 items-center justify-center rounded-full bg-[#209681]"
          aria-label="Announcements"
        >
          <img
            src={header.iconMegaphone}
            alt=""
            className="size-[18px] brightness-0 invert"
          />
          <span className="absolute -right-0.5 -top-0.5 size-2">
            <img src={header.dot} alt="" className="size-full" />
          </span>
        </button>
        <button
          type="button"
          className="flex size-8 items-center justify-center rounded-full bg-[#ff681e]"
          aria-label="Notifications"
        >
          <img
            src={header.iconBell}
            alt=""
            className="size-[18px] brightness-0 invert"
          />
        </button>
        <button
          type="button"
          className="flex size-8 items-center justify-center rounded-full bg-[#008aef]"
          aria-label="Help"
        >
          <img
            src={header.helpFill}
            alt=""
            className="size-[14px] brightness-0 invert"
          />
        </button>
        <div
          className="flex size-8 items-center justify-center rounded-full bg-[#65b5bc] text-sm font-medium text-white"
          aria-hidden
        >
          SS
        </div>
      </div>
    </header>
  )
}
