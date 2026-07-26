import { MapPin, Phone, Clock } from 'lucide-react';
import Logo from './Logo';
import { business, fullAddress } from '../data/business';
import { navLinks, callAction, directionsAction } from '../data/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white/80 py-12 px-4 sm:px-6 lg:px-8" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <Logo compact />
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal shrink-0" aria-hidden="true" />
                <span>{fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal shrink-0" aria-hidden="true" />
                <a href={business.phoneHref} className="hover:text-white transition-colors">
                  {business.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal shrink-0" aria-hidden="true" />
                <span>Open 24/7</span>
              </div>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Quick Links</h4>
            <nav className="flex flex-col gap-1.5" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Actions */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Contact</h4>
            <div className="flex flex-col gap-2">
              <a
                href={callAction.href}
                className="text-sm hover:text-white transition-colors"
              >
                {callAction.label}: {business.phone}
              </a>
              <a
                href={directionsAction.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-white transition-colors"
              >
                {directionsAction.label}
              </a>
            </div>
          </div>
        </div>

        <hr className="border-white/20 mb-6" />

        <p className="text-xs text-white/60 leading-relaxed mb-4 max-w-3xl">
          {business.disclaimer}
        </p>
        <p className="text-xs text-white/60">
          Website demonstration &copy; {currentYear} Nitin Sharma.
        </p>
      </div>
    </footer>
  );
}
