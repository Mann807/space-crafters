"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [isVrModalOpen, setIsVrModalOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Your interior design photo */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-black">CRAFTING</span> <span className="text-[#754436]">SPACES</span>, <br />
            <span className="text-[#754436]">CREATING</span> <span className="text-black">STORIES</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap"
          >
            <a href="/projects" className="px-8 py-4 bg-[#754436] hover:bg-[#62382c] text-white font-semibold rounded-lg transition-colors text-lg text-center">
              Explore Projects
            </a>
            <a href="/design-highlights" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-[#c29b76]/50 text-white font-semibold rounded-lg transition-colors text-lg text-center">
              Design Highlights
            </a>
            <button 
              onClick={() => setIsVrModalOpen(true)}
              className="px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/50 text-white font-semibold rounded-lg transition-colors text-lg"
            >
              VR Experience
            </button>
            <a href="#contact" className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 font-semibold rounded-lg transition-colors text-lg text-center">
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* VR Modal */}
      <AnimatePresence>
        {isVrModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setIsVrModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors text-4xl focus:outline-none"
                onClick={() => setIsVrModalOpen(false)}
              >
                &times;
              </button>
              <img
                src="/vr-qr.jpg"
                alt="Scan to View in VR"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <p className="text-white text-center mt-4 text-lg">Scan the QR Code to experience in VR</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
