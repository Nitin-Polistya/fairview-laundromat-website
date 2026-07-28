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
import Reveal from './components/Reveal';

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <AnnouncementBar />
      <Header />
      <main id="main-content" className="focus:outline-none">
        <Reveal><Hero /></Reveal>
        <Reveal delay={40}><TrustStrip /></Reveal>
        <Reveal><About /></Reveal>
        <Reveal delay={40}><Services /></Reveal>
        <Reveal><Machines /></Reveal>
        <Reveal delay={40}><PaymentOptions /></Reveal>
        <Reveal><Amenities /></Reveal>
        <Reveal delay={40}><WhyChooseFairview /></Reveal>
        <Reveal><Gallery /></Reveal>
        <Reveal delay={40}><ReviewThemes /></Reveal>
        <Reveal><HoursAndPolicies /></Reveal>
        <Reveal delay={40}><FAQ /></Reveal>
        <Reveal><Location /></Reveal>
        <Reveal delay={40}><FinalCTA /></Reveal>
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
