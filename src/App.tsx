import { useEffect, useRef, useState } from 'react'
import { HeroSection } from './components/HeroSection'
import { LogoCloud } from './components/LogoCloud'
import { PageHeader } from './components/PageHeader'
import { PricingPage } from './components/PricingPage'
import { ProductTabs } from './components/ProductTabs'
import { Sidebar } from './components/Sidebar'
import { StatsRow } from './components/StatsRow'
import { WhySection } from './components/WhySection'
import type { ProductTabId } from './productTab'

type AppView = 'landing' | 'pricing'

export default function App() {
  const [productTab, setProductTab] = useState<ProductTabId>('custom')
  const [appView, setAppView] = useState<AppView>('landing')
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (appView === 'pricing') {
      document.title = 'Pricing · Mobile App'
      mainRef.current?.scrollTo({ top: 0, behavior: 'instant' })
    } else {
      document.title = 'Mobile App'
    }
  }, [appView])

  return (
    <div className="flex h-dvh max-h-dvh min-h-0 w-full overflow-hidden bg-[#f9fafb] text-[#10172a]">
      <Sidebar />

      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
        <PageHeader />
        <main
          ref={mainRef}
          className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-4 py-6 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-6 sm:py-8 lg:px-8 [&::-webkit-scrollbar]:hidden"
        >
          <div className="mx-auto flex w-full max-w-[1112px] flex-col">
            {appView === 'pricing' ? (
              <PricingPage onBack={() => setAppView('landing')} />
            ) : (
              <>
                <div className="flex justify-center pb-2 pt-2">
                  <ProductTabs active={productTab} onChange={setProductTab} />
                </div>
                <div
                  id="product-hero-panel"
                  className="mt-6"
                  role="tabpanel"
                  aria-labelledby={`product-tab-${productTab}`}
                >
                  <HeroSection
                    productTab={productTab}
                    onOpenPricing={() => setAppView('pricing')}
                  />
                </div>
                <StatsRow />
                <WhySection />
                <LogoCloud />
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
