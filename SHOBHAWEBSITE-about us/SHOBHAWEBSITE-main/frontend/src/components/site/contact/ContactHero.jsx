import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, MessageCircle } from "lucide-react";

export default function ContactHero() {
  return (
    <section
      data-testid="contact-hero"
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(120deg, #12233D 0%, #0738A6 55%, #62C7F5 110%)",
      }}
    >
      {/* Decorative layers */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#62C7F5]/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 w-[520px] h-[520px] rounded-full bg-[#9DCD4A]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#F2C14E]/10 blur-3xl pointer-events-none" />

      <div className="container-x relative py-20 md:py-28 lg:py-32">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-[12px] text-white/65 mb-8"
        >
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/40" />
          <span className="text-white font-medium">Contact Us</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl"
        >
          {/* Eyebrow chip */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-7">
            <MessageCircle className="w-3.5 h-3.5 text-[#F2C14E]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/90">
              Get In Touch
            </span>
          </div>

          {/* H1 */}
          <h1
            data-testid="contact-hero-headline"
            className="font-display font-semibold text-white text-[30px] sm:text-[38px] lg:text-[52px] xl:text-[56px] leading-[1.08] tracking-tight"
          >
            Let's{" "}
            <span className="bg-gradient-to-r from-[#F2C14E] via-[#9DCD4A] to-[#62C7F5] bg-clip-text text-transparent">
              Talk.
            </span>
          </h1>

          <p className="mt-7 text-white/75 text-[16px] md:text-[17px] leading-relaxed max-w-2xl">
            Whether you are a pharmaceutical distributor looking for a reliable
            supply partner, a hospital procurement team sourcing specific
            medicines, or an investor wanting to learn more about our
            expansion — we are easy to reach and we respond quickly.
          </p>

          {/* Quick stat strip */}
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
            {[
              { v: "<24hr", l: "Response Time" },
              { v: "Dubai", l: "Headquartered" },
              { v: "20+", l: "Markets" },
              { v: "Mon–Fri", l: "9 AM – 6 PM" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col">
                <span className="font-display font-semibold text-white text-2xl md:text-[28px] leading-none">
                  {s.v}
                </span>
                <span className="mt-2 text-[10.5px] font-bold tracking-[0.2em] uppercase text-white/60">
                  {s.l}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* soft bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white/0 to-transparent pointer-events-none" />
    </section>
  );
}
