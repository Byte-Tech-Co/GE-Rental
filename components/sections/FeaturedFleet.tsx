"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Fuel, Users, Snowflake } from "lucide-react";

export function FeaturedFleet() {
  const fleet = [
    {
      name: "Maruti Swift Dzire",
      type: "Sedan",
      price: "1,200",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=400",
      status: "Available",
      specs: [
        { icon: <Fuel size={12} />, text: "Petrol" },
        { icon: <Users size={12} />, text: "5 Seats" },
        { icon: <Snowflake size={12} />, text: "AC" },
      ],
    },
    {
      name: "Royal Enfield Classic 350",
      type: "Bike",
      price: "650",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=400",
      status: "Available",
      specs: [
        { icon: <Fuel size={12} />, text: "Petrol" },
        { icon: <Users size={12} />, text: "2 Seats" },
      ],
    },
    {
      name: "Honda Activa 6G",
      type: "Scooty",
      price: "300",
      image: "https://images.unsplash.com/photo-1599813533804-0377a06f36ee?auto=format&fit=crop&q=80&w=400",
      status: "Booked",
      specs: [
        { icon: <Fuel size={12} />, text: "Petrol" },
        { icon: <Users size={12} />, text: "2 Seats" },
      ],
    },
    {
      name: "Toyota Innova Crysta",
      type: "SUV",
      price: "2,500",
      image: "https://images.unsplash.com/photo-1503376713356-6510f27ddc5e?auto=format&fit=crop&q=80&w=400",
      status: "Available",
      specs: [
        { icon: <Fuel size={12} />, text: "Diesel" },
        { icon: <Users size={12} />, text: "7 Seats" },
        { icon: <Snowflake size={12} />, text: "AC" },
      ],
    },
  ];

  return (
    <section className="w-full bg-[var(--color-cream)] py-24">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[var(--color-forest)] mb-3">
              Ready to roll today
            </h2>
            <p className="text-[var(--color-brand-muted)] text-lg">
              Freshly serviced and fully fueled. Take your pick.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button className="text-[var(--color-forest)] font-semibold flex items-center gap-2 hover:text-[var(--color-amber)] transition-colors group pb-2 border-b border-[var(--color-forest)] group-hover:border-[var(--color-amber)]">
              See all 40+ vehicles <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleet.map((vehicle, i) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[var(--color-brand-white)] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#eae0d2] group flex flex-col"
            >
              {/* Image & Badges */}
              <div className="relative h-[180px] overflow-hidden bg-gray-100">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Status Badge */}
                <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  vehicle.status === "Available" 
                    ? "bg-[#e8f5ed] text-[#1e6b41]" 
                    : "bg-[#fdeceb] text-[#c62828]"
                }`}>
                  {vehicle.status}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-[var(--color-amber)] text-xs font-semibold uppercase tracking-wider mb-2">
                  {vehicle.type}
                </span>
                <h3 className="font-heading font-bold text-lg text-[var(--color-forest)] mb-4">
                  {vehicle.name}
                </h3>

                {/* Specs inline */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {vehicle.specs.map((spec, index) => (
                    <div key={index} className="flex items-center gap-1.5 text-[var(--color-brand-muted)] text-xs bg-[var(--color-cream)] px-2 py-1 rounded">
                      {spec.icon}
                      {spec.text}
                    </div>
                  ))}
                </div>

                {/* Footer / Booking */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="font-heading font-bold text-[var(--color-forest)] text-xl">₹{vehicle.price}</span>
                    <span className="text-xs text-[var(--color-brand-muted)]">/day</span>
                  </div>
                  <button 
                    disabled={vehicle.status === "Booked"}
                    className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                      vehicle.status === "Available"
                        ? "bg-[var(--color-amber)] text-[var(--color-brand-white)] hover:bg-[#b5722e] hover:shadow-md transform hover:-translate-y-0.5"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {vehicle.status === "Booked" ? "Unavailable" : "Book"}
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
