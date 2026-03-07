"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";

const destinations = [
  {
    name: "Kaziranga National Park",
    time: "3-4 hr drive",
    image: "https://images.unsplash.com/photo-1466105350347-d5f1ad709010?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    width: 80,
    height: 100,
    tall: true,
  },
  {
    name: "Shillong",
    time: "2 hr drive",
    image: "https://images.unsplash.com/photo-1609276804051-8c5e906cc430?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tall: false,
  },
  {
    name: "Cherrapunji",
    time: "4 hr drive",
    image: "https://images.unsplash.com/photo-1625654325562-762dcec9e6f2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tall: false,
  },
  {
    name: "Kamakhya Temple",
    time: "30 min drive",
    image: "https://images.unsplash.com/photo-1594803205835-d121cb46e518?q=80&w=1153&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tall: false,
  },
  {
    name: "Pobitora Wildlife",
    time: "1.5 hr drive",
    image: "https://images.unsplash.com/photo-1661882759982-429eb2994c63?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tall: false,
  },
];

export function Destinations() {
  return (
    <section id="destinations" className="w-full bg-[var(--color-cream)] py-24">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[var(--color-amber)]"></span>
              <span className="text-[var(--color-amber)] text-sm uppercase tracking-widest font-semibold font-sans">
                Adventure awaits
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-forest)] mb-6">
              Where will your journey take you?
            </h2>
            <p className="text-lg text-[var(--color-brand-muted)] leading-relaxed">
              Northeast India is breathtaking. From ancient temples to the wettest places on earth, discover the hidden gems of Assam and Meghalaya at your own pace.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button className="text-[var(--color-forest)] font-semibold flex items-center gap-2 hover:text-[var(--color-amber)] transition-colors group">
              View all routes <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                dest.tall
                  ? "md:col-span-2 md:row-span-2 h-[400px] md:h-full"
                  : "md:col-span-1 md:row-span-1 h-[250px] md:h-auto"
              }`}
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest)] via-[var(--color-forest)]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className={`font-heading font-bold text-[var(--color-brand-white)] mb-3 ${dest.tall ? 'text-3xl' : 'text-xl'}`}>
                  {dest.name}
                </h3>
                <div className="inline-flex items-center gap-1.5 bg-[var(--color-amber)]/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-[var(--color-brand-white)]">
                  <Clock size={12} />
                  <span>{dest.time}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
