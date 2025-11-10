/**
 * İlan tipi
 */
export interface Listing {
  id: string;
  title: string;
  slug: string;
  priceTRY: number;
  areaM2: number;
  rooms: '1+1' | '2+1' | '3+1' | '4+1' | '5+1';
  floor: string;
  heating: string;
  buildingAge: number;
  address: {
    district: 'Gemlik';
    neighborhood: string;
    street?: string;
  };
  geo?: {
    lat: number;
    lng: number;
  };
  images: string[];
  publishedAt: string;
  description: string;
  features: string[];
}

/**
 * Mahalle tipi
 */
export interface Neighborhood {
  slug: string;
  name: string;
  title: string;
  description: string;
  overview: string;
  priceRange: {
    min: number;
    max: number;
  };
  features: string[];
  transportation: string[];
  schools: string[];
  hospitals: string[];
  marketplaces: string[];
  distanceToSea?: string;
  population?: number;
  seismicInfo?: string;
}

/**
 * SSS tipi
 */
export interface FAQ {
  question: string;
  answer: string;
}

/**
 * Blog yazısı tipi
 */
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
}

/**
 * İletişim formu tipi
 */
export interface ContactForm {
  name: string;
  phone: string;
  email?: string;
  message: string;
  listingId?: string;
}

/**
 * Arama filtre tipi
 */
export interface SearchFilters {
  neighborhood?: string;
  priceMin?: number;
  priceMax?: number;
  areaMin?: number;
  areaMax?: number;
  rooms?: string[];
  heating?: string[];
}
