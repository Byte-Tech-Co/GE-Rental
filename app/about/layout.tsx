import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | GW Rental",
  description:
    "Since 2018, GW Rental has been Guwahati's trusted partner for self-drive adventures. Learn our story and what drives us to help you explore the Northeast.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
