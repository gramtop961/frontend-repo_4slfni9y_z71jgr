import React, { useState } from 'react';
import { Mail, Heart } from 'lucide-react';

const NewsletterCTA = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send to backend or email provider
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-amber-100 p-8 shadow">
          <div className="flex items-start gap-4">
            <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-600 text-white shadow">
              <Mail className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-serif text-zinc-900">Join Template Alchemy Insider</h3>
              <p className="mt-2 text-zinc-700">Actionable insights on AI productivity, personal branding, and feminine entrepreneurship — plus exclusive drops.</p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="col-span-1 sm:col-span-1 w-full rounded-full border border-amber-300 bg-white/80 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="col-span-1 sm:col-span-1 w-full rounded-full border border-amber-300 bg-white/80 px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                  <button type="submit" className="col-span-1 rounded-full bg-amber-600 px-6 py-3 text-white font-semibold shadow hover:bg-amber-700 transition">
                    Get the Luxe Newsletter
                  </button>
                </form>
              ) : (
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 border border-amber-300 text-amber-900">
                  <Heart className="h-4 w-4 text-amber-600" />
                  Thank you! Please check your inbox to confirm.
                </div>
              )}
              <p className="mt-3 text-xs text-zinc-500">No spam, ever. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
