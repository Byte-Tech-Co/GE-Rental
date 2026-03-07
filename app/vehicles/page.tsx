import { Suspense } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { VehiclePageClient } from "@/components/vehicles/VehiclePageClient";

export const metadata = {
  title: "Our Fleet | GE Rental",
  description:
    "Browse our full fleet of cars, bikes, scooties & SUVs available for rent in Guwahati. Filter by category, price, and search by name.",
};

export default function VehiclesPage() {
  return (
    <main className="min-h-screen bg-[var(--color-brand-white)]">
      <Navbar />
      <Suspense fallback={<div className="min-h-screen pt-32 flex items-center justify-center">Loading vehicles...</div>}>
        <VehiclePageClient />
      </Suspense>
      <Footer />
    </main>
  );
}
