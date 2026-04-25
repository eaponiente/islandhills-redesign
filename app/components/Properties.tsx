"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { PROPERTIES } from '@/app/data/properties';

export const Properties = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-4xl font-bold mb-4">Featured Listings</h2>
          <p className="text-slate-500">Handpicked titled properties ready for transfer.</p>
        </div>
        <button className="text-teal-700 font-bold border-b-2 border-teal-700 pb-1">View All Properties</button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {PROPERTIES.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group"
          >
            <div className="relative h-64 overflow-hidden">
              <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.title} />
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase text-teal-800">
                {item.tag}
              </span>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-1 text-slate-400 text-sm mb-2">
                <MapPin size={14} /> {item.location}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-teal-600 font-bold text-lg mb-6">{item.price}</p>
              <button className="w-full py-3 border border-slate-200 rounded-xl font-semibold group-hover:bg-teal-50 group-hover:border-teal-200 transition-all">
                Property Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
