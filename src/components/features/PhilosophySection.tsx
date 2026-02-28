import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Database, Brain, Layers, GitMerge } from "lucide-react";

const PILLARS = [
  {
    icon: <Database className="size-5" />,
    title: "Unstructured Data Ingestion",
    text: "Transform raw documents, PDFs, and text streams into structured, queryable intelligence.",
  },
  {
    icon: <Brain className="size-5" />,
    title: "Predictive AI Models",
    text: "Sector-specific models calibrated for UK public procurement and enterprise workflows.",
  },
  {
    icon: <Layers className="size-5" />,
    title: "End-to-End Intelligence",
    text: "Seamless pipeline from data ingestion through processing to actionable strategic output.",
  },
  {
    icon: <GitMerge className="size-5" />,
    title: "Scalable Architecture",
    text: "Infrastructure designed to grow with enterprise demands while maintaining security posture.",
  },
];

export default function PhilosophySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="philosophy"
      ref={ref}
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 honeycomb-pattern" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          {/* Left: Statement */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block rounded-full border border-[hsl(var(--honey)/0.2)] bg-[hsl(var(--honey)/0.06)] px-3 py-1 text-[11px] font-600 uppercase text-[hsl(var(--honey))]">
                Our Philosophy
              </span>

              <h2 className="mt-5 font-['Outfit'] text-3xl font-700 leading-tight text-[hsl(var(--text-bright))] sm:text-4xl lg:text-[2.75rem] text-balance">
                A Unified AI{" "}
                <span className="text-gradient-honey">Infrastructure</span>
              </h2>

              <p className="mt-2 font-['Outfit'] text-lg font-500 text-[hsl(var(--text-default))]">
                We do not build isolated applications; we engineer intelligent
                ecosystems.
              </p>

              <div className="mt-6 h-px w-16 bg-gradient-to-r from-[hsl(var(--honey))] to-transparent" />

              <p className="mt-6 text-base leading-relaxed text-[hsl(var(--text-muted))] text-pretty">
                At Honey-B2024, our core focus is transforming unstructured data
                into a strategic advantage. By fusing advanced document processing
                engines with sector-specific predictive AI, we deliver end-to-end
                operational intelligence that scales securely with your enterprise.
              </p>
            </motion.div>
          </div>

          {/* Right: Pillar cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="group relative rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-1))] p-6 transition-all duration-300 hover:border-[hsl(var(--honey)/0.25)] hover:bg-[hsl(var(--surface-2))]"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[hsl(var(--honey)/0.02)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-[hsl(var(--honey)/0.08)] text-[hsl(var(--honey))] transition-colors duration-300 group-hover:bg-[hsl(var(--honey)/0.12)]">
                    {pillar.icon}
                  </div>
                  <h3 className="mt-4 font-['Outfit'] text-base font-600 text-[hsl(var(--text-bright))]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--text-muted))]">
                    {pillar.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
