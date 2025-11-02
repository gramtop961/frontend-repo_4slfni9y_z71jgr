import React from 'react';
import { Crown, Gift, Check } from 'lucide-react';

const bundles = [
  {
    name: 'Creator Essentials Bundle',
    desc: 'Your starter stack for consistent content and audience growth.',
    includes: ['Social content kit', 'AI prompt library', 'Notion planner'],
    save: 'Save 25%',
    price: '$149',
  },
  {
    name: 'Brand Empire Bundle',
    desc: 'Build a premium brand identity and convert with confidence.',
    includes: ['Personal branding kit', 'Business starter templates', 'Content kit'],
    save: 'Save 30%',
    price: '$249',
  },
  {
    name: 'Lifetime Access (VIP)',
    desc: 'Unlock everything now and all future releases + VIP bonuses.',
    includes: ['All current products', 'All future products', 'Priority support'],
    save: 'Best Value',
    price: '$499',
  },
];

const BundleOffer = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-amber-50/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-1.5 text-amber-800 shadow-sm">
            <Gift className="h-4 w-4 text-amber-600" /> Bundle & Save
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-serif text-zinc-900">Curated Bundles for Rapid Momentum</h2>
          <p className="mt-3 text-zinc-600 max-w-2xl mx-auto">Premium collections designed to move you further, faster — with elevated aesthetics and strategic systems.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bundles.map((b) => (
            <div key={b.name} className="relative rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
              <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-amber-600 text-white px-3 py-1 text-xs font-semibold shadow">
                <Crown className="h-3 w-3" /> {b.save}
              </div>
              <h3 className="text-xl font-semibold text-zinc-900">{b.name}</h3>
              <p className="mt-2 text-zinc-600">{b.desc}</p>
              <ul className="mt-4 space-y-2 text-zinc-700">
                {b.includes.map((inc) => (
                  <li key={inc} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-amber-600" /> {inc}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-2xl font-semibold text-zinc-900">{b.price}</span>
                <button className="rounded-full bg-amber-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-amber-700 transition">Add Bundle</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-amber-200 bg-white p-6 text-center">
          <h4 className="text-xl font-serif text-zinc-900">Membership, Coming Soon</h4>
          <p className="mt-2 text-zinc-600">Get access to monthly drops, workshops, and a private community. Join the waitlist and be first to know.</p>
          <a href="#newsletter" className="mt-4 inline-block rounded-full border border-amber-300 bg-amber-50 px-5 py-2 text-amber-900 font-semibold hover:bg-amber-100 transition">Join the Membership Waitlist</a>
        </div>
      </div>
    </section>
  );
};

export default BundleOffer;
