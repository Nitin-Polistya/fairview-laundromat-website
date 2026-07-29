import { CheckCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';

const reasons = [
  {
    title: 'Open Around the Clock',
    desc: 'The listed schedule supports laundry visits in the morning, evening, or overnight.',
  },
  {
    title: 'A Frequently Mentioned Strength',
    desc: 'Customer feedback commonly mentions cleanliness.',
  },
  {
    title: 'Options for Larger Loads',
    desc: 'Machines in multiple sizes are available for bedding and other bulky items.',
  },
  {
    title: 'Easy to Find',
    desc: 'The facility is listed at 22229 Lorain Road in Fairview Park.',
  },
  {
    title: 'Several Payment Choices',
    desc: 'Public listings mention coins, cards, laundry cards, and available contactless options.',
  },
  {
    title: 'Straightforward Self-Service',
    desc: 'The facility is presented as a self-service laundromat with on-site machines and supplies.',
  },
];

export default function WhyChooseFairview() {
  return (
    <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 bg-warm-white max-w-7xl mx-auto">
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
