import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import About from './components/About';
import Services from './components/Services';
import Machines from './components/Machines';
import PaymentOptions from './components/PaymentOptions';
import Amenities from './components/Amenities';
import WhyChooseFairview from './components/WhyChooseFairview';
import Gallery from './components/Gallery';
import ReviewThemes from './components/ReviewThemes';
import HoursAndPolicies from './components/HoursAndPolicies';
import FAQ from './components/FAQ';
import Location from './components/Location';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <AnnouncementBar />
      <Header />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Machines />
        <PaymentOptions />
        <Amenities />
        <WhyChooseFairview />
        <Gallery />
        <ReviewThemes />
        <HoursAndPolicies />
        <FAQ />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <MobileActionBar />
      {/* Bottom padding for mobile action bar */}
      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  );
}
