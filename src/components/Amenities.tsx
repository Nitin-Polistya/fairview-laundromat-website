import SectionHeading from './SectionHeading';
import { amenities } from '../data/amenities';

export default function Amenities() {
  return (
    <section id="amenities" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading heading="Comfort and Convenience While You Wash" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {amenities.map((item) => (
          <div key={item.name} className="flex gap-4 items-start">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
              <item.icon className="w-5 h-5 text-teal" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-semibold text-navy text-sm mb-1">{item.name}</h3>
              <p className="text-text-secondary text-xs leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
