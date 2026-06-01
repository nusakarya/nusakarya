<script setup lang="ts">
import type { ServiceItem } from '../../types/content'

defineProps<{
  service: ServiceItem
  delay?: number
}>()
</script>

<template>
  <article class="card card--service reveal" data-reveal :data-delay="delay ?? 0">
    <p class="chip">Layanan</p>
    <h3>{{ service.title }}</h3>
    <p>{{ service.description }}</p>
    <p><strong>Ideal untuk:</strong> {{ service.idealClient }}</p>
    <p><strong>Contoh:</strong> {{ service.useCase }}</p>
  </article>
</template>
