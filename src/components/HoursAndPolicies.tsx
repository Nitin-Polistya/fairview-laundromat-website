import { Info } from 'lucide-react';
import SectionHeading from './SectionHeading';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const notes = [
  {
    title: 'Restroom',
    desc: 'Restroom hours are normally 6:00 a.m.–10:00 p.m. The laundromat remains open 24 hours.',
  },
  {
    title: 'Carts',
    desc: 'For cleanliness and availability, please keep laundry carts inside the facility.',
  },
  {
    title: 'Attendants',
    desc: 'Attendant availability may vary depending on the time of day.',
  },
];

export default function HoursAndPolicies() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading heading="Open Whenever You Need Us" />
      <div className="max-w-lg mx-auto mb-12">
        <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
          {days.map((day, i) => (
            <div
              key={day}
              className={`flex justify-between items-center px-6 py-3.5 ${
                i < days.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <span className="font-semibold text-navy">{day}</span>
              <span className="text-teal font-semibold">Open 24 hours</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {notes.map((note) => (
          <div
            key={note.title}
            className="bg-white rounded-2xl border border-border p-5 shadow-sm flex gap-3 items-start"
          >
            <Info className="w-5 h-5 text-teal shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="font-semibold text-navy mb-1">{note.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{note.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
