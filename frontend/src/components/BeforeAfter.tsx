"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface ComparisonPair {
  before: string;
  after: string;
  title: string;
}

const projects: ComparisonPair[] = [
  {
    before: "/bedroom-before.jpg",
    after: "/bedroom-after.jpg",
    title: "Bedroom Makeover",
  },
];

function SliderItem({ pair }: { pair: ComparisonPair }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPos(percent);
    },
    []
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      handleMove(e.touches[0].clientX);
    },
    [handleMove]
  );

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">{pair.title}</h3>
      <div
        ref={containerRef}
        className="relative w-full max-w-5xl aspect-[16/10] rounded-2xl overflow-hidden cursor-col-resize select-none shadow-2xl"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* After Image (full background) */}
        <div className="absolute inset-0">
          <img
            src={pair.after}
            alt="After"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Before Image (clipped) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img
            src={pair.before}
            alt="Before"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-[3px] bg-white z-20"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        >
          {/* Drag Handle */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center cursor-col-resize z-30"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 5L3 12L8 19" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 5L21 12L16 19" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Before / After Labels */}
        <div
          className="absolute top-6 left-6 z-10 px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase"
          style={{
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(8px)",
            color: "#fff",
          }}
        >
          Before
        </div>
        <div
          className="absolute top-6 right-6 z-10 px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase"
          style={{
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(8px)",
            color: "#fff",
          }}
        >
          After
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="swipe" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Transformations
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Drag the slider to see the magic — from empty spaces to stunning interiors crafted by Space Crafters.
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((pair, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <SliderItem pair={pair} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
