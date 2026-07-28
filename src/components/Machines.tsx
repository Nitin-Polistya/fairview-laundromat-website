import { Check } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ResponsiveImage from './ResponsiveImage';
import { machinesImage } from '../data/images';

const features = [
  'Machine sizes for everyday and bulkier load types',
  'Larger washers for comforters, blankets, and bedding',
  'Self-service washers and dryers with controls on each machine',
  'Prices and availability displayed inside the laundromat',
];

export default function Machines() {
  return (
    <section id="machines" className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading heading="More Room for Bigger Loads" />
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <ul className="space-y-4 mb-6">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-teal shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-text-secondary">{feature}</span>
              </li>
            ))}
          </ul>
          <p className="text-text-secondary italic text-sm">
            Machine availability, settings, and pricing are displayed inside the laundromat.
          </p>
        </div>
        <ResponsiveImage image={machinesImage} className="aspect-[4/3] shadow-lg" />
      </div>
    </section>
  );
}
