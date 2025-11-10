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

interface BlogPostSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

interface BlogPostContent {
  title: string;
  description: string;
  keywords: string[];
  breadcrumbLabel: string;
  publishedAt: string;
  category: string;
  readTime: string;
  summary: {
    title: string;
    points: string[];
    highlight: string;
  };
  sections: BlogPostSection[];
  faqs: {
    question: string;
    answer: string;
  }[];
  cta: {
    title: string;
    subtitle: string;
  };
}

const BLOG_POSTS: Record<string, BlogPostContent> = {
  'gemlik-satilik-daire-alma-rehberi-2025': {
    title: 'Gemlik Satılık Daire Alma Rehberi 2025 - 10 Önemli İpucu',
    description:
      "Gemlik'te satılık daire alırken dikkat edilmesi gereken adımlar. Bütçe planlamasından tapu kontrollerine kadar 2025 yılına özel rehber.",
    keywords: [
      'gemlik satılık daire alma',
      'gemlik ev alma rehberi',
      'gemlik tapu kontrolü',
    ],
    breadcrumbLabel: 'Gemlik Satılık Daire Alma Rehberi',
    publishedAt: '2025-01-15T10:00:00+03:00',
    category: 'Rehber',
    readTime: '8 dakika',
    summary: {
      title: "Özet: Gemlik'te Satılık Daire Alırken Dikkat Edilecekler",
      points: [
        'Bütçenizi net belirleyin ve %20 rezerv bırakın (tapu harcı, masraflar).',
        'Mahalle seçerken ulaşım, sosyal donatı ve değer artış potansiyelini değerlendirin.',
        'Tapu ve imar kontrollerini mutlaka yapın; şerh, ipotek, haciz araştırın.',
        'Bina yaşı, deprem yönetmeliği uygunluğu ve ısıtma sistemini inceleyin.',
      ],
      highlight:
        'Profesyonel emlak danışmanı desteği almak, hukuki ve finansal riskleri minimize eder.',
    },
    sections: [
      {
        heading: '1. Bütçenizi Netleştirin',
        paragraphs: [
          "Gemlik'te 2025 itibarıyla satılık daire fiyatları 980.000 TL ile 5.000.000 TL arasında değişiyor. Satın alma sürecine başlamadan önce bütçenizi belirleyin ve sadece daire fiyatını değil, ek maliyetleri de hesaba katın.",
        ],
        list: [
          'Tapu harcı (satış bedelinin %4’ü, alıcı ve satıcı arasında paylaşılır)',
          'Noter ve danışmanlık ücretleri',
          'Taşınma ve ilk tadilat giderleri',
          'Kredi dosya masrafları (kredi kullanacaksanız)',
        ],
      },
      {
        heading: '2. İhtiyaç Analizi Yapın',
        paragraphs: [
          'Aile üyelerinizin sayısı, yaşam tarzınız ve çalışma düzeniniz konut tercihinde belirleyici olmalı. Deniz manzarası mı yoksa şehir merkezine yakınlık mı önemli? Müstakil bahçe mi yoksa site yaşamı mı istiyorsunuz? Bu sorulara net cevaplar vermek, seçenekleri hızla daraltır.',
        ],
      },
      {
        heading: '3. Mahalle Karşılaştırması Yapın',
        paragraphs: [
          "Gemlik'in her mahallesinin farklı bir karakteri var. Yatırım veya oturum amacıyla tercihlerinizi belirlerken bölgelere göre avantajları inceleyin.",
        ],
        list: [
          'Kurşunlu: Deniz manzaralı siteler, yüksek değer artışı.',
          'Umurbey: Merkezi konum, uygun fiyat, canlı sosyal hayat.',
          'Kumla: Sahile sıfır yazlık yaşam, sezonluk kira potansiyeli.',
          'Cumhuriyet: Lüks projeler, geniş metrekare, prestijli yaşam.',
        ],
      },
      {
        heading: '4. Tapu ve İmar Kontrolleri',
        paragraphs: [
          "Tapu Müdürlüğü ve belediyede yapılacak sorgular, ileride karşılaşılacak hukuki sorunların önüne geçer. Şerh, ipotek, haciz, imar planı ve yapı kullanım izinlerini kontrol etmeyi ihmal etmeyin.",
        ],
      },
      {
        heading: '5. Bina ve Teknik İnceleme',
        paragraphs: [
          'Bina yaşı, deprem yönetmeliğine uygunluk, ısıtma sistemi ve aidat tutarı gibi detaylar, hem güvenlik hem de aylık bütçe açısından kritik. 2018 sonrası binalar güncel yönetmeliklere uygun inşa edildiğinden ekstra güven sağlar.',
        ],
      },
      {
        heading: '6. Finansman ve Profesyonel Destek',
        paragraphs: [
          "Konut kredisi seçeneklerini karşılaştırın, faiz oranlarını ve ödeme planlarını karşılayabileceğinizden emin olun.",
          'Deneyimli bir emlak danışmanı ile çalışmak, pazarlık, belge hazırlığı ve süreç yönetimini kolaylaştırır.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Gemlik’te satılık daire için ortalama fiyat aralığı nedir?',
        answer:
          'Umurbey’de 1.000.000-1.800.000 TL, Kurşunlu’da 2.500.000-3.500.000 TL, Cumhuriyet’te ise 3.000.000-5.000.000 TL aralığında seçenekler bulunuyor.',
      },
      {
        question: 'Tapu kontrolünde hangi belgelere bakmalıyım?',
        answer:
          'Tapu kaydında şerh, ipotek, haciz olup olmadığını inceleyin; belediyeden imar durumu ve yapı ruhsatını sorgulayın.',
      },
      {
        question: 'Profesyonel danışmanlık almak gerekli mi?',
        answer:
          'Deneyimli bir emlak danışmanı, doğru fiyatlandırma, hukuki süreç ve pazarlık aşamalarında ciddi avantaj sağlar.',
      },
    ],
    cta: {
      title: "Gemlik'te Ev Alırken Size Yardımcı Olalım",
      subtitle: '15 yıllık deneyimimizle doğru daireyi bulmanız için yanınızdayız.',
    },
  },
  'kursunlu-vs-umurbey-mahalle-karsilastirmasi': {
    title: 'Kurşunlu vs Umurbey: Hangi Mahalle Size Uygun?',
    description:
      "Gemlik'te Kurşunlu ve Umurbey mahallelerinin fiyat, yaşam tarzı ve yatırım potansiyeli karşılaştırması. Hangi mahalle sizin için daha doğru?",
    keywords: [
      'kurşunlu mahalle rehberi',
      'umurbey emlak',
      'gemlik mahalle karşılaştırması',
    ],
    breadcrumbLabel: 'Kurşunlu vs Umurbey Karşılaştırması',
    publishedAt: '2025-01-10T14:30:00+03:00',
    category: 'Mahalle İncelemeleri',
    readTime: '6 dakika',
    summary: {
      title: 'Özet: Kurşunlu mu, Umurbey mi?',
      points: [
        'Kurşunlu sahile yakın, modern siteler ve yüksek yaşam kalitesi sunar.',
        'Umurbey merkezi konum, uygun fiyat ve canlı sosyal hayat sağlar.',
        'Yatırım hedefiniz önemli: Kurşunlu uzun vadeli değer artışı, Umurbey hızlı kiralama avantajı sunar.',
        'Ulaşım ve günlük rutinlerinize göre mahalle tercihi yapın.',
      ],
      highlight:
        'Mahalle seçimini yaparken yaşam tarzınızı, bütçenizi ve yatırım hedefinizi aynı anda değerlendirin.',
    },
    sections: [
      {
        heading: '1. Genel Bakış',
        paragraphs: [
          'Kurşunlu ve Umurbey, Gemlik’in en çok talep gören iki mahallesi. İkisi de farklı yaşam tarzlarına hitap ediyor; bu nedenle artılarını ve eksilerini net görmek önemli.',
        ],
      },
      {
        heading: '2. Kurşunlu: Sahil Yaşamı ve Modern Konutlar',
        paragraphs: [
          'Kurşunlu, deniz manzarası isteyenler için ideal. Modern site projeleri, güvenlik, otopark ve sosyal alan avantajı sunuyor.',
          'Fiyatlar Umurbey’e göre daha yüksek olsa da uzun vadeli değer artışı oldukça güçlü.',
        ],
        list: [
          'Fiyat aralığı: 2.500.000 - 3.800.000 TL',
          'Avantaj: Sahil, manzara, sosyal donatı, prestij',
          'Dezavantaj: İlk satın alma maliyeti yüksek',
        ],
      },
      {
        heading: '3. Umurbey: Ulaşım Merkezi ve Bütçe Dostu Seçenek',
        paragraphs: [
          'Umurbey, Gemlik merkezine en yakın bölgelerden biri. Okul, pazar, toplu taşıma ve günlük ihtiyaçlara yürüyerek ulaşabilirsiniz.',
          'Fiyatların erişilebilir olması, hem ilk evini alacaklar hem de yatırımcılar için cazip.',
        ],
        list: [
          'Fiyat aralığı: 1.000.000 - 2.200.000 TL',
          'Avantaj: Merkezi konum, güçlü kira getirisi, uygun fiyat',
          'Dezavantaj: Eski binalar fazla, otopark kısıtlı',
        ],
      },
      {
        heading: '4. Hangi Mahalle Kime Uygun?',
        paragraphs: [
          'Eğer sahil yaşamı, modern siteler ve prestijli bir çevre önceliğinizse Kurşunlu; ulaşım kolaylığı, günlük yaşam rahatlığı ve bütçe dostu seçenek arıyorsanız Umurbey sizin için ideal.',
          'Yatırım yapıyorsanız, kira getirisi hedefi için Umurbey; sermayeyi koruyup değer artışı bekliyorsanız Kurşunlu doğru tercih olur.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Kurşunlu’da aidat giderleri yüksek mi?',
        answer:
          'Site yaşamı ve sosyal alanlar nedeniyle aidatlar 800-1500 TL aralığında değişebiliyor. Ancak hizmet düzeyi de buna paralel.',
      },
      {
        question: 'Umurbey’de kiralık daire bulmak kolay mı?',
        answer:
          'Merkezi konum ve üniversite-çalışan talebi nedeniyle kiralık daireler çok hızlı tutuluyor, boş kalma süresi kısa.',
      },
      {
        question: 'Hangi mahalle daha hızlı değer kazanır?',
        answer:
          'Kurşunlu’da deniz manzaralı ve yeni projeler sayesinde değer artışı daha yüksek. Umurbey’de ise kira getirisi ön plana çıkıyor.',
      },
    ],
    cta: {
      title: 'Sizin İçin Doğru Mahalleyi Belirleyelim',
      subtitle:
        'Kurşunlu ve Umurbey seçeneklerini yerinde görüp karşılaştırmanız için randevu planlayalım.',
    },
  },
  'gemlik-emlak-fiyatlari-2025-analizi': {
    title: 'Gemlik Emlak Fiyatları 2025 Yılı Analizi',
    description:
      "2025'te Gemlik emlak piyasasında beklenen fiyat trendleri, mahalle bazlı değişimler ve yatırım fırsatları.",
    keywords: [
      'gemlik emlak fiyatları 2025',
      'gemlik emlak analizi',
      'gemlik yatırım fırsatları',
    ],
    breadcrumbLabel: 'Gemlik Emlak Fiyat Analizi 2025',
    publishedAt: '2025-01-05T09:00:00+03:00',
    category: 'Piyasa Analizi',
    readTime: '10 dakika',
    summary: {
      title: 'Özet: 2025 Gemlik Emlak Trendleri',
      points: [
        'Ortalama fiyatlar geçen yıla göre %12 artış gösterdi.',
        'Kurşunlu ve Kumla sahil projeleri talep görüyor.',
        'Umurbey’de dönüşüm projeleri fiyatları yukarı çekiyor.',
        'Yatırım için 1+1 ve 2+1 daireler hâlâ yüksek kira getirisine sahip.',
      ],
      highlight:
        '2025’te Gemlik’te doğru lokasyon ve doğru metrekare seçimi, enflasyona karşı güçlü koruma sağlıyor.',
    },
    sections: [
      {
        heading: '1. Genel Piyasa Görünümü',
        paragraphs: [
          '2024 sonunda başlayan talep artışı 2025’te de devam ediyor. Marmara Bölgesi içinde Gemlik, ulaşım avantajı ve sahil yaşamı ile öne çıkıyor.',
          'İstanbul ve Bursa’dan gelen yatırımcılar fiyatları yukarı çekerken yerel alıcılar da bölgesel projelere talep gösteriyor.',
        ],
      },
      {
        heading: '2. Mahalle Bazlı Fiyat Aralıkları',
        paragraphs: [
          'Bölgeler arasında fiyat farklılıkları korunuyor ve gelişen projeler fiyat makasını açıyor.',
        ],
        list: [
          'Kurşunlu: 2.500.000 - 4.000.000 TL (deniz manzaralı daireler başı çekiyor)',
          'Kumla: 1.800.000 - 3.200.000 TL (yazlık ve sezonluk kiralama potansiyeli)',
          'Umurbey: 1.000.000 - 2.400.000 TL (kentsel dönüşüm projeleri etkili)',
          'Cumhuriyet: 3.000.000 - 5.200.000 TL (lüks konut ve villalar)',
        ],
      },
      {
        heading: '3. Arz-Talep Dengesi',
        paragraphs: [
          'Yeni konut arzı sınırlı olduğu için özellikle 2+1 ve 3+1 aile dairelerinde rekabet yüksek.',
          'Sahil hattındaki turistik kullanım, yaz sezonunda kısa dönem kiraları cazip hâle getiriyor.',
        ],
      },
      {
        heading: '4. Yatırım Tavsiyeleri',
        paragraphs: [
          'Kira getirisi hedefleyenler için Umurbey’de yeni yapılan 2+1 daireler mantıklı.',
          'Uzun vadeli değer artışı isteyenler Kurşunlu’daki sahil projelerini takip etmeli.',
          'Kumla’da yazlık konseptli daireler, sezonluk kira geliriyle yatırımını hızlı amorti edebilir.',
        ],
      },
      {
        heading: '5. 2025 Beklentileri',
        paragraphs: [
          'Bölgedeki liman yatırımları ve ulaşım projeleri tamamlandıkça, özellikle sanayi çalışanlarının konut talebi artacak.',
          'Faiz oranları düşüş trendini sürdürürse, yılın ikinci yarısında yeni bir fiyat dalgası görmek mümkün.',
        ],
      },
    ],
    faqs: [
      {
        question: '2025’te fiyatlar yükselmeye devam eder mi?',
        answer:
          'Altyapı yatırımları ve kısıtlı arz nedeniyle yıl içinde %10-15 bandında artış devam etmesi bekleniyor.',
      },
      {
        question: 'Kira getirisi en yüksek daire tipi hangisi?',
        answer:
          'Umurbey ve Kumla’da 2+1 daireler; tatil sezonunda günlük kiralama yapıldığında %7-8 yıllık getiri sunuyor.',
      },
      {
        question: 'Hangi bölgelerde yeni projeler geliyor?',
        answer:
          'Kurşunlu sahil şeridinde iki yeni rezidans projesi, Umurbey’de ise kentsel dönüşüm kapsamında 3 blokluk yeni site planlanıyor.',
      },
    ],
    cta: {
      title: 'Gemlik’te Doğru Yatırımı Birlikte Planlayalım',
      subtitle:
        'Bölgedeki fiyat trendlerini analiz edelim, bütçenize en uygun portföyü oluşturalım.',
    },
  },
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = BLOG_POSTS[params.slug];

  if (!post) {
    return { title: 'Blog Yazısı' };
  }

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${params.slug}`,
    keywords: post.keywords,
  });
}

export function generateStaticParams() {
  return Object.keys(BLOG_POSTS).map((slug) => ({ slug }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS[params.slug];

  if (!post) {
    notFound();
  }

  const faqSchema = createFAQSchema(post.faqs);

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
            name: post.breadcrumbLabel,
            url: `/blog/${params.slug}`,
          },
        ]}
      />

      <article className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {/* Meta Bilgiler */}
          <div className="flex items-center gap-4 mb-6 text-sm text-gray-600 flex-wrap">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-semibold">
              {post.category}
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>Rasim Kılıç</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} okuma</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          <TLDR
            title={post.summary.title}
            points={post.summary.points}
            highlight={post.summary.highlight}
          />

          <div className="prose prose-lg prose-gray max-w-none mt-12">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                {section.list && (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-12">
            <FAQ faqs={post.faqs} />
          </div>

          <div className="mt-12">
            <ContactBlock
              title={post.cta.title}
              subtitle={post.cta.subtitle}
            />
          </div>
        </div>
      </article>
    </>
  );
}
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
