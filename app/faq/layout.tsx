import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | GW Rental",
  description:
    "Frequently asked questions about renting cars, bikes, and scooties in Guwahati. Documents, cancellation, fuel, insurance, and more.",
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
