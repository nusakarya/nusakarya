<script setup lang="ts">
import CtaButton from '../common/CtaButton.vue'
import { siteConfig } from '../../data/site'
</script>

<template>
  <section id="kontak" class="section section--cta">
    <div class="container contact">
      <div class="reveal" data-reveal>
        <h2>Siap Digitalisasi Bisnis Anda? Mulai dari yang Paling Penting Dulu.</h2>
        <p>
          Ceritakan kebutuhan bisnis Anda, kami bantu petakan solusi yang realistis, sesuai budget,
          dan bisa langsung dipakai tim.
        </p>
        <div class="contact__cta">
          <CtaButton :href="siteConfig.whatsappLink" label="Konsultasi via WhatsApp" />
          <CtaButton
            :href="siteConfig.whatsappLink"
            label="Diskusi Kebutuhan Project"
            variant="secondary"
          />
        </div>
        <p class="trust">
          Ramah untuk bisnis kecil. Tanpa bahasa teknis yang membingungkan. Fokus ke solusi yang
          jalan.
        </p>
      </div>
      <aside class="contact__box reveal" data-reveal data-delay="110">
        <h3>Konsultasi Requirement Gratis</h3>
        <p>Isi ringkasan kebutuhan project, lalu lanjutkan diskusi lewat WhatsApp.</p>
        <ul>
          <li>Tujuan project</li>
          <li>Masalah yang ingin diselesaikan</li>
          <li>Target timeline</li>
        </ul>
      </aside>
    </div>
  </section>
</template>
