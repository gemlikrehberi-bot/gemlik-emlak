import { NextResponse } from 'next/server';
import { mockGeneralFAQs } from '@/lib/data';

export async function GET() {
  return NextResponse.json({
    success: true,
    count: mockGeneralFAQs.length,
    data: mockGeneralFAQs,
  });
}
