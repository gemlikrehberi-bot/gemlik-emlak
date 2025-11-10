import Link from 'next/link';
import { MapPin, Home, TrendingUp } from 'lucide-react';
import { Neighborhood } from '@/lib/types';
import { formatPrice } from '@/lib/format';

interface NeighborhoodCardProps {
  neighborhood: Neighborhood;
  listingCount?: number;
}

/**
 * Mahalle Kartı - Ana sayfa ve liste için
 */
export default function NeighborhoodCard({
  neighborhood,
  listingCount = 0,
}: NeighborhoodCardProps) {
  return (
    <Link
      href={`/mahalle/${neighborhood.slug}`}
      className="card group hover:shadow-xl transition-all duration-300"
    >
      <div className="p-6">
        {/* Başlık */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-1">
              {neighborhood.name}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Gemlik, Bursa</span>
            </div>
          </div>
          <div className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
            {listingCount} İlan
          </div>
        </div>

        {/* Açıklama */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {neighborhood.description}
        </p>

        {/* Fiyat Aralığı */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
            <TrendingUp className="w-4 h-4 text-primary-600" />
            <span className="font-semibold">Fiyat Aralığı</span>
          </div>
          <div className="text-lg font-bold text-primary-700">
            {formatPrice(neighborhood.priceRange.min)} -{' '}
            {formatPrice(neighborhood.priceRange.max)}
          </div>
        </div>

        {/* Özellikler */}
        <div className="space-y-2 mb-4">
          {neighborhood.features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-4 border-t border-gray-200">
          <span className="text-primary-600 font-semibold text-sm group-hover:underline flex items-center gap-2">
            <Home className="w-4 h-4" />
            {neighborhood.name} İlanlarını Görüntüle →
          </span>
        </div>
      </div>
    </Link>
  );
}
