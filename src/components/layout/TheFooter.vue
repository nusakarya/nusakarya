<script setup lang="ts">
import { siteConfig } from '../../data/site'
import { portfolioItems } from '../../data/portfolio'
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
        <h3>Project Terbaru</h3>
        <ul class="footer__links">
          <li v-for="item in portfolioItems" :key="item.id">
            <a :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <p class="container footer__copy">
      © {{ new Date().getFullYear() }} NusaKarya · {{ siteConfig.domain }}. All rights reserved. ·
      <a href="/privasi">Kebijakan privasi</a>
    </p>
  </footer>
</template>
