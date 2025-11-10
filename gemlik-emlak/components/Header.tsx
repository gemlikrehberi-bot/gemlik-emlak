import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';
import { formatPhoneNumber } from '@/lib/format';

const PHONE_OFFICE = process.env.NEXT_PUBLIC_PHONE_OFFICE || '05325517177';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        {/* Top Bar */}
        <div className="border-b border-gray-200 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Gemlik, Bursa</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary-500" />
              <a
                href={`tel:${PHONE_OFFICE}`}
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                {formatPhoneNumber(PHONE_OFFICE)}
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary-500 text-white font-bold text-2xl px-4 py-2 rounded-lg">
                AE
              </div>
              <div>
                <div className="font-bold text-xl text-gray-900">
                  Acilden Emlak
                </div>
                <div className="text-xs text-gray-600">
                  Güvenilir Emlak Danışmanlığı
                </div>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/gemlik-satilik-daire"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Satılık Daireler
              </Link>
              <Link
                href="/gemlik-emlak"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Emlak Hizmetleri
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/sss"
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                SSS
              </Link>
              <Link
                href="/iletisim"
                className="btn-primary text-sm py-2 px-4"
              >
                İletişim
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
