<script setup lang="ts">
import SectionHeader from '../common/SectionHeader.vue'
import ServiceCard from '../common/ServiceCard.vue'
import { services } from '../../data/services'
</script>

<template>
  <section id="layanan" class="section section--muted">
    <div class="container">
      <SectionHeader
        class="reveal"
        data-reveal
        title="Layanan Utama NusaKarya"
        subtitle="Solusi digital praktis untuk operasional, pemasaran, dan pertumbuhan bisnis Anda."
      />
      <div class="grid grid--services">
        <ServiceCard
          v-for="(service, index) in services"
          :key="service.id"
          :service="service"
          :delay="Math.min(index * 70, 180)"
        />
      </div>
    </div>
  </section>
</template>
