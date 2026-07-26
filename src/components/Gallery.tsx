import SectionHeading from './SectionHeading';
import ResponsiveImage from './ResponsiveImage';
import { images } from '../data/images';

export default function Gallery() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading heading="Take a Look Inside" />
      <p className="text-center text-text-secondary max-w-2xl mx-auto mb-12">
        Get a feel for our bright, clean facility. From our large-capacity washers and
        dryers to the folding area and payment stations, everything is designed for a
        comfortable laundry experience.
      </p>
      {/* Desktop layout: featured image + grid */}
      <div className="hidden md:grid grid-cols-3 gap-4">
        <div className="col-span-2 row-span-2">
          <ResponsiveImage image={images[0]} className="aspect-[16/10] h-full shadow-md" />
        </div>
        <ResponsiveImage image={images[1]} className="aspect-square shadow-md" />
        <ResponsiveImage image={images[2]} className="aspect-square shadow-md" />
        <ResponsiveImage image={images[3]} className="aspect-square shadow-md" />
        <ResponsiveImage image={images[4]} className="aspect-square shadow-md" />
      </div>
      {/* Mobile layout: swipeable scrollable row */}
      <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
        {images.map((img) => (
          <div key={img.path} className="snap-center shrink-0 w-[280px]">
            <ResponsiveImage image={img} className="aspect-[4/3] w-[280px] shadow-md" />
          </div>
        ))}
      </div>
    </section>
  );
}
