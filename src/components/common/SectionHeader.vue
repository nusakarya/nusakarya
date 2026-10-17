<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  eyebrow?: string
}>()
</script>

<template>
  <header class="section-header">
    <p v-if="eyebrow" class="section-eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p>{{ subtitle }}</p>
  </header>
</template>
