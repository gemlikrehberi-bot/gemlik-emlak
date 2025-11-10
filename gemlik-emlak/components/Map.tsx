'use client';

import { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

interface MapProps {
  lat: number;
  lng: number;
  title?: string;
  zoom?: number;
}

/**
 * Map Komponenti - Google Maps benzeri basit harita
 * Production'da Google Maps API entegre edilecek
 */
export default function Map({ lat, lng, title, zoom = 15 }: MapProps) {
  const mapRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Production'da buraya Google Maps SDK entegre edilecek
    // Şimdilik placeholder gösteriyoruz
  }, [lat, lng, zoom]);

  return (
    <div className="relative w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden">
      {/* Placeholder harita */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <p className="text-gray-700 font-semibold mb-2">
            {title || 'Konum'}
          </p>
          <p className="text-sm text-gray-600">
            Koordinatlar: {lat.toFixed(4)}, {lng.toFixed(4)}
          </p>
          <p className="text-xs text-gray-500 mt-4">
            Google Maps entegrasyonu için API key gereklidir
          </p>
        </div>
      </div>

      {/* OpenStreetMap iframe alternatifi */}
      <iframe
        ref={mapRef}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.01}%2C${lat - 0.01}%2C${lng + 0.01}%2C${lat + 0.01}&layer=mapnik&marker=${lat}%2C${lng}`}
        title={title || 'Konum Haritası'}
      />
    </div>
  );
}
