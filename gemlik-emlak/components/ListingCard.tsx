import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Home, Calendar, Maximize } from 'lucide-react';
import { Listing } from '@/lib/types';
import { formatPrice, formatArea, formatDateShort } from '@/lib/format';

interface ListingCardProps {
  listing: Listing;
}

/**
 * İlan Kartı - Liste görünümü için optimize
 */
export default function ListingCard({ listing }: ListingCardProps) {
  const listingUrl = `/ilan/${listing.id}-${listing.slug}`;

  return (
    <Link href={listingUrl} className="card group block">
      {/* Görsel */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        {listing.images && listing.images.length > 0 ? (
          <Image
            src={listing.images[0]}
            alt={listing.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Home className="w-16 h-16 text-gray-400" />
          </div>
        )}
        
        {/* Fiyat Badge */}
        <div className="absolute top-3 right-3 bg-primary-600 text-white px-3 py-1 rounded-lg font-bold shadow-lg">
          {formatPrice(listing.priceTRY)}
        </div>

        {/* Mahalle Badge */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-semibold text-gray-900">
          {listing.address.neighborhood}
        </div>
      </div>

      {/* İçerik */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {listing.title}
        </h3>

        {/* Özellikler */}
        <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Maximize className="w-4 h-4 text-primary-500" />
            <span>{formatArea(listing.areaM2)}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Home className="w-4 h-4 text-primary-500" />
            <span>{listing.rooms}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4 text-primary-500" />
            <span className="truncate">{listing.floor}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4 text-primary-500" />
            <span>{formatDateShort(listing.publishedAt)}</span>
          </div>
        </div>

        {/* Açıklama */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {listing.description}
        </p>

        {/* CTA */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <span className="text-primary-600 font-semibold text-sm group-hover:underline">
            Detayları Görüntüle →
          </span>
        </div>
      </div>
    </Link>
  );
}
