/** Revenue widget styled like the Figma “Revenue Growth” card preview. */
export function RevenueMock() {
  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-white p-3 shadow-[0_24px_48px_-12px_rgba(16,24,40,0.18)] sm:p-3.5">
      <div className="flex items-center justify-between text-xs font-medium text-[#344054]">
        <span>Revenue</span>
        <span>Last 6 Months</span>
      </div>
      <div className="my-2 h-px w-full bg-[#eaecf0]" />
      <p className="text-2xl font-bold tracking-tight text-[#101828] sm:text-[28px]">
        $2,880
      </p>
      <div className="relative mt-2 flex-1 min-h-[100px]">
        <div className="absolute left-0 top-0 flex h-full flex-col justify-between text-[10px] text-[#98a2b3]">
          <span>10K</span>
          <span>8K</span>
          <span>6K</span>
        </div>
        <svg
          className="ml-5 h-full w-[calc(100%-1.25rem)] overflow-visible"
          viewBox="0 0 240 90"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 1, 2].map((i) => (
            <line
              key={i}
              x1="0"
              y1={20 + i * 28}
              x2="240"
              y2={20 + i * 28}
              stroke="#f2f4f7"
              strokeWidth="1"
            />
          ))}
          <path
            d="M0 72 C40 68 60 50 100 42 S180 18 240 8 L240 90 L0 90 Z"
            fill="url(#revFill)"
          />
          <path
            d="M0 72 C40 68 60 50 100 42 S180 18 240 8"
            fill="none"
            stroke="#039855"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="mt-1 flex justify-between text-[10px] text-[#98a2b3]">
        <span>Sep 25</span>
        <span>Aug 25</span>
        <span>Jul 25</span>
        <span>Jun 25</span>
        <span>May 25</span>
        <span>Mar 25</span>
      </div>
    </div>
  )
}
