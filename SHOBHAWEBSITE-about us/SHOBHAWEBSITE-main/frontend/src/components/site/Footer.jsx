import React from "react";
import { Logo } from "./Logo";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const groups = [
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "What We Make", href: "/#products" },
      { label: "Why Shobha", href: "/why-shobha" },
      { label: "Our Team", href: "/about#founder" },
      { label: "Partners", href: "/#partners" },
      { label: "Global Presence", href: "/#global" },
    ],
  },
  {
    title: "Therapeutic Areas",
    items: [
      { label: "Critical Care", href: "/#products" },
      { label: "Oncology", href: "/#products" },
      { label: "MDI Inhalers", href: "/#products" },
      { label: "Biologicals", href: "/#products" },
      { label: "Nutraceuticals — Women", href: "/#nutraceuticals" },
      { label: "Nutraceuticals — Men", href: "/#nutraceuticals" },
    ],
  },
  {
    title: "Business",
    items: [
      { label: "Partner With Us", href: "/contact" },
      { label: "Distributor Inquiry", href: "/contact" },
      { label: "Quality & Compliance", href: "/why-shobha" },
      { label: "Regulatory Affairs", href: "/why-shobha" },
      { label: "Ghana Network", href: "/#ghana" },
      { label: "Product Catalogue", href: "/#products" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[#12233D] text-[#E9EEF5] relative"
    >
      <div className="container-x py-12 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div>
            <Logo className="h-12 w-auto brightness-0 invert" />
          </div>
          <p className="mt-6 text-white/70 text-[14px] leading-relaxed max-w-md">
            A Dubai-based pharmaceutical manufacturer and exporter — making
            high-quality, affordable medicines available to people and
            healthcare systems across Africa, Asia, and the Middle East.
          </p>

          {/* Contact info — single horizontal line */}
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px]">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#62C7F5] shrink-0" />
              <span>Dubai, UAE</span>
            </div>
            <span className="text-white/20">|</span>
            <a
              href="tel:+971585937521"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#62C7F5] shrink-0" />
              <span>+971 58 593 7521</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href="mailto:admin@shobha-healthcare.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#62C7F5] shrink-0" />
              <span>admin@shobha-healthcare.com</span>
            </a>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#62C7F5] shrink-0" />
              <span>Mon–Fri · 9 AM – 6 PM</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#62C7F5] mb-5">
                {g.title}
              </h4>
              <ul className="space-y-3">
                {g.items.map((it) => (
                  <li key={it.label}>
                    <a
                      href={it.href}
                      className="text-white/75 hover:text-white text-[13.5px] transition-colors"
                    >
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-white/55 text-[12.5px]">
          <div>© 2026 Shobha Healthcare F.Z.E. All Rights Reserved.</div>
          <div className="inline-flex items-center gap-1.5">
            Made with
            <span className="text-[#E84D6C] text-base leading-none" aria-label="love">
              ❤
            </span>
            from
            <span className="font-display font-semibold text-white tracking-tight">
              Quebeta
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}