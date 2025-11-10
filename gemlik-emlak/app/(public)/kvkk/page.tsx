import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'KVKK Politikası | Acilden Emlak',
  description: 'Acilden Emlak Kişisel Verilerin Korunması Kanunu (KVKK) politikası',
  robots: {
    index: false,
    follow: true,
  },
};

export default function KVKKPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'KVKK', url: '/kvkk' }]} />

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto prose prose-gray">
          <h1>Kişisel Verilerin Korunması Politikası (KVKK)</h1>

          <p className="lead">
            Son Güncelleme: 15 Ocak 2025
          </p>

          <h2>1. Veri Sorumlusu</h2>
          <p>
            İşbu Kişisel Verilerin Korunması Politikası, 6698 sayılı Kişisel
            Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında Acilden Emlak
            (Rasim Kılıç) tarafından hazırlanmıştır.
          </p>

          <h2>2. İşlenen Kişisel Veriler</h2>
          <p>Aşağıdaki kişisel verileriniz işlenebilir:</p>
          <ul>
            <li>Kimlik Bilgileri (ad, soyad)</li>
            <li>İletişim Bilgileri (telefon, e-posta)</li>
            <li>Müşteri İşlem Bilgileri (talep, şikayet, görüş)</li>
            <li>İşlem Güvenliği Bilgileri (IP adresi, çerez bilgileri)</li>
          </ul>

          <h2>3. Kişisel Verilerin İşlenme Amaçları</h2>
          <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
          <ul>
            <li>Emlak danışmanlık hizmetlerinin sunulması</li>
            <li>Müşteri taleplerine cevap verilmesi</li>
            <li>İletişim faaliyetlerinin yürütülmesi</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            <li>Web sitesi kullanım deneyiminin iyileştirilmesi</li>
          </ul>

          <h2>4. Kişisel Verilerin Aktarılması</h2>
          <p>
            Kişisel verileriniz, yukarıda belirtilen amaçlar doğrultusunda ve
            KVKK&apos;nın 8. ve 9. maddelerinde belirtilen şartlara uygun olarak
            yurt içinde veya yurt dışında bulunan üçüncü kişilere
            aktarılabilir.
          </p>

          <h2>5. Kişisel Verilerin Toplanma Yöntemi</h2>
          <p>Kişisel verileriniz aşağıdaki yöntemlerle toplanmaktadır:</p>
          <ul>
            <li>Web sitesi üzerinden doldurduğunuz formlar</li>
            <li>Telefon görüşmeleri</li>
            <li>E-posta iletişimi</li>
            <li>WhatsApp mesajlaşma</li>
          </ul>

          <h2>6. Kişisel Veri Sahibinin Hakları</h2>
          <p>KVKK&apos;nın 11. maddesi uyarınca, ilgili kişi olarak:</p>
          <ul>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
            <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
            <li>
              İşlenme amacını ve bunların amacına uygun kullanılıp
              kullanılmadığını öğrenme,
            </li>
            <li>
              Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,
            </li>
            <li>
              Eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini
              isteme,
            </li>
            <li>İlgili mevzuatta öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme,</li>
            <li>
              Düzeltme, silme ve yok edilme taleplerinin kişisel verilerin
              aktarıldığı üçüncü kişilere bildirilmesini isteme,
            </li>
            <li>
              İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla
              analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına
              itiraz etme,
            </li>
            <li>
              Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde
              zararın giderilmesini talep etme haklarına sahipsiniz.
            </li>
          </ul>

          <h2>7. İletişim</h2>
          <p>
            Kişisel verileriniz ile ilgili taleplerinizi aşağıdaki iletişim
            bilgileri üzerinden bize iletebilirsiniz:
          </p>
          <p>
            <strong>Acilden Emlak</strong>
            <br />
            Rasim Kılıç
            <br />
            Telefon: 0532 551 71 77
            <br />
            Gemlik, Bursa
          </p>
        </div>
      </div>
    </>
  );
}
