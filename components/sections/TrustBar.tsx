import { ShieldCheck, MapPin, Zap, MessageCircle } from "lucide-react";

export function TrustBar() {
  const items = [
    { icon: <ShieldCheck size={20} className="text-[var(--color-amber)]" />, text: "Insured & Serviced fleet" },
    { icon: <MapPin size={20} className="text-[var(--color-amber)]" />, text: "Pickup from Guwahati city centre" },
    { icon: <Zap size={20} className="text-[var(--color-amber)]" />, text: "Same-day bookings available" },
    { icon: <MessageCircle size={20} className="text-[var(--color-amber)]" />, text: "Support via WhatsApp & Call" },
  ];

  return (
    <section className="w-full bg-[var(--color-forest)] border-y border-[var(--color-brand-white)]/10 py-6 md:py-0">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between devide-y md:divide-y-0 md:divide-x divide-[var(--color-brand-white)]/10">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center gap-3 w-full py-4 md:py-6"
            >
              {item.icon}
              <span className="text-[var(--color-brand-white)]/90 text-sm font-medium tracking-wide">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
