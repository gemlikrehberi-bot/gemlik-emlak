import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { formatPrice } from '@/lib/format';

interface Neighborhood {
  slug: string;
  name: string;
  minPrice: number;
  maxPrice: number;
  distanceToSea: string;
  feature: string;
}

const neighborhoods: Neighborhood[] = [
  {
    slug: 'kursunlu',
    name: 'Kurşunlu',
    minPrice: 1250000,
    maxPrice: 3500000,
    distanceToSea: '~500m',
    feature: 'Deniz manzaralı',
  },
  {
    slug: 'umurbey',
    name: 'Umurbey',
    minPrice: 980000,
    maxPrice: 2500000,
    distanceToSea: '~1.5km',
    feature: 'Merkezi konum',
  },
  {
    slug: 'cumhuriyet',
    name: 'Cumhuriyet',
    minPrice: 2200000,
    maxPrice: 5000000,
    distanceToSea: '~1km',
    feature: 'Lüks konutlar',
  },
];

/**
 * Mahalle Karşılaştırma Tablosu - GEO için yapılandırılmış veri
 */
export default function ComparisonTable() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Gemlik Mahallelerini Karşılaştırın
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Hangi mahalle size uygun? Fiyat, konum ve özelliklere göre
          karşılaştırın.
        </p>

        {/* Masaüstü Tablo */}
        <div className="hidden md:block overflow-x-auto bg-white rounded-xl shadow-lg">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
              <tr>
                <th className="p-4 text-left font-semibold">Mahalle</th>
                <th className="p-4 text-left font-semibold">Min Fiyat</th>
                <th className="p-4 text-left font-semibold">Max Fiyat</th>
                <th className="p-4 text-left font-semibold">Denize Uzaklık</th>
                <th className="p-4 text-left font-semibold">Öne Çıkan Özellik</th>
                <th className="p-4 text-center font-semibold">Detay</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {neighborhoods.map((n) => (
                <tr
                  key={n.slug}
                  className="hover:bg-primary-50 transition-colors"
                >
                  <td className="p-4 font-semibold text-gray-900">{n.name}</td>
                  <td className="p-4 text-gray-700">
                    {formatPrice(n.minPrice)}
                  </td>
                  <td className="p-4 text-gray-700">
                    {formatPrice(n.maxPrice)}
                  </td>
                  <td className="p-4 text-gray-700">{n.distanceToSea}</td>
                  <td className="p-4 text-gray-700">{n.feature}</td>
                  <td className="p-4 text-center">
                    <Link
                      href={`/mahalle/${n.slug}`}
                      className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-semibold text-sm"
                    >
                      Görüntüle
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobil Kartlar */}
        <div className="md:hidden space-y-4">
          {neighborhoods.map((n) => (
            <div key={n.slug} className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {n.name}
              </h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Min Fiyat:</span>
                  <span className="font-semibold text-gray-900">
                    {formatPrice(n.minPrice)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Fiyat:</span>
                  <span className="font-semibold text-gray-900">
                    {formatPrice(n.maxPrice)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Denize Uzaklık:</span>
                  <span className="font-semibold text-gray-900">
                    {n.distanceToSea}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Özellik:</span>
                  <span className="font-semibold text-gray-900">
                    {n.feature}
                  </span>
                </div>
              </div>
              <Link
                href={`/mahalle/${n.slug}`}
                className="btn-primary w-full text-center"
              >
                {n.name} İlanlarını Gör
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
