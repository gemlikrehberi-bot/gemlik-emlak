import Link from 'next/link';
import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import { createCollectionPageSchema } from '@/lib/jsonld';
import Breadcrumb from '@/components/Breadcrumb';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { formatDate } from '@/lib/format';

export const metadata: Metadata = createMetadata({
  title: 'Gemlik Emlak Blog - Satılık Daire Rehberi ve İpuçları',
  description:
    'Gemlik emlak piyasası, satılık daire alma rehberi, mahalle incelemeleri, fiyat analizleri ve emlak sektörü hakkında güncel bilgiler.',
  path: '/blog',
  keywords: [
    'gemlik emlak blog',
    'gemlik satılık daire rehberi',
    'gemlik mahalle incelemeleri',
    'emlak satın alma ipuçları',
  ],
});

// Mock blog yazıları - GEO optimize içerik örnekleri
const blogPosts = [
  {
    slug: 'gemlik-satilik-daire-alma-rehberi-2025',
    title: 'Gemlik Satılık Daire Alma Rehberi 2025',
    excerpt:
      'Gemlik\'te satılık daire alırken dikkat edilmesi gereken 10 önemli nokta. Mahalle seçiminden tapu işlemlerine kadar tüm detaylar.',
    publishedAt: '2025-01-15T10:00:00+03:00',
    category: 'Rehber',
    readTime: '8 dakika',
  },
  {
    slug: 'kursunlu-vs-umurbey-mahalle-karsilastirmasi',
    title: 'Kurşunlu vs Umurbey: Hangi Mahalle Size Uygun?',
    excerpt:
      'Gemlik\'in iki popüler mahallesi Kurşunlu ve Umurbey\'i fiyat, konum, ulaşım ve yaşam kalitesi açısından karşılaştırdık.',
    publishedAt: '2025-01-10T14:30:00+03:00',
    category: 'Mahalle İncelemeleri',
    readTime: '6 dakika',
  },
  {
    slug: 'gemlik-emlak-fiyatlari-2025-analizi',
    title: 'Gemlik Emlak Fiyatları 2025 Yılı Analizi',
    excerpt:
      '2025 yılında Gemlik emlak piyasasında beklenen değişimler, mahalle bazlı fiyat trendleri ve yatırım önerileri.',
    publishedAt: '2025-01-05T09:00:00+03:00',
    category: 'Piyasa Analizi',
    readTime: '10 dakika',
  },
];

export default function BlogPage() {
  const collectionSchema = createCollectionPageSchema(
    'Gemlik Emlak Blog',
    'Gemlik emlak piyasası ve satılık daire hakkında güncel bilgiler',
    '/blog'
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />

      <Breadcrumb items={[{ name: 'Blog', url: '/blog' }]} />

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Gemlik Emlak Blog
          </h1>
          <p className="text-lg text-gray-700 mb-12">
            Gemlik emlak piyasası, satılık daire alma rehberleri, mahalle
            incelemeleri ve emlak sektörü hakkında güncel ve faydalı bilgiler.
          </p>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
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
                  <span>• {post.readTime} okuma</span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center gap-2 group"
                >
                  Devamını Oku
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 text-center border border-primary-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Daha Fazla İçerik Yakında
            </h2>
            <p className="text-gray-700 mb-6">
              Gemlik emlak piyasası hakkında düzenli olarak yeni içerikler
              yayınlıyoruz. Güncel kalmak için bizi takip edin.
            </p>
            <Link href="/iletisim" className="btn-primary inline-flex">
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
