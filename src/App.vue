<script setup lang="ts">
import TheNavbar from './components/layout/TheNavbar.vue'
import TheFooter from './components/layout/TheFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
import PortfolioSection from './components/sections/PortfolioSection.vue'
import ProcessSection from './components/sections/ProcessSection.vue'
import WhyUsSection from './components/sections/WhyUsSection.vue'
import PackagesSection from './components/sections/PackagesSection.vue'
import FaqSection from './components/sections/FaqSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import { siteConfig } from './data/site'
import { useSeo } from './composables/useSeo'
import { useReveal } from './composables/useReveal'

useSeo({
  title: 'NusaKarya | Jasa Pembuatan Website UMKM & Custom Web App Indonesia',
  description:
    'Software house UMKM Indonesia untuk landing page, company profile, aplikasi kasir sederhana, inventory kecil, dashboard internal, dan custom web app. Konsultasi kebutuhan gratis.',
})

useReveal()
</script>

<template>
  <div class="page-shell">
    <a class="skip-link" href="#main-content">Langsung ke konten utama</a>
    <TheNavbar />
    <main id="main-content" tabindex="-1">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <WhyUsSection />
      <PackagesSection />
      <FaqSection />
      <ContactSection />
    </main>
    <a
      class="wa-float"
      :href="siteConfig.whatsappLink"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Konsultasi via WhatsApp"
    >
      <svg class="wa-float__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path
          d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.1.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.2-.2-.2-.4-.3Z"
        />
      </svg>
      <span class="wa-float__label">Konsultasi WhatsApp</span>
    </a>
    <TheFooter />
  </div>
</template>
