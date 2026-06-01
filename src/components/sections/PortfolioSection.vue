<script setup lang="ts">
import SectionHeader from '../common/SectionHeader.vue'
import PortfolioCard from '../common/PortfolioCard.vue'
import { portfolioItems } from '../../data/portfolio'
</script>

<template>
  <section id="portfolio" class="section">
    <div class="container">
      <SectionHeader
        class="reveal"
        data-reveal
        title="Contoh Project yang Sudah Berjalan"
        subtitle="Bukan sekadar desain, tapi sistem yang dipakai harian oleh tim di lapangan."
      />
      <div class="grid grid--portfolio">
        <PortfolioCard
          v-for="(item, index) in portfolioItems"
          :key="item.id"
          :item="item"
          :delay="index * 80"
        />
      </div>
    </div>
  </section>
</template>
