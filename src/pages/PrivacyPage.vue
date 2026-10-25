<script setup lang="ts">
import TheFooter from '../components/layout/TheFooter.vue'
import { siteConfig } from '../data/site'
import { useReveal } from '../composables/useReveal'

// Keep this page true to what the services do; update effectiveDate on
// every change.
const effectiveDate = '25 Oktober 2026'

useReveal()
</script>

<template>
  <div class="page-shell">
    <a class="skip-link" href="#main-content">Langsung ke konten utama</a>
    <header class="navbar">
      <div class="container navbar__inner">
        <a class="navbar__brand" href="/">
          <img src="/favicon.svg" alt="" width="28" height="28" />
          <span>{{ siteConfig.brand }}</span>
        </a>
        <a class="btn btn--secondary btn--small" href="/">Kembali ke beranda</a>
      </div>
    </header>

    <main id="main-content" tabindex="-1" class="section">
      <article class="container legal">
        <p class="section-eyebrow">Kebijakan Privasi</p>
        <h1>Kebijakan Privasi NusaKarya</h1>
        <p class="legal__meta">Berlaku sejak {{ effectiveDate }}</p>

        <p>
          Kebijakan ini menjelaskan data pribadi apa yang diproses NusaKarya ("kami") di situs
          <strong>nusakarya.id</strong> dan di layanan <strong>Notifikasi &amp; Verifikasi WhatsApp</strong>, untuk apa,
          berapa lama disimpan, dan hak Anda sesuai Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi.
        </p>
        <p>
          Produk NusaKarya yang memiliki kebijakan privasi sendiri mengikuti kebijakannya masing-masing, misalnya
          <a href="https://bilas.nusakarya.id/privasi">Bilas</a>.
        </p>

        <h2>1. Situs nusakarya.id</h2>
        <ul>
          <li>Situs ini tidak memiliki akun, formulir, cookie pelacak, maupun alat analitik pihak ketiga.</li>
          <li>
            Tombol "Konsultasi via WhatsApp" membuka percakapan dengan nomor WhatsApp Business kami. Nomor, nama profil,
            dan isi pesan yang Anda kirim kami terima seperti percakapan WhatsApp biasa dan hanya dipakai untuk
            menjawab pertanyaan Anda.
          </li>
          <li>
            Penyedia jaringan dan hosting kami (Cloudflare) dapat mencatat alamat IP dan data teknis permintaan untuk
            keamanan dan pengiriman halaman.
          </li>
        </ul>

        <h2>2. Layanan Verifikasi WhatsApp</h2>
        <p>
          Aplikasi atau situs yang bekerja sama dengan kami (disebut "aplikasi klien") dapat meminta Anda memverifikasi
          akun WhatsApp dengan <strong>mengirim pesan berisi kode</strong> ke nomor WhatsApp kami. Kami tidak mengirim
          pesan ke Anda dalam proses ini.
        </p>
        <h3>Data yang kami terima</h3>
        <p>Saat Anda mengirim pesan tersebut, WhatsApp meneruskan kepada kami:</p>
        <ul>
          <li>ID pengguna WhatsApp yang khusus untuk bisnis kami (business-scoped user ID);</li>
          <li>nomor telepon Anda, bila WhatsApp membagikannya (pengguna dengan nama pengguna dapat menyembunyikannya);</li>
          <li>nama profil dan nama pengguna WhatsApp Anda, bila ada;</li>
          <li>isi pesan (kode verifikasi) dan waktu pengirimannya.</li>
        </ul>
        <h3>Untuk apa</h3>
        <ul>
          <li>
            Mencocokkan kode dengan permintaan verifikasi, lalu memberi tahu aplikasi klien yang meminta bahwa akun
            WhatsApp Anda telah terverifikasi, beserta data di atas.
          </li>
          <li>
            Data tersebut tidak kami pakai untuk iklan atau pemasaran, tidak kami jual, dan tidak kami bagikan ke pihak
            lain selain aplikasi klien yang meminta verifikasi.
          </li>
        </ul>
        <h3>Berapa lama</h3>
        <ul>
          <li>
            Kode berlaku beberapa menit. Data identitas Anda dihapus dari sistem kami begitu aplikasi klien mengambil
            hasil verifikasi, dan catatan verifikasi dihapus paling lambat satu jam setelah kodenya kedaluwarsa.
          </li>
          <li>Log server mencatat status verifikasi untuk keamanan, tanpa nomor telepon atau nama Anda.</li>
          <li>
            Setelah hasil diambil, penyimpanan data Anda menjadi tanggung jawab aplikasi klien sesuai kebijakan
            privasinya.
          </li>
        </ul>

        <h2>3. Pihak ketiga</h2>
        <ul>
          <li>
            <strong>Meta (WhatsApp Business Platform):</strong> pesan WhatsApp diproses oleh Meta sesuai kebijakan
            privasi WhatsApp.
          </li>
          <li><strong>Cloudflare:</strong> jaringan, keamanan, dan hosting situs serta API.</li>
        </ul>

        <h2>4. Keamanan</h2>
        <p>
          Semua koneksi memakai HTTPS. Pesan yang kami terima dari WhatsApp diperiksa tanda tangannya sebelum diproses,
          dan akses ke hasil verifikasi dibatasi dengan kunci API milik aplikasi klien.
        </p>

        <h2>5. Hak Anda</h2>
        <p>
          Anda berhak meminta akses, perbaikan, atau penghapusan data pribadi Anda, serta menarik persetujuan. Kirim
          permintaan ke <a :href="`mailto:${siteConfig.email}`">{{ siteConfig.email }}</a>; kami menanggapinya paling
          lambat 3 x 24 jam hari kerja.
        </p>

        <h2>6. Anak-anak</h2>
        <p>Layanan kami ditujukan untuk pelaku usaha dan tidak ditujukan untuk anak-anak.</p>

        <h2>7. Perubahan kebijakan</h2>
        <p>
          Bila kebijakan ini berubah, kami memperbarui tanggal berlaku di atas. Perubahan penting juga kami umumkan di
          halaman ini.
        </p>

        <h2>8. Kontak</h2>
        <p>
          NusaKarya, {{ siteConfig.location }}. Email:
          <a :href="`mailto:${siteConfig.email}`">{{ siteConfig.email }}</a>.
        </p>
      </article>
    </main>

    <TheFooter />
  </div>
</template>
