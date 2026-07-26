import SectionHeading from './SectionHeading';
import ResponsiveImage from './ResponsiveImage';
import { aboutImage } from '../data/images';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading label="ABOUT FAIRVIEW" heading="A Cleaner, Easier Laundry Day" />
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="space-y-5 text-text-secondary text-base leading-relaxed">
          <p>
            Fairview Laundromat has been serving Fairview Park and the surrounding
            communities with reliable self-service laundry for years. Located at 22229
            Lorain Road, our facility is open 24 hours a day, 7 days a week — so you
            can do laundry whenever it works best for you.
          </p>
          <p>
            Our machines are clean, well-maintained, and available in multiple sizes
            to handle everything from everyday clothing to bulky bedding and comforters.
            With free Wi-Fi, on-site parking, air conditioning, and a bright, welcoming
            environment, we aim to make your laundry routine as comfortable and
            convenient as possible.
          </p>
          <p>
            Whether you prefer coins, credit cards, laundry cards, or contactless
            payment, we offer flexible options to suit your needs. Stop in any time —
            day or night — and experience a cleaner, easier laundry day.
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
