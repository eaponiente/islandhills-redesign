"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

export const About = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 relative w-full">
          <div className="absolute -inset-4 bg-teal-100 rounded-[2.5rem] transform -rotate-3 z-0 hidden md:block"></div>
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000" 
            alt="About Island Hills" 
            className="relative z-10 rounded-3xl object-cover h-[500px] w-full shadow-lg"
          />
          <div className="absolute bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-50">
            <p className="text-4xl font-bold text-teal-600 mb-1">10+</p>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Years Experience</p>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <span className="text-teal-700 uppercase tracking-widest text-sm font-bold mb-2 block">About Island Hills</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Your Trusted Partner in Island Real Estate.</h2>
          <p className="text-slate-500 text-lg mb-6 leading-relaxed">
            Founded with a vision to make luxury island living accessible, Island Hills has been at the forefront of Samal's real estate development. We specialize in curating premium, titled beach lots and residential properties that offer not just a home, but a lifestyle.
          </p>
          <p className="text-slate-500 text-lg mb-8 leading-relaxed">
            Our commitment is to transparency, legal integrity, and exceptional customer service. Whether you're looking for an investment or a forever home, we guide you through every step with absolute peace of mind.
          </p>
          
          <button className="flex items-center gap-2 text-teal-700 font-bold border-b-2 border-teal-700 pb-1 hover:text-teal-500 hover:border-teal-500 transition-colors">
            Learn More About Our History <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
