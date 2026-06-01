<script setup lang="ts">
import { siteConfig } from '../../data/site'
</script>

<template>
  <footer class="footer">
    <div class="container footer__grid reveal" data-reveal>
      <div>
        <h3>{{ siteConfig.brand }}</h3>
        <p>{{ siteConfig.tagline }}</p>
        <p>{{ siteConfig.shortDescription }}</p>
      </div>
      <div>
        <h3>Kontak</h3>
        <p>{{ siteConfig.email }}</p>
        <p>{{ siteConfig.location }}</p>
        <a :href="siteConfig.whatsappLink" target="_blank" rel="noopener noreferrer">
          Konsultasi via WhatsApp
        </a>
      </div>
      <div>
        <h3>Domain</h3>
        <p>{{ siteConfig.domain }}</p>
        <p class="footer__copy">
          © {{ new Date().getFullYear() }} NusaKarya. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
