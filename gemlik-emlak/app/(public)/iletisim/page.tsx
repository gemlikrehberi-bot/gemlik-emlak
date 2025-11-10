import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import Breadcrumb from '@/components/Breadcrumb';
import LeadForm from '@/components/LeadForm';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { formatPhoneNumber, getWhatsAppLink } from '@/lib/format';

const PHONE_OFFICE = process.env.NEXT_PUBLIC_PHONE_OFFICE || '05325517177';
const PHONE_CUSTOMER = process.env.NEXT_PUBLIC_PHONE_CUSTOMER || '05325517177';

export const metadata: Metadata = createMetadata({
  title: 'İletişim - Acilden Emlak Gemlik',
  description:
    'Gemlik satılık daire ve emlak hizmetleri için bizimle iletişime geçin. Telefon, WhatsApp veya form ile ulaşabilirsiniz. Rasim Kılıç - Emlak Danışmanı',
  path: '/iletisim',
  keywords: ['gemlik emlak iletişim', 'gemlik emlakçı telefon', 'acilden emlak'],
});

export default function IletisimPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'İletişim', url: '/iletisim' }]} />

      <div className="container-custom py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Bize Ulaşın
            </h1>
            <p className="text-lg text-gray-700">
              Gemlik emlak ve satılık daire hakkında sorularınız için bizimle
              iletişime geçin. Size en kısa sürede dönüş yapacağız.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* İletişim Bilgileri */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  İletişim Bilgileri
                </h2>

                <div className="space-y-6">
                  {/* Telefon - Ofis */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Ofis Telefonu
                      </h3>
                      <a
                        href={`tel:${PHONE_OFFICE}`}
                        className="text-primary-600 hover:text-primary-700 font-semibold text-lg"
                      >
                        {formatPhoneNumber(PHONE_OFFICE)}
                      </a>
                    </div>
                  </div>

                  {/* Telefon - Müşteri */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Müşteri Hattı
                      </h3>
                      <a
                        href={`tel:${PHONE_CUSTOMER}`}
                        className="text-primary-600 hover:text-primary-700 font-semibold text-lg"
                      >
                        {formatPhoneNumber(PHONE_CUSTOMER)}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        WhatsApp İletişim
                      </h3>
                      <a
                        href={getWhatsAppLink(
                          PHONE_OFFICE,
                          'Merhaba, emlak hakkında bilgi almak istiyorum.'
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                      >
                        WhatsApp\'tan Mesaj Gönder
                      </a>
                    </div>
                  </div>

                  {/* Adres */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Adres</h3>
                      <p className="text-gray-700">
                        Gemlik, Bursa
                        <br />
                        Türkiye
                      </p>
                    </div>
                  </div>

                  {/* Çalışma Saatleri */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Çalışma Saatleri
                      </h3>
                      <p className="text-gray-700">
                        Pazartesi - Cumartesi: 09:00 - 19:00
                        <br />
                        Pazar: Randevu ile
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emlak Danışmanı */}
              <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Emlak Danışmanınız</h2>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                    RK
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Rasim Kılıç</h3>
                    <p className="text-primary-100">Emlak Danışmanı</p>
                  </div>
                </div>
                <p className="text-primary-50 mb-4">
                  15 yıllık deneyimle Gemlik bölgesinde güvenilir emlak
                  danışmanlığı hizmeti sunuyorum. Hayalinizdeki eve kavuşmanız
                  için buradayım.
                </p>
                <a
                  href={`tel:${PHONE_OFFICE}`}
                  className="block bg-white text-primary-700 font-semibold py-3 px-6 rounded-lg text-center hover:bg-primary-50 transition-colors"
                >
                  Hemen Ara
                </a>
              </div>
            </div>

            {/* İletişim Formu */}
            <div>
              <LeadForm />
            </div>
          </div>

          {/* Harita */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Konum
            </h2>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=29.1%2C40.4%2C29.2%2C40.5&layer=mapnik&marker=40.43%2C29.15"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Gemlik Haritası"
              />
            </div>
            <p className="text-sm text-gray-600 mt-4">
              <MapPin className="w-4 h-4 inline mr-1" />
              Gemlik, Bursa - Tüm mahallerde hizmet veriyoruz
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
