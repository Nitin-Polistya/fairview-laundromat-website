import { Check } from 'lucide-react';
import { business } from '../data/business';
import { heroImage } from '../data/images';
import { directionsAction } from '../data/navigation';
import { trustItems } from '../data/trust';
import ResponsiveImage from './ResponsiveImage';

export default function Hero() {
  return (
    <section id="home" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Text column */}
        <div>
          <p className="text-teal-dark text-sm font-semibold tracking-widest uppercase mb-4">
            {business.hoursLabel}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy leading-tight mb-6">
            Clean Laundry, Any Time of Day
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-lg">
            Fairview Laundromat offers self-service laundry at {business.address.street}
            in {business.address.city}. Machines in multiple sizes are available for
            everyday laundry, bedding, and bulkier items.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href={directionsAction.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-teal-dark text-white font-semibold text-base hover:bg-teal-dark/90 transition-colors min-h-12"
            >
              {directionsAction.label}
            </a>
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border-2 border-navy text-navy font-semibold text-base hover:bg-navy hover:text-white transition-colors min-h-12"
            >
              Call {business.phone}
            </a>
          </div>

          {/* Trust items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
            {trustItems.slice(0, 3).map((item) => (
              <div key={item.title} className="flex items-center gap-2 text-sm text-text-secondary">
                <Check className="w-4 h-4 text-teal shrink-0" aria-hidden="true" />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image column */}
        <div className="relative">
          <ResponsiveImage
            image={heroImage}
            className="aspect-[4/3] md:aspect-[3/4] shadow-xl"
            priority
          />
          {/* Badge pills */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-semibold text-navy shadow-md">
            Self-service laundry
          </div>
          <div className="absolute bottom-4 right-4 bg-teal-dark text-white rounded-full px-4 py-2 text-xs font-semibold shadow-md">
            {business.hoursLabel}
          </div>
        </div>
      </div>
    </section>
  );
}
