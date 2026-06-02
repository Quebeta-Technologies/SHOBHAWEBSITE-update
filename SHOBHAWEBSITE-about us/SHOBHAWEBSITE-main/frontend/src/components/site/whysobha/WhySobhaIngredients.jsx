import React from "react";
import { motion } from "framer-motion";
import { Search, FlaskConical, FileCheck2, CheckCircle2 } from "lucide-react";

const items = [
  {
    icon: Search,
    color: "#0738A6",
    bg: "rgba(7,56,166,0.10)",
    title: "Supplier Qualification",
    desc: "Every raw material supplier undergoes a thorough qualification process — including capability assessment, quality certifications, regulatory track record, and a detailed audit of their manufacturing processes. We only work with suppliers who meet our exacting standards.",
  },
  {
    icon: FlaskConical,
    color: "#62C7F5",
    bg: "rgba(98,199,245,0.18)",
    title: "Regulatory Pre-Assessment",
    desc: "Before any ingredient is approved, our regulatory team verifies it meets the requirements of every market we supply — including pharmacopoeial standards, excipient safety data, and jurisdictional compliance.",
  },
  {
    icon: FileCheck2,
    color: "#F2C14E",
    bg: "rgba(242,193,78,0.18)",
    title: "Certificate of Analysis Verification",
    desc: "Every delivery comes with a Certificate of Analysis from the supplier. Our quality team independently verifies these results against our internal specifications before the material enters production.",
  },
  {
    icon: CheckCircle2,
    color: "#9DCD4A",
    bg: "rgba(157,205,74,0.15)",
    title: "Purity & Identity Testing",
    desc: "Where required, we conduct independent testing to confirm every active ingredient is exactly what it is claimed to be — at the correct specification, with full traceability.",
  },
];

export default function WhySobhaIngredients() {
  return (
    <section
      data-testid="whysobha-ingredients"
      className="py-16 md:py-20 bg-white relative overflow-hidden"
    >
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#0738A6]/[0.04] blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="max-w-3xl mb-12 md:mb-14">
          <span className="eyebrow">Ingredient Standards &amp; Purity</span>
          <h2 className="mt-4 font-display font-semibold text-[#12233D] text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-[1.15]">
            What Goes Into Our Products —{" "}
            <span className="text-[#7A1F7A]">and Why It Matters</span>
          </h2>
          <p className="mt-5 text-[#4B5563] text-[15.5px] leading-relaxed">
            The quality of a medicine begins with its ingredients. At Shobha
            Healthcare, we apply strict selection and purity standards to
            everything that goes into our pharmaceutical and nutraceutical
            products — because precision at this stage determines everything
            that follows.
          </p>
        </div>

        <div className="space-y-4 max-w-5xl">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                data-testid={`ingredient-row-${i}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-hover relative bg-white border border-[#E9EEF5] rounded-2xl p-6 md:p-7 flex gap-5 md:gap-7 items-start overflow-hidden"
              >
                {/* Left color stripe */}
                <div
                  className="absolute top-0 left-0 bottom-0 w-1"
                  style={{ background: it.color }}
                />

                <div
                  className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: it.bg }}
                >
                  <Icon
                    className="w-7 h-7 md:w-8 md:h-8"
                    style={{ color: it.color }}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-[10px] font-bold tracking-[0.22em] uppercase"
                      style={{ color: it.color }}
                    >
                      Step 0{i + 1}
                    </span>
                    <span className="h-px flex-1 bg-[#E9EEF5]" />
                  </div>
                  <h3 className="font-display font-semibold text-[#12233D] text-[17px] md:text-[19px] leading-snug">
                    {it.title}
                  </h3>
                  <p className="mt-2.5 text-[#4B5563] text-[14.5px] leading-relaxed">
                    {it.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
