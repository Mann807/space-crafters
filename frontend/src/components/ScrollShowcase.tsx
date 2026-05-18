"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const showcaseItems = [
  {
    image: "/showcase/entrance.jpg",
    title: "The Grand Entrance",
    description:
      "Stunning black and white floor concept for this project; the goal was to create a dramatic and sophisticated design that would serve as a focal point in the space as well as complement the interior decor and enhance the overall aesthetic of the space.",
  },
  {
    image: "/showcase/media-room.jpg",
    title: "Function Meets Art",
    description:
      "This isn't just décor. The panel serves as a light installation, a partition, and an acoustic element. When lit in a dark room, only the warm LEDs glow — turning the wall into a night sky for movie nights. During the day, the perforation pattern itself becomes the art.",
  },
];

function ShowcaseCard({
  item,
  idx,
}: {
  item: (typeof showcaseItems)[0];
  idx: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imageRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -8]);
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.9, 1, 0.9]
  );
  const textY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0]
  );
  const accentScaleX = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const lineScaleX = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  const isReversed = idx % 2 !== 0;

  return (
    <div ref={cardRef} className="mb-32 last:mb-0">
      <motion.div
        style={{ opacity }}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
          isReversed ? "lg:direction-rtl" : ""
        }`}
      >
        {/* 3D Image Card */}
        <motion.div
          style={{
            y: imageY,
            rotateX: imageRotateX,
            scale: imageScale,
            perspective: 1200,
          }}
          className={`relative ${isReversed ? "lg:order-2" : ""}`}
        >
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{
              transformStyle: "preserve-3d",
              boxShadow:
                "0 25px 80px rgba(0,0,0,0.5), 0 0 40px rgba(117,68,54,0.15)",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            {/* Shine overlay on scroll */}
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.05) 45%, transparent 50%)",
              }}
            />
          </div>
          {/* Floating accent bar */}
          <motion.div
            className="absolute -bottom-4 left-8 right-8 h-1 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, #c29b76, transparent)",
              scaleX: accentScaleX,
            }}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          style={{ y: textY }}
          className={`flex flex-col justify-center ${
            isReversed ? "lg:order-1" : ""
          }`}
        >
          <motion.div
            className="w-12 h-[2px] mb-6"
            style={{
              background: "#c29b76",
              scaleX: lineScaleX,
              transformOrigin: "left",
            }}
          />
          <h3
            className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {item.title}
          </h3>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            {item.description}
          </p>
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(194,155,118,0.15)",
                border: "1px solid rgba(194,155,118,0.3)",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#c29b76"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: "#c29b76" }}
            >
              Space Crafters
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function ScrollShowcase() {
  const headerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: headerProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"],
  });

  const headerOpacity = useTransform(
    headerProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );

  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0d0d0d 0%, #1a1715 50%, #0d0d0d 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(117,68,54,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          style={{ opacity: headerOpacity }}
          className="text-center mb-20"
        >
          <span
            className="inline-block px-5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase mb-6"
            style={{
              background: "rgba(194,155,118,0.1)",
              border: "1px solid rgba(194,155,118,0.25)",
              color: "#c29b76",
            }}
          >
            Featured Work
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Design <span style={{ color: "#c29b76" }}>Highlights</span>
          </h2>
        </motion.div>

        {/* Showcase Cards — each tracked independently */}
        {showcaseItems.map((item, idx) => (
          <ShowcaseCard key={idx} item={item} idx={idx} />
        ))}
      </div>
    </section>
  );
}
