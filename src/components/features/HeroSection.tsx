import { useRef } from "react";
import { ArrowDown, Hexagon, Zap, Network } from "lucide-react";
import { motion, useInView } from "framer-motion";
import heroImg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const scrollToPhilosophy = () => {
    document.querySelector("#philosophy")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          className="size-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222_25%_6%/0.6)] via-[hsl(222_25%_6%/0.75)] to-[hsl(222_25%_6%)]" />
        <div className="absolute inset-0 hex-grid-bg opacity-40" />
      </div>

      {/* Decorative hex ring */}
      <div className="absolute right-[8%] top-[18%] hidden opacity-[0.06] xl:block">
        <Hexagon className="size-[320px] text-[hsl(var(--honey))]" strokeWidth={0.5} />
      </div>
      <div className="absolute left-[5%] bottom-[20%] hidden opacity-[0.04] lg:block">
        <Hexagon className="size-[200px] text-[hsl(var(--honey))]" strokeWidth={0.5} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-24 pt-32 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left: Text */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--honey)/0.2)] bg-[hsl(var(--honey)/0.06)] px-4 py-1.5"
            >
              <Zap className="size-3.5 text-[hsl(var(--honey))]" />
              <span className="text-xs font-medium text-[hsl(var(--honey))]">
                Enterprise AI · London, UK
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-['Outfit'] text-4xl font-800 leading-[1.1] text-[hsl(var(--text-bright))] sm:text-5xl lg:text-6xl xl:text-7xl text-balance"
            >
              Powering{" "}
              <span className="text-gradient-honey">Next-Generation</span>
              <br />
              Enterprise AI.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-[hsl(var(--text-default))] sm:text-lg text-pretty"
            >
              Based in London, Honey-B2024 engineers interconnected AI ecosystems
              and advanced document intelligence pipelines designed for the complex
              demands of the UK public sector and B2B enterprises.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToPhilosophy}
                className="group inline-flex items-center gap-2.5 rounded-lg bg-[hsl(var(--honey))] px-6 py-3.5 text-sm font-600 text-[hsl(222_25%_6%)] transition-all duration-200 hover:bg-[hsl(var(--honey-glow))] hover:shadow-[0_0_32px_hsl(38_85%_45%/0.3)]"
              >
                Discover Our Ecosystem
                <ArrowDown className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </button>
            </motion.div>
          </div>

          {/* Right: Stats / Floating metrics */}
          <div className="hidden lg:col-span-5 lg:block">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              {/* Floating cards */}
              <FloatingCard
                icon={<Network className="size-5" />}
                label="AI Ecosystem"
                value="Interconnected"
                className="absolute -left-4 top-0"
                delay={0.4}
                inView={inView}
              />
              <FloatingCard
                icon={<Hexagon className="size-5" />}
                label="Document Pipeline"
                value="Enterprise-Grade"
                className="absolute right-0 top-24"
                delay={0.5}
                inView={inView}
              />
              <FloatingCard
                icon={<Zap className="size-5" />}
                label="UK Compliance"
                value="PPN 06/20 Ready"
                className="absolute left-8 top-48"
                delay={0.6}
                inView={inView}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

function FloatingCard({
  icon,
  label,
  value,
  className = "",
  delay = 0,
  inView = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  className?: string;
  delay?: number;
  inView?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={`glow-border glow-amber-subtle rounded-xl bg-[hsl(var(--surface-1)/0.8)] backdrop-blur-sm px-5 py-4 ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-[hsl(var(--honey)/0.1)] text-[hsl(var(--honey))]">
          {icon}
        </div>
        <div>
          <p className="text-[11px] font-medium uppercase text-[hsl(var(--text-muted))]">
            {label}
          </p>
          <p className="text-sm font-600 text-[hsl(var(--text-bright))]">
            {value}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
