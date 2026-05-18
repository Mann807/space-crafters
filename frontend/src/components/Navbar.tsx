"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50" style={{
      background: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 flex items-center"
          >
            <Link href="/" className="flex items-center gap-3 text-2xl font-bold text-black uppercase tracking-wider">
              <img src="/logo.png" alt="Space Crafters Logo" className="h-16 w-auto object-contain" />
              <span>Space <span className="text-black">Crafters</span></span>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex space-x-8"
          >
            {['Home', 'Services', 'Projects', 'Swipe', 'Reviews', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-black hover:text-[#c29b76] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
