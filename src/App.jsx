import React from 'react';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import BundleOffer from './components/BundleOffer';
import NewsletterCTA from './components/NewsletterCTA';
import { Instagram, Youtube, Twitter, Star } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="border-b border-amber-100 bg-white/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-200 to-amber-400" />
            <span className="font-serif text-xl">Template Alchemy</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-700">
            <a href="#shop" className="hover:text-amber-700">Shop</a>
            <a href="#bundles" className="hover:text-amber-700">Bundles</a>
            <a href="#newsletter" className="hover:text-amber-700">Newsletter</a>
          </nav>
          <a href="#shop" className="rounded-full bg-amber-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-amber-700 transition">Download Now</a>
        </div>
      </header>

      <main>
        <Hero />
        <div id="bundles">
          <ProductShowcase />
          <BundleOffer />
        </div>
        <NewsletterCTA />
      </main>

      <footer className="border-t border-amber-100 bg-amber-50/40">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-200 to-amber-400" />
              <span className="font-serif text-xl">Template Alchemy</span>
            </div>
            <p className="mt-3 text-sm text-zinc-600 max-w-sm">Elegant, intelligent, and deeply practical digital tools for women building iconic brands and businesses.</p>
            <div className="mt-4 flex items-center gap-3 text-zinc-600">
              <a href="#" aria-label="Instagram" className="hover:text-amber-700"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="hover:text-amber-700"><Youtube className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-amber-700"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900">Shop</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700">
              <li>Content Kits</li>
              <li>Branding Kits</li>
              <li>AI Prompts</li>
              <li>Business Templates</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900">Trust</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700">
              <li className="flex items-center gap-2"><Star className="h-4 w-4 text-amber-600" /> 4.9/5 average rating</li>
              <li className="flex items-center gap-2"><Star className="h-4 w-4 text-amber-600" /> Instant secure checkout</li>
              <li className="flex items-center gap-2"><Star className="h-4 w-4 text-amber-600" /> Lifetime updates</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-amber-100 text-center text-xs text-zinc-500 py-4">© {new Date().getFullYear()} Template Alchemy. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default App;
