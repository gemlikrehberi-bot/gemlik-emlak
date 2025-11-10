import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createMetadata } from '@/lib/seo';
import {
  getNeighborhoodBySlug,
  getListingsByNeighborhood,
  getAllNeighborhoods,
} from '@/lib/data';
import {
  createLocalBusinessSchema,
  createCollectionPageSchema,
  createFAQSchema,
} from '@/lib/jsonld';
import Breadcrumb from '@/components/Breadcrumb';
import TLDR from '@/components/TLDR';
import ListingGrid from '@/components/ListingGrid';
import FAQ from '@/components/FAQ';
import ContactBlock from '@/components/ContactBlock';
import { MapPin, School, Hospital, ShoppingCart, Bus, TrendingUp } from 'lucide-react';
import { formatPrice } from '@/lib/format';

interface NeighborhoodPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const neighborhoods = getAllNeighborhoods();
  return neighborhoods.map((n) => ({
    slug: n.slug,
  }));
}

export async function generateMetadata({
  params,
}: NeighborhoodPageProps): Promise<Metadata> {
  const neighborhood = getNeighborhoodBySlug(params.slug);

  if (!neighborhood) {
    return {
      title: 'Mahalle Bulunamadı',
    };
  }

  return createMetadata({
    title: neighborhood.title,
    description: neighborhood.description,
    path: `/mahalle/${params.slug}`,
    keywords: [
      `${neighborhood.name} satılık daire`,
      `${neighborhood.name} emlak`,
      `gemlik ${neighborhood.name}`,
      `${neighborhood.name} satılık ev`,
      `${neighborhood.name} konut fiyatları`,
    ],
  });
}

export default function NeighborhoodPage({ params }: NeighborhoodPageProps) {
  const neighborhood = getNeighborhoodBySlug(params.slug);

  if (!neighborhood) {
    notFound();
  }

  const listings = getListingsByNeighborhood(neighborhood.name);

  // Mahalle SSS
  const neighborhoodFAQs = [
    {
      question: `${neighborhood.name} mahallesinde satılık daire fiyatları ne kadar?`,
      answer: `${neighborhood.name} mahallesinde satılık daire fiyatları ${formatPrice(neighborhood.priceRange.min)} ile ${formatPrice(neighborhood.priceRange.max)} arasında değişmektedir. Fiyatlar metrekare, oda sayısı, bina yaşı ve denize uzaklık gibi faktörlere göre farklılık gösterir.`,
    },
    {
      question: `${neighborhood.name} mahallesinde denize ne kadar yakın?`,
      answer: neighborhood.distanceToSea
        ? `${neighborhood.name} mahallesi denize ortalama ${neighborhood.distanceToSea} mesafededir. ${neighborhood.features.includes('Denize sıfır konum') ? 'Bazı binalar sahile sıfır konumdadır.' : 'Yürüme mesafesinde deniz kenarına ulaşılabilir.'}`
        : `${neighborhood.name} mahallesi denize yürüme mesafesindedir. Detaylı bilgi için bizimle iletişime geçebilirsiniz.`,
    },
    {
      question: `${neighborhood.name} mahallesinde toplu taşıma imkanları nasıl?`,
      answer: `${neighborhood.name} mahallesinde ${neighborhood.transportation.join(', ')} toplu taşıma seçenekleri mevcuttur. Ulaşım son derece kolaydır.`,
    },
    {
      question: `${neighborhood.name} mahallesinde hangi okullar var?`,
      answer: `${neighborhood.name} mahallesinde ${neighborhood.schools.join(', ')} gibi eğitim kurumları bulunmaktadır.`,
    },
    {
      question: `${neighborhood.name} mahallesinde deprem riski nasıl?`,
      answer:
        neighborhood.seismicInfo ||
        `${neighborhood.name} mahallesi Gemlik genelinde orta-düşük deprem riski taşımaktadır. Yeni binalar güncel deprem yönetmeliğine uygun inşa edilmektedir.`,
    },
    {
      question: `${neighborhood.name} mahallesinde alışveriş imkanları neler?`,
      answer: `${neighborhood.name} mahallesinde ${neighborhood.marketplaces.join(', ')} gibi alışveriş noktaları bulunmaktadır. Günlük ihtiyaçlar için geniş seçenekler mevcuttur.`,
    },
  ];

  const localBusinessSchema = createLocalBusinessSchema(neighborhood.name);
  const collectionSchema = createCollectionPageSchema(
    `${neighborhood.name} Satılık Daire İlanları`,
    `Gemlik ${neighborhood.name} mahallesinde satılık daire ve ev ilanları`,
    `/mahalle/${params.slug}`
  );
  const faqSchema = createFAQSchema(neighborhoodFAQs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Breadcrumb
        items={[
          { name: 'Gemlik Satılık Daire', url: '/gemlik-satilik-daire' },
          { name: neighborhood.name, url: `/mahalle/${params.slug}` },
        ]}
      />

      <div className="container-custom py-12">
        {/* TL;DR - GEO Optimization */}
        <TLDR
          title={`${neighborhood.name} Satılık Daire - Kısa Bilgi`}
          points={[
            `${neighborhood.name} mahallesinde satılık daire fiyatları ${formatPrice(neighborhood.priceRange.min)} - ${formatPrice(neighborhood.priceRange.max)} arasındadır.`,
            `Denize uzaklık: ${neighborhood.distanceToSea || '~1-2 km'}. ${neighborhood.features[0]}.`,
            `Nüfus: ~${neighborhood.population?.toLocaleString('tr-TR') || '5.000-10.000'} kişi. ${neighborhood.features[1]}.`,
            `Ulaşım: ${neighborhood.transportation[0]}, ${neighborhood.transportation[1]}.`,
          ]}
          highlight={`${listings.length} aktif satılık daire ilanı mevcut. Detaylı bilgi için iletişime geçin.`}
        />

        {/* Başlık ve Genel Bilgi */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {neighborhood.name} Satılık Daire İlanları
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {neighborhood.overview}
          </p>
        </div>

        {/* Fiyat Bilgisi */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 mb-12 border border-primary-200">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-primary-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              {neighborhood.name} Satılık Daire Fiyat Aralığı
            </h2>
          </div>
          <div className="text-3xl font-bold text-primary-700 mb-2">
            {formatPrice(neighborhood.priceRange.min)} -{' '}
            {formatPrice(neighborhood.priceRange.max)}
          </div>
          <p className="text-gray-700">
            {neighborhood.name} mahallesinde metrekare başına ortalama fiyat ve
            oda sayılarına göre değişen geniş bir yelpaze sunulmaktadır.
          </p>
        </div>

        {/* Özellikler Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Ulaşım */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Bus className="w-6 h-6 text-primary-600" />
              <h3 className="text-xl font-bold text-gray-900">Ulaşım</h3>
            </div>
            <ul className="space-y-2">
              {neighborhood.transportation.map((transport, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>{transport}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Okullar */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <School className="w-6 h-6 text-primary-600" />
              <h3 className="text-xl font-bold text-gray-900">
                Eğitim Kurumları
              </h3>
            </div>
            <ul className="space-y-2">
              {neighborhood.schools.map((school, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>{school}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sağlık */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Hospital className="w-6 h-6 text-primary-600" />
              <h3 className="text-xl font-bold text-gray-900">
                Sağlık Hizmetleri
              </h3>
            </div>
            <ul className="space-y-2">
              {neighborhood.hospitals.map((hospital, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>{hospital}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Alışveriş */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <ShoppingCart className="w-6 h-6 text-primary-600" />
              <h3 className="text-xl font-bold text-gray-900">Alışveriş</h3>
            </div>
            <ul className="space-y-2">
              {neighborhood.marketplaces.map((marketplace, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>{marketplace}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bölge Özellikleri */}
        <div className="bg-white rounded-xl p-8 mb-12 shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {neighborhood.name} Mahallesi Özellikleri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {neighborhood.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* İlanlar */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {neighborhood.name} Satılık Daire İlanları ({listings.length})
          </h2>
          {listings.length > 0 ? (
            <ListingGrid listings={listings} />
          ) : (
            <div className="bg-gray-50 rounded-xl p-12 text-center">
              <p className="text-gray-600 text-lg mb-4">
                {neighborhood.name} mahallesinde şu anda aktif ilan bulunmamaktadır.
              </p>
              <p className="text-gray-500">
                Yeni ilanlardan haberdar olmak için bizimle iletişime geçin.
              </p>
            </div>
          )}
        </div>

        {/* Deprem ve Zemin Bilgisi */}
        {neighborhood.seismicInfo && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Deprem ve Zemin Bilgisi
            </h3>
            <p className="text-gray-700">{neighborhood.seismicInfo}</p>
          </div>
        )}

        {/* FAQ */}
        <FAQ
          faqs={neighborhoodFAQs}
          title={`${neighborhood.name} Satılık Daire Hakkında Sıkça Sorulan Sorular`}
        />

        {/* CTA */}
        <div className="mt-12">
          <ContactBlock
            title={`${neighborhood.name}'da Size Özel Satılık Daire Bulalım`}
            subtitle={`${neighborhood.name} mahallesinde ihtiyaçlarınıza uygun satılık daire seçeneklerini sizin için araştırıyoruz.`}
          />
        </div>
      </div>
    </>
  );
}
