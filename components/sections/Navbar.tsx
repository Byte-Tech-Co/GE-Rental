"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Fleet", href: "/vehicles" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--color-forest)]/90 backdrop-blur-md py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2 z-50">
          <Image
            src="/logo-icon.png"
            alt="GW Rental Logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
          <span className="font-heading text-2xl font-bold tracking-tight text-[var(--color-brand-white)] uppercase group-hover:opacity-90 transition-opacity">
            GW Rental
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[var(--color-brand-white)]/90 hover:text-[var(--color-brand-white)] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-red)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link href="/vehicles" className="bg-[var(--color-red)] text-[var(--color-brand-white)] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#d90429] hover:shadow-[0_4px_14px_0_rgba(239,35,60,0.39)] transition-all transform hover:-translate-y-0.5 ml-4">
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[var(--color-brand-white)] z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 h-screen bg-[var(--color-forest)] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-medium text-[var(--color-brand-white)] hover:text-[var(--color-red)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/vehicles" className="bg-[var(--color-red)] text-[var(--color-brand-white)] px-8 py-3 rounded-full text-lg font-semibold mt-4" onClick={() => setMobileMenuOpen(false)}>
              Book Now
            </Link>
          </motion.div>
        )}
      </div>
    </header>
  );
}
