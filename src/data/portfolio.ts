import type { PortfolioItem } from '../types/content'

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'poultry-farm-app',
    title: 'Poultry Farm Management App',
    url: 'https://poultry.arifboyz16.workers.dev/',
    problemSolved:
      'Pencatatan farm manual membuat monitoring performa harian lambat dan rentan miss.',
    keyFeatures: [
      'Monitoring kandang harian',
      'Pencatatan populasi dan pakan',
      'Rekap performa produksi',
      'Ringkasan laporan operasional',
    ],
    techCategory: 'Web App Dashboard (Agritech Operations)',
    ctaLabel: 'Lihat Project',
  },
  {
    id: 'kusuma-agro-website',
    title: 'Kusuma Agro Farm Website',
    url: 'https://kusuma-agro.nusakarya.id/',
    problemSolved:
      'Perusahaan membutuhkan profil online kredibel untuk calon mitra dan pelanggan.',
    keyFeatures: [
      'Company profile profesional',
      'Informasi layanan dan usaha',
      'Navigasi sederhana dan mobile-friendly',
      'Kontak cepat untuk inquiry',
    ],
    techCategory: 'Company Profile Website (Brand Presence)',
    ctaLabel: 'Lihat Project',
  },
]
