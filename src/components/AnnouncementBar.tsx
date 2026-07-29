import { business, fullAddress } from '../data/business';

export default function AnnouncementBar() {
  return (
    <div className="bg-navy text-white py-2 px-4 text-center text-sm font-medium">
      <span className="inline-flex items-center gap-2">
        <span
          className="w-2 h-2 rounded-full bg-teal inline-block motion-safe:animate-pulse"
          aria-hidden="true"
        />
        <span className="hidden sm:inline">{business.hoursLabel} • {fullAddress}</span>
        <span className="sm:hidden">{business.hoursLabel} in {business.address.city}</span>
      </span>
    </div>
  );
}
