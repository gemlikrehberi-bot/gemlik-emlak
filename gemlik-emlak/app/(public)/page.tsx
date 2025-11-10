import Link from 'next/link';
import { Search, MapPin, TrendingUp, Award } from 'lucide-react';
import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import { getAllListings, getAllNeighborhoods, mockGeneralFAQs } from '@/lib/data';
import TLDR from '@/components/TLDR';
import ListingGrid from '@/components/ListingGrid';
import NeighborhoodCard from '@/components/NeighborhoodCard';
import FAQ from '@/components/FAQ';
import StatsStrip from '@/components/StatsStrip';
import TrustBadges from '@/components/TrustBadges';
import ContactBlock from '@/components/ContactBlock';
import ComparisonTable from '@/components/ComparisonTable';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import { createFAQSchema } from '@/lib/jsonld';

export const metadata: Metadata = createMetadata({
  title: 'Gemlik Satılık Daire - Güvenilir Emlak İlanları',
  description:
    'Gemlik satılık daire ve emlak ilanları. Kurşunlu, Kumla, Umurbey bölgelerinde deniz manzaralı ve merkezi konumda satılık ev seçenekleri. 2025 güncel fiyatlar.',
  path: '/',
  keywords: [
    'gemlik satılık daire',
    'gemlik emlak',
    'gemlik satılık ev',
    'kurşunlu satılık daire',
    'kumla satılık daire',
    'umurbey satılık daire',
    'gemlik deniz manzaralı daire',
    'gemlik merkez satılık daire',
  ],
});

export default function HomePage() {
  const listings = getAllListings().slice(0, 6);
  const neighborhoods = getAllNeighborhoods();
  const faqs = mockGeneralFAQs.slice(0, 6);

  const peopleAlsoAskQuestions = [
    {
      question: "Gemlik'te ev almak için en iyi zaman ne?",
      answer: "Genellikle kış ayları (Aralık-Şubat) daha uygun fiyatlar sunabilir. Ancak yaz öncesi (Nisan-Mayıs) yeni projeler piyasaya çıkar."
    },
    {
      question: "Gemlik'te hangi mahalle yatırım için iyi?",
      answer: "Kurşunlu ve Kumla değer artış potansiyeli yüksek bölgelerdir. Umurbey bütçe dostu yatırım için idealdir."
    },
    {
      question: "Gemlik satılık daire fiyatları düşecek mi 2025'te?",
      answer: "2025'te Gemlik'te ciddi bir düşüş beklenmemektedir. Ancak mahalle bazlı fiyat farklılıkları olabilir."
    },
  ];

  const faqSchema = createFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 text-white py-20 overflow-hidden">
        {/* Dekoratif şekiller */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Gemlik&apos;te Hayalinizdeki <br />
              <span className="text-yellow-300">Satılık Daire</span> Sizi Bekliyor
            </h1>
            <p className="text-xl md:text-2xl text-primary-50 mb-8">
              Kurşunlu, Kumla, Umurbey&apos;de deniz manzaralı ve merkezi konumda
              satılık ev seçenekleri. Güvenilir emlak danışmanlığı ile size özel
              çözümler.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/gemlik-satilik-daire" className="btn-primary text-lg bg-white text-primary-700 hover:bg-gray-100">
                <Search className="w-5 h-5 mr-2" />
                Tüm İlanları Görüntüle
              </Link>
              <Link href="/iletisim" className="btn-secondary text-lg border-white text-white hover:bg-white/10">
                Hemen İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TL;DR - GEO Optimization */}
      <section className="container-custom py-12">
        <TLDR
          title="Gemlik Satılık Daire Hakkında Kısa Bilgi"
          points={[
            'Gemlik satılık daire fiyatları 2025 yılında 980.000 TL ile 5.000.000 TL arasında değişmektedir.',
            'En uygun fiyatlar Umurbey mahallesinde, deniz manzaralı daireler Kurşunlu ve Kumla bölgelerinde bulunmaktadır.',
            'Gemlik merkeze yakın konumlar, toplu taşıma imkanı, okullar ve hastanelere erişim kolaydır.',
            'Tapu devir işlemleri aynı gün tamamlanabilir, konut kredisi tüm ilanlar için kullanılabilir.',
          ]}
          highlight="Rasim Kılıç olarak 15 yıllık deneyimimizle size en uygun satılık daireyi bulmanıza yardımcı oluyoruz."
        />
      </section>

      {/* Stats Strip */}
      <StatsStrip />

      {/* Öne Çıkan İlanlar */}
      <section className="container-custom py-16">
        <div className="text-center mb-12">
          <h2 className="section-title">Öne Çıkan Satılık Daireler</h2>
          <p className="section-subtitle">
            Gemlik&apos;te en popüler ve güncel satılık daire ilanları
          </p>
        </div>
        <ListingGrid listings={listings} />
        <div className="text-center mt-8">
          <Link href="/gemlik-satilik-daire" className="btn-primary">
            <TrendingUp className="w-5 h-5 mr-2" />
            Tüm İlanları İncele
          </Link>
        </div>
      </section>

      {/* Mahalle Karşılaştırma Tablosu - GEO */}
      <ComparisonTable />

      {/* Mahalle Kartları */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Gemlik&apos;te Satılık Daire Bölgeleri</h2>
            <p className="section-subtitle">
              İhtiyacınıza uygun mahallede satılık ev seçeneklerini keşfedin
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {neighborhoods.map((neighborhood) => (
              <NeighborhoodCard
                key={neighborhood.slug}
                neighborhood={neighborhood}
                listingCount={
                  listings.filter(
                    (l) => l.address.neighborhood === neighborhood.name
                  ).length
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* People Also Ask - GEO */}
      <section className="container-custom py-16">
        <PeopleAlsoAsk questions={peopleAlsoAskQuestions} />
      </section>

      {/* Neden Gemlik? */}
      <section className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center">Neden Gemlik&apos;te Ev Almak?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Stratejik Konum</h3>
              </div>
              <p className="text-gray-600">
                İstanbul&apos;a 1,5 saat, Bursa&apos;ya 35 dakika mesafede. Yalova feribot
                iskelesine yakın konumu sayesinde ulaşım son derece kolay.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Yaşam Kalitesi</h3>
              </div>
              <p className="text-gray-600">
                Deniz kenarı yaşamı, temiz hava, sosyal donatı alanları ve güvenli
                sokaklar ile huzurlu bir yaşam sunar.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Yatırım Değeri</h3>
              </div>
              <p className="text-gray-600">
                Gelişen altyapı, artan nüfus ve turizm potansiyeli ile emlak
                değerleri her geçen gün artmaktadır.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Geniş Seçenekler</h3>
              </div>
              <p className="text-gray-600">
                Stüdyo daireden villaya, deniz manzaralıdan merkez konumdakilere kadar
                geniş bir ilan portföyü.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* FAQ */}
      <section className="container-custom py-16">
        <FAQ faqs={faqs} title="Gemlik Satılık Daire Hakkında Sıkça Sorulan Sorular" />
      </section>

      {/* CTA */}
      <section className="container-custom py-16">
        <ContactBlock
          title="Size Özel Satılık Daire Bulmamızı İster misiniz?"
          subtitle="Bütçenize, ihtiyaçlarınıza ve beklentilerinize uygun seçenekleri sizin için bulalım."
        />
      </section>
    </>
  );
}
