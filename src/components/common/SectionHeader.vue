<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <header class="section-header">
    <h2>{{ title }}</h2>
    <p>{{ subtitle }}</p>
  </header>
</template>
