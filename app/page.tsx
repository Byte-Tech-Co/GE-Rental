import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Destinations } from "@/components/sections/Destinations";
import { Vehicles } from "@/components/sections/Vehicles";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturedFleet } from "@/components/sections/FeaturedFleet";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <Destinations />
      <Vehicles />
      <HowItWorks />
      <FeaturedFleet />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
