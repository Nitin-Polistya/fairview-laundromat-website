import { Shirt, Users, Bed, Wind, ShoppingBag, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: ServiceItem[] = [
  {
    icon: Shirt,
    title: 'Everyday Self-Service',
    description:
      'Self-service washers and dryers are available for regular laundry loads.',
  },
  {
    icon: Users,
    title: 'Family-Sized Loads',
    description:
      'Machines in multiple sizes can accommodate larger household loads.',
  },
  {
    icon: Bed,
    title: 'Bedding and Comforters',
    description:
      'Larger machines are available for bedding, blankets, and comforters.',
  },
  {
    icon: Wind,
    title: 'Self-Service Drying',
    description:
      'Self-service dryers are available with settings shown on each machine.',
  },
  {
    icon: ShoppingBag,
    title: 'Laundry Supplies',
    description:
      'Laundry supplies may be available for purchase from on-site vending machines.',
  },
  {
    icon: Clock,
    title: 'Open All Day',
    description:
      'The listed 24-hour schedule supports laundry visits throughout the day and night.',
  },
];
