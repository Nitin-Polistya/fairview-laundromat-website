import SectionHeading from './SectionHeading';
import ResponsiveImage from './ResponsiveImage';
import { aboutImage } from '../data/images';

export default function About() {
  return (
    <section id="about" className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading label="ABOUT FAIRVIEW" heading="A Cleaner, Easier Laundry Day" />
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="space-y-5 text-text-secondary text-base leading-relaxed">
          <p>
            Publicly available business information lists Fairview Laundromat at
            22229 Lorain Road in Fairview Park and indicates that the facility is open
            24 hours daily.
          </p>
          <p>
            Machines in multiple sizes are available for everyday clothing, bedding,
            and other bulky items. Wi-Fi, on-site parking, air conditioning, and
            laundry supplies are listed among the facility amenities. Customer feedback
            commonly mentions cleanliness.
          </p>
          <p>
            Payment options listed for the facility include coins, cards, laundry cards,
            and available contactless options. Prices, settings, and current availability
            are displayed inside the laundromat.
          </p>
        </div>
        <ResponsiveImage
          image={aboutImage}
          className="aspect-[4/3] shadow-lg"
        />
      </div>
    </section>
  );
}
