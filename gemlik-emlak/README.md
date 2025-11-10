# 🏡 Gemlik Emlak - SEO & GEO Optimizasyonlu Emlak Sitesi

**Rasim Kılıç - Gemlik Emlak Danışmanı** için geliştirilmiş, Next.js 14+ (App Router) ile kodlanmış, Türkiye odaklı, SEO ve GEO (Generative Engine Optimization) tam optimize edilmiş emlak sitesi.

## 🎯 Hedef

**Odak Sorgular:**
- "Gemlik satılık daire"
- "Gemlik emlak"

**Hedef:** Google ve yapay zeka arama motorlarında (ChatGPT, Claude, Perplexity, Bing Copilot) en üst sıralarda görünmek.

## 🚀 Teknoloji Stack

- **Framework:** Next.js 14+ (App Router)
- **Dil:** TypeScript (strict mode)
- **Stil:** Tailwind CSS
- **SEO:** Next.js Metadata API + JSON-LD Schema
- **Rendering:** Edge SSR + ISR
- **Font:** Google Fonts (Inter)

## 📦 Kurulum

### 1. Bağımlılıkları Yükle

```bash
npm install
# veya
yarn install
# veya
pnpm install
```

### 2. Ortam Değişkenlerini Ayarla

`.env.local` dosyasını oluşturun (`.env.example` dosyasını kopyalayın):

```bash
cp .env.example .env.local
```

`.env.local` içeriğini düzenleyin:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_MAPS_KEY=your_google_maps_api_key
NEXT_PUBLIC_UMAMI_ID=your_umami_id
NEXT_PUBLIC_PHONE_OFFICE=05325517177
NEXT_PUBLIC_PHONE_CUSTOMER=05078824840
```

### 3. Geliştirme Sunucusunu Başlat

```bash
npm run dev
```

Tarayıcınızda `http://localhost:3000` adresini açın.

## 🏗️ Proje Yapısı

```
gemlik-emlak/
├── app/
│   ├── (public)/          # Public route grubu
│   │   ├── page.tsx       # Ana sayfa
│   │   ├── gemlik-satilik-daire/
│   │   ├── gemlik-emlak/
│   │   ├── mahalle/[slug]/  # Dinamik mahalle sayfaları
│   │   ├── ilan/[id]/       # Dinamik ilan detay sayfaları
│   │   ├── blog/
│   │   │   └── [slug]/
│   │   ├── sss/
│   │   ├── iletisim/
│   │   ├── kvkk/
│   │   ├── aydinlatma/
│   │   └── kunye/
│   ├── api/               # API route'ları
│   │   ├── listings/
│   │   ├── mahalle/
│   │   └── faq/
│   ├── layout.tsx         # Root layout
│   ├── sitemap.ts         # Dinamik sitemap
│   ├── robots.ts          # robots.txt
│   └── not-found.tsx      # 404 sayfası
├── components/            # React bileşenleri
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Breadcrumb.tsx
│   ├── FAQ.tsx
│   ├── TLDR.tsx           # GEO için kısa yanıt kutusu
│   ├── ListingCard.tsx
│   ├── ListingGrid.tsx
│   ├── NeighborhoodCard.tsx
│   ├── ContactBlock.tsx
│   ├── LeadForm.tsx
│   ├── Map.tsx
│   ├── StatsStrip.tsx
│   └── TrustBadges.tsx
├── lib/                   # Utility fonksiyonlar
│   ├── seo.ts            # SEO helpers
│   ├── jsonld.ts         # JSON-LD schema helpers
│   ├── types.ts          # TypeScript tipleri
│   ├── format.ts         # Format helpers
│   └── data.ts           # Mock data (5 ilan, 3 mahalle, 18 SSS)
├── public/
│   └── images/
│       ├── listings/
│       │   └── placeholder.svg
│       └── og-default.png
└── styles/
    └── globals.css
```

## 📝 İçerik Girme Rehberi

### İlan Verisi Eklemek

İlan verisi `lib/data.ts` dosyasında tanımlanmıştır. Yeni ilan eklemek için:

```typescript
const newListing: Listing = {
  id: "unique-id",
  title: "Gemlik Kurşunlu'da Deniz Manzaralı 3+1",
  slug: "gemlik-kursunlu-deniz-manzarali-3-1",
  priceTRY: 2500000,
  areaM2: 120,
  rooms: "3+1",
  floor: "3/5",
  heating: "Kombi",
  buildingAge: 5,
  address: {
    district: "Gemlik",
    neighborhood: "Kurşunlu",
    street: "Atatürk Caddesi"
  },
  geo: {
    lat: 40.4319,
    lng: 29.1555
  },
  images: ["/images/listings/1.jpg"],
  publishedAt: "2025-01-15T10:00:00+03:00",
  description: "300-600 kelime, varlık zengini açıklama...",
  features: ["Asansör", "Otopark", "Balkon"]
};
```

### Mahalle Sayfası Eklemek

Mahalle verisi `lib/data.ts` içinde:

```typescript
const newNeighborhood: Neighborhood = {
  slug: "kursunlu",
  name: "Kurşunlu",
  title: "Kurşunlu Satılık Daire",
  description: "Kurşunlu bölgesi hakkında kapsamlı bilgi",
  overview: "Kurşunlu, Gemlik'in en gelişmiş mahallelerinden...",
  priceRange: { min: 1500000, max: 3500000 },
  features: ["Denize yakın", "Merkezi konum"],
  transportation: ["Belediye otobüsü", "Minibüs"],
  schools: ["İlkokul", "Lise"],
  hospitals: ["Devlet Hastanesi"],
  marketplaces: ["Migros", "Carrefour"],
  distanceToSea: "~500m",
  population: 8000
};
```

## 🎨 SEO/GEO Yazım Rehberi

### Her Sayfada Olması Gerekenler

1. **TL;DR (Kısa Yanıt) Kutusu** - Sayfa başında 2-3 cümle
2. **H1-H3 Hiyerarşisi** - Odak kelimeyi içeren başlıklar
3. **SSS Bölümü** - En az 6 soru-cevap
4. **JSON-LD Schema** - Sayfa tipine uygun schema

### Odak Kelime Kullanımı

- **Ana Sayfa:** "Gemlik satılık daire"
- **Mahalle Sayfaları:** "Kurşunlu satılık daire", "Umurbey satılık daire"
- **Hizmet Sayfası:** "Gemlik emlak"

### Meta Bilgiler

```typescript
export const metadata = createMetadata({
  title: "Gemlik Satılık Daire",
  description: "150-160 karakter, odak kelime başta",
  path: "/gemlik-satilik-daire",
  keywords: ["gemlik satılık daire", "gemlik emlak"]
});
```

## 🔍 SEO Kontrol Listesi

- [ ] Meta başlık 60 karakterden kısa
- [ ] Meta açıklama 150-160 karakter
- [ ] H1 her sayfada bir tane
- [ ] Canonical URL doğru
- [ ] OG etiketleri tam
- [ ] JSON-LD schema ekli
- [ ] Alt text'ler dolu
- [ ] İç linkler mevcut
- [ ] Mobil uyumlu
- [ ] Core Web Vitals > 90

## 📱 İletişim Bilgileri

- **Ofis:** 0532 551 71 77
- **Müşteri:** 0507 882 48 40
- **WhatsApp:** Her iki numara için otomatik link

## 🧪 Test

```bash
# Type check
npm run type-check

# Lint
npm run lint

# Format
npm run format

# Unit tests (gelecekte)
npm test

# E2E tests (gelecekte)
npm run test:e2e
```

## 🚀 Production Build

```bash
npm run build
npm start
```

## 📊 Performans Hedefleri

- **Lighthouse PWA:** ≥ 90
- **SEO Score:** ≥ 100
- **Performance:** ≥ 90
- **Accessibility:** ≥ 95
- **First Load:** < 2.5s (3G)

## 📈 Sonraki Adımlar

Proje **TAM** olarak tamamlanmıştır! 🎉

### ✅ Tamamlanan Özellikler

**Sayfalar (15 sayfa):**
- ✅ Ana sayfa (/)
- ✅ /gemlik-satilik-daire (Pillar)
- ✅ /gemlik-emlak (Hizmetler)
- ✅ /mahalle/[slug] (3 örnek: Kurşunlu, Umurbey, Cumhuriyet)
- ✅ /ilan/[id] (5 örnek ilan)
- ✅ /blog
- ✅ /blog/[slug] (1 tam örnek yazı)
- ✅ /sss
- ✅ /iletisim
- ✅ /kvkk
- ✅ /aydinlatma
- ✅ /kunye
- ✅ 404 sayfası

**Bileşenler (13 bileşen):**
- ✅ Header, Footer
- ✅ Breadcrumb (BreadcrumbList schema)
- ✅ FAQ (FAQPage schema, accordion)
- ✅ TLDR (GEO için kısa yanıt kutusu)
- ✅ ListingCard, ListingGrid
- ✅ NeighborhoodCard
- ✅ ContactBlock (WhatsApp + Telefon)
- ✅ LeadForm (KVKK uyumlu)
- ✅ Map (OpenStreetMap entegrasyonu)
- ✅ StatsStrip (Trust signals)
- ✅ TrustBadges (E-E-A-T)

**SEO & GEO:**
- ✅ 8 farklı JSON-LD Schema tipi
- ✅ Her sayfada TL;DR kutusu (GEO)
- ✅ 18 SSS (FAQPage schema)
- ✅ Dinamik sitemap.xml
- ✅ robots.txt
- ✅ Meta tags optimize
- ✅ Open Graph
- ✅ Canonical URL'ler
- ✅ Breadcrumb navigation
- ✅ Internal linking stratejisi

**Veri:**
- ✅ 5 detaylı ilan (300-600 kelime açıklama)
- ✅ 3 mahalle profili (10+ özellik her biri)
- ✅ 18 SSS (genel + mahalle spesifik)
- ✅ 1 blog yazısı tam içerik

### 🚀 Production Öncesi Yapılacaklar

1. **API Keys:**
   - Google Maps API key ekle (.env.local)
   - Analytics ekle (Umami/GA4)

2. **Görsel İçerik:**
   - Gerçek ilan fotoğrafları ekle
   - Mahalle görselleri ekle
   - OG image'leri özelleştir

3. **İçerik:**
   - Daha fazla ilan ekle (lib/data.ts)
   - Blog yazıları ekle
   - SSS genişlet

4. **Deploy:**
   - Vercel/Netlify'a deploy et
   - Domain bağla
   - SSL sertifikası
   - Sitemap'i Google Search Console'a ekle

### 🎯 SEO Performans Hedefleri

- **Lighthouse SEO:** ≥ 100
- **Performance:** ≥ 90
- **Accessibility:** ≥ 95
- **PWA:** ≥ 90
- **First Load:** < 2.5s (3G)

## 🔥 Öne Çıkan SEO/GEO Özellikleri

### 1. GEO (Generative Engine Optimization)
- **TL;DR Kutuları:** Her sayfada 2-4 madde net bilgi
- **Varlık Zengini İçerik:** Mahalle adları, fiyat aralıkları, mesafeler
- **Sayısal Veriler:** m², fiyat, nüfus, mesafe vb.
- **Soru-Cevap Formatı:** 18 SSS, accordion yapısı
- **Yapılandırılmış Tablolar:** İlan detay, mahalle karşılaştırma

### 2. SEO (Search Engine Optimization)
- **8 JSON-LD Schema:**
  - WebSite + SearchAction
  - RealEstateAgent (Organization)
  - RealEstateListing
  - BreadcrumbList
  - FAQPage
  - CollectionPage
  - LocalBusiness
- **Meta Optimizasyonu:**
  - Title: 50-60 karakter
  - Description: 150-160 karakter
  - Keywords: Uzun kuyruklu
- **Internal Linking:** Stratejik iç bağlantılar
- **Canonical URLs:** Duplicate content yok
- **Sitemap:** Dinamik, otomatik güncellenen

### 3. E-E-A-T Sinyalleri
- **Experience:** Rasim Kılıç - 15 yıl deneyim
- **Expertise:** Detaylı mahalle profilleri, fiyat analizleri
- **Authoritativeness:** Kapsamlı içerik, kaynaklar
- **Trustworthiness:** İletişim bilgileri, KVKK, yasal sayfalar

## 📋 Admin Panel Hakkında

❌ **Admin paneli bu projede YOK.**

Şu anki sistem **statik veri** (lib/data.ts) kullanıyor. 

Eğer admin panel istiyorsanız, ek bir proje olarak:
- Sanity.io / Contentful (Headless CMS)
- Payload CMS (self-hosted)
- Custom admin panel (Next.js API Routes + Database)

şeklinde eklenebilir. Ancak bu mevcut proje kapsamı dışındadır.

**Veri Ekleme:**
Şu an için yeni ilan/mahalle eklemek için `lib/data.ts` dosyasını düzenleyin.

## 📄 Lisans

© 2025 Rasim Kılıç - Acilden Emlak. Tüm hakları saklıdır.
