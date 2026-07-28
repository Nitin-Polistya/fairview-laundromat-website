import { Coins, CreditCard, IdCard, Smartphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface PaymentMethod {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const paymentMethods: PaymentMethod[] = [
  {
    icon: Coins,
    title: 'Coins / Change',
    description: 'Coin payment is listed for traditional coin-operated machines.',
  },
  {
    icon: CreditCard,
    title: 'Cards',
    description: 'Card payment options are listed for supported machines.',
  },
  {
    icon: IdCard,
    title: 'Laundry Cards',
    description: 'A reusable laundry card may be available for supported payment stations.',
  },
  {
    icon: Smartphone,
    title: 'Contactless Payments',
    description: 'Contactless payment may be available at supported machines.',
  },
];
