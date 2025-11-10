import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { createWebSiteSchema, createOrganizationSchema } from '@/lib/jsonld';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#009999',
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  title: {
    default: 'Gemlik Satılık Daire | Acilden Emlak',
    template: '%s | Acilden Emlak',
  },
  description:
    'Gemlik satılık daire, ev ve emlak ilanları. Kumla, Kurşunlu, Umurbey bölgelerinde güvenilir emlak danışmanlığı.',
  keywords: [
    'gemlik satılık daire',
    'gemlik emlak',
    'gemlik satılık ev',
    'kumla satılık daire',
    'kurşunlu satılık daire',
    'gemlik deniz manzaralı daire',
  ],
  authors: [{ name: 'Acilden Emlak' }],
  creator: 'Acilden Emlak',
  publisher: 'Acilden Emlak',
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Acilden Emlak',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'verification_token',
    // yandex: 'verification_token',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = createWebSiteSchema();
  const organizationSchema = createOrganizationSchema();

  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
