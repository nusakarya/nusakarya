<script setup lang="ts">
import type { FaqItem as FaqType } from '../../types/content'

defineProps<{
  item: FaqType
  delay?: number
}>()
</script>

<template>
  <details class="faq-item reveal" data-reveal :data-delay="delay ?? 0">
    <summary>
      <span>{{ item.question }}</span>
      <svg
        class="faq-item__icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </summary>
    <p>{{ item.answer }}</p>
  </details>
</template>
