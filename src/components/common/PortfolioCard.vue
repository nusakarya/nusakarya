<script setup lang="ts">
import type { PortfolioItem } from '../../types/content'

defineProps<{
  item: PortfolioItem
  delay?: number
}>()
</script>

<template>
  <article class="card card--portfolio reveal" data-reveal :data-delay="delay ?? 0">
    <p class="chip">Project</p>
    <h3>{{ item.title }}</h3>
    <p><strong>Problem solved:</strong> {{ item.problemSolved }}</p>
    <p><strong>Kategori:</strong> {{ item.techCategory }}</p>
    <ul>
      <li v-for="feature in item.keyFeatures" :key="feature">{{ feature }}</li>
    </ul>
    <a :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.ctaLabel }}</a>
  </article>
</template>
