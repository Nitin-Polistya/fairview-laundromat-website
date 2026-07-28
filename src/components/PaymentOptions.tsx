import { AlertTriangle } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { paymentMethods } from '../data/payments';

export default function PaymentOptions() {
  return (
    <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 bg-pale-teal">
      <div className="max-w-7xl mx-auto">
        <SectionHeading heading="Simple, Flexible Payment Options" />
        <p className="text-center text-text-secondary max-w-2xl mx-auto mb-12">
          Publicly listed payment options include coins, cards, laundry cards, and
          contactless options where supported.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {paymentMethods.map((m) => (
            <div
              key={m.title}
              className="bg-white rounded-2xl border border-border p-6 text-center shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-pale-teal/50 flex items-center justify-center mx-auto mb-4">
                <m.icon className="w-6 h-6 text-teal" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-navy mb-2">{m.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
        {/* Card note */}
        <div className="bg-white rounded-2xl border border-border p-5 max-w-3xl mx-auto flex items-start gap-3 shadow-sm">
          <AlertTriangle className="w-5 h-5 text-accent-yellow shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h4 className="font-semibold text-navy mb-1">Card Payment Note</h4>
            <p className="text-text-secondary text-sm">
              Card transactions may display a temporary pending authorization while the
              bank verifies the payment. The pending amount is not necessarily the final
              laundry charge.
            </p>
          </div>
        </div>
        <p className="text-center text-text-secondary text-xs mt-4">
          Check the in-store signage for current payment details and laundry-card information.
        </p>
      </div>
    </section>
  );
}
