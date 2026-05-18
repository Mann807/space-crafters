"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const photos = [
  { src: "/projects/saga-enstin/1.jpg", label: "Media Room Overview" },
  { src: "/projects/saga-enstin/2.jpg", label: "Glass Block Details" },
  { src: "/projects/saga-enstin/3.jpg", label: "Bedroom Accent Wall" },
  { src: "/projects/saga-enstin/4.jpg", label: "Lounge Seating" },
  { src: "/projects/saga-enstin/5.jpg", label: "Cinema View" },
  { src: "/projects/saga-enstin/6.jpg", label: "Living Detail" },
  { src: "/projects/saga-enstin/7.jpg", label: "Master Bed" },
  { src: "/projects/saga-enstin/8.jpg", label: "Temple Niche" },
  { src: "/projects/saga-enstin/9.jpg", label: "Wardrobe Details" },
  { src: "/projects/saga-enstin/10.jpg", label: "Lounge View" },
  { src: "/projects/saga-enstin/11.jpg", label: "Bed Detail" },
  { src: "/projects/saga-enstin/12.jpg", label: "Bed & Wardrobe" },
  { src: "/projects/saga-enstin/13.jpg", label: "Dining Area" },
];

const highlights = [
  { icon: "🏠", label: "4 BHK Apartment" },
  { icon: "📐", label: "1,800 sq ft" },
  { icon: "📍", label: "Ahmedabad, India" },
  { icon: "🪵", label: "Natural Woods" },
];

export default function SagaEnstin() {
  const [selectedImg, setSelectedImg] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#faf9f7]">
      {/* ─── Back Nav ─── */}
      <div
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        style={{
          background: "rgba(250,249,247,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors text-sm font-medium"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <span className="flex items-center gap-2 text-sm font-bold tracking-[0.3em] uppercase text-black">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
            Space Crafters
          </span>
        </div>
      </div>

      {/* ─── Hero Banner ─── */}
      <div className="relative h-[70vh] overflow-hidden">
        <motion.img
          src="/projects/saga-enstin/1.jpg"
          alt="Saga Enstin"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-4"
              style={{
                background: "rgba(194,155,118,0.2)",
                border: "1px solid rgba(194,155,118,0.4)",
                color: "#c29b76",
              }}
            >
              Residential Project
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-4"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              SAGA ENSTIN
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="w-20 h-[2px] bg-[#c29b76] mb-6"
              style={{ transformOrigin: "left" }}
            />
          </div>
        </div>
      </div>

      {/* ─── Project Info ─── */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        {/* Highlights Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {highlights.map((h, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-5 rounded-xl"
              style={{
                background: "rgba(194,155,118,0.06)",
                border: "1px solid rgba(194,155,118,0.12)",
              }}
            >
              <span className="text-2xl">{h.icon}</span>
              <span className="text-sm font-medium text-gray-700">
                {h.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <h2
            className="text-3xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            4 BHK Apartment, Crafted for Comfort
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            This project showcases modern minimalism with a bold touch. The overall palette is muted and earthy — soft greys, warm whites, and natural wood — anchored by a single rich accent. That one bold choice adds character without overwhelming the room, staying true to our philosophy: <i>Crafting Spaces, Creating Stories</i>.
          </p>
        </motion.div>

        {/* ─── Photo Gallery ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl font-bold text-gray-900 mb-10"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Project Gallery
          </h2>

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                  idx === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                onClick={() => setSelectedImg(idx)}
              >
                <img
                  src={photo.src}
                  alt={photo.label}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    idx === 0 ? "h-[500px]" : "h-[300px]"
                  }`}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end">
                  <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-white text-lg font-semibold">
                      {photo.label}
                    </span>
                  </div>
                </div>
                {/* Corner badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── CTA ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 text-center py-16 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
          }}
        >
          <h3
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Want a similar transformation?
          </h3>
          <p className="text-gray-400 mb-8 text-lg">
            Let&apos;s craft your dream space together.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-[#c29b76] hover:bg-[#b08965] text-white font-semibold rounded-lg transition-colors text-lg"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>

      {/* ─── Lightbox Modal ─── */}
      {selectedImg !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={photos[selectedImg].src}
            alt={photos[selectedImg].label}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          {/* Close button */}
          <button
            onClick={() => setSelectedImg(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          {/* Image label */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-lg font-medium">
            {photos[selectedImg].label}
          </div>
          {/* Nav arrows */}
          {selectedImg > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedImg(selectedImg - 1); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}
          {selectedImg < photos.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedImg(selectedImg + 1); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}
        </motion.div>
      )}
    </main>
  );
}
