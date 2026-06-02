import React from "react";
import { motion } from "framer-motion";

const team = [
  {
    photo: "/brand/imagephoto.png",
    color: "#0738A6",
    name: "Mr. Jagdish Maheshwari",
    role: "Founder & CEO",
    desc: "30+ years in pharmaceutical manufacturing and global distribution. Co-founder of Greenwich Therapeutics & United Pharma, Ghana.",
    tags: ["Strategy", "Partnerships", "Global Distribution"],
  },
  {
    photo: "/brand/imagephoto.png",
    color: "#E84D6C",
    name: "Prarthana Maheshwari",
    role: "Business Development & Operations",
    desc: "Leads business development, partner onboarding, and day-to-day operations. Primary contact for new partnerships.",
    tags: ["Business Dev", "Operations", "Partnerships"],
  },
  {
    photo: "/team/regulatory.jpg",
    color: "#7A1F7A",
    name: "Regulatory Affairs Team",
    role: "Regulatory & Compliance",
    desc: "Manages product registrations, import approvals, and compliance documentation across 20+ markets globally.",
    tags: ["Registrations", "Compliance", "20+ Markets"],
  },
];

export default function Team() {
  return (
    <section data-testid="team-section" className="py-20 md:py-28 bg-white">
      <div className="container-x">
        <div className="max-w-3xl mb-14">
          <span className="eyebrow">Our Team</span>
          <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            The People Behind Shobha Healthcare
          </h2>
          <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
            Built by people who have spent their careers in pharmaceutical
            manufacturing, distribution, regulatory affairs, and global
            healthcare markets. Decades of hands-on experience in every product
            we make and every partnership we build.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              data-testid={`team-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-hover bg-white border border-[#E9EEF5] rounded-2xl overflow-hidden"
              style={{ borderTop: `4px solid ${m.color}` }}
            >
              {/* Photo */}
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-semibold text-[#12233D] text-lg">
                  {m.name}
                </h3>
                <div
                  className="font-semibold text-[11px] uppercase tracking-widest mt-1"
                  style={{ color: m.color }}
                >
                  {m.role}
                </div>
                <p className="mt-3 text-[#4B5563] text-[14px] leading-relaxed">
                  {m.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {m.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-[#4B5563] bg-[#F1F5F9] border border-[#E9EEF5] rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}