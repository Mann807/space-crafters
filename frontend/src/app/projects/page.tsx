"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    slug: "the-patil-house",
    name: "THE PATIL HOUSE",
    description: "Our goal was to transform a 3-bedroom apartment into a tranquil retreat that exudes warmth and sophistication. The design concept revolves around creating a seamless blend of functionality, sustainability, and aesthetics.",
    image: "/projects/patil-house/dining.jpg",
    type: "Residential"
  },
  {
    slug: "saga-enstin",
    name: "SAGA ENSTIN",
    description: "Contemporary Living, Crafted for Comfort. This project showcases modern minimalism with a bold touch. The overall palette is muted and earthy — soft greys, warm whites, and natural wood — anchored by a single rich accent.",
    image: "/projects/saga-enstin/1.jpg",
    type: "Residential"
  },
  {
    slug: "the-alodariya-house",
    name: "THE ALODARIYA HOUSE",
    description: "This is Crafting Spaces, Creating Stories in a physical form. The space doesn't shout luxury — it whispers comfort. It's not trend-driven. The palette is timeless, the forms are organic, and the comfort is real.",
    image: "/projects/alodariya-house/1.jpg",
    type: "Residential"
  }
];

export default function ProjectsListing() {
  return (
    <main className="min-h-screen bg-[#faf9f7] pt-24 pb-20">
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

      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6" style={{ fontFamily: "Georgia, serif" }}>
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Explore our curated collection of interior design projects, where every space tells a unique story of craftsmanship and comfort.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="group"
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="relative h-[400px] overflow-hidden rounded-2xl mb-6">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-white/20 backdrop-blur-md border border-white/30 text-white">
                      {project.type}
                    </span>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-black mb-3 group-hover:text-[#754436] transition-colors" style={{ fontFamily: "Georgia, serif" }}>
                  {project.name}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-2 text-[#754436] font-bold text-sm tracking-widest uppercase">
                  View Project
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
