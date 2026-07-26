import { business } from '../data/business';
import { directionsAction } from '../data/navigation';

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-navy text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Get Laundry Done?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
          Stop in any time — Fairview Laundromat is open 24/7 with clean machines,
          flexible payment options, and everything you need for a smooth laundry day.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={directionsAction.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-accent-yellow text-navy font-bold text-base hover:bg-accent-yellow/90 transition-colors min-h-[48px]"
          >
            {directionsAction.label}
          </a>
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-navy transition-colors min-h-[48px]"
          >
            Call {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
