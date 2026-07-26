export interface ImageConfig {
  path: string;
  alt: string;
  label: string;
}

export const images: ImageConfig[] = [
  {
    path: '/images/fairview-laundromat-storefront-night.jpg',
    alt: 'Fairview Laundromat storefront at night on Lorain Road',
    label: 'Storefront',
  },
  {
    path: '/images/fairview-laundromat-interior-wide.jpg',
    alt: 'Bright interior of Fairview Laundromat with washers and dryers',
    label: 'Interior',
  },
  {
    path: '/images/fairview-laundromat-large-washers.jpg',
    alt: 'Large-capacity commercial washers at Fairview Laundromat',
    label: 'Large Washers',
  },
  {
    path: '/images/fairview-laundromat-dryers.jpg',
    alt: 'Commercial dryers at Fairview Laundromat',
    label: 'Dryers',
  },
  {
    path: '/images/fairview-laundromat-payment-area.jpg',
    alt: 'Payment kiosk and laundry card station at Fairview Laundromat',
    label: 'Payment Area',
  },
  {
    path: '/images/fairview-laundromat-folding-area.jpg',
    alt: 'Folding tables and laundry carts at Fairview Laundromat',
    label: 'Folding Area',
  },
];

export const heroImage = images[0]; // storefront night
export const aboutImage = images[1]; // interior wide
export const machinesImage = images[2]; // large washers
