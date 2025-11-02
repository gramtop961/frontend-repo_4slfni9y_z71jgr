import React from 'react';
import { Rocket, Crown, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-tr from-amber-100 to-amber-300 opacity-40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-rose-100 to-amber-200 opacity-30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 sm:pt-24 sm:pb-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-4 py-1.5 text-amber-800 shadow-sm backdrop-blur">
            <Crown className="h-4 w-4 text-amber-600" />
            <span className="text-xs font-medium tracking-wide uppercase">Template Alchemy</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-serif tracking-tight text-zinc-900">
            Elegant AI‑Enhanced Templates for Ambitious Women
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-zinc-600 text-lg">
            Empowering you with luxury digital systems for business, content creation, and personal growth. Build your online empire with intention, intelligence, and effortless style.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#shop" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-6 py-3 text-white font-semibold shadow-lg shadow-amber-200 hover:bg-amber-700 transition">
              <Rocket className="h-5 w-5" />
              Unlock Your Digital Success Tools
            </a>
            <a href="#newsletter" className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-300 bg-white px-6 py-3 text-amber-900 font-semibold hover:bg-amber-50 transition">
              <Zap className="h-5 w-5 text-amber-600" />
              Start Building Your Online Empire
            </a>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-zinc-600">
            <div className="flex items-center justify-center gap-2 bg-white/70 backdrop-blur rounded-xl px-4 py-2 border border-amber-100">
              <ShieldCheck className="h-4 w-4 text-amber-600" />
              Trusted by 5,000+ creators
            </div>
            <div className="flex items-center justify-center gap-2 bg-white/70 backdrop-blur rounded-xl px-4 py-2 border border-amber-100">
              <ShieldCheck className="h-4 w-4 text-amber-600" />
              Instant download & lifetime access
            </div>
            <div className="flex items-center justify-center gap-2 bg-white/70 backdrop-blur rounded-xl px-4 py-2 border border-amber-100">
              <ShieldCheck className="h-4 w-4 text-amber-600" />
              Secure checkout
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-3xl border border-amber-100 bg-white/60 backdrop-blur p-6 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-100 p-6 flex items-end">
              <div className="w-full h-40 rounded-xl bg-white/80 border border-amber-100 shadow-md p-4">
                <div className="h-6 w-24 rounded bg-amber-100 mb-3" />
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-24 rounded-lg bg-gradient-to-br from-amber-100 to-amber-200" />
                  <div className="h-24 rounded-lg bg-gradient-to-br from-rose-100 to-amber-100" />
                  <div className="h-24 rounded-lg bg-gradient-to-br from-amber-100 to-amber-300" />
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <h3 className="text-2xl font-serif text-zinc-900">Luxury tools that elevate your brand</h3>
              <p className="mt-3 text-zinc-600">
                From content kits and brand systems to AI prompt libraries and premium planners — every product is designed to help you create faster, look polished, and grow with confidence.
              </p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-zinc-700">
                <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-amber-500" /> Social media content templates</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-amber-500" /> AI prompts for content & automation</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-amber-500" /> Personal branding kits</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-amber-500" /> Notion & PDF planners</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
