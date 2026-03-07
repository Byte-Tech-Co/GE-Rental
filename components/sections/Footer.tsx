import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[var(--color-forest)] pt-20 pb-10 border-t border-[var(--color-brand-white)]/5">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col">
            <span className="font-heading text-3xl font-bold tracking-tight text-[var(--color-brand-white)] uppercase mb-4">
              GE Re<span className="text-[var(--color-amber)]">n</span>tal
            </span>
            <p className="text-[var(--color-brand-white)]/70 text-sm leading-relaxed mb-6 max-w-[280px]">
              Guwahati&apos;s premium vehicle rental service. Helping travelers conquer the hills and valleys of Northeast India since 2018.
            </p>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-full bg-[var(--color-brand-white)]/5 border border-[var(--color-brand-white)]/10 flex items-center justify-center text-[var(--color-brand-white)] hover:bg-[var(--color-amber)] hover:border-[var(--color-amber)] transition-colors">
                <Instagram size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-[var(--color-brand-white)]/5 border border-[var(--color-brand-white)]/10 flex items-center justify-center text-[var(--color-brand-white)] hover:bg-[var(--color-amber)] hover:border-[var(--color-amber)] transition-colors">
                <Facebook size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-[var(--color-brand-white)]/5 border border-[var(--color-brand-white)]/10 flex items-center justify-center text-[var(--color-brand-white)] hover:bg-[var(--color-amber)] hover:border-[var(--color-amber)] transition-colors">
                <Twitter size={18} />
              </button>
            </div>
          </div>

          {/* Fleet Links */}
          <div>
            <h4 className="font-heading font-bold text-lg text-[var(--color-brand-white)] mb-6">Our Fleet</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-[var(--color-brand-white)]/70 hover:text-[var(--color-amber)] transition-colors text-sm">Comfortable Sedans & SUVs</a></li>
              <li><a href="#" className="text-[var(--color-brand-white)]/70 hover:text-[var(--color-amber)] transition-colors text-sm">Rugged Motorcycles</a></li>
              <li><a href="#" className="text-[var(--color-brand-white)]/70 hover:text-[var(--color-amber)] transition-colors text-sm">City Scooties</a></li>
              <li><a href="#" className="text-[var(--color-brand-white)]/70 hover:text-[var(--color-amber)] transition-colors text-sm">Off-Road 4x4s</a></li>
              <li><a href="#" className="text-[var(--color-brand-white)]/70 hover:text-[var(--color-amber)] transition-colors text-sm">Tariffs & Pricing</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-bold text-lg text-[var(--color-brand-white)] mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-[var(--color-brand-white)]/70 hover:text-[var(--color-amber)] transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-[var(--color-brand-white)]/70 hover:text-[var(--color-amber)] transition-colors text-sm">How it Works</a></li>
              <li><a href="#" className="text-[var(--color-brand-white)]/70 hover:text-[var(--color-amber)] transition-colors text-sm">Destinations</a></li>
              <li><a href="#" className="text-[var(--color-brand-white)]/70 hover:text-[var(--color-amber)] transition-colors text-sm">FAQ & Support</a></li>
              <li><a href="#" className="text-[var(--color-brand-white)]/70 hover:text-[var(--color-amber)] transition-colors text-sm">Become a Partner</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-heading font-bold text-lg text-[var(--color-brand-white)] mb-6">Visit Us</h4>
            <address className="not-italic text-[var(--color-brand-white)]/70 text-sm flex flex-col gap-3">
              <p>
                Opposite ASTC Office, Near Paltan Bazaar<br />
                Guwahati, Assam 781008
              </p>
              <p>
                <strong>Phone:</strong> +91 98765 43210<br />
                <strong>Email:</strong> bookings@gerental.in
              </p>
              <p className="mt-2 text-[var(--color-amber)]">
                <strong>Mon - Sun:</strong> 7:00 AM - 9:00 PM
              </p>
            </address>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-[var(--color-brand-white)]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--color-brand-white)]/40 text-xs">
            &copy; {currentYear} GE Rental Guwahati. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[var(--color-brand-white)]/40 hover:text-[var(--color-amber)] text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-[var(--color-brand-white)]/40 hover:text-[var(--color-amber)] text-xs transition-colors">Terms of Service</a>
            <a href="#" className="text-[var(--color-brand-white)]/40 hover:text-[var(--color-amber)] text-xs transition-colors">Refund Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
