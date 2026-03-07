"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center selection:bg-[var(--color-amber)] selection:text-white">
      {/* Background Image with Zoom-out Animation */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero.png"
          alt="Northeast India Landscape"
          fill
          className="object-cover object-center"
        />
      </motion.div>

      {/* SVG Grain Overlay */}
      <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>

      {/* Dark Forest Green Gradient Overlay on Left Half */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[var(--color-forest)] via-[var(--color-forest)]/80 to-transparent"></div>
      
      {/* Dark overlay for bottom fading */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--color-forest)] via-transparent to-transparent opacity-50"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 h-full flex flex-col justify-center">
        <div className="flex flex-col md:flex-row justify-between items-end h-[60%] mt-[10%]">
          
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-[60%] flex flex-col items-start"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-[var(--color-amber)]"></span>
              <span className="text-[var(--color-amber)] text-sm uppercase tracking-widest font-semibold font-sans">
                Guwahati&apos;s Premier Rental
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-[80px] leading-[1.1] font-heading font-bold text-[var(--color-brand-white)] mb-6 tracking-tight">
              The Northeast awaits.<br />
              <span className="italic text-[var(--color-amber)] font-medium">Ride free.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-[var(--color-brand-white)]/80 font-light max-w-lg mb-10 leading-relaxed font-sans">
              From the rhino trails of Kaziranga to the mist-draped hills of Meghalaya — every great journey begins with the right set of wheels.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[var(--color-amber)] text-[var(--color-brand-white)] px-8 py-4 rounded-full font-semibold hover:bg-[#b5722e] hover:shadow-[0_4px_20px_0_rgba(212,136,58,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group">
                Explore Fleet <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent border border-[var(--color-brand-white)]/30 text-[var(--color-brand-white)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-brand-white)] hover:text-[var(--color-forest)] transition-all transform hover:-translate-y-1">
                How It Works
              </button>
            </div>
          </motion.div>

          {/* Right Side Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden md:flex flex-col gap-10 border-l border-[var(--color-brand-white)]/10 text-right pr-6"
          >
            <div className="flex flex-col items-end pl-8">
              <span className="text-4xl lg:text-5xl font-heading font-bold text-[var(--color-brand-white)] mb-1">40+</span>
              <span className="text-xs uppercase tracking-wider text-[var(--color-brand-white)]/60 font-sans">Vehicles in fleet</span>
            </div>
            <div className="flex flex-col items-end pl-8">
              <span className="text-4xl lg:text-5xl font-heading font-bold text-[var(--color-brand-white)] mb-1">1200+</span>
              <span className="text-xs uppercase tracking-wider text-[var(--color-brand-white)]/60 font-sans">Happy riders</span>
            </div>
            <div className="flex flex-col items-end pl-8">
              <span className="text-4xl lg:text-5xl font-heading font-bold text-[var(--color-brand-white)] mb-1">6 yrs</span>
              <span className="text-xs uppercase tracking-wider text-[var(--color-brand-white)]/60 font-sans">Trusted since 2018</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] text-[var(--color-brand-white)]/50 uppercase font-sans">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-gradient-to-b from-[var(--color-brand-white)]/50 to-transparent"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
