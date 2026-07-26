import { Clock, Shirt, CreditCard, Wifi } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface TrustItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const items: TrustItem[] = [
  {
    icon: Clock,
    title: 'Open 24/7',
    description: 'Visit morning, evening, or overnight.',
  },
  {
    icon: Shirt,
    title: 'Large Loads Welcome',
    description: 'Spacious machines for bedding and bulky laundry.',
  },
  {
    icon: CreditCard,
    title: 'Flexible Payments',
    description: 'Use coins, cards, laundry cards, or contactless payment.',
  },
  {
    icon: Wifi,
    title: 'Convenient Amenities',
    description: 'Free Wi-Fi, on-site parking, and laundry supplies.',
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-pale-teal/50 py-12 px-4 sm:px-6 lg:px-8" aria-labelledby="trust-heading">
      <h2 id="trust-heading" className="sr-only">What We Offer</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <div key={item.title} className="flex gap-4 items-start">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
              <item.icon className="w-6 h-6 text-teal" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-navy mb-1">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
