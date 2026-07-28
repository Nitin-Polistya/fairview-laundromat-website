import { trustItems } from '../data/trust';

export default function TrustStrip() {
  return (
    <section className="bg-pale-teal/50 py-10 px-4 sm:px-6 lg:px-8" aria-labelledby="trust-heading">
      <h2 id="trust-heading" className="sr-only">At a glance</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {trustItems.map((item) => (
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
