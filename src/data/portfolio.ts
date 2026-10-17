import type { PortfolioItem } from '../types/content'

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'bilas-kasir-laundry',
    title: 'Bilas: Kasir Laundry & Cuci Sepatu',
    url: 'https://bilas.nusakarya.id/',
    tagline: 'Aplikasi kasir Android untuk laundry, cuci sepatu, dan cuci tas.',
    problemSolved:
      'Order laundry masih dicatat di buku, status barang sulit dilacak, dan pelanggan terus bertanya "sudah selesai belum?".',
    keyFeatures: [
      'Kasir di HP Android, tetap jalan tanpa internet',
      'Order per barang dengan status sesuai alur kerja',
      'Nota ke printer Bluetooth 58/80 mm & WhatsApp',
      'Halaman lacak realtime lewat QR di nota',
      'Laporan uang masuk, piutang, dan laba',
      'Langganan dengan pembayaran QRIS',
    ],
    techCategory: 'SaaS Mobile App + Web (Android, Offline-First)',
    ctaLabel: 'Lihat Project',
    tags: ['Mobile App', 'SaaS', 'Kasir / POS'],
    accent: 'sky',
    featured: true,
    isNew: true,
    secondaryLink: { label: 'Demo Halaman Lacak', url: 'https://lacak.nusakarya.id/o/demo' },
    screenshots: [
      {
        src: '/img/portfolio/bilas-beranda.jpg',
        alt: 'Beranda aplikasi Bilas: uang masuk hari ini dan ringkasan order',
        width: 603,
        height: 1180,
      },
      {
        src: '/img/portfolio/bilas-lacak.jpg',
        alt: 'Halaman lacak order Bilas yang dibuka pelanggan dari QR di nota',
        width: 544,
        height: 1180,
      },
    ],
  },
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
    tags: ['Web App', 'Dashboard'],
    accent: 'amber',
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
    tags: ['Website', 'Company Profile'],
    accent: 'teal',
  },
  {
    id: 'katalog-instan-umkm',
    title: 'Katalog Instan Gratis untuk UMKM',
    url: 'https://katalog.nusakarya.id/k/contoh',
    problemSolved:
      'Banyak UMKM belum punya media digital untuk memajang produk dan menerima pesanan online.',
    keyFeatures: [
      'Generator katalog online gratis',
      'Tombol pesan langsung via WhatsApp',
      'Kode QR siap cetak untuk dipajang di toko',
      'Dashboard admin untuk pantau dan kelola data',
    ],
    techCategory: 'Web App Self-Serve (Lead Generation Tool)',
    ctaLabel: 'Lihat Contoh',
    tags: ['Web App', 'Self-Serve'],
    accent: 'violet',
  },
]
