"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover"
          alt="Island View"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-slate-50"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <span className="text-white uppercase tracking-[0.3em] text-sm mb-4 block font-semibold">Premium Real Estate in Samal</span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Own the Coastline of Your Dreams.
        </h1>
        <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
          Secure, titled, and prime beach lots across the Island Garden City of Samal.
          Experience the gold standard of island living.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-teal-500/40 transition-all flex items-center justify-center gap-2">
            View Listings <ArrowRight size={20} />
          </button>
          <button className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all">
            Our Services
          </button>
        </div>
      </motion.div>
    </header>
  );
};
