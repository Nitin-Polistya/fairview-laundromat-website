import { useState } from 'react';
import { WashingMachine, Store, Camera } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ImageConfig } from '../data/images';

const fallbackIcons: Record<string, LucideIcon> = {
  Storefront: Store,
  'Main Interior': Camera,
  'Large Washers': WashingMachine,
  'Laundry Equipment': WashingMachine,
  'Interior Facility': Camera,
};

const fallbackGradients: Record<string, string> = {
  Storefront: 'from-navy to-teal',
  'Main Interior': 'from-teal to-pale-teal',
  'Large Washers': 'from-navy to-pale-teal',
  'Laundry Equipment': 'from-teal to-navy',
  'Interior Facility': 'from-navy to-pale-teal',
};

interface ResponsiveImageProps {
  image: ImageConfig;
  className?: string;
  priority?: boolean;
}

export default function ResponsiveImage({ image, className = '', priority = false }: ResponsiveImageProps) {
  const [error, setError] = useState(false);
  const Icon = fallbackIcons[image.label] || Camera;
  const gradient = fallbackGradients[image.label] || 'from-navy to-teal';

  if (error || !image.available) {
    return (
      <div
        className={`flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} p-8 min-h-[240px] ${className}`}
        role="img"
        aria-label={image.alt}
      >
        <Icon className="w-16 h-16 text-white/80 mb-3" aria-hidden="true" />
        <p className="text-white/80 text-sm font-medium">{image.label}</p>
      </div>
    );
  }

  return (
    <img
      src={image.path}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      onError={() => setError(true)}
      className={`rounded-2xl object-cover w-full shadow-md ${className}`}
    />
  );
}
