<script setup lang="ts">
type Variant = 'primary' | 'secondary'

withDefaults(
  defineProps<{
    href: string
    label: string
    variant?: Variant
  }>(),
  {
    variant: 'primary',
  },
)
</script>

<template>
  <a
    class="btn"
    :class="`btn--${variant}`"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
  >
    {{ label }}
  </a>
</template>
