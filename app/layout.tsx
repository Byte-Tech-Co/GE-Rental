import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GW Rental | Ride free in the Northeast",
  description: "Guwahati's Premier Rental. Cars, bikes, and scooties for your Northeast adventure.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "GW Rental | Ride free in the Northeast",
    description: "Guwahati's Premier Rental. Cars, bikes, and scooties for your Northeast adventure.",
    images: [
      {
        url: "/images/og-share.png",
        width: 1200,
        height: 630,
        alt: "GW Rental - Ride free in the Northeast",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GW Rental | Ride free in the Northeast",
    description: "Guwahati's Premier Rental. Cars, bikes, and scooties for your Northeast adventure.",
    images: ["/images/og-share.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
