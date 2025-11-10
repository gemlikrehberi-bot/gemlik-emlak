import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import { createFAQSchema } from '@/lib/jsonld';
import { mockGeneralFAQs } from '@/lib/data';
import Breadcrumb from '@/components/Breadcrumb';
import TLDR from '@/components/TLDR';
import FAQ from '@/components/FAQ';
import ContactBlock from '@/components/ContactBlock';

export const metadata: Metadata = createMetadata({
  title: 'Sıkça Sorulan Sorular - Gemlik Satılık Daire Hakkında Her Şey',
  description:
    'Gemlik satılık daire fiyatları, tapu işlemleri, konut kredisi, deprem riski, aidat ücretleri ve daha fazlası hakkında en çok sorulan soruların cevapları.',
  path: '/sss',
  keywords: [
    'gemlik satılık daire sss',
    'gemlik emlak soruları',
    'gemlik tapu işlemleri',
    'gemlik konut kredisi',
  ],
});

// Ek kategorilere göre SSS
const additionalFAQs = [
  {
    question: 'Gemlik\'te deniz manzaralı daire fiyatları normal dairelere göre ne kadar daha yüksek?',
    answer:
      'Gemlik\'te deniz manzaralı daireler, manzarasız dairelere göre ortalama %20-30 daha yüksek fiyatlanmaktadır. Kurşunlu ve Kumla bölgelerinde deniz manzarası primini daha yoğun görmek mümkündür. Örneğin manzarasız bir 3+1 daire 2.000.000 TL ise, aynı özelliklerde deniz manzaralı daire 2.400.000-2.600.000 TL civarında olabilir.',
  },
  {
    question: 'Gemlik\'te site içi mi yoksa site dışı daire almak daha mantıklı?',
    answer:
      'Site içi dairelerde güvenlik, otopark, ortak alanlar gibi avantajlar vardır ancak aylık aidat ödenir (500-1500 TL). Site dışı dairelerde aidat yoktur ancak bu imkanlardan yararlanamazsınız. Güvenlik ve sosyal donatı önceliğinizse site içi, bütçe önceliğinizse site dışı tercih edilebilir.',
  },
  {
    question: 'Gemlik\'te satılık daire için pazarlık yapılabilir mi?',
    answer:
      'Evet, Gemlik emlak piyasasında pazarlık yapmak normaldir. İlan fiyatının %3-8 arası pazarlık marjı olabilir. Ancak bu tamamen satıcının durumuna, piyasa koşullarına ve dairenin özelliklerine bağlıdır. Acil satan birinden daha fazla indirim alınabilir.',
  },
  {
    question: 'Gemlik\'te ev alırken noter masrafları ne kadardır?',
    answer:
      'Noter masrafları satış bedelinin yaklaşık %0,1-0,2\'si civarındadır. Örneğin 2.000.000 TL\'lik bir daire için noter masrafı 2.000-4.000 TL arasında olabilir. Bunun yanında tapu harçları (satış bedelinin %4\'ü, alıcı-satıcı eşit paylaşır) ve KDV (varsa) de eklenir.',
  },
  {
    question: 'Gemlik\'te satılık daire için sözleşme ne zaman yapılmalı?',
    answer:
      'Taraflar anlaştıktan sonra noter satış sözleşmesi (ön alım sözleşmesi) düzenlenmelidir. Bu sözleşmede kapora tutarı (genellikle satış bedelinin %10\'u), ödeme planı, teslim tarihi gibi detaylar belirtilir. Tapu devri öncesi bu sözleşme hukuki güvence sağlar.',
  },
  {
    question: 'Gemlik\'te satılık dairelerde ısıtma maliyetleri ne kadar?',
    answer:
      'Gemlik\'te genellikle kombi ile ısıtma yapılmaktadır. Ortalama 100 m² bir daire için aylık doğalgaz faturası kış aylarında 1.500-2.500 TL civarındadır. Yerden ısıtmalı ve iyi yalıtımlı dairelerde bu maliyet daha düşüktür. Klimalı dairelerde elektrik faturası artar.',
  },
  {
    question: 'Gemlik\'te yabancı uyruklu kişiler ev satın alabilir mi?',
    answer:
      'Evet, yabancı uyruklu kişiler Gemlik\'te ev satın alabilir. Ancak bazı özel izinler ve belgeler gerekebilir. Askeri bölgelere yakın yerlerde kısıtlamalar olabilir. Detaylı bilgi için Tapu Müdürlüğü veya profesyonel bir emlak danışmanına danışmanız önerilir.',
  },
  {
    question: 'Gemlik\'te emlak vergisi ne kadar?',
    answer:
      'Emlak vergisi dairenin emlak beyan değerine göre hesaplanır. 2025 yılı için konut emlak vergisi oranı binde 2 ile binde 6 arasında değişmektedir. Ortalama 2.000.000 TL değerindeki bir daire için yıllık emlak vergisi yaklaşık 2.000-4.000 TL civarındadır ve iki taksitte ödenir.',
  },
  {
    question: 'Gemlik\'te satılık daire kiralama getirisi ne kadar?',
    answer:
      'Gemlik\'te kiralama getirisi ortalama %4-6 arasındadır. Örneğin 2.000.000 TL\'ye aldığınız bir daireyi aylık 7.000-10.000 TL\'ye kiralayabilirsiniz. Yazlık bölgelerde (Kumla) yaz aylarında kısa süreli kiralama ile daha yüksek getiri elde edilebilir.',
  },
  {
    question: 'Gemlik\'te satılık daire için hangi bankalar konut kredisi veriyor?',
    answer:
      'Tüm büyük bankalar (Ziraat Bankası, Halkbank, Vakıfbank, İş Bankası, Garanti BBVA, Yapı Kredi, Akbank vb.) Gemlik\'te konut kredisi vermektedir. Faiz oranları ve kredi koşulları bankaya göre değişir. En az 3 bankadan teklif alarak karşılaştırma yapmanız önerilir.',
  },
];

const allFAQs = [...mockGeneralFAQs, ...additionalFAQs];

export default function SSS() {
  const faqSchema = createFAQSchema(allFAQs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Breadcrumb items={[{ name: 'Sıkça Sorulan Sorular', url: '/sss' }]} />

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sıkça Sorulan Sorular
          </h1>
          <p className="text-lg text-gray-700 mb-12">
            Gemlik satılık daire, emlak alım-satım süreci, fiyatlar, tapu
            işlemleri, konut kredisi ve daha fazlası hakkında en çok merak
            edilen soruların cevapları burada.
          </p>

          {/* TL;DR */}
          <TLDR
            title="En Çok Sorulan 3 Soru - Hızlı Cevaplar"
            points={[
              'Gemlik satılık daire fiyatları 2025\'te 980.000 TL - 5.000.000 TL arasında (mahalle ve özelliklere göre)',
              'Tapu devir işlemleri Gemlik Tapu Müdürlüğü\'nde aynı gün tamamlanabilir, harç %4 (alıcı-satıcı eşit paylaşır)',
              'Konut kredisi tüm bankalardan alınabilir, oran %2-3 arası değişir, kredi tutarı konut değerinin %80\'i',
            ]}
            highlight="15 yıllık deneyimimizle tüm sorularınızı cevaplıyoruz. Detaylı bilgi için bizimle iletişime geçin."
          />

          {/* FAQ */}
          <FAQ
            faqs={allFAQs}
            title="Gemlik Satılık Daire Hakkında Tüm Sorular"
          />

          {/* Ek Bilgi */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Sorunuza Cevap Bulamadınız mı?
            </h2>
            <p className="text-gray-700 mb-6">
              Aklınıza takılan başka sorular varsa, bizimle iletişime geçmekten
              çekinmeyin. Emlak konusundaki her türlü sorunuzu
              cevaplayabiliriz.
            </p>
            <ContactBlock
              title="Sorularınızı Bize Sorun"
              subtitle="15 yıllık deneyimimizle size yardımcı olmaktan mutluluk duyarız."
            />
          </div>
        </div>
      </div>
    </>
  );
}
