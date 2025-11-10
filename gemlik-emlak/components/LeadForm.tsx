'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

interface LeadFormProps {
  listingId?: string;
  listingTitle?: string;
}

/**
 * Lead Form - Potansiyel müşteri formu
 */
export default function LeadForm({ listingId, listingTitle }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simüle edilmiş API çağrısı
    setTimeout(() => {
      console.log('Form submitted:', { ...formData, listingId, listingTitle });
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Bilgi Talep Formu
      </h3>
      <p className="text-gray-600 mb-6">
        Detaylı bilgi almak için formu doldurun, size en kısa sürede dönüş yapalım.
      </p>

      {submitStatus === 'success' && (
        <div className="mb-6 bg-green-50 border border-green-200 text-green-800 rounded-lg p-4">
          ✓ Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-800 rounded-lg p-4">
          ✗ Bir hata oluştu. Lütfen tekrar deneyin.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Adınız Soyadınız *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="input-field"
            placeholder="Adınızı girin"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefon Numaranız *
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="input-field"
            placeholder="0532 XXX XX XX"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-posta Adresiniz
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="input-field"
            placeholder="ornek@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Mesajınız *
          </label>
          <textarea
            id="message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="input-field resize-none"
            placeholder="Mesajınızı yazın..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            'Gönderiliyor...'
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Formu Gönder
            </>
          )}
        </button>

        <p className="text-xs text-gray-500 text-center">
          Formun gönderilmesi ile{' '}
          <a href="/kvkk" className="text-primary-600 hover:underline">
            KVKK
          </a>{' '}
          ve{' '}
          <a href="/aydinlatma" className="text-primary-600 hover:underline">
            Aydınlatma Metni
          </a>
          &apos;ni kabul etmiş olursunuz.
        </p>
      </form>
    </div>
  );
}
