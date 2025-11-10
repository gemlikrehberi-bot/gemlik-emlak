'use client';

import { Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

const PHONE_OFFICE = process.env.NEXT_PUBLIC_PHONE_OFFICE || '05325517177';

/**
 * Sticky Call Button - Mobil CRO optimizasyonu
 */
export default function StickyCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 300px scroll sonrası göster
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden animate-slide-up">
      <a
        href={`tel:${PHONE_OFFICE}`}
        className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl flex items-center gap-2 transition-all hover:scale-110 active:scale-95"
        aria-label="Hemen Ara"
      >
        <Phone className="w-6 h-6 animate-pulse" />
        <span className="font-bold text-sm">Hemen Ara</span>
      </a>
    </div>
  );
}
