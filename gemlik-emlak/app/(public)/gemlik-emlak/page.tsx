import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import { createCollectionPageSchema } from '@/lib/jsonld';
import Breadcrumb from '@/components/Breadcrumb';
import TLDR from '@/components/TLDR';
import ContactBlock from '@/components/ContactBlock';
import TrustBadges from '@/components/TrustBadges';
import {
  Home,
  FileSearch,
  Handshake,
  Calculator,
  Shield,
  TrendingUp,
} from 'lucide-react';

export const metadata: Metadata = createMetadata({
  title: 'Gemlik Emlak Danışmanlık Hizmetleri - Acilden Emlak',
  description:
    'Gemlik emlak danışmanlık hizmetleri. Satılık daire arama, fiyat değerlendirme, tapu işlemleri, konut kredisi danışmanlığı. 15 yıllık deneyim ile güvenilir emlak hizmeti.',
  path: '/gemlik-emlak',
  keywords: [
    'gemlik emlak',
    'gemlik emlak danışmanlığı',
    'gemlik emlak ofisi',
    'gemlik tapu işlemleri',
    'gemlik konut kredisi',
    'gemlik emlakçı',
  ],
});

export default function GemlikEmlakPage() {
  const collectionSchema = createCollectionPageSchema(
    'Gemlik Emlak Danışmanlık Hizmetleri',
    'Acilden Emlak - Gemlik bölgesinde profesyonel emlak danışmanlık hizmetleri',
    '/gemlik-emlak'
  );

  const services = [
    {
      icon: <FileSearch className="w-12 h-12" />,
      title: 'Emlak Araştırma ve Seçim',
      description:
        'Bütçenize, ihtiyaçlarınıza ve beklentilerinize uygun satılık daire seçeneklerini araştırıp sizin için en uygun seçimi yapmanızda yardımcı oluyoruz. Mahalle analizi, fiyat karşılaştırması ve konum değerlendirmesi ile doğru yatırım yapmanızı sağlıyoruz.',
    },
    {
      icon: <Calculator className="w-12 h-12" />,
      title: 'Fiyat Değerlendirme',
      description:
        'Piyasa araştırması ve emsal karşılaştırması ile satılık dairenizin gerçek değerini belirliyor, hem alıcı hem de satıcı için adil fiyat oluşturuyoruz. Gemlik bölgesindeki güncel fiyat trendlerini takip ederek doğru fiyatlandırma yapıyoruz.',
    },
    {
      icon: <Handshake className="w-12 h-12" />,
      title: 'Satış ve Pazarlama',
      description:
        'Satılık dairenizi geniş ilan ağımızda yayınlıyor, profesyonel fotoğraf çekimi, detaylı ilan metni ve etkili pazarlama stratejileri ile hızlı satış sağlıyoruz. Sosyal medya ve dijital pazarlama yöntemleri ile en geniş kitleye ulaşıyoruz.',
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Tapu ve Hukuki İşlemler',
      description:
        'Tapu devir işlemlerinde baştan sona yanınızdayız. İmar durumu kontrolü, tapuda şerh/ipotek sorgulaması, noter işlemleri ve tüm evrak takibi konusunda uzman desteği sunuyoruz. Güvenli alım-satım için gerekli tüm adımları birlikte atıyoruz.',
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Yatırım Danışmanlığı',
      description:
        'Gemlik bölgesindeki gelişim projeleri, altyapı yatırımları ve emlak piyasası trendlerini analiz ederek yatırım amaçlı alımlarda rehberlik ediyoruz. Kısa ve uzun vadeli yatırım stratejileri oluşturmanıza destek oluyoruz.',
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: 'Konut Kredisi Desteği',
      description:
        'Bankalarla olan işbirliğimiz sayesinde en uygun konut kredisi seçeneklerini bulmanıza yardımcı oluyoruz. Kredi başvuru sürecinde yanınızda oluyor, gerekli evrakların hazırlanmasında destek sağlıyoruz.',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />

      <Breadcrumb
        items={[{ name: 'Gemlik Emlak Hizmetleri', url: '/gemlik-emlak' }]}
      />

      <div className="container-custom py-12">
        {/* TL;DR */}
        <TLDR
          title="Gemlik Emlak Danışmanlık Hizmetlerimiz"
          points={[
            'Acilden Emlak olarak 15 yıldır Gemlik bölgesinde güvenilir emlak danışmanlığı hizmeti veriyoruz.',
            'Satılık daire arama, fiyat değerlendirme, tapu işlemleri, konut kredisi danışmanlığı ve yatırım rehberliği sunuyoruz.',
            'Kurşunlu, Umurbey, Kumla, Cumhuriyet ve Gemlik\'in tüm mahallelerinde aktif hizmet veriyoruz.',
            '1500+ mutlu müşteri, %98 memnuniyet oranı ile sektörde öncü konumdayız.',
          ]}
          highlight="Hem alıcı hem satıcı için en uygun çözümleri üretiyoruz. Ücretsiz değerlendirme için bizimle iletişime geçin."
        />

        {/* Başlık */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Gemlik Emlak Danışmanlık Hizmetleri
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Acilden Emlak olarak Gemlik bölgesinde 15 yıldır profesyonel emlak
            danışmanlığı hizmeti sunuyoruz. Deneyimli ekibimiz, güvenilir
            süreçlerimiz ve müşteri memnuniyeti odaklı yaklaşımımızla
            hayalinizdeki eve kavuşmanız için yanınızdayız.
          </p>
        </div>

        {/* Hizmetler */}
        <div className="mb-16">
          <h2 className="section-title text-center mb-12">
            Sunduğumuz Hizmetler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="text-primary-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Süreç */}
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Emlak Alım Sürecimiz
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  İhtiyaç Analizi
                </h3>
                <p className="text-gray-700">
                  Bütçenizi, konum tercihlerinizi, oda sayısını ve diğer
                  ihtiyaçlarınızı detaylı olarak dinliyoruz.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Seçenek Sunumu
                </h3>
                <p className="text-gray-700">
                  İhtiyaçlarınıza uygun 3-5 satılık daire seçeneğini detaylı
                  bilgiler ile sunuyoruz.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Yerinde İnceleme</h3>
                <p className="text-gray-700">
                  Seçtiğiniz daireleri birlikte ziyaret ediyor, mahalle ve
                  bina hakkında detaylı bilgi veriyoruz.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Hukuki Kontrol
                </h3>
                <p className="text-gray-700">
                  Tapu durumu, imar planı, bina ruhsatı ve tüm yasal evrakları
                  kontrol ediyoruz.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Anlaşma ve Devir
                </h3>
                <p className="text-gray-700">
                  Fiyat pazarlığı, sözleşme hazırlığı ve tapu devir işlemlerinde
                  baştan sona yanınızdayız.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                6
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Satış Sonrası Destek
                </h3>
                <p className="text-gray-700">
                  Taşınma, tadilat, abonelikler gibi konularda da size
                  yardımcı olmaya devam ediyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <TrustBadges />

        {/* CTA */}
        <div className="mt-16">
          <ContactBlock
            title="Profesyonel Emlak Danışmanlığı İçin Bize Ulaşın"
            subtitle="Ücretsiz danışmanlık ve değerlendirme için hemen iletişime geçin."
          />
        </div>
      </div>
    </>
  );
}
