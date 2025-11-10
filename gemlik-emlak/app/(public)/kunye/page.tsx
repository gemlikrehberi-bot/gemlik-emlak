import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Künye | Acilden Emlak',
  description: 'Acilden Emlak web sitesi künye bilgileri',
  robots: {
    index: false,
    follow: true,
  },
};

export default function KunyePage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Künye', url: '/kunye' }]} />

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto prose prose-gray">
          <h1>Künye</h1>

          <h2>İşletme Bilgileri</h2>
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>Ticaret Unvanı:</strong>
                </td>
                <td>Acilden Emlak</td>
              </tr>
              <tr>
                <td>
                  <strong>Yetkili Kişi:</strong>
                </td>
                <td>Rasim Kılıç</td>
              </tr>
              <tr>
                <td>
                  <strong>Faaliyet Konusu:</strong>
                </td>
                <td>Emlak Danışmanlığı</td>
              </tr>
              <tr>
                <td>
                  <strong>Adres:</strong>
                </td>
                <td>Gemlik, Bursa, Türkiye</td>
              </tr>
              <tr>
                <td>
                  <strong>Telefon:</strong>
                </td>
                <td>0532 551 71 77</td>
              </tr>
              <tr>
                <td>
                  <strong>Müşteri Hattı:</strong>
                </td>
                <td>0507 882 48 40</td>
              </tr>
            </tbody>
          </table>

          <h2>Web Sitesi Bilgileri</h2>
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>Site Adı:</strong>
                </td>
                <td>Acilden Emlak - Gemlik Satılık Daire</td>
              </tr>
              <tr>
                <td>
                  <strong>Alan Adı:</strong>
                </td>
                <td>gemlikemlak.com (örnek)</td>
              </tr>
              <tr>
                <td>
                  <strong>İçerik Sorumlusu:</strong>
                </td>
                <td>Rasim Kılıç</td>
              </tr>
            </tbody>
          </table>

          <h2>Hizmet Bölgeleri</h2>
          <ul>
            <li>Gemlik merkez ve tüm mahalleleri</li>
            <li>Kurşunlu</li>
            <li>Umurbey</li>
            <li>Kumla</li>
            <li>Cumhuriyet</li>
            <li>Hisar</li>
            <li>Ve diğer tüm Gemlik mahalleleri</li>
          </ul>

          <h2>Hizmetlerimiz</h2>
          <ul>
            <li>Satılık daire ve ev danışmanlığı</li>
            <li>Fiyat değerlendirme</li>
            <li>Tapu işlemleri desteği</li>
            <li>Konut kredisi danışmanlığı</li>
            <li>Emlak yatırım danışmanlığı</li>
            <li>Satış ve pazarlama hizmetleri</li>
          </ul>

          <h2>Yasal Uyarı</h2>
          <p>
            Bu web sitesinde yer alan tüm içerik, görseller ve bilgiler Acilden
            Emlak&apos;a aittir. İzinsiz kopyalanması, çoğaltılması veya başka
            platformlarda kullanılması yasaktır.
          </p>
          <p>
            Web sitesinde yer alan emlak ilanları güncel olmayabilir. Kesin
            bilgi için lütfen bizimle iletişime geçiniz.
          </p>

          <h2>Telif Hakları</h2>
          <p>
            © 2025 Acilden Emlak. Tüm hakları saklıdır.
          </p>

          <h2>İletişim</h2>
          <p>
            Künye bilgileri ile ilgili sorularınız için:
            <br />
            Telefon: 0532 551 71 77
            <br />
            Müşteri Hattı: 0507 882 48 40
          </p>
        </div>
      </div>
    </>
  );
}
