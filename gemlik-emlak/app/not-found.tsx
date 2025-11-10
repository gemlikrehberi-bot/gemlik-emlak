import Link from 'next/link';
import { Home, Search, MapPin } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container-custom py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-9xl font-bold text-primary-600 mb-4">404</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sayfa Bulunamadı
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Link
              href="/"
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Ana Sayfa
            </Link>
            <Link
              href="/gemlik-satilik-daire"
              className="bg-white hover:bg-gray-50 text-primary-600 font-semibold py-3 px-6 rounded-lg border-2 border-primary-500 transition-colors flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              İlanlar
            </Link>
            <Link
              href="/iletisim"
              className="bg-white hover:bg-gray-50 text-primary-600 font-semibold py-3 px-6 rounded-lg border-2 border-primary-500 transition-colors flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              İletişim
            </Link>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Popüler Bölgeler
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/mahalle/kursunlu"
                className="text-primary-600 hover:text-primary-700 hover:underline"
              >
                Kurşunlu
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                href="/mahalle/umurbey"
                className="text-primary-600 hover:text-primary-700 hover:underline"
              >
                Umurbey
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                href="/mahalle/cumhuriyet"
                className="text-primary-600 hover:text-primary-700 hover:underline"
              >
                Cumhuriyet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
