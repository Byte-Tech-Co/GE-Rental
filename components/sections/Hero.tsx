"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center selection:bg-[var(--color-red)] selection:text-white">
      {/* Background Image */}
      <Image
        src="https://res.cloudinary.com/dhbjr5ujm/image/upload/v1773074247/ChatGPT_Image_Mar_9_2026_10_04_06_PM_1_waqvym.jpg"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/85 via-[#000000]/80 to-[#050505]/90"></div>

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(239,35,60,0.25)_0%,_transparent_70%)] blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(122,140,125,0.3)_0%,_transparent_70%)] blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-[30%] left-[40%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,_rgba(239,35,60,0.15)_0%,_transparent_70%)] blur-3xl"
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(253,252,249,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(253,252,249,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* SVG Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 h-full flex flex-col items-center justify-center text-center">
          
          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-5xl flex flex-col items-center mt-24 md:mt-0"
          >
            {/* Eyebrow with glow pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[var(--color-red)]/30 bg-[var(--color-red)]/10 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-red)] animate-pulse"></span>
              <span className="text-[var(--color-red)] text-xs uppercase tracking-widest font-semibold font-sans">
                Guwahati&apos;s Premium Fleet
              </span>
            </motion.div>

            {/* Headline with gradient text */}
            <h1 className="text-5xl md:text-7xl lg:text-[88px] leading-[1.05] font-heading font-bold text-[var(--color-brand-white)] mb-6 tracking-tight">
              Your Ride.{" "}
              <span className="bg-gradient-to-r from-[var(--color-red)] via-[#ff4d6d] to-[var(--color-red)] bg-clip-text text-transparent  font-medium">
                Your Rules.
              </span>
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-[var(--color-brand-white)]/70 font-light max-w-xl mb-12 leading-relaxed font-sans"
            >
              Self-drive cars and bikes for every Northeast adventure. Pick up in Guwahati, explore Assam, Meghalaya, and beyond.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/book" className="relative bg-[var(--color-red)] text-[var(--color-brand-white)] px-8 py-4 rounded-full font-semibold hover:shadow-[0_0_30px_rgba(239,35,60,0.5)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Book Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#d90429] to-[var(--color-red)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link href="/vehicles" className="bg-[var(--color-brand-white)]/5 backdrop-blur-sm border border-[var(--color-brand-white)]/20 text-[var(--color-brand-white)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-brand-white)]/10 hover:border-[var(--color-brand-white)]/40 transition-all duration-300 transform hover:-translate-y-1 block text-center">
                Browse Fleets
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 mt-20"
          >
            {[
              { value: "40+", label: "Vehicles" },
              { value: "1,200+", label: "Happy Riders" },
              { value: "6 yrs", label: "Trusted Since 2018" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8 md:gap-16">
                <div className="flex flex-col items-center">
                  <span className="text-3xl lg:text-4xl font-heading font-bold text-[var(--color-brand-white)] mb-1">{stat.value}</span>
                  <span className="text-xs uppercase tracking-wider text-[var(--color-brand-white)]/50 font-sans">{stat.label}</span>
                </div>
                {i < 2 && <div className="w-px h-10 bg-[var(--color-brand-white)]/10 hidden sm:block"></div>}
              </div>
            ))}
          </motion.div>

      </div>
    </section>
  );
}
