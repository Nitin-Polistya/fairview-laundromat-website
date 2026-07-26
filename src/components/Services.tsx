import SectionHeading from './SectionHeading';
import { services } from '../data/services';

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading heading="Laundry Options for Every Load" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow motion-safe:hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-pale-teal/50 flex items-center justify-center mb-4">
              <service.icon className="w-6 h-6 text-teal" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-navy text-lg mb-2">{service.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
