import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Server,
  Lock,
  Globe,
  Database,
  CheckCircle,
  Brain,
  Cloud,
} from "lucide-react";
import securityImg from "@/assets/security-visual.jpg";

const CAPABILITIES = [
  {
    icon: <Database className="size-5" />,
    title: "Vector Databases",
    text: "State-of-the-art embedding storage for zero-hallucination retrieval.",
  },
  {
    icon: <Brain className="size-5" />,
    title: "Fine-Tuned LLMs",
    text: "Highly tuned Large Language Models calibrated for enterprise precision.",
  },
  {
    icon: <Cloud className="size-5" />,
    title: "Scalable Cloud",
    text: "Cloud computing infrastructure engineered for massive data volumes.",
  },
  {
    icon: <Globe className="size-5" />,
    title: "Sovereign Residency",
    text: "UK-based data sovereignty ensuring full regulatory compliance.",
  },
  {
    icon: <Lock className="size-5" />,
    title: "UK Compliance",
    text: "Strict adherence to UK data protection and government standards.",
  },
  {
    icon: <Shield className="size-5" />,
    title: "Zero-Hallucination",
    text: "Retrieval architectures guaranteeing factual, auditable outputs.",
  },
];

const STANDARDS = [
  "GDPR Compliant",
  "UK Data Residency",
  "PPN 06/20",
  "Social Value Act",
  "Cyber Essentials",
  "ISO 27001 Ready",
];

export default function SecuritySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="security"
      ref={ref}
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={securityImg}
          alt=""
          className="size-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(222_25%_6%/0.9)] to-background" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-[hsl(var(--honey)/0.2)] bg-[hsl(var(--honey)/0.06)] px-3 py-1 text-[11px] font-600 uppercase text-[hsl(var(--honey))]">
            Infrastructure & Security
          </span>
          <h2 className="mt-5 font-['Outfit'] text-3xl font-700 text-[hsl(var(--text-bright))] sm:text-4xl lg:text-[2.75rem] text-balance">
            Built for Scale,{" "}
            <span className="text-gradient-honey">Engineered</span> for
            Security.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[hsl(var(--text-muted))] text-pretty">
            Our architecture is specifically designed to handle massive volumes of
            sensitive enterprise and government data, ensuring zero-hallucination
            retrieval, sovereign data residency, and strict UK compliance.
          </p>
        </motion.div>

        {/* Capabilities grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group relative rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-1)/0.7)] backdrop-blur-sm p-6 transition-all duration-300 hover:border-[hsl(var(--honey)/0.2)] hover:bg-[hsl(var(--surface-1))]"
            >
              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[hsl(var(--honey)/0.08)] text-[hsl(var(--honey))] transition-colors duration-300 group-hover:bg-[hsl(var(--honey)/0.12)]">
                  {cap.icon}
                </div>
                <div>
                  <h3 className="font-['Outfit'] text-sm font-600 text-[hsl(var(--text-bright))]">
                    {cap.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[hsl(var(--text-muted))]">
                    {cap.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-1)/0.5)] backdrop-blur-sm p-6 lg:p-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Server className="size-4 text-[hsl(var(--honey))]" />
            <span className="text-xs font-600 uppercase text-[hsl(var(--text-muted))]">
              Compliance & Standards
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {STANDARDS.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1.5 rounded-full border border-[hsl(var(--honey)/0.15)] bg-[hsl(var(--honey)/0.04)] px-4 py-2 text-sm font-500 text-[hsl(var(--text-default))]"
              >
                <CheckCircle className="size-3.5 text-[hsl(var(--honey))]" />
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
