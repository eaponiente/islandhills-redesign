"use client";

import React from 'react';
import { ShieldCheck, TreePalm, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <section className="bg-teal-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Why Island Hills Land?</h2>
          <div className="space-y-6">
            {[
              { icon: <ShieldCheck className="text-teal-400" />, t: "Clean Titles", d: "All properties are pre-verified and ready for immediate transfer." },
              { icon: <TreePalm className="text-teal-400" />, t: "Prime Locations", d: "Exclusive access to Aundanao and Tagbay shoreline developments." },
              { icon: <Phone className="text-teal-400" />, t: "Expert Assistance", d: "Full support from site tripping to legal documentation." }
            ].map((feature, i) => (
              <div key={i} className="flex gap-4">
                {feature.icon}
                <div>
                  <h4 className="font-bold">{feature.t}</h4>
                  <p className="text-teal-100/70 text-sm">{feature.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
          <h3 className="text-xl font-bold mb-4">Inquire About a Property</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-400 text-white placeholder-white/50" />
            <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-400 text-white placeholder-white/50" />
            <textarea placeholder="Which property are you interested in?" className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 h-32 focus:outline-none focus:border-teal-400 text-white placeholder-white/50"></textarea>
            <button type="submit" className="w-full bg-teal-500 hover:bg-teal-400 text-teal-950 font-bold py-4 rounded-xl transition-all">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
