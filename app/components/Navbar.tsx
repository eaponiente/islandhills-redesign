"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">IH</div>
          <span className="font-bold tracking-tight text-xl uppercase">Island Hills</span>
        </div>

        <div className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-widest items-center">
          <a href="#" className="hover:text-teal-600 transition-colors">Properties</a>
          <a href="#" className="hover:text-teal-600 transition-colors">Services</a>
          <a href="#" className="hover:text-teal-600 transition-colors">About</a>
          <a href="#" className="bg-teal-900 text-white px-5 py-2 rounded-full hover:bg-teal-700 transition-all">Book Tour</a>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4 font-medium text-sm uppercase tracking-widest">
              <a href="#" className="hover:text-teal-600 transition-colors block py-2">Properties</a>
              <a href="#" className="hover:text-teal-600 transition-colors block py-2">Services</a>
              <a href="#" className="hover:text-teal-600 transition-colors block py-2">About</a>
              <a href="#" className="bg-teal-900 text-white px-5 py-3 rounded-xl hover:bg-teal-700 transition-all text-center mt-2">Book Tour</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
