import { MapPin, Phone, Clock } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { business, fullAddress, mapsEmbedUrl } from '../data/business';
import { directionsAction } from '../data/navigation';

export default function Location() {
  return (
    <section id="location" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading heading="Conveniently Located on Lorain Road" />
      <p className="text-center text-text-secondary max-w-2xl mx-auto mb-12">
        We're easy to find at 22229 Lorain Road in Fairview Park, Ohio. Stop in any
        time — we're open 24/7 with free on-site parking.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Address card */}
        <div className="bg-white rounded-2xl border border-border p-8 shadow-sm flex flex-col justify-center">
          <h3 className="text-xl font-bold text-navy mb-4">{business.name}</h3>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-teal shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-text-secondary">{fullAddress}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-teal shrink-0" aria-hidden="true" />
              <a href={business.phoneHref} className="text-text-secondary hover:text-teal transition-colors">
                {business.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-teal shrink-0" aria-hidden="true" />
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal/10 text-teal text-sm font-semibold">
                Open 24 hours
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={directionsAction.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-teal text-white font-semibold text-sm hover:bg-teal/90 transition-colors min-h-[48px]"
            >
              Get Directions
            </a>
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl border-2 border-navy text-navy font-semibold text-sm hover:bg-navy hover:text-white transition-colors min-h-[48px]"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-sm border border-border">
          <iframe
            src={mapsEmbedUrl}
            title={`Map showing ${business.name} at ${fullAddress}`}
            width="100%"
            height="350"
            className="w-full"
            loading="lazy"
            allowFullScreen
          />
          <div className="p-3 text-center">
            <a
              href={directionsAction.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal text-sm font-medium hover:underline"
            >
              View larger map on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
