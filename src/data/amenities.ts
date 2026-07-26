import { Wifi, Car, Snowflake, Table2, ShoppingCart, SprayCan, Sun, Accessibility } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface AmenityItem {
  icon: LucideIcon;
  name: string;
  description: string;
}

export const amenities: AmenityItem[] = [
  {
    icon: Wifi,
    name: 'Free Wi-Fi',
    description: 'Stay connected while you wait for your laundry.',
  },
  {
    icon: Car,
    name: 'Free Parking',
    description: 'Convenient on-site parking available for all customers.',
  },
  {
    icon: Snowflake,
    name: 'Air Conditioning',
    description: 'Climate-controlled comfort no matter the weather outside.',
  },
  {
    icon: Table2,
    name: 'Folding Tables',
    description: 'Plenty of clean, spacious tables for folding your laundry.',
  },
  {
    icon: ShoppingCart,
    name: 'Laundry Carts',
    description: 'Rolling carts make it easy to move laundry between machines.',
  },
  {
    icon: SprayCan,
    name: 'Detergent & Bleach',
    description: 'Laundry supplies available from on-site vending machines.',
  },
  {
    icon: Sun,
    name: 'Bright Interior',
    description: 'Well-lit, clean environment for a comfortable experience.',
  },
  {
    icon: Accessibility,
    name: 'Wheelchair Accessible',
    description: 'The facility is designed for access by all customers.',
  },
];
