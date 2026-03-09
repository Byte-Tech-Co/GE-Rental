"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Send,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Opposite ASTC Office, Near Paltan Bazaar",
    sub: "Guwahati, Assam 781008",
    href: "https://maps.google.com/?q=Opposite+ASTC+Office+Near+Paltan+Bazaar+Guwahati+Assam+781008",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "bookings@gwrental.in",
    href: "mailto:bookings@gwrental.in",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Sun: 7:00 AM - 9:00 PM",
    sub: "Pickups & returns within these hours",
  },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              <span className="w-2 h-2 rounded-full bg-[var(--color-red)] animate-pulse" />
              <span className="text-[var(--color-red)] text-xs uppercase tracking-widest font-semibold">
                Get in Touch
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[var(--color-brand-white)] mb-6 tracking-tight">
              We&apos;d love to{" "}
              <span className="bg-gradient-to-r from-[var(--color-red)] via-[#ff4d6d] to-[var(--color-red)] bg-clip-text text-transparent">
                hear from you
              </span>
            </h1>
            <p className="text-lg text-[var(--color-brand-white)]/75 leading-relaxed">
              Have a question about our fleet, need help with a booking, or want to plan a custom trip? Drop us a line—we typically respond within a few hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 md:py-24 bg-[var(--color-brand-white)]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-12">
            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block p-6 rounded-2xl bg-[var(--color-forest)] border border-[var(--color-forest)]/10 hover:border-[var(--color-red)]/30 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[var(--color-red)]/20 flex items-center justify-center mb-4 group-hover:bg-[var(--color-red)]/30 transition-colors">
                        <item.icon className="w-5 h-5 text-[var(--color-red)]" />
                      </div>
                      <p className="text-xs uppercase tracking-wider text-[var(--color-red)] font-semibold mb-2">
                        {item.label}
                      </p>
                      <p className="font-heading font-semibold text-[var(--color-brand-white)]">
                        {item.value}
                      </p>
                      {item.sub && (
                        <p className="text-sm text-[var(--color-brand-muted)] mt-1">{item.sub}</p>
                      )}
                    </a>
                  ) : (
                    <div className="p-6 rounded-2xl bg-[var(--color-forest)] border border-[var(--color-forest)]/10">
                      <div className="w-10 h-10 rounded-lg bg-[var(--color-red)]/20 flex items-center justify-center mb-4">
                        <item.icon className="w-5 h-5 text-[var(--color-red)]" />
                      </div>
                      <p className="text-xs uppercase tracking-wider text-[var(--color-red)] font-semibold mb-2">
                        {item.label}
                      </p>
                      <p className="font-heading font-semibold text-[var(--color-brand-white)]">
                        {item.value}
                      </p>
                      {item.sub && (
                        <p className="text-sm text-[var(--color-brand-muted)] mt-1">{item.sub}</p>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Social */}
              <div className="flex gap-3 pt-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="w-11 h-11 rounded-full bg-[var(--color-forest)] border border-[var(--color-forest)]/20 flex items-center justify-center text-[var(--color-forest)] hover:bg-[var(--color-red)] hover:border-[var(--color-red)] hover:text-[var(--color-brand-white)] transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="p-8 md:p-10 rounded-2xl bg-[var(--color-forest)] border border-[var(--color-brand-white)]/5">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-[var(--color-red)]/20 flex items-center justify-center mx-auto mb-6">
                      <Send className="w-8 h-8 text-[var(--color-red)]" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-[var(--color-brand-white)] mb-2">
                      Message sent!
                    </h3>
                    <p className="text-[var(--color-brand-muted)] mb-8">
                      Thanks for reaching out. We&apos;ll get back to you within a few hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-[var(--color-red)] hover:underline font-semibold"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="font-heading font-bold text-2xl text-[var(--color-brand-white)] mb-2">
                      Send a message
                    </h3>
                    <p className="text-[var(--color-brand-muted)] text-sm mb-8">
                      Fill out the form below and we&apos;ll respond as soon as we can.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-[var(--color-brand-white)]/80 mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-[var(--color-brand-white)]/5 border border-[var(--color-brand-white)]/10 text-[var(--color-brand-white)] placeholder:text-[var(--color-brand-white)]/40 focus:outline-none focus:border-[var(--color-red)]/50 transition-colors"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-[var(--color-brand-white)]/80 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-[var(--color-brand-white)]/5 border border-[var(--color-brand-white)]/10 text-[var(--color-brand-white)] placeholder:text-[var(--color-brand-white)]/40 focus:outline-none focus:border-[var(--color-red)]/50 transition-colors"
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-brand-white)]/80 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-3 rounded-lg bg-[var(--color-brand-white)]/5 border border-[var(--color-brand-white)]/10 text-[var(--color-brand-white)] placeholder:text-[var(--color-brand-white)]/40 focus:outline-none focus:border-[var(--color-red)]/50 transition-colors"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-brand-white)]/80 mb-2">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-[var(--color-brand-white)]/5 border border-[var(--color-brand-white)]/10 text-[var(--color-brand-white)] focus:outline-none focus:border-[var(--color-red)]/50 transition-colors"
                        >
                          <option value="" className="bg-[var(--color-forest)] text-[var(--color-brand-white)]">Select a topic</option>
                          <option value="booking" className="bg-[var(--color-forest)] text-[var(--color-brand-white)]">Booking enquiry</option>
                          <option value="fleet" className="bg-[var(--color-forest)] text-[var(--color-brand-white)]">Fleet & availability</option>
                          <option value="trip" className="bg-[var(--color-forest)] text-[var(--color-brand-white)]">Custom trip planning</option>
                          <option value="support" className="bg-[var(--color-forest)] text-[var(--color-brand-white)]">Support & feedback</option>
                          <option value="other" className="bg-[var(--color-forest)] text-[var(--color-brand-white)]">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-brand-white)]/80 mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg bg-[var(--color-brand-white)]/5 border border-[var(--color-brand-white)]/10 text-[var(--color-brand-white)] placeholder:text-[var(--color-brand-white)]/40 focus:outline-none focus:border-[var(--color-red)]/50 transition-colors resize-none"
                          placeholder="Tell us how we can help..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full sm:w-auto bg-[var(--color-red)] text-[var(--color-brand-white)] px-8 py-4 rounded-full font-semibold hover:bg-[#d90429] hover:shadow-[0_4px_14px_0_rgba(239,35,60,0.39)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                      >
                        Send Message <Send size={18} />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[var(--color-forest)]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-brand-white)] mb-6">
              Prefer to book directly?
            </h2>
            <p className="text-[var(--color-brand-muted)] mb-8">
              Browse our fleet and reserve your ride online in minutes.
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
