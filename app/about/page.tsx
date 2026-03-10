"use client";

import { motion } from "motion/react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import Link from "next/link";
import { ArrowRight, MapPin, Car, Bike, Shield, Heart } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { value: "40+", label: "Vehicles in Fleet" },
    { value: "1,200+", label: "Happy Riders" },
    { value: "6+", label: "Years of Trust" },
    { value: "100%", label: "Transparent Pricing" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Reliability",
      desc: "Every vehicle is inspected and maintained to the highest standards. Your safety is our priority.",
    },
    {
      icon: Heart,
      title: "Passion for the Northeast",
      desc: "We love this region. Our mission is to help travelers discover its hidden gems with the freedom of the open road.",
    },
    {
      icon: Car,
      title: "Choice for Every Journey",
      desc: "From city scooties to rugged 4x4s, we've got the right ride for mountains, valleys, and everything in between.",
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--color-brand-white)]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#000000] to-[#050505]" />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(253,252,249,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(253,252,249,0.1) 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(239,35,60,0.2)_0%,_transparent_70%)] blur-3xl pointer-events-none"
        />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[var(--color-red)]/30 bg-[var(--color-red)]/10">
              <span className="w-2 h-2 rounded-full bg-[var(--color-red)] animate-pulse" />
              <span className="text-[var(--color-red)] text-xs uppercase tracking-widest font-semibold">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[var(--color-brand-white)] mb-6 tracking-tight">
              Ride free in the{" "}
              <span className="bg-gradient-to-r from-[var(--color-red)] via-[#ff4d6d] to-[var(--color-red)] bg-clip-text text-transparent">
                Northeast
              </span>
            </h1>
            <p className="text-lg text-[var(--color-brand-white)]/75 leading-relaxed">
              Since 2018, GW Rental has been Guwahati&apos;s trusted partner for self-drive adventures. We help travelers conquer the hills and valleys of Assam, Meghalaya, and beyond—one ride at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative bg-[var(--color-forest)] py-12 border-y border-[var(--color-brand-white)]/5">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block text-2xl md:text-3xl font-heading font-bold text-[var(--color-red)] mb-1">{stat.value}</span>
                <span className="text-sm text-[var(--color-brand-white)]/60 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-[var(--color-brand-white)]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-4 h-[2px] bg-[var(--color-red)]" />
                <span className="text-[var(--color-red)] text-sm uppercase tracking-widest font-semibold">How We Started</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-forest)] mb-6">
                Born from a love of the road
              </h2>
              <p className="text-[var(--color-forest)]/80 leading-relaxed mb-4">
                GW Rental started with a simple idea: travelers visiting the Northeast deserve the freedom to explore at their own pace. Public transport can&apos;t reach the tea gardens of Dibrugarh, the living root bridges of Meghalaya, or the misty valleys of Tawang—but a rented bike or car can.
              </p>
              <p className="text-[var(--color-forest)]/80 leading-relaxed">
                We built our fleet around what the region demands: comfortable sedans for family trips, rugged motorcycles for the adventurous, and nimble scooties for city hops. Every vehicle is maintained in-house, and every booking comes with transparent pricing and local support.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl bg-[var(--color-forest)] overflow-hidden border border-[var(--color-forest)]/10 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--color-forest)] to-[#0a0a0a]">
                  <div className="flex gap-8">
                    <Car className="w-16 h-16 text-[var(--color-red)]/40" strokeWidth={1.5} />
                    <Bike className="w-16 h-16 text-[var(--color-red)]/40" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[var(--color-red)] text-[var(--color-brand-white)] px-6 py-3 rounded-lg font-heading font-bold shadow-lg">
                <MapPin className="inline-block w-4 h-4 mr-2 -mt-0.5" />
                Guwahati, Assam
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-[var(--color-forest)]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-4 h-[2px] bg-[var(--color-red)]" />
              <span className="text-[var(--color-red)] text-sm uppercase tracking-widest font-semibold">What We Stand For</span>
              <span className="w-4 h-[2px] bg-[var(--color-red)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-brand-white)]">
              Our values drive every ride
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-[var(--color-brand-white)]/5 border border-[var(--color-brand-white)]/10 hover:border-[var(--color-red)]/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-red)]/20 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-[var(--color-red)]" />
                </div>
                <h3 className="font-heading font-bold text-xl text-[var(--color-brand-white)] mb-3">{item.title}</h3>
                <p className="text-[var(--color-brand-muted)] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[var(--color-brand-white)]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-forest)] mb-6">
              Ready to explore?
            </h2>
            <p className="text-[var(--color-forest)]/70 mb-8">
              Browse our fleet and find the perfect ride for your next Northeast adventure.
            </p>
            <Link
              href="/vehicles"
              className="inline-flex items-center gap-2 bg-[var(--color-red)] text-[var(--color-brand-white)] px-8 py-4 rounded-full font-semibold hover:bg-[#d90429] hover:shadow-[0_4px_14px_0_rgba(239,35,60,0.39)] transition-all transform hover:-translate-y-0.5"
            >
              Explore the Fleet <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
