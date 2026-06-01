<script setup lang="ts">
import CtaButton from '../common/CtaButton.vue'
import { siteConfig } from '../../data/site'

const highlights = [
  { label: 'Project selesai', value: '20+' },
  { label: 'Fokus UMKM', value: '100%' },
  { label: 'Support after launch', value: 'Ya' },
]
</script>

<template>
  <section id="top" class="section hero">
    <div class="hero-blob hero-blob--one" aria-hidden="true"></div>
    <div class="hero-blob hero-blob--two" aria-hidden="true"></div>
    <div class="container hero__grid">
      <div class="reveal" data-reveal>
        <p class="eyebrow">{{ siteConfig.tagline }}</p>
        <h1>{{ siteConfig.heroHeadline }}</h1>
        <p class="lead">{{ siteConfig.heroSubheadline }}</p>
        <div class="hero-badges">
          <span>Praktis</span>
          <span>Terjangkau</span>
          <span>Mobile-First</span>
        </div>
        <div class="hero__cta">
          <CtaButton
            :href="siteConfig.whatsappLink"
            label="Konsultasi via WhatsApp"
            variant="primary"
          />
          <a class="btn btn--secondary" href="#portfolio">Lihat Portfolio</a>
        </div>
        <p class="trust">{{ siteConfig.trustStatement }}</p>
        <div class="hero-stats">
          <article
            v-for="(item, index) in highlights"
            :key="item.label"
            class="hero-stat reveal"
            data-reveal
            :data-delay="index * 80"
          >
            <p class="hero-stat__value">{{ item.value }}</p>
            <p class="hero-stat__label">{{ item.label }}</p>
          </article>
        </div>
      </div>
      <aside class="hero__panel reveal" data-reveal data-delay="120">
        <h2>Untuk siapa layanan NusaKarya?</h2>
        <ul>
          <li>UMKM owner dan brand lokal</li>
          <li>Tim kecil, koperasi, dan klinik</li>
          <li>Usaha peternakan dan pertanian</li>
          <li>Organisasi yang butuh sistem praktis</li>
        </ul>
        <div class="hero-mini-card">
          <p>💬 Respon cepat untuk diskusi awal</p>
          <p>🧩 Scope jelas sebelum development</p>
        </div>
      </aside>
    </div>
  </section>
</template>
