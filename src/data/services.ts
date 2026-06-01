import type { ServiceItem } from '../types/content'

export const services: ServiceItem[] = [
  {
    id: 'website-umkm',
    title: 'Website UMKM',
    description:
      'Website sederhana untuk membangun kepercayaan calon pelanggan dan memperkuat branding usaha.',
    idealClient: 'Pemilik UMKM yang belum punya website resmi.',
    useCase: 'Profil usaha + katalog produk + kontak WhatsApp.',
  },
  {
    id: 'landing-page-produk',
    title: 'Landing Page Produk',
    description:
      'Halaman promosi fokus konversi untuk campaign produk atau jasa.',
    idealClient: 'Brand lokal yang sedang iklan atau launching produk.',
    useCase: 'Landing page iklan dengan CTA order cepat.',
  },
  {
    id: 'company-profile',
    title: 'Company Profile',
    description:
      'Website profil perusahaan yang profesional, informatif, dan mudah dipercaya calon klien.',
    idealClient: 'Tim kecil atau organisasi yang butuh identitas online resmi.',
    useCase: 'Profil perusahaan, layanan, portfolio, dan kontak.',
  },
  {
    id: 'dashboard-internal',
    title: 'Dashboard Internal',
    description:
      'Dashboard operasional untuk memantau data harian secara ringkas dan terstruktur.',
    idealClient: 'Tim operasional yang masih mengandalkan spreadsheet manual.',
    useCase: 'Monitoring penjualan, stok, dan performa tim.',
  },
  {
    id: 'pos-kasir',
    title: 'Aplikasi POS / Kasir',
    description:
      'Sistem kasir sederhana agar transaksi lebih cepat, rapi, dan mudah direkap.',
    idealClient: 'Toko retail, minimarket, kedai, dan usaha kuliner kecil.',
    useCase: 'Transaksi kasir, struk, dan laporan penjualan harian.',
  },
  {
    id: 'inventory',
    title: 'Aplikasi Inventory',
    description:
      'Sistem stok barang agar keluar-masuk barang lebih terkontrol dan minim selisih.',
    idealClient: 'Usaha dengan banyak SKU atau gudang skala kecil-menengah.',
    useCase: 'Stock opname, notifikasi stok menipis, histori mutasi.',
  },
  {
    id: 'peternakan-pertanian',
    title: 'Aplikasi Peternakan / Pertanian',
    description:
      'Aplikasi operasional untuk pencatatan produksi, populasi, biaya, dan performa farm.',
    idealClient: 'Peternak, farm manager, dan bisnis agrikultur lokal.',
    useCase: 'Monitoring kandang/plot, pakan, mortalitas, dan panen.',
  },
  {
    id: 'custom-web-app',
    title: 'Custom Web App',
    description:
      'Pengembangan aplikasi web sesuai alur bisnis unik agar workflow lebih efisien.',
    idealClient: 'Bisnis dengan kebutuhan spesifik yang tidak cocok aplikasi jadi.',
    useCase: 'Sistem booking, workflow approval, dan manajemen anggota.',
  },
  {
    id: 'whatsapp-business',
    title: 'WhatsApp Business API Broadcast Promo',
    description:
      'Integrasi WhatsApp Business untuk broadcast promo tersegmentasi.',
    idealClient:
      'UMKM, e-commerce, fintech, dan layanan digital yang butuh komunikasi cepat & verifikasi aman.',
    useCase:
      'Kirim notifikasi promo, reminder pembayaran, dan OTP verifikasi login/registrasi langsung ke WhatsApp pelanggan.',
  },
]
