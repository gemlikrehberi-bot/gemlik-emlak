import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import { getAllListings, mockGeneralFAQs } from '@/lib/data';
import { createCollectionPageSchema, createFAQSchema } from '@/lib/jsonld';
import Breadcrumb from '@/components/Breadcrumb';
import TLDR from '@/components/TLDR';
import ListingGrid from '@/components/ListingGrid';
import FAQ from '@/components/FAQ';
import ContactBlock from '@/components/ContactBlock';
import { TrendingUp, MapPin, Home } from 'lucide-react';

export const metadata: Metadata = createMetadata({
  title: 'Gemlik Satılık Daire İlanları - 2025 Güncel Fiyatlar',
  description:
    'Gemlik satılık daire ilanları. Kurşunlu, Umurbey, Kumla mahallelerinde 1+1, 2+1, 3+1, 4+1 daireler. Deniz manzaralı ve merkezi konumda uygun fiyatlarla satılık ev seçenekleri.',
  path: '/gemlik-satilik-daire',
  keywords: [
    'gemlik satılık daire',
    'gemlik satılık ev',
    'gemlik emlak ilanları',
    'gemlik 2+1 satılık',
    'gemlik 3+1 satılık',
    'gemlik deniz manzaralı daire',
  ],
});

export default function GemlikSatilikDairePage() {
  const listings = getAllListings();
  const faqs = mockGeneralFAQs;

  const collectionSchema = createCollectionPageSchema(
    'Gemlik Satılık Daire İlanları',
    'Gemlik bölgesinde satılık daire ve ev ilanları',
    '/gemlik-satilik-daire'
  );

  const faqSchema = createFAQSchema(faqs);

  return (
    <>
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
        ]}
      />

      <div className="container-custom py-12">
        {/* TL;DR - GEO Optimization */}
        <TLDR
          title="Gemlik Satılık Daire Hakkında Bilmeniz Gerekenler"
          points={[
            'Gemlik satılık daire fiyatları 2025 yılında 980.000 TL ile 5.000.000 TL arasında değişir. Fiyatlar mahalle, metrekare, bina yaşı ve deniz manzarasına göre belirlenir.',
            'En uygun satılık daireler Umurbey mahallesinde (980.000-2.500.000 TL), en prestijli konutlar ise Cumhuriyet mahallesinde (2.200.000-5.000.000 TL) bulunur.',
            'Kurşunlu ve Kumla deniz manzaralı daire arayanlar için ideal bölgelerdir. Deniz manzaralı daireler %20-30 daha yüksek fiyatlanır.',
            'Tapu devir işlemleri Gemlik Tapu Müdürlüğü\'nde aynı gün tamamlanabilir. Konut kredisi tüm bankalardan kullanılabilir.',
          ]}
          highlight="Acilden Emlak olarak 250+ aktif ilan ve 15 yıllık deneyimimizle size en uygun satılık daireyi bulmak için buradayız."
        />

        {/* Başlık ve Açıklama */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Gemlik Satılık Daire İlanları
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Gemlik, Bursa ilinin Marmara Denizi kıyısında yer alan, stratejik
            konumu ve yaşam kalitesi ile öne çıkan bir ilçedir. İstanbul&apos;a 1,5
            saat, Bursa&apos;ya 35 dakika mesafede olan Gemlik, hem yazlık hem de
            kalıcı yaşam için tercih edilen bir yerleşim yeridir.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Gemlik satılık daire arayanlar için Kurşunlu, Umurbey, Kumla ve
            Cumhuriyet mahalleleri en popüler bölgelerdir. Kurşunlu deniz
            manzaralı daireleri, Umurbey merkezi konumu ve uygun fiyatları,
            Kumla sahile sıfır yazlık seçenekleri, Cumhuriyet ise lüks konut
            projeleri ile dikkat çeker.
          </p>
        </div>

        {/* İstatistikler */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 border border-primary-200">
            <div className="flex items-center gap-3 mb-3">
              <Home className="w-8 h-8 text-primary-600" />
              <h3 className="text-xl font-bold text-gray-900">
                {listings.length} Aktif İlan
              </h3>
            </div>
            <p className="text-gray-700">
              Güncel ve doğrulanmış satılık daire ilanları
            </p>
          </div>

          <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl p-6 border border-secondary-200">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-8 h-8 text-secondary-600" />
              <h3 className="text-xl font-bold text-gray-900">
                15+ Mahalle
              </h3>
            </div>
            <p className="text-gray-700">
              Gemlik&apos;in tüm popüler bölgelerinde seçenekler
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-secondary-100 rounded-xl p-6 border border-primary-200">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-8 h-8 text-primary-600" />
              <h3 className="text-xl font-bold text-gray-900">
                980K - 5M TL
              </h3>
            </div>
            <p className="text-gray-700">
              Her bütçeye uygun fiyat aralığı
            </p>
          </div>
        </div>

        {/* İlanlar */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Tüm Satılık Daire İlanları
          </h2>
          <ListingGrid listings={listings} />
        </div>

        {/* Mahalle Bazlı Fiyat Bilgisi */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Gemlik Mahallelerine Göre Satılık Daire Fiyatları
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
              <div className="w-32 flex-shrink-0">
                <span className="font-semibold text-primary-700">Umurbey</span>
              </div>
              <div className="flex-1">
                <p className="text-gray-700">
                  980.000 - 2.500.000 TL arası. Merkezi konum, uygun fiyatlar.
                  2+1 ve 3+1 daireler yoğun.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
              <div className="w-32 flex-shrink-0">
                <span className="font-semibold text-primary-700">Kurşunlu</span>
              </div>
              <div className="flex-1">
                <p className="text-gray-700">
                  1.250.000 - 3.500.000 TL arası. Deniz manzaralı daireler,
                  modern siteler. 3+1 ve 4+1 seçenekler.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
              <div className="w-32 flex-shrink-0">
                <span className="font-semibold text-primary-700">Kumla</span>
              </div>
              <div className="flex-1">
                <p className="text-gray-700">
                  1.800.000 - 3.000.000 TL arası. Sahile sıfır, yazlık uygun.
                  2+1 daireler popüler.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-32 flex-shrink-0">
                <span className="font-semibold text-primary-700">Cumhuriyet</span>
              </div>
              <div className="flex-1">
                <p className="text-gray-700">
                  2.200.000 - 5.000.000 TL arası. Lüks konutlar, dubleks
                  seçenekler. Prestij bölgesi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <FAQ faqs={faqs} />

        {/* CTA */}
        <div className="mt-12">
          <ContactBlock
            title="Aradığınız Satılık Daireyi Bulmanıza Yardımcı Olalım"
            subtitle="Bütçenize ve ihtiyaçlarınıza en uygun seçenekleri sizin için araştırıp sunuyoruz."
          />
        </div>
      </div>
    </>
  );
}
