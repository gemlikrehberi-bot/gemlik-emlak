import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const SITE_NAME = 'Acilden Emlak';

export interface SeoConfig {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  noindex?: boolean;
}

/**
 * Türkçe karakterleri temizler ve URL-safe slug oluşturur
 */
export function slugify(text: string): string {
  const trMap: Record<string, string> = {
    ç: 'c',
    ğ: 'g',
    ı: 'i',
    İ: 'i',
    ö: 'o',
    ş: 's',
    ü: 'u',
    Ç: 'c',
    Ğ: 'g',
    Ö: 'o',
    Ş: 's',
    Ü: 'u',
  };

  return text
    .toLowerCase()
    .split('')
    .map((char) => trMap[char] || char)
    .join('')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Metadata objesi oluşturur - Next.js 14 Metadata API için
 */
export function createMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage,
  noindex = false,
}: SeoConfig): Metadata {
  const url = `${SITE_URL}${path}`;
  const imageUrl = ogImage || `${SITE_URL}/images/og-default.png`;

  const metadata: Metadata = {
    title: `${title} | ${SITE_NAME}`,
    description,
    keywords: keywords.join(', '),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'tr_TR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [imageUrl],
    },
  };

  if (noindex) {
    metadata.robots = {
      index: false,
      follow: true,
    };
  }

  return metadata;
}

/**
 * Template için basit metadata
 */
export function createSimpleMetadata(
  title: string,
  description: string
): Metadata {
  return {
    title: `${title} | ${SITE_NAME}`,
    description,
  };
}

/**
 * Fiyat formatla - TRY
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Tarih formatla - Türkçe
 */
export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateString));
}

/**
 * Metrekare formatla
 */
export function formatArea(area: number): string {
  return `${area} m²`;
}
