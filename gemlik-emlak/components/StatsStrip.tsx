import { Home, TrendingUp, MapPin, Users } from 'lucide-react';

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface StatsStripProps {
  stats?: Stat[];
}

/**
 * İstatistik Şeridi - Trust signals için
 */
export default function StatsStrip({ stats }: StatsStripProps) {
  const defaultStats: Stat[] = [
    {
      icon: <Home className="w-8 h-8" />,
      value: '250+',
      label: 'Aktif İlan',
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: '1500+',
      label: 'Mutlu Müşteri',
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      value: '15+',
      label: 'Hizmet Bölgesi',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: '%98',
      label: 'Memnuniyet Oranı',
    },
  ];

  const displayStats = stats || defaultStats;

  return (
    <div className="bg-white border-y border-gray-200 py-8">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {displayStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-primary-600 mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
