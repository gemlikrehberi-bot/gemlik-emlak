import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import dynamicImport from 'next/dynamic';
import { createMetadata } from '@/lib/seo';
import { getAllListings, getListingById } from '@/lib/data';
import { createListingSchema, createBreadcrumbSchema } from '@/lib/jsonld';
import Breadcrumb from '@/components/Breadcrumb';
import TLDR from '@/components/TLDR';
import ContactBlock from '@/components/ContactBlock';
import LeadForm from '@/components/LeadForm';
import {
  Home,
  Maximize,
  Calendar,
  MapPin,
  Thermometer,
  Building,
  Share2,
  Phone,
  MessageCircle,
} from 'lucide-react';
import {
  formatPrice,
  formatArea,
  formatDate,
  getWhatsAppLink,
} from '@/lib/format';

const Map = dynamicImport(() => import('@/components/Map'), { ssr: false });

const PHONE_OFFICE = process.env.NEXT_PUBLIC_PHONE_OFFICE || '05325517177';

export const revalidate = 3600; // 1 saat

export function generateStaticParams() {
  return getAllListings().map((listing) => ({
    id: `${listing.id}-${listing.slug}`,
  }));
}

interface ListingPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: ListingPageProps): Promise<Metadata> {
  const listingId = params.id.split('-')[0];
  const listing = getListingById(listingId);

  if (!listing) {
    return {
      title: 'İlan Bulunamadı',
    };
  }

  return createMetadata({
    title: listing.title,
    description: listing.description.substring(0, 160),
    path: `/ilan/${params.id}`,
    keywords: [
      `${listing.address.neighborhood} satılık daire`,
      `gemlik ${listing.rooms}`,
      `${listing.address.neighborhood} ${listing.rooms}`,
      'gemlik satılık ev',
    ],
    ogImage: listing.images[0],
  });
}

export default function ListingPage({ params }: ListingPageProps) {
  const listingId = params.id.split('-')[0];
  const listing = getListingById(listingId);

  if (!listing) {
    notFound();
  }

  const listingSchema = createListingSchema(listing, `/ilan/${params.id}`);
  const whatsappMessage = `Merhaba, "${listing.title}" ilanı hakkında bilgi almak istiyorum.`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(listingSchema),
        }}
      />

      <Breadcrumb
        items={[
          { name: 'Gemlik Satılık Daire', url: '/gemlik-satilik-daire' },
          {
            name: listing.address.neighborhood,
            url: `/mahalle/${listing.address.neighborhood.toLowerCase()}`,
          },
          { name: listing.title, url: `/ilan/${params.id}` },
        ]}
      />

      <div className="container-custom py-8">
        {/* TL;DR - GEO Optimization */}
        <TLDR
          title="İlan Özeti"
          points={[
            `Fiyat: ${formatPrice(listing.priceTRY)} - ${formatArea(listing.areaM2)} - ${listing.rooms} daire`,
            `Konum: ${listing.address.neighborhood}, Gemlik - ${listing.floor} kat`,
            `Bina yaşı: ${listing.buildingAge} yıl - Isıtma: ${listing.heating}`,
            `İlan tarihi: ${formatDate(listing.publishedAt)} - Tapu: Net, işleme hazır`,
          ]}
          highlight="Görüşme ve detaylı bilgi için WhatsApp veya telefon ile hemen ulaşın."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sol Kolon - İlan Detayları */}
          <div className="lg:col-span-2 space-y-8">
            {/* Başlık ve Fiyat */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {listing.title}
              </h1>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="text-3xl font-bold text-primary-700">
                  {formatPrice(listing.priceTRY)}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: listing.title,
                          text: `${listing.title} - ${formatPrice(listing.priceTRY)}`,
                          url: window.location.href,
                        });
                      }
                    }}
                    className="btn-secondary py-2 px-4 text-sm"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Paylaş
                  </button>
                </div>
              </div>
            </div>

            {/* Görsel Galeri */}
            <div className="space-y-4">
              {listing.images.map((image, index) => (
                <div
                  key={index}
                  className="relative w-full h-96 bg-gray-200 rounded-xl overflow-hidden"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Home className="w-24 h-24 text-gray-400" />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                    Fotoğraf {index + 1}/{listing.images.length}
                  </div>
                </div>
              ))}
            </div>

            {/* Temel Bilgiler Tablosu */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-primary-600 text-white px-6 py-4">
                <h2 className="text-xl font-bold">Temel Bilgiler</h2>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="grid grid-cols-2 p-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Maximize className="w-5 h-5 text-primary-600" />
                    <span className="font-semibold">Alan</span>
                  </div>
                  <div className="text-gray-900 font-semibold">
                    {formatArea(listing.areaM2)}
                  </div>
                </div>
                <div className="grid grid-cols-2 p-4 bg-gray-50">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Home className="w-5 h-5 text-primary-600" />
                    <span className="font-semibold">Oda Sayısı</span>
                  </div>
                  <div className="text-gray-900 font-semibold">
                    {listing.rooms}
                  </div>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Building className="w-5 h-5 text-primary-600" />
                    <span className="font-semibold">Kat</span>
                  </div>
                  <div className="text-gray-900 font-semibold">
                    {listing.floor}
                  </div>
                </div>
                <div className="grid grid-cols-2 p-4 bg-gray-50">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Thermometer className="w-5 h-5 text-primary-600" />
                    <span className="font-semibold">Isıtma</span>
                  </div>
                  <div className="text-gray-900 font-semibold">
                    {listing.heating}
                  </div>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-5 h-5 text-primary-600" />
                    <span className="font-semibold">Bina Yaşı</span>
                  </div>
                  <div className="text-gray-900 font-semibold">
                    {listing.buildingAge} yıl
                  </div>
                </div>
                <div className="grid grid-cols-2 p-4 bg-gray-50">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    <span className="font-semibold">Mahalle</span>
                  </div>
                  <div className="text-gray-900 font-semibold">
                    {listing.address.neighborhood}, {listing.address.district}
                  </div>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-5 h-5 text-primary-600" />
                    <span className="font-semibold">İlan Tarihi</span>
                  </div>
                  <div className="text-gray-900 font-semibold">
                    {formatDate(listing.publishedAt)}
                  </div>
                </div>
              </div>
            </div>

            {/* Açıklama */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                İlan Açıklaması
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {listing.description}
                </p>
              </div>
            </div>

            {/* Özellikler */}
            {listing.features.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Özellikler
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {listing.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Harita */}
            {listing.geo && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Konum
                </h2>
                <Map
                  lat={listing.geo.lat}
                  lng={listing.geo.lng}
                  title={listing.address.neighborhood}
                />
                <p className="text-sm text-gray-600 mt-4">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  {listing.address.neighborhood}, {listing.address.district}
                  {listing.address.street && `, ${listing.address.street}`}
                </p>
              </div>
            )}
          </div>

          {/* Sağ Kolon - İletişim ve Form */}
          <div className="lg:col-span-1 space-y-6">
            {/* Hızlı İletişim */}
            <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl p-6 text-white sticky top-24">
              <h3 className="text-xl font-bold mb-4">Hemen İletişime Geçin</h3>
              <div className="space-y-3">
                <a
                  href={getWhatsAppLink(PHONE_OFFICE, whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center"
                >
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  WhatsApp ile Mesaj
                </a>
                <a
                  href={`tel:${PHONE_OFFICE}`}
                  className="block bg-white hover:bg-gray-100 text-primary-700 font-semibold py-3 px-4 rounded-lg transition-colors text-center"
                >
                  <Phone className="w-5 h-5 inline mr-2" />
                  Hemen Ara
                </a>
              </div>
              <p className="text-sm text-primary-100 mt-4 text-center">
                Pazartesi - Cumartesi: 09:00 - 19:00
              </p>
            </div>

            {/* Lead Form */}
            <LeadForm listingId={listing.id} listingTitle={listing.title} />
          </div>
        </div>

        {/* Alt CTA */}
        <div className="mt-12">
          <ContactBlock
            title="Bu İlan Hakkında Daha Fazla Bilgi Alın"
            subtitle="Sorularınızı cevaplayalım, size en uygun ödeme planını bulalım."
            listingTitle={listing.title}
          />
        </div>
      </div>
    </>
  );
}
