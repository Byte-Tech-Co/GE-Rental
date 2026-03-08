"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import Link from "next/link";
import { ChevronDown, ArrowRight, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What documents do I need to rent a vehicle?",
    a: "You'll need a valid driving license (for the vehicle category), a government-issued ID (Aadhaar, Passport, or Voter ID), and proof of address. For international travelers, an International Driving Permit (IDP) along with your home country license is required.",
  },
  {
    q: "What's the minimum age to rent?",
    a: "You must be at least 21 years old to rent a bike or scooty, and 23 years old to rent a car or SUV. A valid driving license held for at least 1 year is required for four-wheelers.",
  },
  {
    q: "Can I take the vehicle outside Assam?",
    a: "Yes! Our vehicles can be taken to Meghalaya, Arunachal Pradesh, Nagaland, and other Northeast states. Some restrictions may apply for certain border areas—please confirm with us before your trip. Interstate permits are included where required.",
  },
  {
    q: "What's your cancellation policy?",
    a: "Free cancellation up to 24 hours before pickup. Cancellations within 24 hours incur a 50% charge. No-shows are charged the full rental amount. We recommend booking with flexibility for travel plans.",
  },
  {
    q: "Do you offer delivery or pickup from my location?",
    a: "We offer free pickup from our Guwahati office (Opposite ASTC Office, Near Paltan Bazaar). Delivery to hotels or the airport within Guwahati city is available for a nominal fee. Contact us to arrange.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept UPI, credit/debit cards, net banking, and cash. A security deposit (refundable) is required at pickup. For online bookings, we accept full payment in advance or a partial advance with the balance at pickup.",
  },
  {
    q: "How does fuel work?",
    a: "Vehicles are provided with a full tank. Return with a full tank, or we'll refuel at market rate plus a small service charge. For long trips, we can provide fuel guidance for remote areas.",
  },
  {
    q: "What if I have an accident or breakdown?",
    a: "All our vehicles are insured. In case of an accident, contact us immediately—we'll guide you through the process. For breakdowns, we offer 24/7 roadside assistance within the Northeast. Our team will arrange towing or on-site repair.",
  },
  {
    q: "What are your operating hours?",
    a: "We're open Mon–Sun, 7:00 AM–9:00 PM. Pickups and returns can be scheduled within these hours. For early-morning departures (before 7 AM), advance booking with prior arrangement is possible.",
  },
  {
    q: "Can I extend my rental during my trip?",
    a: "Yes! Extensions are subject to vehicle availability. Contact us at least 24 hours before your scheduled return. Additional days are charged at our standard daily rate. Same-day extensions may incur a small convenience fee.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-[var(--color-brand-white)]/10 last:border-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between gap-4 text-left group"
      >
        <span className="font-heading font-semibold text-lg text-[var(--color-brand-white)] group-hover:text-[var(--color-red)] transition-colors pr-4">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-brand-white)]/10 flex items-center justify-center text-[var(--color-red)]"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[var(--color-brand-muted)] leading-relaxed pl-0 pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[var(--color-brand-white)]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#000000] to-[#050505]" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(253,252,249,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(253,252,249,0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
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
              <HelpCircle className="w-4 h-4 text-[var(--color-red)]" />
              <span className="text-[var(--color-red)] text-xs uppercase tracking-widest font-semibold">
                Got Questions?
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[var(--color-brand-white)] mb-6 tracking-tight">
              Frequently asked{" "}
              <span className="bg-gradient-to-r from-[var(--color-red)] via-[#ff4d6d] to-[var(--color-red)] bg-clip-text text-transparent">
                questions
              </span>
            </h1>
            <p className="text-lg text-[var(--color-brand-white)]/75 leading-relaxed">
              Everything you need to know about renting cars, bikes, and scooties from GW Rental. Can&apos;t find your answer? Reach out at{" "}
              <a
                href="mailto:bookings@gerental.in"
                className="text-[var(--color-red)] hover:underline"
              >
                bookings@gerental.in
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24 bg-[var(--color-forest)]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                index={i}
              />
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
              Ready to hit the road?
            </h2>
            <p className="text-[var(--color-forest)]/70 mb-8">
              Browse our fleet and book your ride for your next Northeast adventure.
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
