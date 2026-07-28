export interface ImageConfig {
  path: string;
  alt: string;
  label: string;
  available: boolean;
  width: number;
  height: number;
}

export const images: ImageConfig[] = [
  {
    path: '/images/storefront.jpg',
    alt: 'Fairview Laundromat storefront on Lorain Road',
    label: 'Storefront',
    available: true,
    width: 750,
    height: 1000,
  },
  {
    path: '/images/interior.jpg',
    alt: 'Interior view of Fairview Laundromat with rows of laundry machines',
    label: 'Main Interior',
    available: true,
    width: 750,
    height: 1000,
  },
  {
    path: '/images/interior1.jpg',
    alt: 'Large-capacity washing machines inside Fairview Laundromat',
    label: 'Large Washers',
    available: true,
    width: 1000,
    height: 451,
  },
  {
    path: '/images/interior2.jpg',
    alt: 'Additional view of laundry equipment inside Fairview Laundromat',
    label: 'Laundry Equipment',
    available: true,
    width: 750,
    height: 1000,
  },
  {
    path: '/images/interior3.jpg',
    alt: 'Additional interior view of Fairview Laundromat',
    label: 'Interior Facility',
    available: true,
    width: 750,
    height: 1000,
  },
];

export const heroImage = images[0];
export const aboutImage = images[1];
export const machinesImage = images[2];
