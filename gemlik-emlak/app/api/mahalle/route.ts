import { NextResponse } from 'next/server';
import { getAllNeighborhoods, getNeighborhoodBySlug } from '@/lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  if (slug) {
    const neighborhood = getNeighborhoodBySlug(slug);
    if (!neighborhood) {
      return NextResponse.json(
        { success: false, error: 'Mahalle bulunamadı' },
        { status: 404 }
      );
    }
    return NextResponse.json({
      success: true,
      data: neighborhood,
    });
  }

  const neighborhoods = getAllNeighborhoods();
  return NextResponse.json({
    success: true,
    count: neighborhoods.length,
    data: neighborhoods,
  });
}
