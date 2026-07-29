import { useState, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { faqs } from '../data/faq';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section id="faq" className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading heading="Frequently Asked Questions" />
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq) => {
          const triggerId = `faq-trigger-${faq.id}`;
          const panelId = `faq-panel-${faq.id}`;
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm"
            >
              <button
                id={triggerId}
                type="button"
                onClick={() => toggle(faq.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-navy hover:bg-pale-teal/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-dark focus-visible:ring-inset rounded-2xl min-h-14"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-teal shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                hidden={!isOpen}
                className="border-t border-border"
              >
                <div className="overflow-hidden">
                  <p className="px-6 py-4 text-text-secondary text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
