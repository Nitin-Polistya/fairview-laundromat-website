import { CheckCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';

const reasons = [
  {
    title: 'Open Around the Clock',
    desc: 'No time restrictions — do laundry on your schedule, whether early morning or late at night.',
  },
  {
    title: 'Clean and Well Maintained',
    desc: 'Our machines and facility are regularly cleaned and kept in good working order.',
  },
  {
    title: 'Built for Large Loads',
    desc: 'Spacious machines accommodate comforters, blankets, bedding, and family-sized loads.',
  },
  {
    title: 'Easy to Reach',
    desc: 'Located on Lorain Road in Fairview Park with quick access from surrounding neighborhoods.',
  },
  {
    title: 'Modern Payment Choices',
    desc: 'Pay with coins, credit cards, laundry cards, or contactless — whatever is convenient for you.',
  },
  {
    title: 'Longstanding Local Service',
    desc: 'A familiar part of the Fairview Park community, serving customers for years.',
  },
];

export default function WhyChooseFairview() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-warm-white max-w-7xl mx-auto">
      <SectionHeading heading="Why Local Customers Choose Fairview" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r) => (
          <div key={r.title} className="flex gap-4 items-start">
            <CheckCircle className="w-6 h-6 text-teal shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="font-bold text-navy mb-1">{r.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
