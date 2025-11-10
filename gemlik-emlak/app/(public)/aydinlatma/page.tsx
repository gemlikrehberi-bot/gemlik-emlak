import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Aydınlatma Metni | Acilden Emlak',
  description: 'Acilden Emlak Kişisel Verilerin İşlenmesi Aydınlatma Metni',
  robots: {
    index: false,
    follow: true,
  },
};

export default function AydinlatmaPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Aydınlatma Metni', url: '/aydinlatma' }]} />

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto prose prose-gray">
          <h1>Kişisel Verilerin İşlenmesi Aydınlatma Metni</h1>

          <p className="lead">
            6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca
            hazırlanmıştır.
          </p>

          <h2>1. Veri Sorumlusunun Kimliği</h2>
          <p>
            Veri Sorumlusu: Acilden Emlak (Rasim Kılıç)
            <br />
            Adres: Gemlik, Bursa
            <br />
            Telefon: 0532 551 71 77
          </p>

          <h2>2. Kişisel Verilerin Hangi Amaçla İşleneceği</h2>
          <p>
            Toplanan kişisel verileriniz, KVKK&apos;nın 5. ve 6. maddelerinde
            belirtilen kişisel veri işleme şartları dahilinde, aşağıdaki
            amaçlarla işlenebilecektir:
          </p>
          <ul>
            <li>
              Emlak danışmanlık hizmetlerinin sunulması ve geliştirilmesi
            </li>
            <li>Müşteri ilişkilerinin yönetimi</li>
            <li>İletişim faaliyetlerinin yürütülmesi</li>
            <li>Müşteri memnuniyeti faaliyetlerinin yürütülmesi</li>
            <li>Talep ve şikayetlerin yanıtlanması</li>
            <li>Yasal düzenlemelere uyum sağlanması</li>
            <li>Web sitesi kullanım deneyiminin iyileştirilmesi</li>
          </ul>

          <h2>3. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h2>
          <p>
            Toplanan kişisel verileriniz, yukarıda belirtilen amaçlar
            doğrultusunda;
          </p>
          <ul>
            <li>
              İş ortaklarımıza (bankalar, noter, tapu müdürlüğü vb.)
            </li>
            <li>Hukuki ve mali danışmanlarımıza</li>
            <li>Yetkili kamu kurum ve kuruluşlarına</li>
            <li>Yasal yükümlülüklerimizi yerine getirmek amacıyla ilgili mercilere</li>
          </ul>
          <p>
            KVKK&apos;nın 8. ve 9. maddelerinde belirtilen kişisel veri işleme
            şartları ve amaçları çerçevesinde aktarılabilecektir.
          </p>

          <h2>4. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
          <p>
            Kişisel verileriniz, web sitesi formları, telefon, e-posta,
            WhatsApp gibi kanallar aracılığıyla sözlü, yazılı veya elektronik
            olarak toplanmaktadır.
          </p>
          <p>
            Kişisel verileriniz, KVKK&apos;nın 5. ve 6. maddelerinde belirtilen;
          </p>
          <ul>
            <li>Açık rızanızın bulunması</li>
            <li>Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması</li>
            <li>Hukuki yükümlülüğün yerine getirilebilmesi</li>
            <li>İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri</li>
          </ul>
          <p>hukuki sebeplerine dayanılarak işlenmektedir.</p>

          <h2>5. Kişisel Veri Sahibinin KVKK 11. Maddesi Uyarınca Hakları</h2>
          <p>
            KVKK&apos;nın 11. maddesi uyarınca, veri sahipleri olarak aşağıdaki
            haklarınız bulunmaktadır:
          </p>
          <ul>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
            <li>
              Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,
            </li>
            <li>
              Kişisel verilerinizin işlenme amacını ve bunların amacına uygun
              kullanılıp kullanılmadığını öğrenme,
            </li>
            <li>
              Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı
              üçüncü kişileri bilme,
            </li>
            <li>
              Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde
              bunların düzeltilmesini isteme,
            </li>
            <li>
              KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel
              verilerinizin silinmesini veya yok edilmesini isteme,
            </li>
            <li>
              Düzeltme, silme ve yok edilme işlemlerinin kişisel verilerinizin
              aktarıldığı üçüncü kişilere bildirilmesini isteme,
            </li>
            <li>
              İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz
              edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz
              etme,
            </li>
            <li>
              Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle
              zarara uğramanız hâlinde zararın giderilmesini talep etme.
            </li>
          </ul>

          <h2>6. Kişisel Veri Sahibinin Haklarını Kullanması</h2>
          <p>
            Yukarıda belirtilen haklarınızı kullanmak için kimliğinizi tespit
            edici gerekli bilgiler ve kullanmak istediğiniz hakkınıza yönelik
            açıklamalarınızla birlikte talebinizi aşağıdaki iletişim
            adreslerine iletebilirsiniz:
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
          <p>
            Talebinizin niteliğine göre en kısa sürede ve en geç 30 (otuz) gün
            içinde ücretsiz olarak yanıtlandırılacaktır. Ancak, işlemin ayrıca
            bir maliyeti gerektirmesi hâlinde, KVKK tarafından belirlenen
            tarifedeki ücret talep edilebilir.
          </p>
        </div>
      </div>
    </>
  );
}
