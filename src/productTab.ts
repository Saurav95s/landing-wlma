export const PRODUCT_TABS = [
  { id: 'custom' as const, label: 'Your custom app' },
  { id: 'lc' as const, label: 'Lead Connector' },
  { id: 'hl' as const, label: 'Highlevel mobile app' },
] as const

export type ProductTabId = (typeof PRODUCT_TABS)[number]['id']
