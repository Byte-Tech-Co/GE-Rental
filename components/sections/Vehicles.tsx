"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Users, Fuel, Mountain, MapPin } from "lucide-react";

export function Vehicles() {
  const categories = [
    {
      type: "Cars",
      title: "Comfortable sedans & SUVs",
      desc: "Perfect for family trips to Kaziranga or long intercity drives across Assam.",
      price: "1,200",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800",
      specs: [
        { icon: <Users size={14} />, text: "4-7 Seats" },
        { icon: <Fuel size={14} />, text: "Diesel/Petrol" },
        { icon: <Mountain size={14} />, text: "Highway & Off-road" },
      ],
      badge: "Most Popular",
    },
    {
      type: "Bikes",
      title: "Rugged motorcycles",
      desc: "Conquer the mountain roads to Shillong or cruise along the Brahmaputra.",
      price: "600",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800",
      specs: [
        { icon: <Users size={14} />, text: "2 Seats" },
        { icon: <Fuel size={14} />, text: "Petrol" },
        { icon: <Mountain size={14} />, text: "Mountain Terrain" },
      ],
    },
    {
      type: "Scooties",
      title: "Effortless city rides",
      desc: "Light and easy to park. The smartest way to explore Guwahati's ghats and markets.",
      price: "300",
      image: "https://images.unsplash.com/photo-1599813533804-0377a06f36ee?auto=format&fit=crop&q=80&w=800",
      specs: [
        { icon: <Users size={14} />, text: "2 Seats" },
        { icon: <Fuel size={14} />, text: "Petrol" },
        { icon: <MapPin size={14} />, text: "City Exploring" },
      ],
    },
  ];

  return (
    <section id="vehicles" className="w-full bg-[var(--color-brand-white)] py-24">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-forest)] mb-4">
              Pick your perfect ride for the road
            </h2>
            <p className="text-[var(--color-brand-muted)] text-lg">
              Whether you&apos;re conquering mountain passes or cruising city streets, we have a meticulously maintained vehicle waiting for you.
            </p>
          </motion.div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow border border-[#f0ebe1] group flex flex-col h-full"
            >
              {/* Card Header/Image */}
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                {cat.badge && (
                  <div className="absolute top-4 left-4 bg-[var(--color-forest)] text-white text-xs font-semibold px-3 py-1.5 rounded-full z-10">
                    {cat.badge}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="font-heading font-bold text-2xl text-[var(--color-forest)] mb-2">
                    {cat.type}
                  </h3>
                  <p className="text-[var(--color-brand-muted)] text-sm leading-relaxed">
                    <strong className="text-gray-700 font-medium">{cat.title}.</strong> {cat.desc}
                  </p>
                </div>

                {/* Specs */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {cat.specs.map((spec, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center gap-1.5 bg-[var(--color-cream)] text-[var(--color-forest)] px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase"
                    >
                      {spec.icon}
                      {spec.text}
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-[var(--color-brand-white)] flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-[var(--color-brand-muted)] font-semibold tracking-wider">Starting from</span>
                    <div className="text-[var(--color-forest)]">
                      <span className="font-heading font-bold text-xl">₹{cat.price}</span>
                      <span className="text-sm font-medium"> / day</span>
                    </div>
                  </div>
                  <button className="text-[var(--color-amber)] font-semibold flex items-center gap-1 hover:text-[#b5722e] transition-colors">
                    Browse <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
