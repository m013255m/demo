import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { FaqItem } from '../../types/seo';

interface FaqSectionProps {
  title?: string;
  subtitle?: string;
  items: FaqItem[];
  enableSchema?: boolean;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  title = 'الأسئلة الشائعة حول خدمات التسويق والأرشفة وتصدر نتائج البحث',
  subtitle = 'إجابات تقنية ومالية صريحة من خبراء شركة ديمو حول تكاليف الحملات الإعلانية، آليات الأرشفة السريعة في جوجل، وضمان العائد على الإنفاق.',
  items,
  enableSchema = false,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="relative border-b border-neutral-200 bg-neutral-50/70 py-20 lg:py-28 overflow-hidden">
      {/* Ambient subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-amber-400/5 blur-3xl pointer-events-none" />

      {enableSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 border-b border-amber-500/40 pb-1 text-xs font-bold uppercase tracking-wider text-amber-700 font-arabic">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            <span>الشفافية الهندسية والتجارية لشركائنا</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl font-display leading-tight">
            {title}
          </h2>
          <p className="text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed font-arabic">
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const itemNumber = (index + 1).toString().padStart(2, '0');
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-amber-400/70 bg-white shadow-lg shadow-neutral-200/50'
                    : 'border-neutral-200 bg-white hover:border-neutral-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between text-right p-5 sm:p-6 transition-colors focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 text-right">
                    <span className="font-mono text-xs font-bold text-amber-600 shrink-0">
                      {itemNumber}
                    </span>
                    <span className="font-arabic font-bold text-neutral-900 text-base sm:text-lg leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
                      isOpen
                        ? 'border-amber-400 bg-amber-50 text-amber-700 rotate-180'
                        : 'border-neutral-200 bg-neutral-50 text-neutral-500'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed text-neutral-600 font-arabic border-t border-neutral-100 animate-in fade-in slide-in-from-top-2 duration-200">
                    <p className="pl-6">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support callout with phone number 01060474659 */}
        <div className="mt-12 text-center space-y-2">
          <p className="text-sm text-neutral-600 font-arabic">
            لديك استفسار خاص بنشاطك التجاري أو ميزانيتك الإعلانية؟{' '}
            <a
              href="tel:+201060474659"
              className="text-amber-700 font-bold hover:text-amber-800 underline underline-offset-4 decoration-amber-500/40 transition-colors"
            >
              اتصل مباشرة على الرقم 01060474659
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
