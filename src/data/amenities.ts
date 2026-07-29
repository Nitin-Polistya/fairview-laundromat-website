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
    name: 'Wi-Fi',
    description: 'Wi-Fi is listed as an available customer amenity.',
  },
  {
    icon: Car,
    name: 'On-site Parking',
    description: 'On-site parking is listed as available.',
  },
  {
    icon: Snowflake,
    name: 'Air Conditioning',
    description: 'Air conditioning is listed as an available facility feature.',
  },
  {
    icon: Table2,
    name: 'Folding Tables',
    description: 'Folding tables are listed as available inside the facility.',
  },
  {
    icon: ShoppingCart,
    name: 'Laundry Carts',
    description: 'Laundry carts are available for moving loads inside the facility.',
  },
  {
    icon: SprayCan,
    name: 'Laundry Supplies',
    description: 'Laundry supplies may be available from on-site vending machines.',
  },
  {
    icon: Sun,
    name: 'Bright Interior',
    description: 'Customer feedback commonly mentions a bright interior.',
  },
  {
    icon: Accessibility,
    name: 'Wheelchair Accessible',
    description: 'The facility is listed as wheelchair accessible.',
  },
];
