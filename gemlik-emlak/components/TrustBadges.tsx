import { Shield, Award, Users, HeartHandshake } from 'lucide-react';

/**
 * Trust Badges - E-E-A-T ve güven sinyalleri
 */
export default function TrustBadges() {
  const badges = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Güvenli İşlem',
      description: 'Tüm süreçlerde yanınızdayız',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: '15 Yıllık Deneyim',
      description: 'Emlak sektöründe uzman ekip',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: '1500+ Mutlu Müşteri',
      description: 'Binlerce başarılı işlem',
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: 'Müşteri Memnuniyeti',
      description: 'Önceliğimiz sizin memnuniyetiniz',
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Neden Acilden Emlak?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-full mb-4">
                {badge.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{badge.title}</h3>
              <p className="text-sm text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
