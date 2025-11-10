import { Info } from 'lucide-react';

interface TLDRProps {
  title: string;
  points: string[];
  highlight?: string;
}

/**
 * TL;DR Kutusu - Generative Engine Optimization için
 * Her sayfanın başında net, kısa yanıt
 */
export default function TLDR({ title, points, highlight }: TLDRProps) {
  return (
    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 border-l-4 border-primary-500 rounded-lg p-6 mb-8">
      <div className="flex items-start gap-3">
        <Info className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>
          <ul className="space-y-2">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary-600 font-bold">•</span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
          {highlight && (
            <div className="mt-4 bg-white rounded-md p-3 border border-primary-200">
              <p className="text-sm font-semibold text-primary-700">
                ⭐ {highlight}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
