import { Heart } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { directionsAction } from '../data/navigation';

const themes = [
  { title: 'Cleanliness', desc: 'Customer feedback commonly mentions cleanliness.' },
  { title: 'Convenient Hours', desc: 'The listed 24-hour schedule is a recurring convenience in public feedback.' },
  { title: 'Larger Machines', desc: 'Reviewers mention machine options for bulky items and larger loads.' },
  { title: 'Bright Interior', desc: 'Feedback references a bright, well-lit interior.' },
  { title: 'Payment Options', desc: 'Public feedback mentions multiple ways to pay where supported.' },
];

export default function ReviewThemes() {
  return (
    <section id="reviews" className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading heading="What Customers Appreciate" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {themes.map((theme) => (
          <div
            key={theme.title}
            className="bg-white rounded-2xl border border-border p-6 shadow-sm"
          >
            <Heart className="w-8 h-8 text-teal/40 mb-4" aria-hidden="true" />
            <h3 className="font-bold text-navy mb-2">{theme.title}</h3>
            <p className="text-text-secondary text-base leading-relaxed">{theme.desc}</p>
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
          className="inline-flex items-center px-6 py-3 rounded-xl border-2 border-teal-dark text-teal-dark font-semibold hover:bg-teal-dark hover:text-white transition-colors min-h-12"
        >
          Get Directions
        </a>
      </div>
    </section>
  );
}
