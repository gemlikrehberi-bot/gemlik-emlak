import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createMetadata } from '@/lib/seo';
import { createFAQSchema } from '@/lib/jsonld';
import Breadcrumb from '@/components/Breadcrumb';
import TLDR from '@/components/TLDR';
import FAQ from '@/components/FAQ';
import ContactBlock from '@/components/ContactBlock';
import { Calendar, User, Clock } from 'lucide-react';
import { formatDate } from '@/lib/format';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  if (params.slug === 'gemlik-satilik-daire-alma-rehberi-2025') {
    return createMetadata({
      title: 'Gemlik Satılık Daire Alma Rehberi 2025 - 10 Önemli İpucu',
      description:
        'Gemlik\'te satılık daire alırken dikkat edilmesi gereken 10 önemli nokta. Mahalle seçimi, tapu kontrolü, fiyat değerlendirmesi ve daha fazlası.',
      path: `/blog/${params.slug}`,
      keywords: [
        'gemlik satılık daire alma',
        'gemlik ev alma rehberi',
        'gemlik tapu kontrolü',
      ],
    });
  }

  return { title: 'Blog Yazısı' };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  if (params.slug !== 'gemlik-satilik-daire-alma-rehberi-2025') {
    notFound();
  }

  const faqs = [
    {
      question: 'Gemlik\'te ev alırken ilk olarak neye dikkat etmeliyim?',
      answer:
        'İlk olarak bütçenizi net belirleyin ve ihtiyaç analizinizi yapın. Hangi mahallede, kaç odalı, deniz manzaralı mı yoksa merkezi konumda mı bir daire istediğinizi netleştirin. Ardından o bölgedeki fiyat aralıklarını araştırın.',
    },
    {
      question: 'Gemlik\'te tapu kontrolü nasıl yapılır?',
      answer:
        'Tapu kontrolü için Gemlik Tapu Müdürlüğü\'ne başvurun. Tapuda şerh, ipotek veya haciz olup olmadığını kontrol edin. İmar durumunu belediyeden sorgulayın. Profesyonel bir emlak danışmanı bu süreçte size yardımcı olabilir.',
    },
    {
      question: 'Gemlik\'te hangi mahalle yatırım için daha iyi?',
      answer:
        'Yatırım için Kurşunlu ve Kumla bölgeleri değer artış potansiyeli yüksek mahallelerdir. Ancak bütçe dostu yatırım için Umurbey, lüks segment için Cumhuriyet mahallesi tercih edilebilir. Her mahallenin kendine özgü avantajları vardır.',
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

      <Breadcrumb
        items={[
          { name: 'Blog', url: '/blog' },
          {
            name: 'Gemlik Satılık Daire Alma Rehberi',
            url: `/blog/${params.slug}`,
          },
        ]}
      />

      <article className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {/* Meta Bilgiler */}
          <div className="flex items-center gap-4 mb-6 text-sm text-gray-600 flex-wrap">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-semibold">
              Rehber
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate('2025-01-15T10:00:00+03:00')}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>Rasim Kılıç</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>8 dakika okuma</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Gemlik Satılık Daire Alma Rehberi 2025
          </h1>

          {/* TL;DR - GEO */}
          <TLDR
            title="Özet: Gemlik\'te Satılık Daire Alırken Dikkat Edilecekler"
            points={[
              'Bütçenizi net belirleyin ve %20 rezerv bırakın (tapu harçları, emlak vergisi için)',
              'Mahalle seçiminde ulaşım, sosyal donatı ve gelecek potansiyelini değerlendirin',
              'Tapu kontrolü mutlaka yapın: şerh, ipotek, haciz sorgulaması zorunlu',
              'Bina yaşı, deprem yönetmeliği uygunluğu ve ısıtma sistemini kontrol edin',
            ]}
            highlight="Profesyonel emlak danışmanı desteği almak, hem zaman tasarrufu sağlar hem de hukuki riskleri minimize eder."
          />

          {/* İçerik */}
          <div className="prose prose-lg prose-gray max-w-none mt-12">
            <h2>1. Bütçenizi Net Belirleyin</h2>
            <p>
              Gemlik\'te satılık daire almadan önce atılacak ilk adım, net bir
              bütçe belirlemektir. 2025 yılı itibarıyla Gemlik\'te daire
              fiyatları 980.000 TL ile 5.000.000 TL arasında değişmektedir.
              Bütçenizi belirlerken sadece daire fiyatını değil, aşağıdaki ek
              masrafları da hesaba katmalısınız:
            </p>
            <ul>
              <li>
                Tapu harçları (satış bedelinin %4\'ü, alıcı ve satıcı tarafından
                eşit paylaşılır)
              </li>
              <li>Noter masrafları (ortalama 2.000-5.000 TL)</li>
              <li>Emlak komisyonu (varsa, genellikle satış bedelinin %2-3\'ü)</li>
              <li>Taşınma masrafları</li>
              <li>İlk dönem tadilat/dekorasyon masrafları</li>
            </ul>
            <p>
              Bütçenizin %20\'sini bu ek masraflar için rezerve tutmanız
              önerilir.
            </p>

            <h2>2. İhtiyaç Analizinizi Yapın</h2>
            <p>
              Gemlik\'te hangi tür bir konut aradığınızı netleştirin. Ailenizin
              büyüklüğüne göre oda sayısını, çalışma durumunuza göre merkeze
              olan mesafeyi, yaşam tarzınıza göre deniz manzarası gibi
              özellikleri değerlendirin.
            </p>

            <h2>3. Mahalle Araştırması Yapın</h2>
            <p>
              Gemlik\'in her mahallesi farklı özelliklere sahiptir:
            </p>
            <ul>
              <li>
                <strong>Kurşunlu:</strong> Deniz manzaralı, modern siteler,
                1.250.000-3.500.000 TL
              </li>
              <li>
                <strong>Umurbey:</strong> Merkezi konum, uygun fiyatlar,
                980.000-2.500.000 TL
              </li>
              <li>
                <strong>Kumla:</strong> Sahile sıfır, yazlık uygun,
                1.800.000-3.000.000 TL
              </li>
              <li>
                <strong>Cumhuriyet:</strong> Lüks konutlar, prestij,
                2.200.000-5.000.000 TL
              </li>
            </ul>

            <h2>4. Tapu ve İmar Durumu Kontrolü</h2>
            <p>
              Gemlik Tapu Müdürlüğü\'nden tapu kayıtlarını inceleyin. Mutlaka
              kontrol edilmesi gerekenler:
            </p>
            <ul>
              <li>Tapuda şerh var mı?</li>
              <li>İpotek veya haciz var mı?</li>
              <li>İmar durumu nedir?</li>
              <li>Kat irtifakı veya kat mülkiyeti tam mı?</li>
              <li>Ada-parsel bilgileri doğru mu?</li>
            </ul>

            <h2>5. Bina ve Yapı Kontrolü</h2>
            <p>
              Binanın deprem yönetmeliğine uygunluğunu, yapı ruhsatını, iskan
              belgesini kontrol edin. 2018 sonrası yapılan binalar güncel deprem
              yönetmeliğine uygundur. Eski binalarda yapı güçlendirme raporu
              isteyin.
            </p>

            <h2>6. Komşuluk ve Çevre Araştırması</h2>
            <p>
              Daireyi görmek için gittiğinizde çevreyi de inceleyin. Komşular,
              sokak temizliği, güvenlik, gürültü seviyesi gibi faktörleri gözden
              geçirin.
            </p>

            <h2>7. Isıtma ve Enerji Maliyetleri</h2>
            <p>
              Gemlik\'te daireler genellikle kombi veya yerden ısıtma ile
              ısınmaktadır. Doğalgaz faturası, elektrik tüketimi gibi aylık
              giderleri öğrenin.
            </p>

            <h2>8. Aidat ve Ortak Giderler</h2>
            <p>
              Site içi konutlarda aidat 500-1500 TL arasında değişir. Aidata
              neyin dahil olduğunu (güvenlik, temizlik, ortak alan bakımı) net
              öğrenin.
            </p>

            <h2>9. Profesyonel Destek Alın</h2>
            <p>
              Acilden Emlak gibi profesyonel bir emlak danışmanı ile çalışmak,
              hem doğru seçim yapmanızı sağlar hem de tüm süreçte size rehberlik
              eder. 15 yıllık deneyimimizle hukuki ve teknik konularda size
              destek oluyoruz.
            </p>

            <h2>10. Konut Kredisi Seçeneklerini Araştırın</h2>
            <p>
              Bankalar konut değerinin genellikle %80\'ine kadar kredi
              vermektedir. İlk ev alıcıları için sıfır KDV avantajı
              bulunmaktadır. Birden fazla bankadan teklif alarak en uygun faiz
              oranını bulun.
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-12">
            <FAQ faqs={faqs} />
          </div>

          {/* CTA */}
          <div className="mt-12">
            <ContactBlock
              title="Gemlik\'te Ev Alırken Size Yardımcı Olalım"
              subtitle="15 yıllık deneyimimizle doğru seçimi yapmanız için yanınızdayız."
            />
          </div>
        </div>
      </article>
    </>
  );
}
