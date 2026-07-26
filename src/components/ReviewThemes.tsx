import { Heart } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { directionsAction } from '../data/navigation';

const themes = [
  { title: 'Clean Facility', desc: 'Customers frequently mention the clean, well-maintained environment inside the laundromat.' },
  { title: 'Convenient Hours', desc: 'The 24/7 schedule is consistently highlighted as a major convenience.' },
  { title: 'Large-Load Machines', desc: 'Reviewers appreciate the availability of machines that handle bulky items and large loads.' },
  { title: 'Bright Environment', desc: 'Customers comment on the well-lit, bright interior that makes the space feel safe and welcoming.' },
  { title: 'Flexible Payments', desc: 'Multiple payment options — cards, coins, and contactless — are noted as a helpful feature.' },
];

export default function ReviewThemes() {
  return (
    <section id="reviews" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading heading="What Customers Appreciate" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {themes.map((theme) => (
          <div
            key={theme.title}
            className="bg-white rounded-2xl border border-border p-6 shadow-sm"
          >
            <Heart className="w-8 h-8 text-teal/40 mb-4" aria-hidden="true" />
            <h3 className="font-bold text-navy mb-2">{theme.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{theme.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-text-secondary text-sm italic mb-6">
        Based on recurring themes in publicly available customer feedback.
      </p>
      <div className="text-center">
        <a
          href={directionsAction.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-xl border-2 border-teal text-teal font-semibold hover:bg-teal hover:text-white transition-colors"
        >
          View on Google Maps
        </a>
      </div>
    </section>
  );
}
