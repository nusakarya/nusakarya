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
    <TheNavbar />
    <main>
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
      Konsultasi WhatsApp
    </a>
    <TheFooter />
  </div>
</template>
