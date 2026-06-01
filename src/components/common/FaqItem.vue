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
      <span class="faq-item__icon" aria-hidden="true">⌄</span>
    </summary>
    <p>{{ item.answer }}</p>
  </details>
</template>
