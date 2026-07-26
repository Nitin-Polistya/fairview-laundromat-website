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
    title: 'Everyday Laundry',
    description:
      'Handle your regular laundry with clean, well-maintained washers and dryers available whenever you need them.',
  },
  {
    icon: Users,
    title: 'Family-Sized Loads',
    description:
      'Larger machines handle family laundry in fewer trips, saving you time and effort each week.',
  },
  {
    icon: Bed,
    title: 'Bedding and Comforters',
    description:
      'Bulky bedding, blankets, and comforters fit comfortably in spacious high-capacity machines.',
  },
  {
    icon: Wind,
    title: 'Self-Service Drying',
    description:
      'Efficient dryers with straightforward settings get your clothes dry and ready to fold.',
  },
  {
    icon: ShoppingBag,
    title: 'Laundry Supplies',
    description:
      'Detergent, bleach, and other laundry essentials are available for purchase on-site.',
  },
  {
    icon: Clock,
    title: 'Open All Day',
    description:
      'No appointments or time restrictions — come in whenever it fits your schedule, day or night.',
  },
];
