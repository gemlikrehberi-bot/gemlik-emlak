import { Listing } from './types';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

/**
 * WebSite Schema + SearchAction
 */
export function createWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Acilden Emlak',
    url: SITE_URL,
    description:
      'Gemlik satılık daire, ev ve emlak ilanları. Güvenilir emlak danışmanlığı.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/gemlik-satilik-daire?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Organization Schema
 */
export function createOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Acilden Emlak',
    alternateName: 'Gemlik Emlak - Rasim Kılıç',
    description: 'Gemlik bölgesinde güvenilir emlak danışmanlık hizmetleri',
    url: SITE_URL,
    telephone: '+905325517177',
    founder: {
      '@type': 'Person',
      name: 'Rasim Kılıç',
      jobTitle: 'Emlak Danışmanı',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gemlik',
      addressRegion: 'Bursa',
      addressCountry: 'TR',
    },
    areaServed: {
      '@type': 'City',
      name: 'Gemlik',
    },
    priceRange: '₺₺-₺₺₺',
  };
}

/**
 * RealEstateListing Schema - İlan detay için
 */
export function createListingSchema(listing: Listing, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: listing.title,
    description: listing.description,
    url: `${SITE_URL}${path}`,
    datePosted: listing.publishedAt,
    price: listing.priceTRY,
    priceCurrency: 'TRY',
    availability: 'https://schema.org/InStock',
    itemOffered: {
      '@type': 'Apartment',
      name: listing.title,
      floorSize: {
        '@type': 'QuantitativeValue',
        value: listing.areaM2,
        unitCode: 'MTK',
      },
      numberOfRooms: listing.rooms,
      numberOfBathroomsTotal: parseInt(listing.rooms.split('+')[1]) || 1,
      address: {
        '@type': 'PostalAddress',
        addressLocality: listing.address.neighborhood,
        addressRegion: listing.address.district,
        addressCountry: 'TR',
      },
      ...(listing.geo && {
        geo: {
          '@type': 'GeoCoordinates',
          latitude: listing.geo.lat,
          longitude: listing.geo.lng,
        },
      }),
    },
    seller: {
      '@type': 'RealEstateAgent',
      name: 'Acilden Emlak',
      telephone: '+905325517177',
    },
    image: listing.images.map((img) => `${SITE_URL}${img}`),
  };
}

/**
 * BreadcrumbList Schema
 */
export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * FAQPage Schema
 */
export function createFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * CollectionPage Schema - Liste sayfaları için
 */
export function createCollectionPageSchema(
  title: string,
  description: string,
  path: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url: `${SITE_URL}${path}`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Acilden Emlak',
      url: SITE_URL,
    },
  };
}

/**
 * LocalBusiness Schema - Mahalle sayfaları için
 */
export function createLocalBusinessSchema(neighborhood: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: `Acilden Emlak - ${neighborhood}`,
    description: `${neighborhood} bölgesinde satılık daire ve emlak ilanları`,
    areaServed: {
      '@type': 'Place',
      name: neighborhood,
      containedInPlace: {
        '@type': 'City',
        name: 'Gemlik',
      },
    },
  };
}
