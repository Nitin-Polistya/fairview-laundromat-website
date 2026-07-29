import SectionHeading from './SectionHeading';
import ResponsiveImage from './ResponsiveImage';
import { images } from '../data/images';

export default function Gallery() {
  return (
    <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading heading="Take a Look Inside" />
      <p className="text-center text-text-secondary max-w-2xl mx-auto mb-10 text-base leading-relaxed">
        Explore the storefront, interior, and laundry equipment through these supplied
        photographs of the facility.
      </p>
      {/* Desktop layout: featured image + grid */}
      <div className="hidden lg:grid grid-cols-4 gap-4">
        <div className="col-span-2 row-span-2">
          <ResponsiveImage image={images[0]} className="aspect-[16/10] h-full shadow-md" />
        </div>
        <ResponsiveImage image={images[1]} className="aspect-square shadow-md" />
        <ResponsiveImage image={images[2]} className="aspect-square shadow-md" />
        <ResponsiveImage image={images[3]} className="aspect-square shadow-md" />
        <ResponsiveImage image={images[4]} className="aspect-square shadow-md" />
      </div>
      {/* Tablet layout */}
      <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4">
        {images.map((img) => (
          <ResponsiveImage key={img.path} image={img} className="aspect-[4/3] shadow-md" />
        ))}
      </div>
      {/* Mobile layout */}
      <div className="sm:hidden grid grid-cols-1 gap-4">
        {images.map((img) => (
          <ResponsiveImage key={img.path} image={img} className="aspect-[4/3] shadow-md" />
        ))}
      </div>
    </section>
  );
}
