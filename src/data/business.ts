export const business = {
  name: 'Fairview Laundromat',
  descriptor: 'Self-Service Laundry',
  phone: '(440) 734-9855',
  phoneHref: 'tel:+14407349855',
  address: {
    street: '22229 Lorain Road',
    city: 'Fairview Park',
    state: 'OH',
    zip: '44126',
  },
  hoursLabel: 'Open 24 hours daily',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Fairview+Laundromat%2C+22229+Lorain+Road%2C+Fairview+Park%2C+OH+44126',
  disclaimer:
    'Demo Website — Created by Nitin Sharma. This is an unofficial demonstration and is not affiliated with, authorized by, or endorsed by Fairview Laundromat. Business information is based on publicly available sources and may change.',
} as const;

export const fullAddress = `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`;

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(`${business.name}, ${fullAddress}`)}&output=embed`;
