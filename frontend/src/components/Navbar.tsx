"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ['Home', 'Services', 'Projects', 'Swipe', 'Reviews', 'Contact'];

  return (
    <>
      <nav className="fixed w-full z-50" style={{
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 md:h-20 items-center">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 flex items-center"
            >
              <Link href="/" className="flex items-center gap-2 font-bold text-black uppercase tracking-wider">
                <img src="/logo.png" alt="Space Crafters Logo" className="h-10 md:h-16 w-auto object-contain" />
                <span className="text-sm md:text-2xl">Space <span className="text-black">Crafters</span></span>
              </Link>
            </motion.div>

            {/* Desktop Nav Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex space-x-8"
            >
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-black hover:text-[#c29b76] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item}
                </Link>
              ))}
            </motion.div>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-black transition-all"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 bg-black"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-black transition-all"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(0,0,0,0.08)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
            }}
          >
            <div className="flex flex-col py-4 px-6 gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-black hover:text-[#c29b76] py-3 text-base font-medium border-b border-gray-100 last:border-0 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
