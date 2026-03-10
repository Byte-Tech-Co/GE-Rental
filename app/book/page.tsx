"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import {
  ChevronRight,
  ChevronLeft,
  Car,
  Calendar,
  User,
  CheckCircle2,
  Fuel,
  Users,
  MapPin,
} from "lucide-react";
import { vehicles, type Vehicle } from "@/lib/vehicles";

const STEPS = [
  { id: 1, label: "Choose Vehicle", icon: Car },
  { id: 2, label: "Pick Dates", icon: Calendar },
  { id: 3, label: "Your Details", icon: User },
  { id: 4, label: "Confirm", icon: CheckCircle2 },
];

const availableVehicles = vehicles.filter((v) => v.status === "Available");

function getDaysBetween(start: Date, end: Date): number {
  const ms = end.getTime() - start.getTime();
  return Math.ceil(ms / (1000 * 60 * 60 * 24)) || 1;
}

export default function BookPage() {
  const searchParams = useSearchParams();
  const vehicleId = searchParams.get("vehicle");

  const [step, setStep] = useState(1);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [license, setLicense] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (vehicleId) {
      const v = vehicles.find((x) => x.id === vehicleId);
      if (v && v.status === "Available") setSelectedVehicle(v);
    }
  }, [vehicleId]);

  const today = new Date().toISOString().split("T")[0];
  const days = pickupDate && dropoffDate
    ? getDaysBetween(new Date(pickupDate), new Date(dropoffDate))
    : 0;
  const total = selectedVehicle ? selectedVehicle.price * days : 0;

  const canProceedStep1 = !!selectedVehicle;
  const canProceedStep2 = !!pickupDate && !!dropoffDate && new Date(dropoffDate) >= new Date(pickupDate);
  const canProceedStep3 = !!name && !!email && !!phone && !!license;

  const handleConfirm = () => {
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <main className="min-h-screen bg-[var(--color-brand-white)]">
        <Navbar />
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 min-h-screen flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl mx-auto text-center"
            >
              <div className="w-20 h-20 rounded-full bg-[var(--color-red)]/20 flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-10 h-10 text-[var(--color-red)]" />
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-forest)] mb-4">
                Booking confirmed!
              </h1>
              <p className="text-[var(--color-brand-muted)] mb-8">
                Thanks for your booking. We&apos;ll send a confirmation to <strong>{email}</strong> with pickup details. See you at our Guwahati office!
              </p>
              <Link
                href="/vehicles"
                className="inline-flex items-center gap-2 text-[var(--color-red)] font-semibold hover:underline"
              >
                Browse more vehicles <ChevronRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-brand-white)]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
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
          className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,_rgba(239,35,60,0.2)_0%,_transparent_70%)] blur-3xl pointer-events-none"
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-brand-white)] mb-2">
              Book your ride
            </h1>
            <p className="text-[var(--color-brand-white)]/70">
              Four simple steps to reserve your vehicle
            </p>
          </motion.div>

          {/* Step indicator */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-2 md:gap-4 mt-10"
          >
            {STEPS.map((s) => (
              <div key={s.id} className="flex items-center">
                <button
                  onClick={() => setStep(s.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    step === s.id
                      ? "bg-[var(--color-red)] text-[var(--color-brand-white)]"
                      : step > s.id
                        ? "bg-[var(--color-brand-white)]/20 text-[var(--color-brand-white)]"
                        : "text-[var(--color-brand-white)]/50"
                  }`}
                >
                  <s.icon size={16} />
                  <span className="hidden sm:inline">{s.label}</span>
                </button>
                {s.id < 4 && (
                  <ChevronRight size={16} className="text-[var(--color-brand-white)]/30 mx-1" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Step content */}
      <section className="py-12 md:py-20 bg-[var(--color-brand-white)]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="font-heading font-bold text-2xl text-[var(--color-forest)]">
                    Select your vehicle
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {availableVehicles.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVehicle(v)}
                        className={`p-4 rounded-xl border-2 text-left transition-all flex gap-4 ${
                          selectedVehicle?.id === v.id
                            ? "border-[var(--color-red)] bg-[var(--color-red)]/5"
                            : "border-[#e5e7eb] hover:border-[var(--color-forest)]/30"
                        }`}
                      >
                        <div className="relative w-24 h-20 rounded-lg overflow-hidden bg-[var(--color-cream)] shrink-0">
                          <Image src={v.image} alt={v.name} fill sizes="96px" className="object-cover" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-heading font-bold text-[var(--color-forest)]">{v.name}</p>
                          <p className="text-sm text-[var(--color-brand-muted)]">{v.category}</p>
                          <p className="font-heading font-bold text-[var(--color-red)] mt-1">
                            ₹{v.price.toLocaleString("en-IN")}/day
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="font-heading font-bold text-2xl text-[var(--color-forest)]">
                    Pick your dates
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-forest)] mb-2">
                        Pickup date
                      </label>
                      <input
                        type="date"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        min={today}
                        className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] bg-white text-[var(--color-forest)] focus:outline-none focus:ring-2 focus:ring-[var(--color-red)]/40 focus:border-[var(--color-red)]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-forest)] mb-2">
                        Drop-off date
                      </label>
                      <input
                        type="date"
                        value={dropoffDate}
                        onChange={(e) => setDropoffDate(e.target.value)}
                        min={pickupDate || today}
                        className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] bg-white text-[var(--color-forest)] focus:outline-none focus:ring-2 focus:ring-[var(--color-red)]/40 focus:border-[var(--color-red)]"
                      />
                    </div>
                  </div>
                  {days > 0 && selectedVehicle && (
                    <p className="text-[var(--color-brand-muted)]">
                      {days} {days === 1 ? "day" : "days"} × ₹{selectedVehicle.price.toLocaleString("en-IN")}/day ={" "}
                      <span className="font-semibold text-[var(--color-forest)]">
                        ₹{total.toLocaleString("en-IN")}
                      </span>
                    </p>
                  )}
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="font-heading font-bold text-2xl text-[var(--color-forest)]">
                    Your details
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-forest)] mb-2">
                        Full name *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] bg-white text-[var(--color-forest)] placeholder:text-[var(--color-brand-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-red)]/40 focus:border-[var(--color-red)]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-forest)] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] bg-white text-[var(--color-forest)] placeholder:text-[var(--color-brand-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-red)]/40 focus:border-[var(--color-red)]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-forest)] mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] bg-white text-[var(--color-forest)] placeholder:text-[var(--color-brand-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-red)]/40 focus:border-[var(--color-red)]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-forest)] mb-2">
                        Driving license number *
                      </label>
                      <input
                        type="text"
                        value={license}
                        onChange={(e) => setLicense(e.target.value)}
                        required
                        placeholder="License number"
                        className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] bg-white text-[var(--color-forest)] placeholder:text-[var(--color-brand-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-red)]/40 focus:border-[var(--color-red)]"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="font-heading font-bold text-2xl text-[var(--color-forest)]">
                    Review your booking
                  </h2>
                  <div className="rounded-2xl border border-[#e5e7eb] overflow-hidden">
                    {selectedVehicle && (
                      <div className="p-6 flex gap-4 bg-[var(--color-cream)]/50">
                        <div className="relative w-32 h-24 rounded-xl overflow-hidden bg-[var(--color-cream)] shrink-0">
                          <Image src={selectedVehicle.image} alt={selectedVehicle.name} fill sizes="128px" className="object-cover" />
                        </div>
                        <div>
                          <p className="font-heading font-bold text-lg text-[var(--color-forest)]">
                            {selectedVehicle.name}
                          </p>
                          <p className="text-sm text-[var(--color-brand-muted)] flex items-center gap-2 mt-1">
                            <Fuel size={14} /> {selectedVehicle.fuel} · <Users size={14} /> {selectedVehicle.seats} seats
                          </p>
                        </div>
                      </div>
                    )}
                    <div className="p-6 space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-[var(--color-brand-muted)]">Pickup</span>
                        <span className="font-medium">{pickupDate}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[var(--color-brand-muted)]">Drop-off</span>
                        <span className="font-medium">{dropoffDate}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[var(--color-brand-muted)]">Duration</span>
                        <span className="font-medium">{days} {days === 1 ? "day" : "days"}</span>
                      </div>
                      <div className="flex justify-between text-sm pt-2 border-t border-[#e5e7eb]">
                        <span className="text-[var(--color-brand-muted)]">Pickup location</span>
                        <span className="font-medium text-right flex items-center gap-1">
                          <MapPin size={14} /> Guwahati
                        </span>
                      </div>
                      <div className="flex justify-between pt-4 border-t-2 border-[var(--color-forest)]">
                        <span className="font-heading font-bold text-[var(--color-forest)]">Total</span>
                        <span className="font-heading font-bold text-[var(--color-red)] text-xl">
                          ₹{total.toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--color-brand-muted)]">
                    By confirming, you agree to our terms. A security deposit may be required at pickup.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-10">
              <button
                onClick={() => setStep((s) => Math.max(1, s - 1))}
                disabled={step === 1}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed text-[var(--color-forest)] hover:bg-[var(--color-cream)] transition-colors"
              >
                <ChevronLeft size={18} /> Back
              </button>
              {step < 4 ? (
                <button
                  onClick={() => setStep((s) => s + 1)}
                  disabled={
                    (step === 1 && !canProceedStep1) ||
                    (step === 2 && !canProceedStep2) ||
                    (step === 3 && !canProceedStep3)
                  }
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--color-red)] text-[var(--color-brand-white)] font-semibold text-sm hover:bg-[#d90429] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Continue <ChevronRight size={18} />
                </button>
              ) : (
                <button
                  onClick={handleConfirm}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--color-red)] text-[var(--color-brand-white)] font-semibold text-sm hover:bg-[#d90429] hover:shadow-[0_4px_14px_0_rgba(239,35,60,0.39)] transition-all"
                >
                  Confirm booking
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
