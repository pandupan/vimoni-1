# 🏗️ Vimoni — Company & Product Showcase

Aplikasi **showcase perusahaan** berbasis Next.js dengan beberapa varian halaman (firmie1, firmie2), API integration, dan katalog produk. Vimoni dirancang untuk menampilkan profil perusahaan secara profesional.

## ✨ Fitur

- **Multiple Theme Pages** — Beberapa varian landing page perusahaan
  - `firmie1` — Tema perusahaan 1
  - `firmie2` — Tema perusahaan 2
- **Kariera** — Halaman karier dan lowongan
- **Produkt** — Katalog produk / layanan
- **API Page** — Integrasi dan dokumentasi API
- **Plugins** — Informasi plugin dan integrasi

## 🛠️ Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| **Framework** | Next.js (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animation** | Framer Motion |

## 📁 Struktur Proyek

```
├── app/
│   ├── page.tsx              # Landing page utama
│   ├── firmie1/              # Tema 1 — halaman perusahaan
│   ├── firmie2/              # Tema 2 — halaman perusahaan
│   ├── kariera/              # Halaman karier
│   ├── produkt/              # Halaman produk
│   ├── api/                  # Halaman API
│   └── plugins/              # Halaman plugin
├── components/
│   ├── layouts/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── core/
│   │   └── button.tsx
│   └── pages/
│       ├── api/ApiPage.tsx
│       ├── firmie1/Firmie1Page.tsx
│       ├── firmie2/Firmie2Page.tsx
│       ├── kariera/KarieraPage.tsx
│       └── produkt/ProduktPage.tsx
```

## 🚀 Cara Menjalankan

```bash
npm install
npm run dev
```

## 📄 Lisensi

MIT License

---

> Dibuat oleh [Pandu Pangestu](https://github.com/pandupan)
