export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: 'open-24-hours',
    question: 'Is Fairview Laundromat open 24 hours?',
    answer:
      'Publicly listed hours indicate that Fairview Laundromat is open 24 hours daily, including weekends and holidays.',
  },
  {
    id: 'payment-methods',
    question: 'What payment methods are accepted?',
    answer:
      'Payment options listed for the facility include coins, cards, laundry cards, and available contactless payment options.',
  },
  {
    id: 'comforters',
    question: 'Can I wash a comforter?',
    answer:
      'Machines in multiple sizes are available, including larger washers intended for comforters, blankets, and other bulky items.',
  },
  {
    id: 'wifi',
    question: 'Is Wi-Fi available?',
    answer:
      'Wi-Fi is listed as an available amenity for customers during a visit.',
  },
  {
    id: 'parking',
    question: 'Is parking available?',
    answer:
      'On-site parking is listed as available for customers.',
  },
  {
    id: 'laundry-supplies',
    question: 'Can I buy detergent there?',
    answer:
      'Laundry supplies, including detergent and bleach, may be available from on-site vending machines.',
  },
  {
    id: 'restroom-hours',
    question: 'When is the restroom available?',
    answer:
      'Restroom hours are normally 6:00 a.m. to 10:00 p.m. The laundromat itself remains open 24 hours.',
  },
  {
    id: 'laundry-carts',
    question: 'Can carts go to the parking lot?',
    answer:
      'For cleanliness and availability, please keep laundry carts inside the facility.',
  },
  {
    id: 'attendant-availability',
    question: 'Is an attendant always present?',
    answer:
      'Attendant availability may vary depending on the time of day. Some periods may be unattended, but the laundromat remains open 24 hours.',
  },
  {
    id: 'card-authorization',
    question: 'Why does my card show a larger pending amount?',
    answer:
      'Card transactions may display a temporary pending authorization while your bank verifies the payment. The pending amount is not necessarily the final laundry charge.',
  },
  {
    id: 'machine-prices',
    question: 'What are current machine prices?',
    answer:
      'Machine prices are displayed on each machine inside the laundromat and vary by washer or dryer size and cycle type.',
  },
];
