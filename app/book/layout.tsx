import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Book Now | GW Rental",
  description:
    "Reserve your car, bike, or scooty in Guwahati. Choose your vehicle, pick dates, and confirm your booking in minutes.",
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[var(--color-brand-white)] flex items-center justify-center">
        <div className="animate-pulse text-[var(--color-brand-muted)]">Loading...</div>
      </div>
    }>
      {children}
    </Suspense>
  );
}
