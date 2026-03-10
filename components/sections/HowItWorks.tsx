"use client";

import { motion } from "motion/react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Browse the Fleet",
      desc: "Explore our collection of fully maintained cars, bikes, and scooties. Find the perfect match for your terrain and budget.",
    },
    {
      num: "02",
      title: "Pick Your Dates",
      desc: "Select your pickup and drop-off times. We offer flexible daily, weekly, and monthly rates for all our vehicles.",
    },
    {
      num: "03",
      title: "Confirm & Pay",
      desc: "Complete your booking with a quick KYC check and secure online payment. No hidden fees or surprise charges.",
    },
    {
      num: "04",
      title: "Ride & Return",
      desc: "Pick up your ride from Guwahati city center and start your adventure. Return it hassle-free when you're done.",
    },
  ];

  return (
    <section id="how-it-works" className="relative w-full bg-[var(--color-forest)] py-24 overflow-hidden">
      {/* Radial Amber Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-red)] rounded-full blur-[150px] opacity-10 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-4 h-[2px] bg-[var(--color-red)]"></span>
            <span className="text-[var(--color-red)] text-sm uppercase tracking-widest font-semibold font-sans">Simple Process</span>
            <span className="w-4 h-[2px] bg-[var(--color-red)]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-brand-white)]">
            On the road in four easy steps
          </h2>
        </motion.div>

        {/* Steps Layout */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[28px] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-[var(--color-red)]/0 via-[var(--color-red)]/30 to-[var(--color-red)]/0 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col items-center md:items-start text-center md:text-left"
              >
                {/* Number Circle */}
                <div className="w-14 h-14 rounded-full bg-[var(--color-forest)] border border-[var(--color-red)]/40 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(239,35,60,0.15)] relative group">
                  <div className="absolute inset-0 bg-[var(--color-red)] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out opacity-20"></div>
                  <span className="font-heading font-bold text-xl text-[var(--color-red)]">
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-[var(--color-brand-white)] font-bold text-xl mb-3 font-heading">
                  {step.title}
                </h3>
                <p className="text-[var(--color-brand-muted)] text-sm leading-relaxed max-w-[280px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
