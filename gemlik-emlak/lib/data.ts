import { Listing, Neighborhood, FAQ } from './types';

/**
 * Mock Listing Data - 5 örnek ilan
 */
export const mockListings: Listing[] = [
  {
    id: '1',
    title: 'Gemlik Kurşunlu\'da Deniz Manzaralı Lüks 3+1 Satılık Daire',
    slug: 'gemlik-kursunlu-deniz-manzarali-lux-3-1-satilik-daire',
    priceTRY: 2850000,
    areaM2: 135,
    rooms: '3+1',
    floor: '4/6',
    heating: 'Kombi (Doğalgaz)',
    buildingAge: 3,
    address: {
      district: 'Gemlik',
      neighborhood: 'Kurşunlu',
      street: 'Sahil Caddesi',
    },
    geo: {
      lat: 40.4319,
      lng: 29.1555,
    },
    images: [
      '/images/listings/placeholder.svg',
      '/images/listings/placeholder.svg',
      '/images/listings/placeholder.svg',
    ],
    publishedAt: '2025-01-15T10:00:00+03:00',
    description:
      'Kurşunlu mahallesi Sahil Caddesi üzerinde konumlanmış, tam deniz manzaralı lüks 3+1 dairemiz satılıktır. 135 metrekare net kullanım alanına sahip dairede geniş salon, özel mutfak, 3 yatak odası ve 2 banyo bulunmaktadır. Bina 2022 yılında inşa edilmiş olup deprem yönetmeliğine uygun, sağlam temel ve kaliteli malzeme ile yapılmıştır. Daire 4. katta olup asansör mevcuttur. Kombi ile ısınma sağlanmakta, doğalgaz altyapısı tam olarak döşenmiştir. Her odadan deniz manzarası izlenebilmektedir. Geniş balkonlar sayesinde ferah bir yaşam alanı sunmaktadır. Site içerisinde 7/24 güvenlik, açık otopark, çocuk oyun alanı ve peyzaj düzenlemesi mevcuttur. Kumla sahiline yürüme mesafesinde, markete 2 dakika, hastaneye 5 dakika uzaklıktadır. Tapu devir işlemlerine hazır, kredi çekimi yapılabilir. Gemlik merkezine 10 dakika, Bursa\'ya 35 dakika mesafededir. İhtiyacınıza uygun ödeme planları mevcuttur.',
    features: [
      'Asansör',
      'Kapalı Otopark',
      'Güvenlik',
      'Çocuk Oyun Alanı',
      'Deniz Manzarası',
      'Geniş Balkon',
      'Doğalgaz Altyapısı',
      'Deprem Yönetmeliğine Uygun',
      'Peyzaj Alanı',
      'Merkezi Sistem',
    ],
  },
  {
    id: '2',
    title: 'Gemlik Umurbey\'de Merkezi Konumda Satılık 2+1 Daire',
    slug: 'gemlik-umurbey-merkezi-konumda-satilik-2-1-daire',
    priceTRY: 1650000,
    areaM2: 95,
    rooms: '2+1',
    floor: '2/5',
    heating: 'Kombi',
    buildingAge: 8,
    address: {
      district: 'Gemlik',
      neighborhood: 'Umurbey',
      street: 'Atatürk Caddesi',
    },
    geo: {
      lat: 40.4285,
      lng: 29.1489,
    },
    images: ['/images/listings/placeholder.svg', '/images/listings/placeholder.svg'],
    publishedAt: '2025-01-12T14:30:00+03:00',
    description:
      'Umurbey mahallesinin en merkezi konumunda, Atatürk Caddesi üzerinde 2+1 dairemiz acil satılıktır. 95 metrekare kullanım alanına sahip, geniş salon, mutfak, 2 yatak odası ve 1 banyo içermektedir. Bina 2017 yılında yapılmış olup sağlam yapıya sahiptir. Daire 2. katta, asansör bulunmaktadır. Kombi ile ısınma, her odaya kalorifer petekleri döşenmiştir. Umurbey merkez camisine 3 dakika, pazar yerine 2 dakika, okullara yürüme mesafesindedir. Belediye hizmet binası, sağlık ocağı, market ve eczane çok yakındır. Toplu taşımaya kolay erişim imkanı vardır. Bursa yolu üzerinde olduğu için şehir içi ve şehirlerarası ulaşım son derece rahattır. İmar durumu nettir, tapuda herhangi bir şerh veya ipotek yoktur. Takas teklifleri değerlendirilir. Ailelere uygun, temiz, bakımlı ve kullanıma hazır bir dairedir.',
    features: [
      'Asansör',
      'Kombi',
      'Merkezi Konum',
      'Okullara Yakın',
      'Toplu Taşımaya Yakın',
      'Market Yakını',
      'Bakımlı',
      'Geniş Salon',
    ],
  },
  {
    id: '3',
    title: 'Gemlik Cumhuriyet Mahallesi\'nde Satılık 4+1 Dubleks Daire',
    slug: 'gemlik-cumhuriyet-mahallesi-satilik-4-1-dubleks-daire',
    priceTRY: 3200000,
    areaM2: 170,
    rooms: '4+1',
    floor: '5-6/6',
    heating: 'Yerden Isıtma',
    buildingAge: 2,
    address: {
      district: 'Gemlik',
      neighborhood: 'Cumhuriyet',
      street: 'İnönü Bulvarı',
    },
    geo: {
      lat: 40.4298,
      lng: 29.1512,
    },
    images: [
      '/images/listings/placeholder.svg',
      '/images/listings/placeholder.svg',
      '/images/listings/placeholder.svg',
      '/images/listings/placeholder.svg',
    ],
    publishedAt: '2025-01-10T09:15:00+03:00',
    description:
      'Cumhuriyet mahallesinde yeni nesil mimarisi ile dikkat çeken binada 4+1 çatı dubleks dairemiz satılıktır. 170 metrekare net kullanım alanı, geniş teras, panoramik şehir ve deniz manzarası sunan özel bir konuttur. Alt katta geniş salon, mutfak, misafir odası ve banyo; üst katta 3 yatak odası, ana banyo ve giyinme odası bulunmaktadır. Yerden ısıtma sistemi ile donatılmış, akıllı ev teknolojileri entegre edilmiştir. Özel otopark, depo alanı, güvenlik kamerası mevcuttur. Bina 2023 yılında teslim edilmiş olup sıfır ayarında, lüks mobilyalı veya boş olarak teslim edilebilir. Çatı terasında barbekü alanı ve kış bahçesi mevcuttur. Gemlik\'in en prestijli lokasyonlarından biri olan Cumhuriyet mahallesinde, okul, hastane, alışveriş merkezi ve tüm sosyal donatılara yakındır. Lüks ve konforlu bir yaşam arayanlar için ideal bir seçenektir.',
    features: [
      'Dubleks',
      'Çatı Katı',
      'Geniş Teras',
      'Yerden Isıtma',
      'Akıllı Ev Sistemi',
      'Panoramik Manzara',
      'Özel Otopark',
      'Depo',
      'Lüks',
      'Sıfır Bina',
      'Barbekü Alanı',
      'Giyinme Odası',
    ],
  },
  {
    id: '4',
    title: 'Gemlik Kumla\'da Sahile Sıfır Satılık 2+1 Yazlık Daire',
    slug: 'gemlik-kumla-sahile-sifir-satilik-2-1-yazlik-daire',
    priceTRY: 2100000,
    areaM2: 85,
    rooms: '2+1',
    floor: 'Zemin',
    heating: 'Klima',
    buildingAge: 12,
    address: {
      district: 'Gemlik',
      neighborhood: 'Kumla',
      street: 'Sahil Yolu',
    },
    geo: {
      lat: 40.4356,
      lng: 29.1623,
    },
    images: ['/images/listings/placeholder.svg', '/images/listings/placeholder.svg'],
    publishedAt: '2025-01-08T16:45:00+03:00',
    description:
      'Kumla sahilinde, denize sıfır konumda zemin kat 2+1 yazlık dairemiz satılıktır. 85 metrekare kullanım alanına sahip, geniş bahçe kullanımı mevcuttur. Daire doğrudan denize açılmakta, özel plaj kullanımı bulunmaktadır. Salon, mutfak, 2 yatak odası ve banyodan oluşmaktadır. Yazlık amaçlı kullanım için idealdir ancak kış aylarında da yaşanabilir konforttadır. Klima ile ısınma-soğutma yapılmaktadır. Bina 2013 yılında inşa edilmiş, düzenli bakımı yapılmaktadır. Site dışı müstakil binadadır ancak güvenli bir bölgedir. Kumla plajlarına yürüme mesafesinde, deniz kenarında yürüyüş yapılabilecek kıyı parkuru mevcuttur. Deniz sporları, balık restoranları ve kafeler hemen yakındadır. Gemlik merkeze 8 dakika uzaklıktadır. İstanbul\'a 1,5 saat, Bursa\'ya 30 dakika mesafededir. Yaz tatili, emeklilik veya yatırım amaçlı için değerlendirilmesi gereken bir fırsattır.',
    features: [
      'Sahile Sıfır',
      'Özel Plaj',
      'Bahçe Kullanımı',
      'Deniz Manzarası',
      'Klima',
      'Yazlık',
      'Zemin Kat',
      'Doğrudan Deniz Erişimi',
    ],
  },
  {
    id: '5',
    title: 'Gemlik Kurşunlu\'da Yeni Binada Satılık 1+1 Stüdyo Daire',
    slug: 'gemlik-kursunlu-yeni-binada-satilik-1-1-studyo-daire',
    priceTRY: 1250000,
    areaM2: 55,
    rooms: '1+1',
    floor: '3/8',
    heating: 'Kombi',
    buildingAge: 1,
    address: {
      district: 'Gemlik',
      neighborhood: 'Kurşunlu',
      street: 'Yeni Mahalle Sokak',
    },
    geo: {
      lat: 40.4305,
      lng: 29.1543,
    },
    images: ['/images/listings/placeholder.svg'],
    publishedAt: '2025-01-05T11:20:00+03:00',
    description:
      'Kurşunlu mahallesinde 2024 yılında tamamlanmış modern binada 1+1 dairemiz satılıktır. 55 metrekare kullanım alanı ile ilk ev alacaklar, genç çiftler veya yatırım amaçlı değerlendirilmek üzere ideal bir seçenektir. Açık mutfaklı salon, yatak odası ve banyo bulunmaktadır. Bina sıfır olup tüm iç-dış cephe işleri tamamlanmıştır. Kombi ile ısınma, yerden ısıtma altyapısı mevcuttur. Daire 3. katta, asansör vardır. Site içerisinde güvenlik, kapalı otopark ve ortak alan bulunmaktadır. Gemlik merkeze 5 dakika, sahile 10 dakika yürüme mesafesindedir. Alışveriş merkezleri, market, okul ve hastaneye yakın konumdadır. Tapu işlemleri hazır, kredi uygun, sıfır KDV avantajı mevcuttur. Kiralama getirisi yüksek bir lokasyondadır. Modern yaşam alanları arayanlar için fırsat niteliğindedir.',
    features: [
      'Sıfır Bina',
      'Asansör',
      'Kapalı Otopark',
      'Güvenlik',
      'Kombi',
      'Açık Mutfak',
      'Merkeze Yakın',
      'Yatırımlık',
      'Sıfır KDV',
    ],
  },
  {
    id: '6',
    title: 'Gemlik Hisar Mahallesi\'nde Bahçeli 3+1 Müstakil Ev',
    slug: 'gemlik-hisar-bahceli-3-1-mustakil-ev',
    priceTRY: 3650000,
    areaM2: 145,
    rooms: '3+1',
    floor: 'Dublex',
    heating: 'Kombi + Şömine',
    buildingAge: 6,
    address: {
      district: 'Gemlik',
      neighborhood: 'Hisar',
      street: 'Mersin Sokak',
    },
    geo: {
      lat: 40.4247,
      lng: 29.1582,
    },
    images: [
      '/images/listings/placeholder.svg',
      '/images/listings/placeholder.svg',
      '/images/listings/placeholder.svg',
    ],
    publishedAt: '2025-01-20T09:30:00+03:00',
    description:
      'Gemlik Hisar mahallesinde sessiz, yeşil bir sokakta yer alan dubleks 3+1 müstakil evimiz satıştadır. 145 m² net kullanım alanı, 70 m² bakımlı bahçesi ve kapalı garajı bulunan mülk, aile yaşamı için ideal bir konfor sunar. Alt katta geniş salon, şömineli oturma alanı ve ayrı mutfak; üst katta 3 yatak odası ve 2 banyo mevcuttur. Kombi ile ısınma sağlanmakta olup salon şöminesi ekstra ısı ve atmosfer sağlar. Şehir merkezine araçla 5 dakika, sahile 3 dakika mesafede yer alır. Ev, deprem yönetmeliğine uygun olarak inşa edilmiştir ve krediye uygundur. Mutfak ankastreleri, klima ve güvenlik sistemi dahildir.',
    features: [
      'Müstakil dubleks',
      'Şömineli salon',
      'Bakımlı bahçe',
      'Kapalı garaj',
      'Güvenlik sistemi',
      'Ankastre mutfak',
      'Klima',
      'Krediye uygun',
      'Sahil yakın',
    ],
  },
];

/**
 * Mock Neighborhood Data - 3 örnek mahalle
 */
export const mockNeighborhoods: Neighborhood[] = [
  {
    slug: 'kursunlu',
    name: 'Kurşunlu',
    title: 'Gemlik Kurşunlu Satılık Daire ve Emlak İlanları',
    description:
      'Kurşunlu mahallesi Gemlik\'in en gelişmiş ve prestijli bölgelerinden biridir. Deniz manzarası, modern konutlar ve sosyal donatılarıyla öne çıkar.',
    overview:
      'Kurşunlu, Gemlik ilçesinin merkez mahallelerinden olup denize sıfır konumu ile dikkat çeker. Bölgede son yıllarda artan kentsel dönüşüm projeleri sayesinde modern konut siteleri inşa edilmiştir. Deniz manzaralı dairelerin yoğun olduğu bölge, hem kalıcı yaşam hem de yazlık amaçlı tercih edilmektedir. Sosyal donatı alanları açısından zengin olan mahallede okullar, sağlık merkezleri, alışveriş merkezleri ve parklar bulunmaktadır. Kumla sahillerine yürüme mesafesinde olması, bölgenin en büyük avantajlarından biridir. Gemlik merkez camiye 5 dakika, Bursa-Yalova karayoluna 3 dakika uzaklıktadır. Toplu taşıma imkanları geniştir, belediye otobüsleri ve minibüsler düzenli sefer yapmaktadır. Deprem risk analizlerinde orta-düşük risk grubunda yer almakta olup zemin etütleri düzenli yapılmaktadır.',
    priceRange: {
      min: 1250000,
      max: 3500000,
    },
    features: [
      'Denize sıfır konum',
      'Modern konut siteleri',
      'Sosyal donatı alanları',
      'Toplu taşıma imkanı',
      'Kumla sahillerine yakın',
      'Merkezi konum',
      'Deprem risk yönetimi',
      'Kentsel dönüşüm alanı',
    ],
    transportation: [
      'Belediye otobüsü (her 15 dakikada)',
      'Minibüs hatları',
      'Gemlik merkeze 5 dakika',
      'Bursa-Yalova karayolu 3 dakika',
      'İstanbul\'a 1,5 saat',
      'Bursa\'ya 35 dakika',
    ],
    schools: [
      'Kurşunlu İlkokulu',
      'Atatürk Ortaokulu',
      'Gemlik Anadolu Lisesi',
      'Özel kreş ve anaokulu seçenekleri',
    ],
    hospitals: [
      'Gemlik Devlet Hastanesi (7 dakika)',
      'Özel sağlık merkezleri',
      'Aile sağlığı merkezi',
    ],
    marketplaces: [
      'Migros',
      'Carrefour',
      'Bim, A101, Şok',
      'Kurşunlu Halk Pazarı (Cumartesi)',
      'Yerel marketler',
    ],
    distanceToSea: '~500m',
    population: 8200,
    seismicInfo:
      'Orta-düşük deprem riski. Zemin etütleri düzenli yapılmaktadır. 2023 sonrası yapılar yeni deprem yönetmeliğine uygundur.',
  },
  {
    slug: 'umurbey',
    name: 'Umurbey',
    title: 'Gemlik Umurbey Satılık Daire ve Emlak İlanları',
    description:
      'Umurbey mahallesi Gemlik\'in merkez konumunda, uygun fiyatlı konut seçenekleri ve sosyal yaşamın yoğun olduğu bir bölgedir.',
    overview:
      'Umurbey, Gemlik\'in en eski ve en kalabalık mahallelerinden biridir. Bursa-Yalova karayolu üzerinde konumlanmış olması nedeniyle ulaşım son derece kolaydır. Bölgede hem eski yapılar hem de yeni inşa edilen modern binalar bulunmaktadır. Gemlik merkez camii, belediye hizmet binası, pazar yeri ve esnaf lokalleri Umurbey\'de yoğunlaşmıştır. Bu nedenle sosyal yaşam canlı, her türlü ihtiyaca hızlı ulaşım mümkündür. Fiyat açısından Kurşunlu ve Kumla\'ya göre daha uygundur. Özellikle 2+1 ve 3+1 daire arayanlar için geniş seçenekler mevcuttur. Toplu taşıma çok yoğundur, her noktaya kolayca ulaşılabilir. Okullar, hastaneler ve marketler yürüme mesafesindedir. Ailelerin yoğun tercih ettiği bir bölge olup kiralık daire talebi de yüksektir. Deprem riski düşük seviyede olup imar planları günceldir.',
    priceRange: {
      min: 980000,
      max: 2500000,
    },
    features: [
      'Merkezi konum',
      'Uygun fiyatlar',
      'Yoğun toplu taşıma',
      'Sosyal yaşam merkezi',
      'Belediye hizmetlerine yakın',
      'Pazar yeri',
      'Okullar yakın',
      'Geniş konut seçenekleri',
    ],
    transportation: [
      'Bursa-Yalova karayolu üzerinde',
      'Belediye otobüsü (7/24)',
      'Minibüs hatları',
      'Gemlik merkeze 2 dakika',
      'Bursa\'ya 30 dakika',
      'İstanbul\'a 1,5 saat',
    ],
    schools: [
      'Umurbey İlkokulu',
      'Gemlik Anadolu Lisesi',
      'Mesleki ve Teknik Anadolu Lisesi',
      'İmam Hatip Ortaokulu',
    ],
    hospitals: [
      'Gemlik Devlet Hastanesi (5 dakika)',
      'Aile sağlığı merkezi',
      'Özel muayenehaneler',
    ],
    marketplaces: [
      'Carrefour',
      'Migros',
      'Bim, A101, Şok',
      'Umurbey Pazar Yeri (Cuma)',
      'Lokal esnaf dükkanları',
    ],
    distanceToSea: '~1.5km',
    population: 12500,
    seismicInfo:
      'Düşük deprem riski. İmar planları güncellenmiştir. Kentsel dönüşüm projeleri devam etmektedir.',
  },
  {
    slug: 'cumhuriyet',
    name: 'Cumhuriyet',
    title: 'Gemlik Cumhuriyet Mahallesi Satılık Daire ve Emlak İlanları',
    description:
      'Cumhuriyet mahallesi Gemlik\'in prestijli ve lüks konutların bulunduğu, sosyal donatı alanları bakımından zengin bir bölgedir.',
    overview:
      'Cumhuriyet mahallesi, Gemlik\'in prestij bölgelerinden biridir. Yüksek gelir grubuna hitap eden lüks konut projeleri ve geniş metrekareli daireler bölgenin karakteristik özelliğidir. Bölgede müstakil villalar, dublex daireler ve site içi konutlar bulunmaktadır. Gemlik Belediyesi\'nin düzenlediği park ve yeşil alanlar, sosyal tesis projeleri Cumhuriyet mahallesinde yoğunlaşmaktadır. Deniz manzaralı geniş bulvarlar, modern mimarisi ile dikkat çeken binalar ve düzenli kaldırımlar bölgenin öne çıkan özellikleridir. Okullar, sağlık merkezleri, alışveriş merkezleri ve spor tesisleri eksiksiz mevcuttur. Güvenlik kamerası ile izlenen sokaklar, güvenli yaşam alanı sunar. Denize uzaklık ortalama 1 km olup yürüyüş ve bisiklet parkurları mevcuttur. Gemlik\'in en yüksek fiyatlı konutları bu bölgede yer almaktadır ancak kalite ve konfor da buna paralel olarak üst seviyededir.',
    priceRange: {
      min: 2200000,
      max: 5000000,
    },
    features: [
      'Lüks konut siteleri',
      'Prestijli bölge',
      'Geniş yeşil alanlar',
      'Modern mimari',
      'Güvenli sokaklar',
      'Yüksek yaşam kalitesi',
      'Sosyal tesisler',
      'Müstakil villa seçenekleri',
    ],
    transportation: [
      'Belediye otobüsü',
      'Minibüs hatları',
      'Gemlik merkeze 7 dakika',
      'Bursa\'ya 35 dakika',
      'İstanbul\'a 1,5 saat',
      'Özel servis imkanları',
    ],
    schools: [
      'Cumhuriyet İlkokulu',
      'Özel okullar',
      'Gemlik Anadolu Lisesi',
      'Özel dershaneler',
    ],
    hospitals: [
      'Gemlik Devlet Hastanesi (10 dakika)',
      'Özel hastane',
      'Özel sağlık merkezleri',
    ],
    marketplaces: [
      'Migros',
      'Carrefour',
      'Bim, A101, Şok',
      'Cumhuriyet Pazarı (Pazar)',
      'Şarküteri ve özel marketler',
    ],
    distanceToSea: '~1km',
    population: 6800,
    seismicInfo:
      'Düşük deprem riski. Tüm yeni yapılar güncel deprem yönetmeliğine uygun olarak inşa edilmektedir.',
  },
];

/**
 * Mock FAQ Data - Genel SSS
 */
export const mockGeneralFAQs: FAQ[] = [
  {
    question: 'Gemlik\'te satılık daire fiyatları ne kadar?',
    answer:
      'Gemlik satılık daire fiyatları 2025 yılı itibarıyla mahalle, metrekare, bina yaşı ve deniz manzarası gibi faktörlere göre değişmektedir. Umurbey\'de 2+1 daireler ortalama 1.000.000-1.800.000 TL, Kurşunlu\'da deniz manzaralı 3+1 daireler 2.500.000-3.500.000 TL, Cumhuriyet mahallesinde lüks konutlar ise 3.000.000-5.000.000 TL arasında değişmektedir. Detaylı fiyat bilgisi için ilanlarımızı inceleyebilir veya bizimle iletişime geçebilirsiniz.',
  },
  {
    question: 'Gemlik\'te hangi mahalleler daha uygun fiyatlı?',
    answer:
      'Gemlik\'te en uygun fiyatlı konut seçenekleri Umurbey mahallesinde bulunmaktadır. Umurbey merkezi konumu ve ulaşım kolaylığı sayesinde tercih edilen ancak Kurşunlu ve Kumla\'ya göre daha uygun fiyatlı bir bölgedir. İlk ev alacaklar ve bütçe dostu seçenekler arayanlar için ideal bir mahallemizdir. 2+1 daireler 1.000.000 TL civarından başlamaktadır.',
  },
  {
    question: 'Gemlik\'te deniz manzaralı daireler hangi bölgelerde?',
    answer:
      'Gemlik\'te deniz manzaralı daireler en yoğun olarak Kurşunlu ve Kumla mahallelerinde bulunmaktadır. Kurşunlu Sahil Caddesi üzerindeki binalar doğrudan deniz manzaralıdır. Kumla bölgesi sahile sıfır olup tüm konutlar deniz kenarındadır. Cumhuriyet mahallesinin bazı bölümlerinde de yüksek katlardan deniz manzarası alınabilmektedir. Deniz manzaralı daireler genellikle %20-30 daha yüksek fiyatlanmaktadır.',
  },
  {
    question: 'Gemlik\'te ev alırken deprem riski nasıl öğrenilir?',
    answer:
      'Gemlik genel olarak orta-düşük deprem risk bölgesinde yer almaktadır. Ev alırken binanın deprem yönetmeliğine uygunluğunu, zemin etüt raporunu ve yapı ruhsatını kontrol etmeniz önemlidir. 2018 sonrası yapılan binalar güncel deprem yönetmeliğine uygundur. Ayrıca AFAD\'ın deprem risk haritalarından bölgenin zemin yapısını inceleyebilirsiniz. Acilden Emlak olarak size detaylı bilgi sunuyoruz.',
  },
  {
    question: 'Gemlik\'te tapu devir işlemleri nasıl yapılır?',
    answer:
      'Gemlik\'te tapu devir işlemleri Gemlik Tapu Müdürlüğü\'nde yapılmaktadır. Satıcı ve alıcı nüfus cüzdanı, tapu belgesi, ikamet belgesi ve noter satış sözleşmesi ile başvurur. Tapu harcı, KDV (varsa) ve noter masrafları alıcı tarafından ödenir. İşlemler genellikle aynı gün tamamlanır. Acilden Emlak olarak tüm tapu işlemlerinizde size rehberlik ediyoruz.',
  },
  {
    question: 'Gemlik\'te konut kredisi ile ev alınabilir mi?',
    answer:
      'Evet, Gemlik\'teki tüm emlaklar için konut kredisi kullanılabilir. Bankalar genellikle konut değerinin %80\'ine kadar kredi vermektedir. Kredi faiz oranları bankalara göre değişmektedir. İlk ev alıcıları için daha uygun faiz oranları ve sıfır KDV avantajı bulunmaktadır. Kredi başvurunuz için size en uygun banka ve koşulları bulmanıza yardımcı oluyoruz.',
  },
  {
    question: 'Gemlik\'te yazlık ev almak mantıklı mı?',
    answer:
      'Gemlik, İstanbul ve Bursa\'ya yakınlığı nedeniyle yazlık yatırım için ideal bir lokasyondur. Özellikle Kumla bölgesi sahile sıfır konumu ile yazlık tercih edenler için birebir. Yaz aylarında kiralama getirisi oldukça yüksektir. Ayrıca emeklilik döneminde kalıcı yaşam için de uygun bir şehirdir. Yazlık amaçlı alınan daireler yılın diğer aylarında da kiralanabilmektedir.',
  },
  {
    question: 'Gemlik\'te aidat ücretleri ne kadar?',
    answer:
      'Gemlik\'te site içi konutlarda aidat ücretleri ortalama 500-1500 TL arasında değişmektedir. Site dışı müstakil binalarda aidat bulunmamaktadır. Aidat tutarı sitenin sosyal tesislerine, güvenlik hizmetine, otopark ve ortak alan kullanımına göre belirlenir. Lüks sitelerde havuz, spor salonu gibi imkanlar olduğunda aidat daha yüksek olabilir.',
  },
];

/**
 * Helper fonksiyonlar - veri çekme
 */
export function getListingById(id: string): Listing | undefined {
  return mockListings.find((listing) => listing.id === id);
}

export function getListingBySlug(slug: string): Listing | undefined {
  return mockListings.find((listing) => listing.slug === slug);
}

export function getListingsByNeighborhood(
  neighborhood: string
): Listing[] {
  return mockListings.filter(
    (listing) =>
      listing.address.neighborhood.toLowerCase() ===
      neighborhood.toLowerCase()
  );
}

export function getNeighborhoodBySlug(
  slug: string
): Neighborhood | undefined {
  return mockNeighborhoods.find((n) => n.slug === slug);
}

export function getAllNeighborhoods(): Neighborhood[] {
  return mockNeighborhoods;
}

export function getAllListings(): Listing[] {
  return mockListings;
}
