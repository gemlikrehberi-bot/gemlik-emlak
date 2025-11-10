import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { createBreadcrumbSchema } from '@/lib/jsonld';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

/**
 * Breadcrumb Komponenti - SEO optimize
 * BreadcrumbList JSON-LD schema ile entegre
 */
export default function Breadcrumb({ items }: BreadcrumbProps) {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Ana Sayfa', url: '/' },
    ...items,
  ]);

  const allItems = [{ name: 'Ana Sayfa', url: '/' }, ...items];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <nav
        aria-label="Breadcrumb"
        className="container-custom py-4 border-b border-gray-200"
      >
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          {allItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400" />
              )}
              {index === allItems.length - 1 ? (
                <span className="text-gray-900 font-medium flex items-center gap-1">
                  {index === 0 && <Home className="w-4 h-4" />}
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="text-primary-600 hover:text-primary-700 transition-colors flex items-center gap-1"
                >
                  {index === 0 && <Home className="w-4 h-4" />}
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
