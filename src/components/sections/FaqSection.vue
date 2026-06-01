<script setup lang="ts">
import SectionHeader from '../common/SectionHeader.vue'
import FaqItem from '../common/FaqItem.vue'
import { faqItems } from '../../data/faq'
</script>

<template>
  <section id="faq" class="section">
    <div class="container">
      <SectionHeader
        class="reveal"
        data-reveal
        title="Pertanyaan yang Sering Ditanyakan"
        subtitle="Hal penting yang biasanya ditanyakan sebelum project dimulai."
      />
      <div class="faq-list">
        <FaqItem
          v-for="(item, index) in faqItems"
          :key="item.id"
          :item="item"
          :delay="Math.min(index * 60, 180)"
        />
      </div>
    </div>
  </section>
</template>
