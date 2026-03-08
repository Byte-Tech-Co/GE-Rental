import dynamic from "next/dynamic";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Vehicles } from "@/components/sections/Vehicles";

const HowItWorks = dynamic(() =>
  import("@/components/sections/HowItWorks").then((m) => ({ default: m.HowItWorks }))
);
const FeaturedFleet = dynamic(() =>
  import("@/components/sections/FeaturedFleet").then((m) => ({ default: m.FeaturedFleet }))
);
const Destinations = dynamic(() =>
  import("@/components/sections/Destinations").then((m) => ({ default: m.Destinations }))
);
const Testimonials = dynamic(() =>
  import("@/components/sections/Testimonials").then((m) => ({ default: m.Testimonials }))
);
const CTA = dynamic(() =>
  import("@/components/sections/CTA").then((m) => ({ default: m.CTA }))
);
const Footer = dynamic(() =>
  import("@/components/sections/Footer").then((m) => ({ default: m.Footer }))
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <Vehicles />
      <HowItWorks />
      <FeaturedFleet />
      <Destinations />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
