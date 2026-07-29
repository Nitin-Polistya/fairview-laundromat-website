import { Clock, Shirt, CreditCard, Wifi } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface TrustItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const trustItems: TrustItem[] = [
  {
    icon: Clock,
    title: 'Open 24 hours daily',
    description: 'The listed schedule supports visits throughout the day.',
  },
  {
    icon: Shirt,
    title: 'Multiple machine sizes',
    description: 'Options are available for everyday and bulkier loads.',
  },
  {
    icon: CreditCard,
    title: 'Several payment options',
    description: 'Public listings mention coins, cards, laundry cards, and contactless options.',
  },
  {
    icon: Wifi,
    title: 'Useful amenities',
    description: 'Wi-Fi, on-site parking, and laundry supplies are listed amenities.',
  },
];
