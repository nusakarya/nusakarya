import { onMounted, onUnmounted } from 'vue'

const revealSelector = '[data-reveal]'

export const useReveal = (): void => {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector))
    if (elements.length === 0) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const target = entry.target as HTMLElement
          const delay = target.dataset.delay
          if (delay) {
            target.style.transitionDelay = `${delay}ms`
          }
          target.classList.add('is-visible')
          currentObserver.unobserve(target)
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    )

    elements.forEach((el) => observer?.observe(el))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
