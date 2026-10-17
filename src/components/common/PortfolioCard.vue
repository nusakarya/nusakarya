<script setup lang="ts">
import { computed } from 'vue'
import type { PortfolioItem } from '../../types/content'

const props = defineProps<{
  item: PortfolioItem
  delay?: number
}>()

const host = computed(() => new URL(props.item.url).host)
</script>

<template>
  <article
    class="card portfolio-card reveal"
    :class="[`portfolio-card--${item.accent}`, { 'portfolio-card--featured': item.featured }]"
    data-reveal
    :data-delay="delay ?? 0"
  >
    <div v-if="item.featured && item.screenshots?.length" class="portfolio-shots">
      <figure
        v-for="(shot, index) in item.screenshots"
        :key="shot.src"
        class="phone-frame"
        :class="index === 0 ? 'phone-frame--front' : 'phone-frame--back'"
      >
        <img
          :src="shot.src"
          :alt="shot.alt"
          :width="shot.width"
          :height="shot.height"
          loading="lazy"
          decoding="async"
        />
      </figure>
    </div>
    <div v-else class="portfolio-preview" aria-hidden="true">
      <div class="portfolio-preview__bar">
        <span></span><span></span><span></span>
        <p>{{ host }}</p>
      </div>
      <p class="portfolio-preview__label">{{ item.tags[0] }}</p>
    </div>

    <div class="portfolio-card__body">
      <div class="portfolio-card__meta">
        <span v-if="item.isNew" class="badge-new">Baru</span>
        <span v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      <h3>{{ item.title }}</h3>
      <p v-if="item.tagline" class="portfolio-card__tagline">{{ item.tagline }}</p>

      <dl class="portfolio-card__facts">
        <div>
          <dt>Masalah</dt>
          <dd>{{ item.problemSolved }}</dd>
        </div>
        <div>
          <dt>Kategori</dt>
          <dd>{{ item.techCategory }}</dd>
        </div>
      </dl>

      <ul class="check-list" :class="{ 'check-list--two-col': item.featured }">
        <li v-for="feature in item.keyFeatures" :key="feature">{{ feature }}</li>
      </ul>

      <div class="portfolio-card__actions">
        <a
          class="btn btn--primary btn--small"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`${item.ctaLabel}: ${item.title} (tab baru)`"
        >
          {{ item.ctaLabel }} <span aria-hidden="true">↗</span>
        </a>
        <a
          v-if="item.secondaryLink"
          class="btn btn--secondary btn--small"
          :href="item.secondaryLink.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ item.secondaryLink.label }} <span aria-hidden="true">↗</span>
        </a>
        <span v-else class="portfolio-card__host">{{ host }}</span>
      </div>
    </div>
  </article>
</template>
