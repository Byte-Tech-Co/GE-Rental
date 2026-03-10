"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rohan Deka",
    location: "Guwahati, Assam",
    text: "The Innova was in pristine condition. Comfortable for our entire family trip to Tawang. Driver was polite and the booking process via WhatsApp was incredibly smooth.",
    stars: 5,
  },
  {
    name: "Ananya Sharma",
    location: "New Delhi",
    text: "Rented a Royal Enfield for a solo trip to Cherrapunji. The bike didn't give me a single issue on those steep climbs. Highly recommend GW Rental for mountain trips!",
    stars: 5,
  },
  {
    name: "David Lalrin",
    location: "Shillong, Meghalaya",
    text: "Picked up a Swift Dzire for the weekend. The handover near Paltan Bazaar was quick, no hidden charges. Very transparent and professional rental service.",
    stars: 5,
  },
];

export function Testimonials() {

  return (
    <section className="w-full bg-[var(--color-brand-white)] py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-forest)]">
            Riders who trusted us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-[var(--color-cream)] p-8 md:p-10 rounded-2xl relative"
            >
              {/* Decorative Quote */}
              <div className="absolute top-6 right-6 font-heading text-8xl text-[var(--color-red)] opacity-10 leading-none select-none">
                &quot;
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6 relative z-10">
                {[...Array(review.stars)].map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" className="text-[var(--color-red)]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[var(--color-forest)] text-lg leading-relaxed mb-8 relative z-10 italic">
                &quot;{review.text}&quot;
              </p>

              {/* User Info */}
              <div className="relative z-10">
                <h4 className="font-heading font-bold text-xl text-[var(--color-forest)]">
                  {review.name}
                </h4>
                <p className="text-[var(--color-brand-muted)] text-sm">
                  {review.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
