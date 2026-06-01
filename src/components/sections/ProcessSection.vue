<script setup lang="ts">
import SectionHeader from '../common/SectionHeader.vue'
import { siteConfig } from '../../data/site'
</script>

<template>
  <section id="proses" class="section section--muted">
    <div class="container">
      <SectionHeader
        class="reveal"
        data-reveal
        title="Proses Kerja yang Jelas & Transparan"
        subtitle="Kami menjaga alur project tetap terarah agar hasil cepat digunakan."
      />
      <div class="grid grid--steps">
        <article
          v-for="(step, index) in siteConfig.processSteps"
          :key="step.title"
          class="card reveal"
          data-reveal
          :data-delay="index * 70"
        >
          <p class="step-number">0{{ index + 1 }}</p>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
