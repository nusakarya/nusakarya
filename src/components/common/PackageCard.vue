<script setup lang="ts">
import type { PackageItem } from '../../types/content'
import { siteConfig } from '../../data/site'

defineProps<{
  item: PackageItem
  delay?: number
}>()
</script>

<template>
  <article class="card card--package reveal" data-reveal :data-delay="delay ?? 0">
    <p class="chip">Paket</p>
    <h3>{{ item.name }}</h3>
    <p><strong>Untuk:</strong> {{ item.forWho }}</p>
    <ul>
      <li v-for="feature in item.features" :key="feature">{{ feature }}</li>
    </ul>
    <p><strong>Timeline:</strong> {{ item.timeline }}</p>
    <p class="price-note">{{ item.priceNote }}</p>
    <a :href="siteConfig.whatsappLink" target="_blank" rel="noopener noreferrer">
      {{ item.ctaLabel }}
    </a>
  </article>
</template>
