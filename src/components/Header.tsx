import { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { navLinks, callAction, directionsAction } from '../data/navigation';
import { business } from '../data/business';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuBtnRef.current?.focus();
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && menuOpen) {
        closeMenu();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen, closeMenu]);

  // Focus trap
  useEffect(() => {
    if (!menuOpen || !drawerRef.current) return;
    const drawer = drawerRef.current;
    const focusable = drawer.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    function trap(e: KeyboardEvent) {
      if (e.key !== 'Tab') return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    }
    document.addEventListener('keydown', trap);
    first?.focus();
    return () => document.removeEventListener('keydown', trap);
  }, [menuOpen]);

  return (
    <header
      className="sticky top-0 z-50 bg-white border-b border-border"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0" aria-label="Fairview Laundromat home">
            <Logo compact />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-teal transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href={directionsAction.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full bg-teal text-white text-sm font-semibold hover:bg-teal/90 transition-colors"
            >
              {directionsAction.label}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={menuBtnRef}
            className="md:hidden p-2 rounded-lg hover:bg-pale-teal/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="w-6 h-6 text-navy" /> : <Menu className="w-6 h-6 text-navy" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl transform transition-transform duration-200 md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <Logo compact />
          <button
            onClick={closeMenu}
            className="p-2 rounded-lg hover:bg-pale-teal/50"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-navy" />
          </button>
        </div>
        <nav className="flex flex-col p-4 gap-2" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-base font-medium text-text-secondary hover:text-teal py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <hr className="my-2 border-border" />
          <a
            href={callAction.href}
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-navy text-white font-semibold hover:bg-navy/90 transition-colors"
          >
            Call {business.phone}
          </a>
          <a
            href={directionsAction.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-teal text-white font-semibold hover:bg-teal/90 transition-colors"
          >
            {directionsAction.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
