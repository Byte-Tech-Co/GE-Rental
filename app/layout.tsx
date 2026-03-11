import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GW Rental | Bike and Car Rental in Guwahati",
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
      <head>
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#ef233c" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body
        className={`${poppins.variable} antialiased font-sans`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--color-red)] focus:text-white focus:rounded-full focus:font-semibold focus:text-sm"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
