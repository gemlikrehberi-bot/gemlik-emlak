import { Listing } from '@/lib/types';
import ListingCard from './ListingCard';

interface ListingGridProps {
  listings: Listing[];
  emptyMessage?: string;
}

/**
 * İlan Grid Komponenti
 */
export default function ListingGrid({
  listings,
  emptyMessage = 'Henüz ilan bulunmamaktadır.',
}: ListingGridProps) {
  if (listings.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}
