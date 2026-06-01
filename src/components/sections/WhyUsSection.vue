<script setup lang="ts">
import SectionHeader from '../common/SectionHeader.vue'
import { siteConfig } from '../../data/site'
</script>

<template>
  <section class="section">
    <div class="container">
      <SectionHeader
        class="reveal"
        data-reveal
        title="Kenapa Banyak Bisnis Kecil Cocok dengan NusaKarya"
        subtitle="Kami bangun software yang relevan, bukan yang berlebihan."
      />
      <div class="grid grid--why">
        <article
          v-for="(reason, index) in siteConfig.whyUs"
          :key="reason"
          class="card reveal"
          data-reveal
          :data-delay="index * 70"
        >
          <p>{{ reason }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
