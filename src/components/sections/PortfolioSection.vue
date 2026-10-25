<script setup lang="ts">
import SectionHeader from '../common/SectionHeader.vue'
import PortfolioCard from '../common/PortfolioCard.vue'
import { portfolioItems } from '../../data/portfolio'
import { siteConfig } from '../../data/site'

// Alternate featured cards so their screenshots sit on opposite sides.
const flipped = new Set(
  portfolioItems.filter((item) => item.featured).filter((_, i) => i % 2 === 1).map((item) => item.id),
)
</script>

<template>
  <section id="portfolio" class="section">
    <div class="container">
      <SectionHeader
        class="reveal"
        data-reveal
        eyebrow="Portfolio"
        title="Contoh Project yang Sudah Berjalan"
        subtitle="Bukan sekadar desain, tapi sistem yang dipakai harian oleh tim di lapangan."
      />
      <div class="grid grid--portfolio">
        <PortfolioCard
          v-for="(item, index) in portfolioItems"
          :key="item.id"
          :item="item"
          :flip="flipped.has(item.id)"
          :delay="Math.min(index * 80, 240)"
        />
      </div>
      <div class="portfolio-cta reveal" data-reveal>
        <p>Punya ide serupa untuk bisnis Anda?</p>
        <a
          class="btn btn--primary"
          :href="siteConfig.whatsappLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          Diskusikan Project Anda
        </a>
      </div>
    </div>
  </section>
</template>
