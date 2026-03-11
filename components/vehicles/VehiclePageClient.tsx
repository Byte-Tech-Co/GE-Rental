"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Fuel,
  Users,
  Snowflake,
  Sparkles,
  X,
  SlidersHorizontal,
} from "lucide-react";
import {
  vehicles,
  categories,
  PRICE_MIN,
  PRICE_MAX,
  type VehicleCategory,
} from "@/lib/vehicles";

export function VehiclePageClient() {
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get("category") as VehicleCategory | null;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<
    Set<VehicleCategory>
  >(
    () =>
      categoryQuery && categories.includes(categoryQuery)
        ? new Set([categoryQuery])
        : new Set()
  );
  const [maxPrice, setMaxPrice] = useState(PRICE_MAX);
  const [showFilters, setShowFilters] = useState(false);

  const toggleCategory = (cat: VehicleCategory) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories(new Set());
    setMaxPrice(PRICE_MAX);
  };

  const filtered = useMemo(() => {
    return vehicles.filter((v) => {
      const matchesSearch = v.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategories.size === 0 || selectedCategories.has(v.category);
      const matchesPrice = v.price <= maxPrice;
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, selectedCategories, maxPrice]);

  const hasActiveFilters =
    searchQuery || selectedCategories.size > 0 || maxPrice < PRICE_MAX;

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[var(--color-forest)] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-red)] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-[var(--color-red)] rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-[var(--color-brand-white)] mb-4">
              Our Fleet
            </h1>
            <p className="text-brand-white/70 text-lg md:text-xl">
              Browse our full collection of meticulously maintained vehicles.
              Find the perfect ride for your Northeast adventure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters + Grid */}
      <section className="w-full bg-[var(--color-brand-white)] py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-12">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative max-w-2xl mx-auto">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-brand-muted)]"
              />
              <input
                id="vehicle-search"
                type="text"
                placeholder="Search by vehicle name…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 rounded-xl border border-[#e5e7eb] bg-white text-[var(--color-forest)] placeholder:text-[var(--color-brand-muted)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-red)]/40 focus:border-[var(--color-red)] transition-all text-base shadow-sm font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-brand-muted)] hover:text-[var(--color-forest)] transition-colors"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </motion.div>

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10"
          >
            {/* Mobile filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 mx-auto mb-4 px-4 py-2 rounded-lg bg-[var(--color-cream)] text-[var(--color-forest)] font-semibold text-sm"
            >
              <SlidersHorizontal size={16} />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>

            <div
              className={`${showFilters ? "block" : "hidden"} md:flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8`}
            >
              {/* Category Pills */}
              <div className="flex flex-wrap justify-center gap-2 mb-4 md:mb-0">
                {categories.map((cat) => {
                  const isActive = selectedCategories.has(cat);
                  return (
                    <button
                      key={cat}
                      id={`filter-${cat.toLowerCase()}`}
                      onClick={() => toggleCategory(cat)}
                      className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                        isActive
                          ? "bg-[var(--color-forest)] text-[var(--color-brand-white)] border-[var(--color-forest)] shadow-md"
                          : "bg-white text-[var(--color-forest)] border-[#e0d8cc] hover:border-[var(--color-forest)] hover:bg-[var(--color-cream)]"
                      }`}
                    >
                      {cat}
                      {cat === "SUV" ? "s" : cat === "Scooty" ? "" : "s"}
                    </button>
                  );
                })}
              </div>

              {/* Price Range */}
              <div className="flex items-center gap-3 bg-white border border-[#e0d8cc] rounded-xl px-5 py-3">
                <span className="text-xs font-semibold text-[var(--color-brand-muted)] uppercase tracking-wider whitespace-nowrap">
                  Max ₹{maxPrice.toLocaleString("en-IN")}/day
                </span>
                <input
                  id="price-range"
                  type="range"
                  min={PRICE_MIN}
                  max={PRICE_MAX}
                  step={100}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-32 md:w-40 accent-[var(--color-red)] cursor-pointer"
                />
              </div>

              {/* Clear all */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-[var(--color-red)] font-semibold hover:text-[#d90429] transition-colors flex items-center gap-1"
                >
                  <X size={14} /> Clear all
                </button>
              )}
            </div>
          </motion.div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-[var(--color-brand-muted)]">
              Showing{" "}
              <span className="font-semibold text-[var(--color-forest)]">
                {filtered.length}
              </span>{" "}
              {filtered.length === 1 ? "vehicle" : "vehicles"}
            </p>
          </div>

          {/* Vehicle Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((vehicle, i) => (
                <motion.div
                  key={vehicle.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgb(0,0,0,0.1)] transition-all duration-300 border border-[#f0ebe1] group flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-[200px] overflow-hidden bg-[var(--color-cream)]">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Status Badge */}
                    <div
                      className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        vehicle.status === "Available"
                          ? "bg-[#e8f5ed] text-[#1e6b41]"
                          : "bg-[#fdeceb] text-[#c62828]"
                      }`}
                    >
                      {vehicle.status}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 bg-[var(--color-forest)]/90 text-[var(--color-brand-white)] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {vehicle.category}
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-heading font-bold text-lg text-[var(--color-forest)] mb-3">
                      {vehicle.name}
                    </h3>

                    {/* Specs */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      <div className="inline-flex items-center gap-1.5 bg-[var(--color-cream)] text-[var(--color-forest)] px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase">
                        <Fuel size={12} />
                        {vehicle.fuel}
                      </div>
                      <div className="inline-flex items-center gap-1.5 bg-[var(--color-cream)] text-[var(--color-forest)] px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase">
                        <Users size={12} />
                        {vehicle.seats} Seats
                      </div>
                      {vehicle.features.includes("AC") && (
                        <div className="inline-flex items-center gap-1.5 bg-[var(--color-cream)] text-[var(--color-forest)] px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase">
                          <Snowflake size={12} />
                          AC
                        </div>
                      )}
                    </div>

                    {/* Feature tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {vehicle.features
                        .filter((f) => f !== "AC")
                        .map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center gap-1 text-[10px] font-medium text-[var(--color-brand-muted)] bg-[var(--color-brand-white)] border border-[#ece5da] px-2 py-0.5 rounded-full"
                          >
                            <Sparkles size={8} />
                            {feature}
                          </span>
                        ))}
                    </div>

                    {/* Footer / Price + Book */}
                    <div className="mt-auto pt-4 border-t border-[#f5f0e8] flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase text-[var(--color-brand-muted)] font-semibold tracking-wider">
                          Starting from
                        </span>
                        <div className="text-[var(--color-forest)]">
                          <span className="font-heading font-bold text-xl">
                            ₹{vehicle.price.toLocaleString("en-IN")}
                          </span>
                          <span className="text-sm font-medium"> / day</span>
                        </div>
                      </div>
                      {vehicle.status === "Available" ? (
                        <Link
                          href={`/book?vehicle=${vehicle.id}`}
                          className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 bg-[var(--color-red)] text-[var(--color-brand-white)] hover:bg-[#d90429] hover:shadow-md transform hover:-translate-y-0.5"
                        >
                          Book Now
                        </Link>
                      ) : (
                        <span className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-gray-100 text-gray-400 cursor-not-allowed">
                          Unavailable
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-[var(--color-cream)] rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-[var(--color-brand-muted)]" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[var(--color-forest)] mb-2">
                No vehicles found
              </h3>
              <p className="text-[var(--color-brand-muted)] mb-6">
                Try adjusting your filters or search query.
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-2.5 rounded-full bg-[var(--color-red)] text-[var(--color-brand-white)] font-semibold text-sm hover:bg-[#d90429] transition-colors"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
