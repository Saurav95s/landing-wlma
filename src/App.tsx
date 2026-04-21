import { HeroSection } from './components/HeroSection'
import { LogoCloud } from './components/LogoCloud'
import { PageHeader } from './components/PageHeader'
import { ProductTabs } from './components/ProductTabs'
import { Sidebar } from './components/Sidebar'
import { StatsRow } from './components/StatsRow'
import { WhySection } from './components/WhySection'

export default function App() {
  return (
    <div className="flex h-dvh max-h-dvh min-h-0 w-full overflow-hidden bg-[#f9fafb] text-[#10172a]">
      <Sidebar />

      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
        <PageHeader />
        <main className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto flex max-w-[1112px] flex-col">
            <div className="flex justify-center pb-2 pt-2">
              <ProductTabs />
            </div>
            <div className="mt-6">
              <HeroSection />
            </div>
            <StatsRow />
            <WhySection />
            <LogoCloud />
          </div>
        </main>
      </div>
    </div>
  )
}
