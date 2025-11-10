import { NextResponse } from 'next/server';
import { getAllListings, getListingsByNeighborhood } from '@/lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const neighborhood = searchParams.get('neighborhood');

  let listings = getAllListings();

  if (neighborhood) {
    listings = getListingsByNeighborhood(neighborhood);
  }

  return NextResponse.json({
    success: true,
    count: listings.length,
    data: listings,
  });
}
