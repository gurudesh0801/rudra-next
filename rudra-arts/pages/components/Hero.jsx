// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        style={{ filter: "brightness(.3)" }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10" /> */}

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
          Timeless Creations, Crafted with Soul
        </h1>
        <p className="max-w-2xl text-lg md:text-xl leading-relaxed">
          Discover the essence of heritage and artistry in every masterpiece. At{" "}
          <strong>Rudra Arts</strong>, we bring stories to life through
          intricate designs, preserving tradition while embracing creativity.
        </p>
      </motion.div>
    </div>
  );
}
