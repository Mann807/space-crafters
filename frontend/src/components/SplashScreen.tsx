"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── architectural line-drawing paths ── */
const archPaths = [
  // room outline
  "M 100 400 L 100 100 L 700 100 L 700 400 L 100 400",
  // door
  "M 350 400 L 350 280 L 450 280 L 450 400",
  // window left
  "M 150 180 L 150 300 L 280 300 L 280 180 L 150 180 M 215 180 L 215 300 M 150 240 L 280 240",
  // window right
  "M 520 180 L 520 300 L 650 300 L 650 180 L 520 180 M 585 180 L 585 300 M 520 240 L 650 240",
  // ceiling detail
  "M 100 100 L 400 40 L 700 100",
  // furniture - sofa
  "M 500 360 L 660 360 L 660 390 L 500 390 Z",
  // table
  "M 380 340 L 420 340 L 420 370 L 380 370 Z",
];

/* ── single SVG line that draws itself ── */
function AnimatedPath({
  d,
  delay,
  duration,
  color = "rgba(194,155,118,0.4)",
}: {
  d: string;
  delay: number;
  duration: number;
  color?: string;
}) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ delay, duration, ease: "easeInOut" }}
    />
  );
}

export default function SplashScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 7000);
    document.body.style.overflow = showSplash ? "hidden" : "";
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [showSplash]);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
            style={{ background: "#1a1a1a" }}
          >
            {/* ─── Grid overlay ─── */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(194,155,118,1) 1px, transparent 1px), linear-gradient(90deg, rgba(194,155,118,1) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            {/* ─── Architectural blueprint SVG ─── */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <svg
                viewBox="0 0 800 500"
                className="w-[700px] h-[440px] opacity-30"
              >
                {archPaths.map((path, i) => (
                  <AnimatedPath
                    key={i}
                    d={path}
                    delay={0.2 + i * 0.25}
                    duration={1.2}
                  />
                ))}
                {/* grid marks */}
                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <AnimatedPath
                    key={`tick-${i}`}
                    d={`M ${100 + i * 85.7} 410 L ${100 + i * 85.7} 420`}
                    delay={0.5 + i * 0.1}
                    duration={0.3}
                    color="rgba(194,155,118,0.25)"
                  />
                ))}
              </svg>
            </motion.div>

            {/* ─── Blueprint fade-out ─── */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
              style={{
                background:
                  "radial-gradient(circle at center, #1a1a1a 30%, transparent 70%)",
              }}
            />

            {/* ─── Center content container ─── */}
            <div className="relative z-10 flex flex-col items-center justify-center">
              {/* Golden compass circle drawing */}
              <motion.div className="relative mb-8">
                <svg width="160" height="160" viewBox="0 0 160 160">
                  {/* outer ring */}
                  <motion.circle
                    cx="80"
                    cy="80"
                    r="72"
                    fill="none"
                    stroke="rgba(194,155,118,0.6)"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      delay: 1.5,
                      duration: 2,
                      ease: "easeInOut",
                    }}
                  />
                  {/* inner ring */}
                  <motion.circle
                    cx="80"
                    cy="80"
                    r="62"
                    fill="none"
                    stroke="rgba(194,155,118,0.3)"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      delay: 1.8,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  />
                  {/* compass cross */}
                  <motion.line
                    x1="80"
                    y1="15"
                    x2="80"
                    y2="145"
                    stroke="rgba(194,155,118,0.15)"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 2, duration: 0.8 }}
                  />
                  <motion.line
                    x1="15"
                    y1="80"
                    x2="145"
                    y2="80"
                    stroke="rgba(194,155,118,0.15)"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 2.2, duration: 0.8 }}
                  />
                  {/* corner diamonds */}
                  {[0, 90, 180, 270].map((angle) => (
                    <motion.circle
                      key={angle}
                      cx={80 + 72 * Math.cos((angle * Math.PI) / 180)}
                      cy={80 + 72 * Math.sin((angle * Math.PI) / 180)}
                      r="2"
                      fill="#c29b76"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 3 + angle * 0.001, duration: 0.4 }}
                    />
                  ))}
                </svg>

                {/* Logo in the center */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 2.8,
                    duration: 0.8,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                >
                  <img src="/logo.png" alt="Logo" className="w-16 h-16 object-contain invert" />
                </motion.div>
              </motion.div>

              {/* ─── Brand name: stacked on mobile, inline on desktop ─── */}
              <div className="flex flex-col items-center justify-center w-full px-4">
                {/* SPACE */}
                <div className="flex items-center justify-center">
                  {"SPACE".split("").map((char, i) => (
                    <motion.span
                      key={`s-${i}`}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 3.2 + i * 0.08, duration: 0.5, ease: "easeOut" }}
                      style={{
                        fontSize: "clamp(22px, 8vw, 38px)",
                        fontWeight: 200,
                        color: "#ffffff",
                        letterSpacing: "0.3em",
                        fontFamily: "Georgia, 'Times New Roman', serif",
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
                {/* CRAFTERS */}
                <div className="flex items-center justify-center">
                  {"CRAFTERS".split("").map((char, i) => (
                    <motion.span
                      key={`c-${i}`}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 3.6 + i * 0.08, duration: 0.5, ease: "easeOut" }}
                      style={{
                        fontSize: "clamp(22px, 8vw, 38px)",
                        fontWeight: 200,
                        color: "#ffffff",
                        letterSpacing: "0.3em",
                        fontFamily: "Georgia, 'Times New Roman', serif",
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* ─── Expanding golden line ─── */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 4.4, duration: 1.2, ease: "easeInOut" }}
                style={{
                  width: 200,
                  height: 1,
                  background:
                    "linear-gradient(90deg, transparent, #c29b76, transparent)",
                  marginTop: 18,
                  marginBottom: 18,
                  transformOrigin: "center",
                }}
              />

              {/* ─── Tagline ─── */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 4.8, duration: 1 }}
                style={{
                  fontSize: "clamp(9px, 2.5vw, 13px)",
                  color: "#c29b76",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontWeight: 300,
                  textAlign: "center",
                  padding: "0 16px",
                }}
              >
                Interior Design Studio
              </motion.p>


            </div>

            {/* ─── Corner ornaments ─── */}
            {[
              { top: 30, left: 30, rotate: 0 },
              { top: 30, right: 30, rotate: 90 },
              { bottom: 30, right: 30, rotate: 180 },
              { bottom: 30, left: 30, rotate: 270 },
            ].map((pos, i) => (
              <motion.div
                key={`corner-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
                style={{ position: "absolute", ...pos }}
              >
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <motion.path
                    d="M 0 40 L 0 0 L 40 0"
                    fill="none"
                    stroke="rgba(194,155,118,0.3)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.8 + i * 0.2, duration: 1 }}
                    style={{
                      transform: `rotate(${pos.rotate}deg)`,
                      transformOrigin: "center",
                    }}
                  />
                </svg>
              </motion.div>
            ))}

            {/* ─── Floating measurement marks ─── */}
            <motion.div
              className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 5.5, duration: 0.8 }}
            >
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 1,
                    height: i % 5 === 0 ? 12 : 6,
                    background: "#c29b76",
                    marginRight: 8,
                  }}
                />
              ))}
            </motion.div>

            {/* ─── "Entering" text at bottom ─── */}
            <motion.p
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.4, 0.4, 0] }}
              transition={{ delay: 5.8, duration: 1.5, times: [0, 0.2, 0.8, 1] }}
              style={{
                fontSize: 11,
                color: "#c29b76",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              Welcome to our world
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        style={{
          opacity: showSplash ? 0 : 1,
          transition: "opacity 0.6s ease",
        }}
      >
        {children}
      </div>
    </>
  );
}
