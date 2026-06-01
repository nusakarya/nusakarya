<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { siteConfig } from '../../data/site'

const isOpen = ref(false)
const isScrolled = ref(false)
const activeHref = ref('#top')
let sectionObserver: IntersectionObserver | null = null

const closeMenu = (): void => {
  isOpen.value = false
}

const handleResize = (): void => {
  if (window.innerWidth >= 768) {
    closeMenu()
  }
}

const handleScroll = (): void => {
  isScrolled.value = window.scrollY > 18
}

const onEscape = (event: KeyboardEvent): void => {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize)
  window.addEventListener('keydown', onEscape)

  const ids = ['top', ...siteConfig.navLinks.map((link) => link.href.replace('#', ''))]
  const sections = ids
    .map((id) => document.getElementById(id))
    .filter((section): section is HTMLElement => section !== null)

  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const id = (entry.target as HTMLElement).id
        activeHref.value = id === 'top' ? '#top' : `#${id}`
      })
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: 0.1 },
  )

  sections.forEach((section) => sectionObserver?.observe(section))
})

watch(isOpen, (open) => {
  document.body.classList.toggle('menu-open', open)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('keydown', onEscape)
  sectionObserver?.disconnect()
  document.body.classList.remove('menu-open')
})
</script>

<template>
  <header class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="container navbar__inner">
      <a class="navbar__brand" href="#top">{{ siteConfig.brand }}</a>
      <button
        class="navbar__toggle"
        type="button"
        aria-label="Toggle menu"
        aria-controls="mobile-main-nav"
        :aria-expanded="isOpen"
        @click="isOpen = !isOpen"
      >
        Menu
      </button>
      <nav id="mobile-main-nav" class="navbar__menu" :class="{ 'navbar__menu--open': isOpen }">
        <a
          v-for="link in siteConfig.navLinks"
          :key="link.href"
          class="nav-link"
          :class="{ 'nav-link--active': activeHref === link.href }"
          :aria-current="activeHref === link.href ? 'page' : undefined"
          :href="link.href"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
        <a
          class="btn btn--primary btn--small"
          :href="siteConfig.whatsappLink"
          target="_blank"
          rel="noopener noreferrer"
          @click="closeMenu"
        >
          Konsultasi Gratis
        </a>
      </nav>
    </div>
  </header>
  <Teleport to="body">
    <button
      v-if="isOpen"
      class="menu-backdrop"
      type="button"
      aria-label="Tutup menu"
      @click="closeMenu"
    />
  </Teleport>
</template>
