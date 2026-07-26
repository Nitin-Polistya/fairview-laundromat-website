import { business } from './business';

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Machines', href: '#machines' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Location', href: '#location' },
];

export const callAction = {
  label: 'Call',
  href: business.phoneHref,
};

export const directionsAction = {
  label: 'Get Directions',
  href: business.directionsUrl,
};
