<script setup lang="ts">
import SectionHeader from '../common/SectionHeader.vue'
import PackageCard from '../common/PackageCard.vue'
import { packageItems } from '../../data/packages'
</script>

<template>
  <section id="paket" class="section section--muted">
    <div class="container">
      <SectionHeader
        class="reveal"
        data-reveal
        title="Paket Fleksibel Sesuai Tahap Bisnis"
        subtitle="Mulai dari kebutuhan sederhana dulu, lalu berkembang sesuai prioritas."
      />
      <div class="grid grid--packages">
        <PackageCard
          v-for="(item, index) in packageItems"
          :key="item.id"
          :item="item"
          :delay="Math.min(index * 70, 180)"
        />
      </div>
    </div>
  </section>
</template>
