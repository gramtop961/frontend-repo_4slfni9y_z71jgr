import React from 'react';
import { Star, Download, CheckCircle2 } from 'lucide-react';

const products = [
  {
    title: 'Social Content Kit — IG, TikTok, YouTube',
    description:
      '225+ plug-and-play templates for posts, carousels, hooks, and scripts. Optimized for reach and saves.',
    includes: ['Carousel layouts', 'Video hook bank', 'Caption prompts', 'Hashtag vault'],
    tag: 'Best Seller',
    price: '$79',
  },
  {
    title: 'Personal Branding Kit',
    description:
      'Logos, color palettes, typography styles, and moodboards to craft a timeless feminine brand.',
    includes: ['Logo suite', 'Palette presets', 'Type pairings', 'Brand guide'],
    tag: 'New',
    price: '$119',
  },
  {
    title: 'AI Prompt Library for Creators',
    description:
      'Done-for-you AI prompts for content, strategy, client communications, and automation.',
    includes: ['Content prompts', 'Launch sequences', 'DM scripts', 'Automation starters'],
    tag: 'Creator Favorite',
    price: '$59',
  },
  {
    title: 'Business Starter Templates',
    description:
      'Pitch decks, media kits, proposals, and pricing calculators that close deals fast.',
    includes: ['Pitch deck', 'Media kit', 'Proposal', 'Rate sheet'],
    tag: 'Pro',
    price: '$149',
  },
  {
    title: 'Productivity + Mindset System (Notion + PDF)',
    description:
      'Plan your quarter, align your habits, and execute with clarity using our balanced productivity system.',
    includes: ['Vision board', 'Quarterly planner', 'Habit tracker', 'Reflection journal'],
    tag: 'Wellness',
    price: '$69',
  },
  {
    title: 'Lifetime Access Pass',
    description:
      'Unlock every template now and all future releases. Priority updates and VIP bonuses included.',
    includes: ['All products', 'Future drops', 'VIP bonuses', 'Priority support'],
    tag: 'VIP',
    price: '$499',
  },
];

const ProductCard = ({ item }) => {
  return (
    <div className="group relative rounded-2xl border border-amber-100 bg-white/70 backdrop-blur shadow-sm hover:shadow-lg transition overflow-hidden">
      <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-amber-600/90 text-white px-3 py-1 text-xs font-semibold shadow">
        <Star className="h-3 w-3" /> {item.tag}
      </div>
      <div className="aspect-[16/10] bg-gradient-to-br from-amber-50 via-white to-amber-100" />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
        <p className="mt-2 text-sm text-zinc-600">{item.description}</p>
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-zinc-700">
          {item.includes.map((inc) => (
            <div key={inc} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-amber-600" />
              <span>{inc}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-xl font-semibold text-zinc-900">{item.price}</span>
          <button className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-4 py-2 text-white text-sm font-semibold shadow hover:bg-amber-700 transition">
            <Download className="h-4 w-4" />
            Download & Start Instantly
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductShowcase = () => {
  return (
    <section id="shop" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif text-zinc-900">Digital Shop</h2>
          <p className="mt-3 text-zinc-600 max-w-2xl mx-auto">
            Curated, high-impact templates crafted for feminine brands. Beautiful, strategic, and ready to use.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.title} item={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
