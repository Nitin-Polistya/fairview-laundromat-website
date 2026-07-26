import { Phone, MapPin } from 'lucide-react';
import { business } from '../data/business';
import { directionsAction } from '../data/navigation';

export default function MobileActionBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex shadow-lg"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a
        href={business.phoneHref}
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-navy text-white font-semibold text-sm hover:bg-navy/90 transition-colors min-h-[56px]"
        aria-label={`Call ${business.phone}`}
      >
        <Phone className="w-5 h-5" aria-hidden="true" />
        Call
      </a>
      <a
        href={directionsAction.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-teal text-white font-semibold text-sm hover:bg-teal/90 transition-colors min-h-[56px]"
        aria-label="Get Directions"
      >
        <MapPin className="w-5 h-5" aria-hidden="true" />
        Directions
      </a>
    </div>
  );
}
