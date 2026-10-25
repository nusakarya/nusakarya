export type ServiceItem = {
  id: string
  title: string
  description: string
  idealClient: string
  useCase: string
}

export type PortfolioAccent = 'teal' | 'amber' | 'sky' | 'violet' | 'indigo'

export type PortfolioScreenshot = {
  src: string
  alt: string
  width: number
  height: number
}

export type PortfolioItem = {
  id: string
  title: string
  url: string
  problemSolved: string
  keyFeatures: string[]
  techCategory: string
  ctaLabel: string
  tags: string[]
  accent: PortfolioAccent
  featured?: boolean
  isNew?: boolean
  tagline?: string
  secondaryLink?: { label: string; url: string }
  screenshots?: PortfolioScreenshot[]
  screenshotFrame?: 'phone' | 'browser'
}

export type PackageItem = {
  id: string
  name: string
  forWho: string
  features: string[]
  timeline: string
  priceNote: string
  ctaLabel: string
  featured?: boolean
}

export type FaqItem = {
  id: string
  question: string
  answer: string
}
