export type ServiceItem = {
  id: string
  title: string
  description: string
  idealClient: string
  useCase: string
}

export type PortfolioItem = {
  id: string
  title: string
  url: string
  problemSolved: string
  keyFeatures: string[]
  techCategory: string
  ctaLabel: string
}

export type PackageItem = {
  id: string
  name: string
  forWho: string
  features: string[]
  timeline: string
  priceNote: string
  ctaLabel: string
}

export type FaqItem = {
  id: string
  question: string
  answer: string
}
