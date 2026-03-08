"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MessageSquare } from "lucide-react";

export function CTA() {
  return (
    <section className="relative w-full bg-[#000000] py-24 overflow-hidden border-y border-[var(--color-brand-white)]/10">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0 opacity-20 group">
        <Image
          src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=2600"
          alt="CTA Background"
          fill
          sizes="100vw"
          quality={60}
          className="object-cover grayscale mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/90 to-[#000000]/60"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 text-left"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[var(--color-brand-white)]"></span>
              <span className="text-[var(--color-brand-white)] text-sm uppercase tracking-widest font-semibold font-sans">
                Your adventure starts here
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-[var(--color-brand-white)] mb-6">
              The road is waiting.<br />
              <span className="italic font-medium text-[var(--color-red)]">Are you?</span>
            </h2>
            
            <p className="text-lg text-[var(--color-brand-white)]/80 leading-relaxed max-w-lg mb-0 font-light">
              Don&apos;t let the right vehicle slip away. Browse our fleet and lock in your dates today. Need help planning? Drop us a WhatsApp message.
            </p>
          </motion.div>

          {/* Right Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-auto flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-forest/40 p-6 md:p-8 rounded-2xl border border-brand-white/10 backdrop-blur-sm"
          >
            <button className="w-full sm:w-auto bg-[var(--color-forest)] text-[var(--color-brand-white)] px-8 py-4 rounded-xl font-semibold hover:bg-[#0a0a0a] hover:shadow-[0_4px_20px_0_rgba(15,15,15,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group whitespace-nowrap">
              Explore the Fleet <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex flex-col items-center sm:items-start group cursor-pointer w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1ebd5a] hover:shadow-[0_4px_20px_0_rgba(37,211,102,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 whitespace-nowrap">
                <MessageSquare size={18} /> WhatsApp Us
              </button>
              <div className="mt-2 text-center sm:text-left w-full">
                <span className="text-xs text-[var(--color-brand-white)]/50 tracking-wide block">
                  Usually responds within 15 minutes
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
