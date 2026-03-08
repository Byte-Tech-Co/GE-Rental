import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | GW Rental",
  description:
    "Get in touch with GW Rental Guwahati. Visit us, call, or send a message. We're here to help with bookings, fleet enquiries, and custom trip planning.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
