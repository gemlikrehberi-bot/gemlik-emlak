import { HelpCircle } from 'lucide-react';

interface Question {
  question: string;
  answer?: string;
}

interface PeopleAlsoAskProps {
  questions: Question[];
}

/**
 * People Also Ask - GEO optimize
 * AI'ların sevdiği soru-cevap formatı
 */
export default function PeopleAlsoAsk({ questions }: PeopleAlsoAskProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 my-12 border border-blue-100">
      <div className="flex items-center gap-3 mb-6">
        <HelpCircle className="w-8 h-8 text-blue-600" />
        <h3 className="text-2xl font-bold text-gray-900">
          💭 İnsanlar Ayrıca Soruyor
        </h3>
      </div>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-5 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow"
          >
            <p className="font-semibold text-gray-900 mb-2 flex items-start gap-2">
              <span className="text-blue-600 flex-shrink-0">Q:</span>
              <span>{item.question}</span>
            </p>
            {item.answer && (
              <p className="text-gray-700 ml-6 text-sm">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
