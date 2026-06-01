import type { PackageItem } from '../types/content'

export const packageItems: PackageItem[] = [
  {
    id: 'landing-page',
    name: 'Paket Landing Page',
    forWho: 'UMKM atau brand lokal yang ingin promosi 1 produk/jasa.',
    features: [
      '1 halaman landing page',
      'Copywriting dasar konversi',
      'CTA WhatsApp dan form lead',
      'Responsive mobile dan desktop',
    ],
    timeline: 'Estimasi 5-10 hari kerja',
    priceNote: 'Mulai dari - Diskusi Kebutuhan',
    ctaLabel: 'Mulai Diskusi',
  },
  {
    id: 'company-profile',
    name: 'Paket Company Profile',
    forWho: 'Bisnis yang butuh website resmi perusahaan.',
    features: [
      '4-6 halaman utama',
      'Profil, layanan, dan portfolio',
      'Form kontak + CTA WhatsApp',
      'Basic SEO on-page',
    ],
    timeline: 'Estimasi 2-4 minggu',
    priceNote: 'Mulai dari - Konsultasi Gratis',
    ctaLabel: 'Konsultasi Gratis',
  },
  {
    id: 'web-app-mvp',
    name: 'Paket Web App MVP',
    forWho: 'Bisnis yang ingin validasi ide aplikasi internal atau produk digital.',
    features: [
      'Autentikasi dan role dasar',
      'Dashboard utama',
      '2-4 modul inti',
      'Deploy versi awal',
    ],
    timeline: 'Estimasi 4-8 minggu',
    priceNote: 'Diskusi Kebutuhan MVP',
    ctaLabel: 'Diskusi MVP',
  },
  {
    id: 'custom-system',
    name: 'Paket Custom System',
    forWho: 'Bisnis dengan workflow operasional yang spesifik.',
    features: [
      'Analisis kebutuhan dan scope',
      'Modul custom sesuai alur kerja',
      'Laporan dan role pengguna',
      'Handover dan pendampingan',
    ],
    timeline: 'Timeline bertahap sesuai kompleksitas',
    priceNote: 'Diskusi Kebutuhan',
    ctaLabel: 'Jadwalkan Diskusi',
  },
]
