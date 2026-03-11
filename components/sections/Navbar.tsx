"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reducedMotion = useReducedMotion();

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
        isScrolled || mobileMenuOpen
          ? "bg-[var(--color-forest)]/90 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2 z-50">
          <Image
            src="/logo.png"
            alt="GW Rental logo"
            width={64}
            height={64}
            priority
            className="w-10 h-10 md:w-16 md:h-16 object-contain"
          />
          <span className="font-bold text-xl md:text-2xl text-[var(--color-brand-white)]">GW Rental</span>
        </Link>

        {/* Desktop Nav - centered */}
        <nav className="hidden md:flex items-center justify-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-[var(--color-brand-white)]/90 hover:text-[var(--color-brand-white)] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-red)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Book Now Button - right side */}
        <div className="hidden md:block">
          <Link href="/book" className="bg-[var(--color-red)] text-[var(--color-brand-white)] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#d90429] hover:shadow-[0_4px_14px_0_rgba(239,35,60,0.39)] transition-all transform hover:-translate-y-0.5">
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[var(--color-brand-white)] z-50 p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
        >
          <motion.div
            animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.3 }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 md:hidden z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[var(--color-forest)] border-t border-white/10 relative z-50"
            id="mobile-nav"
          >
            <div className="px-6 py-6 flex flex-col gap-4 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-[var(--color-brand-white)] hover:text-[var(--color-red)] transition-colors py-2 w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/book" 
                className="bg-[var(--color-red)] text-[var(--color-brand-white)] px-6 py-3 rounded-full text-base font-semibold mt-2 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </header>
  );
}
