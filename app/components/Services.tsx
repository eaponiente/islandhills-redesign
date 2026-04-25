"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Map, Home, CheckCircle } from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    title: "Free Site Tripping",
    description: "Schedule a personalized tour of our properties with our expert guides to find your perfect spot.",
    icon: Map
  },
  {
    id: 2,
    title: "Title Processing",
    description: "We handle all the legal paperwork to ensure a smooth and hassle-free transfer of property titles.",
    icon: FileText
  },
  {
    id: 3,
    title: "Property Development",
    description: "Partner with us to build your dream home or resort right on the beautiful shores of Samal.",
    icon: Home
  },
  {
    id: 4,
    title: "Verified Listings",
    description: "Every property we list undergoes rigorous background checks to guarantee clean and legitimate titles.",
    icon: CheckCircle
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-teal-50/50 border-y border-teal-100/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-teal-700 uppercase tracking-widest text-sm font-bold mb-2 block">Our Services</span>
          <h2 className="text-4xl font-bold mb-4">Comprehensive Real Estate Solutions</h2>
          <p className="text-slate-500 text-lg">From finding the perfect lot to finalizing the paperwork, we are with you every step of the way.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all group"
            >
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                <service.icon className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
