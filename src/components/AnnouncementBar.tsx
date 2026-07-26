export default function AnnouncementBar() {
  return (
    <div className="bg-navy text-white py-2 px-4 text-center text-sm font-medium">
      <span className="inline-flex items-center gap-2">
        <span
          className="w-2 h-2 rounded-full bg-teal inline-block motion-safe:animate-pulse"
          aria-hidden="true"
        />
        <span className="hidden sm:inline">Open 24 Hours • 7 Days a Week • 22229 Lorain Road</span>
        <span className="sm:hidden">Open 24/7 in Fairview Park</span>
      </span>
    </div>
  );
}
